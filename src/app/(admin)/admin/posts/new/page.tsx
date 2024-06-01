import Wrapper from "@/components/shared/Wrapper";
import PostForm from "../../_components/PostForm";
import PageHeading from "@/components/shared/PageHeading";
import { findUserById } from "@/lib/actions/user.actions";
import { auth } from "@/auth";

export default async function NewPostPage() {
  const session = await auth();
  const user = await findUserById(session?.user.id as string);

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
