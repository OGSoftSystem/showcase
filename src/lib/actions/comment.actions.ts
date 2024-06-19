"use server";

import { revalidatePath } from "next/cache";
import connectToDatabase from "../database/mongodb";
import { handleError } from "../utils";
import { notFound } from "next/navigation";
import { CommentSchema, CommentType } from "../validation";
import Comment from "../database/models/comment.model";
import Post from "../database/models/post.model";
import User from "../database/models/user.model";

export const createComment = async (
  comment: CommentType,
  author: string,
  path: string,
  postId: string
) => {
  const validComment = CommentSchema.safeParse(comment);
  if (!validComment.success) return new Error(validComment.error.message);

  if (!postId) return;

  try {
    await connectToDatabase();

    const newComment = await Comment.create({
      ...validComment.data,
      author,
      postId,
    });

    if (newComment) {
      const up = await Post.findByIdAndUpdate(
        postId,
        {
          $push: {
            comments: newComment,
          },
        },
        { new: true }
      );

      // console.log("Updated: ", up);

      revalidatePath(path);
    }
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
};

export const findCommentById = async (commentId: string) => {
  try {
    await connectToDatabase();
    const comment = await Comment.findById(commentId).populate({
      path: "author",
      model: User,
      select: "name imageUrl",
    });
    if (comment == null) return notFound();
    return JSON.parse(JSON.stringify(comment));
  } catch (error) {
    return { error: handleError(error) };
  }
};

export const findAllComment = async () => {
  try {
    await connectToDatabase();
    const comments = await Comment.find({}).populate({
      path: 'author',
      model: User,
      select:'name imageUrl'
    });
    if (comments == null) return notFound();
    return JSON.parse(JSON.stringify(comments));
  } catch (error) {
    return { error: handleError(error) };
  }
};

export const deleteComment = async (commentId: string) => {
  try {
    await connectToDatabase();
    const userToDelete = await Comment.findByIdAndDelete(commentId);
    if (userToDelete) {
      revalidatePath("/admin/users");
    }
  } catch (error) {
    return { error: handleError(error) };
  }
};

export const updateComment = async (
  commentId: string,
  comment: CommentType,
  path: string
) => {
  try {
    await connectToDatabase();
    const updatedComment = await Comment.findByIdAndUpdate(commentId, comment, {
      new: true,
    });
    if (updatedComment) {
      revalidatePath(path);
    }
  } catch (error) {
    return { error: handleError(error) };
  }
};
