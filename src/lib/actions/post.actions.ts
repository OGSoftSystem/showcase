"use server";

import { revalidatePath } from "next/cache";
import connectToDatabase from "../database/mongodb";
import { handleError } from "../utils";
import { notFound } from "next/navigation";
import { CreatePostType } from "../validation";
import Post from "../database/models/post.model";
import User from "../database/models/user.model";

export const createPost = async (post: CreatePostType, path: string) => {
  try {
    await connectToDatabase();

    const newPost = await Post.create(post);

    if (newPost) revalidatePath(path);
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
};

export const publishPost = async (postId: string, isPublished: boolean) => {
  try {
    await connectToDatabase();
    const post = await Post.findByIdAndUpdate(
      postId,
      {
        $set: {
          published: isPublished,
        },
      },
      { new: true }
    );
    if (post == null) return notFound();

    revalidatePath("/admin/posts");
    return JSON.parse(JSON.stringify(post));
  } catch (error) {
    return { error: handleError(error) };
  }
};
export const findPostById = async (postId: string) => {
  try {
    await connectToDatabase();
    const post = await Post.findById(postId);
    if (post == null) return notFound();
    return JSON.parse(JSON.stringify(post));
  } catch (error) {
    return { error: handleError(error) };
  }
};

export const findPostAndUpdate = async (
  postId: string,
  post: Omit<PostType, "_id">
) => {
  try {
    await connectToDatabase();
    const postToUpdate = await Post.findByIdAndUpdate(postId, post, {
      new: true,
    });
    if (post == null) return notFound();
    if (postToUpdate) revalidatePath("/admin/posts");

    return JSON.parse(JSON.stringify(postToUpdate));
  } catch (error) {
    return { error: handleError(error) };
  }
};

export const findAllPost = async () => {
  try {
    await connectToDatabase();
    const posts = await Post.find();
    if (posts == null) return notFound();
    return JSON.parse(JSON.stringify(posts));
  } catch (error) {
    return { error: handleError(error) };
  }
};

export const findAllPublishedPost = async () => {
  try {
    await connectToDatabase();
    const posts = await Post.find({ published: true });
    if (posts == null) return notFound();
    return JSON.parse(JSON.stringify(posts));
  } catch (error) {
    return { error: handleError(error) };
  }
};

export const deletePost = async (postId: string) => {
  console.log(postId);
  
  try {
    await connectToDatabase();
    await Post.findByIdAndDelete(postId);

    revalidatePath("/admin/posts");
  } catch (error) {
    return { error: handleError(error) };
  }
};
