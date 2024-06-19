import connectToDatabase from "@/lib/database/mongodb";
import type { NextAuthConfig } from "next-auth";
import User from "./lib/database/models/user.model";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

const PROTECTED_ROUTES = ["/admin", "/blog"];

export default {
  providers: [
    Google({
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),

    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        let user = null;
        try {
          await connectToDatabase();
          user = await User.findOne({ email });

          if (!user) throw new Error("User not found.");
          const isMatch = await user.comparePassword(password);

          if (!isMatch) throw new Error("Wrong credentials.");

          return user;
        } catch (error) {
          throw error;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({ email: session.user.email });
      const userId = sessionUser?._id.toString();
      session.user.id = userId as string;
      session.user.role = sessionUser?.role as string;

      return session;
    },

    async signIn({ profile, account }) {
      // SignIn returns a boolean
      // If credentials is used, assume signIn was successful by returning true
      if (account?.provider === "credentials") {
        return true;
      }

      try {
        await connectToDatabase();
        const user = await User.findOne({ email: profile?.email });

        if (!user) {
          await User.create({
            email: profile?.email,
            name: profile?.name,
            imageUrl: profile?.picture,
            password: profile?.sub,
          });
        }

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },

    async jwt({ token }) {
      if (token !== null) {
        const user = await User.findOne({ email: token.email });

        if (user) {
          const userId = user?._id.toString();

          token.role = user?.role as string;
          token.id = userId;
        }
      }
      return token;
    },

    // async authorized({ request, auth }) {
    //   const { pathname } = request.nextUrl;
    //   if (PROTECTED_ROUTES.includes(pathname)) return !!auth;
    //   return true;
    // },
  },

  pages: {
    signIn: "/auth/sign-in",
  },
} satisfies NextAuthConfig;
