import Wrapper from "@/components/shared/Wrapper";
// import UsersTable from "@/components/shared/UsersTable";
import UsersTableView from "@/app/(admin)/admin/_components/UsersTableView";
import { findAllUsers } from "@/lib/actions/user.actions";
import { cache } from "@/lib/cache";

import { notFound } from "next/navigation";
import PageHeading from "@/components/shared/PageHeading";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// const getUsers = cache(
//   () => {
//     return findAllUsers();
//   },
//   ["getUsers"],
//   { revalidate: 60 * 60 * 24 }
// );

const UsersPage = async () => {
  const users: UserType[] = await findAllUsers();
  if (users == null) return notFound();

  return (
    <section className="mt-10 lg:mt-20">
      <Wrapper>
        <PageHeading pageTitle="Users" pageSubtitle="All registered users." />
        <div className="lg:max-w-5xl mx-auto md:flex flex-col justify-center">
          {/* <UsersTable users={users} /> */}
          <Button
            asChild
            size="lg"
            className="w-fit rounded-full bg-grad-2 mt-8 text-white self-end mb-8"
          >
            <Link href="/auth/sign-up">Add User</Link>
          </Button>
          <UsersTableView users={users} />
        </div>
      </Wrapper>
    </section>
  );
};

export default UsersPage;
