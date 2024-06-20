import { redirect } from "next/navigation";
import AuthForm from "@/components/shared/AuthForm";
import Wrapper from "@/components/shared/Wrapper";
import Logo from "@/components/shared/Logo";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa6";
import { signInWithGoogle } from "@/lib/actions/nextAuth5.actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
};
const SignIn = async () => {
  const session = await auth();

  if (session?.user !== undefined) redirect("/");
  return (
    <section className="w-full">
      <Wrapper className="max-w-5xl">
        <div className="grid md:grid-cols-3 items-center">
          <div className="md:col-span-2 flex flex-col items-center ">
            <h1 className="page-heading mb-8">Sign In</h1>
            <AuthForm type="SignIn" />
            <form
              action={async () => {
                "use server";
                await signInWithGoogle("google", "/");
              }}
              className="mt-6 w-2/4"
            >
              <Button
                type="submit"
                variant="ghost"
                className="flex items-center space-x-2 w-full rounded-full bg-grad-1/30 hover:bg-grad-1/50 cursor-pointer h-12"
              >
                <FaGoogle size={25} />
                <p className="p-text">Sign In With Google</p>
              </Button>
            </form>
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
