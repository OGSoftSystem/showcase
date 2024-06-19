"use client";

import Spinner from "@/components/shared/Spinner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { createComment, updateComment } from "@/lib/actions/comment.actions";
import { cn } from "@/lib/utils";

import { CommentSchema, CommentType } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type FormType = {
  type: "Create" | "Update";
  comment?: CommentType;
  postId: string;
};

const CommentForm = ({ type, comment, postId }: FormType) => {
  const { data: session } = useSession();

  const initialValue = {
    comment: "",
  };

  const form = useForm<CommentType>({
    defaultValues: comment ? {...comment} : initialValue,
    resolver: zodResolver(CommentSchema),
  });

  const router = useRouter();

  const onSubmitForm = async (data: CommentType) => {
    if (!session?.user) router.push("/auth/sign-in");

    try {
      if (type === "Create") {
        const newComment = await createComment(
          data,
          session?.user.id as string,
          `/blog/${postId}`,
          postId
        );

        if (newComment) form.reset();
        
      } else {
        await updateComment("id", comment as CommentType, `/blog/${postId}`);
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmitForm)}
        className="w-full flex flex-col space-y-4"
      >
        <div
          className={cn("flex items-center space-x-2", {
            hidden: session?.user === undefined,
          })}
        >
          <div className="size-10 overflow-hidden rounded-full relative">
            <Image
              src={
                session?.user.image
                  ? session?.user.image
                  : "/assets/images/mela.png"
              }
              alt="user"
              fill
            />
          </div>
          <p className="text-sm text-muted-foreground font-hind">
            Hi {session?.user.name?.split(" ")[0]}, what do you think?{" "}
          </p>
        </div>

        {/* <FormField
          name="author"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="Name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}

        <FormField
          name="comment"
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
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="btn w-28"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          Post
          {form.formState.isSubmitting && <Spinner />}
        </Button>
      </form>
    </Form>
  );
};

export default CommentForm;
