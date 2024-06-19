"use client";

import ImageUploader from "@/components/shared/ImageUploader";
import Spinner from "@/components/shared/Spinner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { findUserAndUpdate } from "@/lib/actions/user.actions";

import { ProfileSchema, ProfileType } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type Props = {
  user: UserType;
};

const EditUserProfileForm = ({ user }: Props) => {
  // const initialValue = {
  //   imageUrl: "",
  //   name: "",
  //   email: "",
  //   about: "",
  // };

  const form = useForm<ProfileType>({
    defaultValues: {
      ...user,
      imageUrl: user.imageUrl,
      name: user.name,
      email: user.email,
      about: user.about,
    },

    resolver: zodResolver(ProfileSchema),
  });

  const [imgUrl, setImgUrl] = useState("");
  const router = useRouter();

  const onSubmitForm = async (data: ProfileType) => {
    try {
      const updatedUser = await findUserAndUpdate(user._id, data);
      if (updatedUser) router.push("/");
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

          {user && (
            <div className="w-full md:w-64 h-40 relative">
              <Image
                src={
                  user.imageUrl && user.imageUrl.includes("Liquity")
                    ? `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1717120816/${user.imageUrl}`
                    : (user.imageUrl as string)
                }
                fill
                alt="post_image"
              />
            </div>
          )}
        </div>

        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>

              <FormControl>
                <Input {...field} placeholder="Name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>

              <FormControl>
                <Input {...field} placeholder="Email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="about"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>About</FormLabel>
              <FormControl>
                <ReactQuill
                  theme="snow"
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Body"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className="btn bg-grad-2 text-white"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          Update profile
          {form.formState.isSubmitting && <Spinner />}
        </Button>
      </form>
    </Form>
  );
};

export default EditUserProfileForm;
