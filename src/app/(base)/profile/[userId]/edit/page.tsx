import EditUserProfileForm from "@/components/shared/EditUserProfileForm";
import Wrapper from "@/components/shared/Wrapper";
import { findUserById } from "@/lib/actions/user.actions";

const UserProfilePage = async ({
  params: { userId },
}: {
  params: { userId: string };
}) => {
  const user: UserType = await findUserById(userId);

  return (
    <Wrapper className="py-20">
      <EditUserProfileForm user={user} />
    </Wrapper>
  );
};

export default UserProfilePage;
