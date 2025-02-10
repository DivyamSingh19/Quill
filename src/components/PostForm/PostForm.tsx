import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import Input from "../Input";
import RTE from "../RTE";
import Select from "../Select";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
            theme: post?.theme || ""
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data, e) => {
        e.preventDefault(); // Prevent form from submitting normally
        
        try {
            if (!userData?.$id) {
                throw new Error("Please login to create/edit posts");
            }

            let uploadedFile = null;
            if (data.image?.[0]) {
                try {
                    uploadedFile = await appwriteService.uploadFile(data.image[0]);
                    if (!uploadedFile?.$id) {
                        throw new Error("File upload failed");
                    }
                } catch (error) {
                    console.error("File upload error:", error);
                    throw new Error("Failed to upload image");
                }
            }

            if (post) {
                const updateData = {
                    ...data,
                    featuredImage: uploadedFile ? uploadedFile.$id : post.featuredImage
                };

                if (uploadedFile && post.featuredImage) {
                    try {
                        await appwriteService.deleteFile(post.featuredImage);
                    } catch (error) {
                        console.error("Error deleting old file:", error);
                    }
                }

                const dbPost = await appwriteService.updatePost(post.$id, updateData);
                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            } else {
                if (!uploadedFile) {
                    throw new Error("Featured image is required for new posts");
                }

                const postData = {
                    ...data,
                    featuredImage: uploadedFile.$id,
                    userId: userData.$id
                };

                const dbPost = await appwriteService.createPost(postData);
                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        } catch (error) {
            console.error("Error submitting post:", error);
            alert(error.message || "Error submitting post");
            if (error.message.includes("login")) {
                navigate("/login");
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    React.useEffect(() => {
        if (!userData?.$id) {
            navigate("/login");
            return;
        }

        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue, userData, navigate]);

    if (!userData?.$id) {
        return null;
    }

    return (
        <div className="w-full max-w-7xl mx-auto px-4">
            <form onSubmit={handleSubmit((data, e) => submit(data, e))} className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-2/3">
                    <Input
                        label="Title :"
                        placeholder="Title"
                        className="mb-4"
                        {...register("title", { required: true })}
                    />
                    <div className="hidden md:block">
                        <Input
                            label="Slug :"
                            placeholder="Slug"
                            className="mb-4"
                            {...register("slug", { required: true })}
                            onInput={(e) => {
                                setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                            }}
                        />
                    </div>
                    <RTE 
                        label="Content :" 
                        name="content" 
                        control={control} 
                        defaultValue={getValues("content")} 
                    />
                </div>
                <div className="w-full md:w-1/3 space-y-4">
                    <Input
                        label="Featured Image :"
                        type="file"
                        className="mb-4"
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        {...register("image", { required: !post })}
                    />
                    {post?.featuredImage && (
                        <div className="w-full mb-4">
                            <img
                                src={appwriteService.getFilePreview(post.featuredImage)}
                                alt={post.title}
                                className="rounded-lg w-full"
                            />
                        </div>
                    )}
                    <Select
                        options={["active", "inactive"]}
                        label="Status"
                        className="mb-4"
                        {...register("status", { required: true })}
                    />
                    <Input
                        
                        label="Theme"
                        className="mb-4"
                        {...register("theme", { required: true })}
                    />
                    <button 
                        type="submit" 
                        className={`w-full px-4 py-2 rounded-lg ${
                            post ? 'bg-green-500' : 'bg-blue-500'
                        } text-white hover:bg-opacity-90`}
                    >
                        {post ? "Update" : "Submit"}
                    </button>
                </div>
            </form>
        </div>
    );
}