import { redirect } from "next/navigation";
import AuthForm from "@/components/shared/AuthForm";
import { getSession } from "@/lib/actions/auth.actions";
import Wrapper from "@/components/shared/Wrapper";
import Logo from "@/components/shared/Logo";

const SignIn = async () => {
  const session = await getSession();

  if (session.isLoggedIn) redirect("/");
  return (
    <section className="w-full">
      <Wrapper className="max-w-5xl">
        <div className="grid md:grid-cols-3 items-center">
          
          <div className="md:col-span-2">
            <h1 className="page-heading mb-8">Sign In</h1>
            <AuthForm type="SignIn" />
          </div>

          <div className="hidden md:block ">
            <Logo width={400} height={400} />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SignIn;
