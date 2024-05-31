import SocialShare from "@/components/shared/SocialShare";
import Wrapper from "@/components/shared/Wrapper";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { findPostById } from "@/lib/actions/post.actions";
import { formatDateTime, imgBaseUrl } from "@/lib/utils";
// import PageHeading from "@/components/shared/PageHeading";

const PostPage = async ({
  params: { postId },
}: {
  params: { postId: string };
}) => {
  const post = await findPostById(postId);
  const date = formatDateTime(new Date(post.date));

  return (
    <section className="pt-20">
      {/* <PageHeading pageTitle="Post" pageSubtitle="Latest post." /> */}
      <Wrapper className="md:my-20 flex relative w-full h-screen overflow-hidden">
        {/* Left */}
        <div className="hidden flex-[0.4] sticky top-0 overflow-y-scroll h-[calc(100vh-50px)] pt-4 lg:flex justify-center">
          <div className="flex flex-col items-center space-y-2">
            <div className="size-44 rounded-full overflow-hidden relative">
              <Image
                src="/assets/images/mela.png"
                fill
                alt={post?.author!}
                className="object-cover"
              />
            </div>

            <>
              <p className="text-center">Author: {post?.author}</p>
              <p className="text-sm text-muted-foreground">
                About author info to be displayed here.
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
            <p className="text-muted-foreground font-light">{post?.author}</p>
          </div>
          <div className="text-lg font-light capitalize">{post?.subtitle}</div>
          <div className="flex items-center justify-between mt-2">
            <div className="text-xs text-muted-foreground">
              {post?.category}
            </div>
            <div className="text-xs text-muted-foreground">{date}</div>
          </div>
          <div className="p-text my-4">{post?.body}</div>

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
            <p>Comments</p>
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
