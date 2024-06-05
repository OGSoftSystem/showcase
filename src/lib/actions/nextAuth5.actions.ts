"use server";

import { signIn, signOut } from "@/auth";

export async function signInWithGoogle(provider: string, path: string) {
  return signIn(provider, { redirectTo: path });
}

export async function handleSignOut() {
  return signOut({ redirectTo: "/" });
}
