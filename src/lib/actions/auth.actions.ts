"use server";

import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import {
  SessionData,
  defaultSession,
  handleError,
  sessionOptions,
} from "@/lib/utils";
import { redirect } from "next/navigation";
import connectToDatabase from "../database/mongodb";
import User from "../database/models/user.model";
import { SignInSchema, SignInType } from "../validation";

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session) throw new Error("No logged in user");
  if (!session.isLoggedIn) {
    session.username = defaultSession.username;
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

    session.isLoggedIn = true;

    session.userId = user._id.toString();
    await session.save();
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
};
