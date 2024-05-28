import Wrapper from "@/components/shared/Wrapper";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { DUMMY_POSTS } from "@/constants";
import PostThumbnail, { PostSkeleton } from "@/components/shared/PostThumbnail";
import { Suspense } from "react";

const BlogPage = () => {
  return (
    <section className="mt-10 lg:mt-20">
      <Wrapper className="py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full items-center">
          <div className="relative w-[20rem] h-[20rem] md:w-[18rem] lg:w-[30rem] lg:h-[30rem] col-span-1">
            <Image
              src="https://crapforcrypto.com/wp-content/uploads/2021/09/Pulse-Wallpaper-28-.jpg"
              fill
              priority
              alt="banner"
            />

            <div className="w-[20rem] h-[20rem] md:w-[18rem] lg:w-[30rem] lg:h-[30rem] absolute bg-grad-2/30 -z-10 -top-4 -right-4" />
          </div>

          <div className="z-20 col-span-1 flex flex-col justify-center">
            <h1 className="text-4xl text-center lg:text-left lg:text-9xl font-bold tracking-tight">
              Stay informed!
            </h1>
            <span className="text-xl text-center lg:text-left lg:text-2xl font-light text-muted-foreground my-2 mb-8 mt-4 lg:mt-0">
              Get daily updates on everything{" "}
              <span className="font-bold text-3xl">Pulsechain.</span>
            </span>

            <Link
              href="#posts"
              className={buttonVariants({
                variant: "secondary",
                className: "w-52 btn self-center lg:self-start",
              })}
            >
              Explore
            </Link>
          </div>
        </div>
      </Wrapper>

      <Separator />
      <Wrapper id="posts" className="my-20">
        <h1>POSTS</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 space-y-6 md:space-y-0 mt-4 mb-8 items-center justify-center">
          <Suspense
            fallback={
              <>
                <PostSkeleton />
                <PostSkeleton />
                <PostSkeleton />
              </>
            }
          >
            <RenderPostThumbnails />
          </Suspense>
        </div>
      </Wrapper>
    </section>
  );
};

export default BlogPage;

async function RenderPostThumbnails() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return DUMMY_POSTS.map((post, i: number) => {
    return (
      <PostThumbnail
        key={i}
        postId=""
        imageUrl={post.imageUrl}
        title={post.title}
        date={post.date}
        description={post.description}
        category={post.category}
      />
    );
  });
}
