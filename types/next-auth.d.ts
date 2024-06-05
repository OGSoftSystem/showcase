import { type DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

// Modules adds extra properties to an existing interface e.g "next-auth"
declare module "next-auth" {
  interface Session {
    user: {
      role: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string;
  }
}
