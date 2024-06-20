import SocialShare from "@/components/shared/SocialShare";
import Wrapper from "@/components/shared/Wrapper";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { findAllPost, findPostById } from "@/lib/actions/post.actions";
import { cleanText, formatDateTime, imgBaseUrl } from "@/lib/utils";
import CommentForm from "../_components/CommentForm";
import { notFound } from "next/navigation";
import Likes from "../_components/Likes";
import { auth } from "@/auth";
import { LoadComments } from "../_components/Comment";
import { cache } from "@/lib/cache";
import { Metadata } from "next";
// import PageHeading from "@/components/shared/PageHeading";

type ParamsType = {
  params: { postId: string };
};

// Cache every post for 24hrs
const getPostById = cache(
  async (postId: string): Promise<PostType> => {
    return await findPostById(postId);
  },
  ["getPostById"],
  { revalidate: 60 * 60 * 24 }
);

// Dynamic metadata
export async function generateMetadata({
  params: { postId },
}: ParamsType): Promise<Metadata> {
  const post: PostType = await getPostById(postId);

  return {
    title: post.title,
    description: post.category,
    openGraph: {
      images: [{ url: post.imageUrl }],
    },
  };
}

// Fetches data at compile time and serves static html (prerender)
export const generateStaticParams = async () => {
  const posts: PostType[] = await findAllPost();

  return posts.map((post) => ({ _id: post._id }));
};

// Main Component
const PostPage = async ({
  params: { postId },
}: {
  params: { postId: string };
}) => {
  if (!/^[0-9a-fA-F]{24}$/.test(postId)) {
    return notFound(); // ID is not in the correct format
  }

  const session = await auth();
  const post: PostType = await findPostById(postId);
  const date = formatDateTime(new Date(post.date));

  const cleanPost = post?.body ? cleanText(post.body) : "";

  return (
    <section className="pt-20">
      {/* <PageHeading pageTitle="Post" pageSubtitle="Latest post." /> */}
      <Wrapper className="md:my-20 flex relative w-full h-screen overflow-hidden">
        {/* Left */}
        <div className="hidden flex-[0.4] sticky top-0 overflow-y-scroll h-[calc(100vh-50px)] pt-4 lg:flex justify-center">
          <div className="flex flex-col items-center space-y-2">
            <div className="size-24 rounded-full overflow-hidden relative">
              <Image
                src={
                  post?.author?.imageUrl ||
                  `${imgBaseUrl}${post?.author.imageUrl}`
                }
                fill
                alt={post?.author.name}
                className="object-contain"
              />
            </div>

            <>
              <p className="text-center">
                Author:{" "}
                <span className="font-semibold">{post?.author.name}</span>
              </p>
              <p className="text-sm text-muted-foreground text-center">
                {cleanText(post?.author.about) || "Award winning author."}
              </p>
            </>
          </div>
        </div>

        {/* Middle */}
        <div className="flex-1 px-4 overflow-y-auto">
          <div className="relative aspect-video md:w-full md:h-[23rem] mb-4 ">
            <Image
              src={`${imgBaseUrl}${post.imageUrl}`}
              fill
              priority
              alt="banner"
              className="object-contain lg:object-cover"
            />
          </div>

          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold capitalize">{post?.title}</h2>
            <p className="text-muted-foreground font-light">
              {post?.author.name}
            </p>
          </div>
          <div className="text-lg font-light capitalize">{post?.subtitle}</div>
          <div className="flex items-center justify-between mt-2">
            <div className="text-xs text-muted-foreground">
              {post?.category}
            </div>
            <div className="text-xs text-muted-foreground">{date}</div>
          </div>
          <div className="p-text my-4">{cleanPost}</div>

          <div>
            <Likes
              postId={post._id}
              userId={session?.user.id as string}
              likedByMe={post?.likedByMe as string}
            />
          </div>

          <div className="w-full my-4 lg:hidden">
            <SocialShare
              className="flex space-x-4"
              postId={postId}
              title={post?.title!}
              body={post?.body!}
            />
          </div>

          <Separator />

          <div className="mt-8">
            <p className="text-xl mb-4">Comments</p>

            <LoadComments postAuthor={post?.author} postId={post._id} />
          </div>
        </div>

        {/* Right */}
        <div className="hidden flex-[0.1] sticky top-0 overflow-y-scroll h-[calc(100vh-500px)] bg-grad-3/30 pt-12 lg:flex justify-center rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-full">
          <SocialShare
            className="flex flex-col space-y-4"
            postId={postId}
            title={post?.title!}
            body={post?.body!}
          />
        </div>
      </Wrapper>
    </section>
  );
};

export default PostPage;
