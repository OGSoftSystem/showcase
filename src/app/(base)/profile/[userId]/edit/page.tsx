import EditUserProfileForm from "@/components/shared/EditUserProfileForm";
import Wrapper from "@/components/shared/Wrapper";
import { findUserById } from "@/lib/actions/user.actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};
const UserProfilePage = async ({
  params: { userId },
}: {
  params: { userId: string };
}) => {
  const user: UserType = await findUserById(userId);

  return (
    <Wrapper className="paddingY">
      <EditUserProfileForm user={user} />
    </Wrapper>
  );
};

export default UserProfilePage;
