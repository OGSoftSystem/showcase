import Wrapper from "@/components/shared/Wrapper";
import PostForm from "../../_components/PostForm";
import PageHeading from "@/components/shared/PageHeading";
import { getSession } from "@/lib/actions/auth.actions";
import { findUserById } from "@/lib/actions/user.actions";

export default async function NewPostPage() {
  const session = await getSession();
  const user = await findUserById(session.userId!);

  return (
    <section className="my-20">
      <Wrapper>
        <PageHeading
          pageTitle="Create Post."
          pageSubtitle="Create A New Post"
        />
        <div className="w-full flex justify-center my-20">
          <PostForm type="Create" sessionUser={user.username} />
        </div>
      </Wrapper>
    </section>
  );
}
