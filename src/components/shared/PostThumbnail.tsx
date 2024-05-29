import Image from "next/image";
import Link from "next/link";

type Props = {
  postId: string;
  imageUrl: string;
  title: string;
  date: string;
  subtitle: string;
  category: string;
};

const PostThumbnail = ({
  postId,
  imageUrl,
  title,
  date,
  subtitle,
  category,
}: Props) => {
  //   const currentDate = new Date(date).toUTCString();
  return (
    <Link
      href={`/blog/${postId}`}
      className="w-full md:w-[300px] h-auto hover:bg-grad-1/10 ease-in duration-300"
    >
      <div className="relative w-full md:w-[300px] h-[150px] overflow-hidden">
        <Image src={imageUrl} fill alt="post_banner" />
      </div>
      <div className="flex justify-between my-2">
        <p className="text-muted-foreground text-xs">{date}</p>
        <p className="text-muted-foreground text-xs">{category}</p>
      </div>
      <h3 className="text-2xl font-semibold line-clamp-1">{title}</h3>
      <p className="p-text">{subtitle}</p>
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
