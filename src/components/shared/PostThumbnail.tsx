import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  postId: string;
  imageUrl: string;
  title: string;
  date: string;
  description: string;
  category: string;
  //   body: string;
};
const PostThumbnail = ({
  postId,
  imageUrl,
  title,
  date,
  description,
  category,
}: //   body,
Props) => {
  //   const currentDate = new Date(date).toUTCString();
  return (
    <Link href={`/posts/${postId}`} className="w-full md:w-[300px] h-auto">
      <div className="relative w-full md:w-[300px] h-[150px] overflow-hidden">
        <Image src={imageUrl} fill alt="post_banner" />
      </div>
      <div className="flex justify-between mt-2">
        <p className="text-muted-foreground text-xs">{date}</p>
        <p className="text-muted-foreground text-xs">{category}</p>
      </div>
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="p-text">{description}</p>
      {/* <p>{body}</p> */}
    </Link>
  );
};

export default PostThumbnail;

export function PostSkeleton() {
  return (
    <div className="flex flex-col gap-2 animate-pulse w-full md:w-[300px] h-auto">
      <div className="w-full md:w-[300px] h-[150px] bg-gray-100" />
      <div className="w-[250px] h-[15px] bg-gray-300" />
      <div className="w-[250px] h-[15px] bg-gray-300" />
      <div className="w-[100px] h-[15px] bg-gray-300" />

      {/* <p>{body}</p> */}
    </div>
  );
}
