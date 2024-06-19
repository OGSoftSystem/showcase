"use client";

import { useTransition } from "react";
import { DropdownMenuItem } from "../../../../components/ui/dropdown-menu";
import {
  deleteUser,
  toggleVerification,
  makeUserAdmin,
} from "@/lib/actions/user.actions";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function ToggleUserActive({
  userId,
}: // verify,
{
  userId: string;
  // verify: boolean;
}) {
  const [isPending, startTransition] = useTransition();
  return (
    <DropdownMenuItem
      disabled={isPending}
      onClick={() =>
        startTransition(async () => {
          await toggleVerification(userId);
        })
      }
    >
      {/* {verify ? "Deactivate" : "Activate"} */}
      Not Verified
    </DropdownMenuItem>
  );
}
export function EditUser({ userId }: { userId: string }) {
  return (
    <DropdownMenuItem asChild>
      <Link href={`/profile/${userId}/edit`}>Edit</Link>
    </DropdownMenuItem>
  );
}

export function DeleteUser({ userId }: { userId: string }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  return (
    <DropdownMenuItem
      disabled={isPending}
      onClick={() =>
        startTransition(async () => {
          await deleteUser(userId);
          router.refresh();
        })
      }
    >
      Delete
    </DropdownMenuItem>
  );
}

export function MakeAdmin({
  userId,
  isAdmin,
}: {
  userId: string;
  isAdmin: boolean;
}) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  return (
    <DropdownMenuItem
      disabled={isPending}
      onClick={() =>
        startTransition(async () => {
          await makeUserAdmin(userId, isAdmin);
          router.refresh();
        })
      }
    >
      Make Admin
    </DropdownMenuItem>
  );
}
