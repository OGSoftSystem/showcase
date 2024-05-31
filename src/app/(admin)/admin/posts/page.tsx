import PageHeading from "@/components/shared/PageHeading";
import PostThumbnail, { PostSkeleton } from "@/components/shared/PostThumbnail";
import Wrapper from "@/components/shared/Wrapper";
import { Button } from "@/components/ui/button";
import { findAllPost } from "@/lib/actions/post.actions";
import { cache } from "@/lib/cache";
import { PostType } from "@/types";
import Link from "next/link";
import { Suspense } from "react";

const getAllPost = cache(
  async () => {
    return await findAllPost();
  },
  ["getAllPost"],
  { revalidate: 24 * 60 * 60 }
);

const PostsPage = () => {
  return (
    <section>
      <Wrapper className="mt-20">
        <PageHeading
          pageTitle="Posts"
          pageSubtitle="Read, Create, Update and Delete Posts"
        />

        <div className="lg:max-w-5xl mx-auto md:flex flex-col justify-center">
          <Button
            asChild
            size="lg"
            className="w-fit rounded-full bg-grad-2 mt-8 text-white self-end mb-8"
          >
            <Link href="/admin/posts/new">Add Post</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 space-y-6 md:space-y-0 mt-4 mb-8 items-center justify-center">
          <Suspense
            fallback={
              <>
                <PostSkeleton />
                <PostSkeleton />
                <PostSkeleton />
                <PostSkeleton />
                <PostSkeleton />
                <PostSkeleton />
                <PostSkeleton />
              </>
            }
          >
            <RenderPosts />
          </Suspense>
        </div>
      </Wrapper>
    </section>
  );
};

export default PostsPage;

async function RenderPosts() {
  const posts: PostType[] = await findAllPost();

  return posts.map((post) => (
    <PostThumbnail
      key={post.title}
      title={post.title}
      subtitle={post.subtitle}
      imageUrl={post.imageUrl}
      category={post.category}
      date={post.date}
      postId={post._id}
      author={post.author}
    />
  ));
}
