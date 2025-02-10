import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import Button from "../Button";
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
            theme: post?.theme || "" // Set a default theme
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        try {
            if (post) {
                let featuredImage = post.featuredImage;

                if (data.image?.[0]) {
                    try {
                        const file = await appwriteService.uploadFile(data.image[0]);
                        if (file?.$id) {
                            if (post.featuredImage) {
                                await appwriteService.deleteFile(post.featuredImage);
                            }
                            featuredImage = file.$id;
                        }
                    } catch (uploadError) {
                        console.error("Error uploading file:", uploadError);
                        throw new Error("Failed to upload image");
                    }
                }

                const dbPost = await appwriteService.updatePost(post.$id, {
                    ...data,
                    featuredImage,
                });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            } else {
                if (!data.image?.[0]) {
                    throw new Error("Featured image is required for new posts");
                }

                try {
                    const file = await appwriteService.uploadFile(data.image[0]);
                    if (!file?.$id) {
                        throw new Error("Failed to upload image");
                    }

                    const dbPost = await appwriteService.createPost({ 
                        ...data, 
                        featuredImage: file.$id,
                        userId: userData.$id 
                    });

                    if (dbPost) {
                        navigate(`/post/${dbPost.$id}`);
                    }
                } catch (uploadError) {
                    console.error("Error uploading file:", uploadError);
                    throw new Error("Failed to upload image");
                }
            }
        } catch (error) {
            console.error("Error submitting post:", error);
            // Here you might want to show an error message to the user
            alert(error.message || "Error submitting post");
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
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <div className="w-full max-w-7xl mx-auto px-4">
            <form onSubmit={handleSubmit(submit)} className="flex flex-col md:flex-row gap-4">
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
                        bgColor={post ? "bg-green-500" : undefined} 
                        className="w-full"
                    >
                        {post ? "Update" : "Submit"}
                    </button>
                </div>
            </form>
        </div>
    );
}