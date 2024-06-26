"use client";

import { findUserById } from "@/lib/actions/user.actions";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

type User = Pick<UserType, "_id" | "imageUrl" | "role">;
export default function useUser() {
  const initialUser = {
    imageUrl: "",
    _id: "",
    role: "",
  };
  const { data: session } = useSession();

  const [user, setUser] =
    useState<User>(initialUser);

  useEffect(() => {
    async function fetchUser() {
      try {
        const user: User = await findUserById(session?.user.id as string);

        setUser(user);
      } catch (error) {
        throw error;
      }
    }

    fetchUser();
  }, [session?.user.id]);

  return { user };
}
