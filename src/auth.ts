// import connectToDatabase from "@/lib/database/mongodb";
import NextAuth from "next-auth";
// import Google from "next-auth/providers/google";
// import Credentials from "next-auth/providers/credentials";
// import User from "./lib/database/models/user.model";
import authConfig from "./auth.config";


export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: "jwt" },
  ...authConfig,
});
