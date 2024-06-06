"use client";

import ImageUploader from "@/components/shared/ImageUploader";
import Spinner from "@/components/shared/Spinner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { createPost, findPostAndUpdate } from "@/lib/actions/post.actions";
import { CreatePostSchema, CreatePostType } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";

type FormType = {
  type: "Create" | "Update";
  post?: PostType;
};

const PostForm = ({ type, post }: FormType) => {
  const { data: session } = useSession();

  const initialValue = {
    imageUrl: "",
    title: "",
    subtitle: "",
    author: "",
    body: "",
    category: "",
  };

  const form = useForm<CreatePostType>({
    defaultValues: post
      ? {
          ...post,
          imageUrl: post.imageUrl,
          title: post.title,
          subtitle: post.subtitle,
          author: post.author,
          body: post.body,
          category: post.category,
        }
      : initialValue,
    resolver: zodResolver(CreatePostSchema),
  });

  const [imgUrl, setImgUrl] = useState("");
  const router = useRouter();

  const onSubmitForm = async (data: CreatePostType) => {

    try {
      if (type === "Create") {
        const newPost = await createPost(
          {
            ...data,
            author: session?.user.name as string,
          },
          "/admin/posts"
        );
        if (newPost?.error) {
          console.log(newPost.error);
        }
        router.replace("/admin/posts");
      }

      if (type === "Update") {
        if (post == null) return;

        const updatedPost = await findPostAndUpdate(
          post._id,
          data as Omit<PostType, "_id">
        );
        if (updatedPost) {
          router.replace("/admin/posts");
        }
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmitForm)}
        className="max-w-4xl w-full flex flex-col space-y-4"
      >
        <div className="flex flex-col md:flex-row items-start">
          <FormField
            name="imageUrl"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <ImageUploader
                    publicId={field.value}
                    onValueChange={(e) => field.onChange(e)}
                    setImgUrl={setImgUrl}
                    imgUrl={imgUrl}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {post && (
            <div className="w-full md:w-64 h-40 relative">
              <Image
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1717120816/${post.imageUrl}`}
                fill
                alt="post_image"
              />
            </div>
          )}
        </div>

        <FormField
          name="title"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="Title" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="subtitle"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="Subtitle" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="author"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Author"
                  value={session?.user.name as string}
                  // defaultValue={session?.user.name as string}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="body"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <ReactQuill
                  theme="snow"
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Body"
                />
                {/* <Textarea rows={10} {...field} placeholder="Body" /> */}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-row justify-between items-center">
          <FormField
            name="category"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    value={post ? post.category : field.value}
                    name="categories"
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="crypto">Crypto</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="investment">Investment</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <FormField
            name="date"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <DatePicker
                    selected={field.value}
                    onChange={(d: Date) => field.onChange(d)}
                    dateFormat="MM/dd/yy"
                    className="bg-transparent border p-1 w-40 rounded-md"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}
        </div>
        <Button
          className="btn bg-grad-2 text-white"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          {type === "Create" ? "Create" : "Update"}
          {form.formState.isSubmitting && <Spinner />}
        </Button>
      </form>
    </Form>
  );
};

export default PostForm;
