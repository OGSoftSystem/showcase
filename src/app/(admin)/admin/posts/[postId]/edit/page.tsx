import Wrapper from "@/components/shared/Wrapper";
import PageHeading from "@/components/shared/PageHeading";
import PostForm from "../../../_components/PostForm";
import { findPostById } from "@/lib/actions/post.actions";

const EditPostPage = async ({
  params: { postId },
}: {
  params: { postId: string };
}) => {

  const post: PostType = await findPostById(postId);
  
  return (
    <section className="my-20">
      <Wrapper>
        <PageHeading
          pageTitle="Edit Post."
          pageSubtitle="Make Changes to Current Post."
        />
        <div className="w-full flex justify-center my-20">
          <PostForm
            type="Update"
            post={post}
          />
        </div>
      </Wrapper>
    </section>
  );
};

export default EditPostPage;
