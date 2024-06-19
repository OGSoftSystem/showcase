"use client";

import { likePost } from "@/lib/actions/post.actions";
import { ThumbsUp } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition, useState } from "react";

const Likes = ({
  postId,
  userId,
  likedByMe,
}: //   postLiker,
{
  postId: string;
  userId: string;
  likedByMe: string;
  //   postLiker: string;
}) => {
  const [likes, setLikes] = useState<number>(0);
  const [liked, setLiked] = useState(false);
  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  return (
    <div>
      <ThumbsUp
        className="cursor-pointer"
        size={20}
        onClick={() =>
          startTransition(async () => {
            console.log("liking comment");

            if (!liked && userId) {
              setLiked(true);
              setLikes((prev: number) => prev + 1);
            } else {
              setLiked(false);
              if (likes > 1) {
                setLikes((prev: number) => prev + 1);
              }
            }

            await likePost(postId, likedByMe);

            router.refresh();
          })
        }
      />
      <p>{likes}</p>
    </div>
  );
};

export default Likes;
