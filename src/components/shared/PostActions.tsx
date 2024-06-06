"use client";

import { deletePost, publishPost } from "@/lib/actions/post.actions";
import { useTransition } from "react";
import { MdPublish, MdUnpublished } from "react-icons/md";
import Spinner from "./Spinner";
import { useRouter } from "next/navigation";
import { Delete } from "lucide-react";
import { DropdownMenuItem } from "../ui/dropdown-menu";

export const PublishButton = ({
  postId,
  isPublished,
}: {
  postId: string;
  isPublished: boolean;
}) => {
  const [isPending, startTransition] = useTransition();

  if (isPending) return <Spinner />;
  return (
    <DropdownMenuItem
      className="text-white flex items-center space-x-2"
      onClick={() =>
        startTransition(async () => {
          await publishPost(postId, !isPublished);
        })
      }
    >
      {!isPublished ? (
        <>
          <MdPublish size={15} />
          <span>Publish</span>
        </>
      ) : (
        <>
          <MdUnpublished size={15} />
          <span>Revert</span>
        </>
      )}
    </DropdownMenuItem>
  );
};

export const DeleteButton = ({ postId }: { postId: string }) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  if (isPending) return <Spinner />;
  return (
    <DropdownMenuItem
      className="text-red-500 flex items-center space-x-2"
      onClick={() =>
        startTransition(async () => {
          await deletePost(postId);
          router.refresh();
        })
      }
    >
      <>
        <Delete size={15} />
        <span>Delete</span>
      </>
    </DropdownMenuItem>
  );
};
