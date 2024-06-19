"use server";

import { revalidatePath } from "next/cache";
import User, { IUser } from "../database/models/user.model";
import connectToDatabase from "../database/mongodb";
import { handleError } from "../utils";
import { notFound } from "next/navigation";
import Post from "../database/models/post.model";


export const createUser = async (user: IUser) => {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);
    if (newUser) revalidatePath("/admin/users");
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
};

export const findUserById = async (userId: string) => {
  try {
    await connectToDatabase();
    const user = await User.findById(userId);
    if (user == null) return notFound();

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    return { error: handleError(error) };
  }
};

export const findUserAndUpdate = async (
  userId: string,
  user: Omit<UserType, "_id" | "role" | "isAdmin">
) => {
  try {
    await connectToDatabase();
    const updatedUser = await User.findByIdAndUpdate(userId, user, {
      new: true,
    });
    if (user == null) return notFound();
    if (updatedUser) revalidatePath("/admin/users");

    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    return { error: handleError(error) };
  }
};

export const findUserPost = async (userId: string) => {
  try {
    await connectToDatabase();
    const posts = await User.findById(userId).populate({
      path: "posts",
      model: Post,
    });
    if (posts == null) return notFound();
    return JSON.parse(JSON.stringify(posts));
  } catch (error) {
    return { error: handleError(error) };
  }
};

export const findAllUsers = async () => {
  try {
    await connectToDatabase();
    const users = await User.find({});
    if (users == null) return notFound();
    return JSON.parse(JSON.stringify(users));
  } catch (error) {
    return { error: handleError(error) };
  }
};

export const deleteUser = async (userId: string) => {
  try {
    await connectToDatabase();
    const userToDelete = await User.findByIdAndDelete(userId);
    if (userToDelete) {
      revalidatePath("/admin/users");
    }
  } catch (error) {
    return { error: handleError(error) };
  }
};

export const makeUserAdmin = async (userId: string, isAdmin: boolean) => {
  try {
    await connectToDatabase();
    const userToMakeAdmin = await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          role: isAdmin ? "admin" : "user",
        },
      },
      { new: true }
    );
    if (userToMakeAdmin) {
      revalidatePath("/admin/users");
    }
  } catch (error) {
    return { error: handleError(error) };
  }
};

export const toggleVerification = async (userId: string) => {
  try {
    await connectToDatabase();
  } catch (error) {
    return { error: handleError(error) };
  }
};
