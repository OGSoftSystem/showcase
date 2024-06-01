import connectToDatabase from "@/lib/database/mongodb";
import NextAuth, { type DefaultSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import User from "./lib/database/models/user.model";

declare module "next-auth" {
  interface Session {
    user: {
      role: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    id?: string;
    role?: string;
  }
}

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  session: {
    strategy: "jwt",
  },

  providers: [
    GoogleProvider({
      // clientId: process.env.GOOGLE_CLIENT_ID,
      // clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),

    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      authorize: async (credentials) => {
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
      session.user.id = userId!;
      session.user.role = sessionUser?.role as string;

      return session;
    },

    async signIn({ profile }) {
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
      const user = await User.findOne({ email: token.email! });

      if (user) {
        const userId = user?._id.toString();

        token.role = user?.role as string;
        token.id = userId;
      }

      return token;
    },
  },
  pages: {
    signIn: "/auth/sign-in",
  },
});
