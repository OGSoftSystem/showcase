"use server";

import { revalidatePath } from "next/cache";
import connectToDatabase from "../database/mongodb";
import { handleError } from "../utils";
import { notFound } from "next/navigation";
import { CreatePostType } from "../validation";
import Post from "../database/models/post.model";
import User from "../database/models/user.model";
import Comment from "../database/models/comment.model";
import { isValidObjectId } from "mongoose";

export const createPost = async (
  post: CreatePostType,
  author: string,
  path: string
) => {
  try {
    await connectToDatabase();

    const newPost = await Post.create({ ...post, author });

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
  if (!isValidObjectId(postId) || postId == null) return notFound();
  try {
    await connectToDatabase();
    const post = await Post.findById(postId).populate({
      path: "author",
      model: User,
      select: "name about imageUrl",
    });

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
    const posts = await Post.find({ published: true }).populate({
      path: "author",
      model: User,
      select: "name imageUrl",
    });
    if (posts == null) return notFound();
    return JSON.parse(JSON.stringify(posts));
  } catch (error) {
    return { error: handleError(error) };
  }
};

export const deletePost = async (postId: string) => {
  try {
    await connectToDatabase();

    const comments = await Comment.find({ postId });

    if (comments) {
      // Remove comments associated with the post from the Comment collection
      await Comment.deleteMany({ postId });

      // Update the post by pulling the comments
      await Post.findOneAndUpdate(
        { _id: postId },
        {
          $pull: {
            comments: { $in: comments.map((comment) => comment._id) },
          },
        },
        { new: true }
      );
    }

    const deletePost = await Post.findByIdAndDelete(postId);
    if (deletePost) revalidatePath("/admin/posts");
  } catch (error) {
    return { error: handleError(error) };
  }
};

export const likePost = async (postId: string, likedBy: string) => {
  try {
    await connectToDatabase();

    const post = await Post.findByIdAndUpdate(
      postId,
      {
        $inc: { likes: -1 }, // Decrement for unlike, increment for like
        $pull: { likesByUser: likedBy }, // Remove user ID on unlike
        $push: { likesByUser: likedBy }, // Add user ID on like (conditional)
      },
      { new: true }
    );

    if (!post) {
      throw new Error("Post not found");
    }

    // Update likesByUser only if the user isn't already in the list
    if (!post.likesByUser.includes(likedBy)) {
      post.likesByUser.push(likedBy);
    }

    return JSON.parse(JSON.stringify(post));
  } catch (error) {
    return { error: handleError(error) };
  }
};
