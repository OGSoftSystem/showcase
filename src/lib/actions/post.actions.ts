"use server";

import { revalidatePath } from "next/cache";
import connectToDatabase from "../database/mongodb";
import { handleError } from "../utils";
import { notFound, redirect } from "next/navigation";
import { CreatePostType } from "../validation";
import Post from "../database/models/post.model";

export const createPost = async (post: CreatePostType, path: string) => {
  try {
    await connectToDatabase();

    const newPost = await Post.create(post);
    console.log(newPost);

    if (newPost) revalidatePath(path);
  } catch (error) {
    return {
      error: handleError(error),
    };
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
  post: CreatePostType
) => {
  try {
    await connectToDatabase();
    const postToUpdate = await Post.findByIdAndUpdate(
      postId,
      {
        $set: { post },
      },
      { new: true }
    );
    if (post == null) return notFound();
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

export const deletePost = async (postId: string) => {
  try {
    await connectToDatabase();
    const postToDelete = await Post.findByIdAndDelete(postId);
    if (postToDelete) {
      revalidatePath("/admin/users");
    }
  } catch (error) {
    return { error: handleError(error) };
  }
};
