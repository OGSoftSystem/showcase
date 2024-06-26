import Wrapper from "@/components/shared/Wrapper";
import PostForm from "../../_components/PostForm";
import PageHeading from "@/components/shared/PageHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
};

export default async function NewPostPage() {
  return (
    <section className="paddingY">
      <Wrapper>
        <PageHeading
          pageTitle="Create Post."
          pageSubtitle="Create A New Post"
        />
        <div className="w-full flex justify-center my-20">
          <PostForm type="Create" />
        </div>
      </Wrapper>
    </section>
  );
}
