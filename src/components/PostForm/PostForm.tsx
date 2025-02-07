import React, { useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import appwriteService from "../../appwrite/config";
import Input from "../Input";
import Select from "../Select";
import RTE from "../RTE";

function PostForm({ post }) {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.slug || "",
      content: post?.content || "",
      status: post?.status || "active",
    },
  });

  const slugTransform = (value) =>
    value ? value.trim().toLowerCase().replace(/[^a-zA-Z\d\s]+/g, "-").replace(/\s+/g, "-") : "";

  useEffect(() => {
    const subscription = watch(({ title }) => {
      if (title) setValue("slug", slugTransform(title), { shouldValidate: true });
    });

    return () => subscription.unsubscribe();
  }, [watch, setValue]);

  const handleFileUpload = async (imageFile, existingImageId) => {
    if (!imageFile) return null;
    const file = await appwriteService.uploadFile(imageFile);
    if (existingImageId) await appwriteService.deleteFile(existingImageId);
    return file?.$id;
  };

  const submit = useCallback(
    async (data) => {
      const fileId = data.image?.[0] ? await handleFileUpload(data.image[0], post?.featuredImage) : null;
      const payload = {
        ...data,
        featuredImage: fileId || post?.featuredImage,
        userId: post ? post.userId : userData.$id,
      };

      const dbPost = post
        ? await appwriteService.updatePost(post.$id, payload)
        : await appwriteService.createPost(payload);

      if (dbPost) navigate(`/post/${dbPost.$id}`);
    },
    [post, navigate, userData]
  );

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-col md:flex-row bg-black p-4 w-full max-w-5xl mx-auto">
      {/* Left Section (Title, Slug, Content) */}
      <div className="md:w-2/3 sm:w-full px-2">
        <Input
          label="Title:"
          placeholder="Enter Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        {/* Slug completely hidden on small screens */}
        <div className="hidden sm:block">
          <Input
            label="Slug:"
            placeholder="Generated Slug"
            className="mb-4"
            {...register("slug", { required: true })}
            onInput={(e) => setValue("slug", slugTransform(e.target.value), { shouldValidate: true })}
          />
        </div>
        <RTE label="Content:" name="content" control={control} defaultValue={getValues("content")} />
      </div>

      {/* Right Section (Image, Status, Submit) */}
      <div className="md:w-1/3 sm:w-full px-2">
        <Input
          label="Banner:"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post?.featuredImage && (
          <img
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-lg mb-4 w-full"
          />
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <button
          type="submit"
          className="bg-green-500 text-white rounded-xl py-2 w-full hover:bg-green-600 transition"
        >
          {post ? "Update" : "Submit"}
        </button>
      </div>
    </form>
  );
}

export default PostForm;
