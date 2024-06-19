import { findAllComment } from "@/lib/actions/comment.actions";
import Image from "next/image";
import { Suspense } from "react";
import { cleanText } from "@/lib/utils";
import CommentForm from "./CommentForm";

type CommentProps = {
  _id: string;
  author: { name: string; imageUrl: string };
  comment: string;
  createdAt: Date;
  updateAt: Date;
};
export async function RenderComments({
  postAuthor,
}: {
  postAuthor: { name: string };
}) {
  const comments: CommentProps[] = await findAllComment();

  if (comments.length === 0) {
    return <p className="p-text">Be the first to comment!.</p>;
  }

  return comments.map((comment: CommentProps) => {
    const cleanComment = comment?.comment ? cleanText(comment.comment) : "";

    return (
      <div
        key={comment._id}
        className="bg-black border-[0.5px] w-fit p-4 rounded-md space-y-2"
      >
        <div className="flex items-center space-x-2">
          <div className="size-6 relative rounded-full overflow-hidden">
            <Image
              src={comment.author?.imageUrl && comment.author.imageUrl}
              fill
              alt={comment.author?.name}
            />
          </div>
          <p className="text-xs text-muted-foreground font-noto">
            {postAuthor.name === comment.author?.name
              ? "You"
              : comment.author?.name}{" "}
            commented.
          </p>
        </div>
        <p className="text-sm text-white font-hind">{cleanComment}</p>
      </div>
    );
  });
}

export function CommentSkeleton() {
  return (
    <div className="w-full md:w-[300px] p-4 rounded-md flex flex-col space-y-2 animate-pulse">
      <div className="flex items-center space-x-2">
        <div className="size-6 relative rounded-full overflow-hidden bg-gray-100" />
        <div className=" bg-gray-200 h-4" />
      </div>
      <div className="bg-gray-300 h-8" />
    </div>
  );
}

export function LoadComments({
  postAuthor,
  postId,
}: {
  postAuthor: { name: string };
  postId: string;
}) {
  return (
    <div className="mt-10 flex flex-col space-y-2">
      <CommentForm type="Create" postId={postId} />

      <Suspense
        fallback={
          <>
            <CommentSkeleton />
            <CommentSkeleton />
            <CommentSkeleton />
            <CommentSkeleton />
            <CommentSkeleton />
          </>
        }
      >
        <RenderComments postAuthor={postAuthor} />
      </Suspense>
    </div>
  );
}
