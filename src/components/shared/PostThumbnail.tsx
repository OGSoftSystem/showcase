import { formatDateTime, imgBaseUrl } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { EllipsisVertical, Pencil } from "lucide-react";
import { auth } from "@/auth";
import { DeleteButton, PublishButton } from "./PostActions";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";

type Props = {
  postId: string;
  imageUrl: string;
  title: string;
  date: Date;
  subtitle: string;
  category: string;
  author: string;
  published: boolean;
};

const PostThumbnail = async ({
  postId,
  imageUrl,
  title,
  date,
  subtitle,
  category,
  author,
  published,
}: Props) => {
  const createdAt = formatDateTime(new Date(date));

  const session = await auth();


  return (
    <div className="w-full md:w-[300px] h-auto hover:bg-grad-1/10 ease-in duration-300 relative">
      <Link href={`/blog/${postId}`}>
        <div className="relative w-full md:w-[300px] h-[120px] overflow-hidden">
          <Image
            src={`${imgBaseUrl}${imageUrl}`}
            fill
            alt="post_banner"
            className="aspect-video"
          />
        </div>
        <div className="flex justify-between my-2">
          <p className="text-muted-foreground text-xs">{createdAt}</p>

          <div className="flex space-x-1 items-center">
            <p className="text-muted-foreground text-xs">{category}</p>
            <span className="text-xs">|</span>
            <p className="text-muted-foreground text-xs">{author}</p>
          </div>
        </div>
        <h3 className="text-2xl font-semibold line-clamp-1">{title}</h3>
        <p className="p-text">{subtitle}</p>
      </Link>

      {session?.user.role === "admin" && (
        <div className="absolute bottom-2 right-2 size-8 rounded-full bg-grad-1/40 flex items-center justify-center hover:bg-grad-1">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <>
                <EllipsisVertical />
                <span className="sr-only">Menu</span>
              </>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link
                  href={`/admin/posts/${postId}/edit`}
                  className="flex items-center space-x-2"
                >
                  <Pencil className="text-white" size={15} /> <span>Edit</span>
                </Link>
              </DropdownMenuItem>
              <PublishButton postId={postId} isPublished={published} />
              
              <DropdownMenuSeparator />
              <DeleteButton postId={postId} />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </div>
  );
};

export default PostThumbnail;

export function PostSkeleton() {
  return (
    <div className="flex flex-col gap-2 animate-pulse w-full md:w-[300px] h-auto">
      <div className="w-full md:w-[300px] h-[150px] bg-gray-300" />
      <div className="w-[250px] h-[15px] bg-gray-400" />
      <div className="w-[250px] h-[15px] bg-gray-400" />
      <div className="w-[100px] h-[15px] bg-gray-400" />

      {/* <p>{body}</p> */}
    </div>
  );
}
