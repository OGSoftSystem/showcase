import Wrapper from "@/components/shared/Wrapper";
import PostForm from "../../_components/PostForm";
import PageHeading from "@/components/shared/PageHeading";

export default async function NewPostPage() {
  
  return (
    <section className="my-20">
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
