"use server";

import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import {
  SessionData,
  defaultSession,
  handleError,
  sessionOptions,
} from "@/lib/utils";
import { notFound, redirect } from "next/navigation";
import connectToDatabase from "../database/mongodb";
import User from "../database/models/user.model";
import { SignInSchema, SignInType } from "../validation";

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session) throw new Error("No logged in user");
  if (!session.isLoggedIn) {
    session.name = defaultSession.name;
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
};

export const signOut = async () => {
  const session = await getSession();
  session.destroy();

  redirect("/");
};

export const signIn = async ({ email, password }: SignInType) => {
  const session = await getSession();

  const validCredentials = SignInSchema.safeParse({ email, password });
  if (!validCredentials.success) return;

  try {
    await connectToDatabase();

    const user = await User.findOne({ email });
    if (!user) throw new Error("Wrong credentials");

    const isMatch = await user.comparePassword(password);
    if (!isMatch) throw new Error("Wrong credentials");

    const isAdmin = user.role === process.env.USER_CHECK;
    if (isAdmin == false) throw Error("403: Not Permitted.");

    session.isLoggedIn = true;

    session.userId = user._id.toString();
    session.name = user.name;
    await session.save();

    console.log("Login successful");
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
};
