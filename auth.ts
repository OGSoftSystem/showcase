import User from "@/lib/database/models/user.model";
import connectToDatabase from "@/lib/database/mongodb";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],

  // callbacks: {
  //   async session({ session }) {
  //     console.log(session);

  //     const sessionUser = await User.findOne({ email: session?.user?.email });
  //     session.userId = sessionUser._id as string;
  //     return this.session;
  //   },

  //   async signIn({ profile }) {
  //     console.log(profile);

  //     try {
  //       await connectToDatabase();
  //       const user = await User.findOne({ email: profile?.user?.email! });
  //       if (!user) {
  //         const newUser = await User.create({
  //           email: profile.user.email,
  //         });
  //       }
  //     } catch (error) {}
  //   },
  // },
});
