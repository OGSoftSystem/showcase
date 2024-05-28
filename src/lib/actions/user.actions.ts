"use server";

import { revalidatePath } from "next/cache";
import User, { IUser } from "../database/models/user.model";
import connectToDatabase from "../database/mongodb";
import { handleError } from "../utils";
import { notFound } from "next/navigation";

export const createUser = async (user: IUser) => {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);
    if (newUser) revalidatePath("/dashboard");
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
