import { redirect } from "next/navigation";
import AuthForm from "@/components/shared/AuthForm";
import Wrapper from "@/components/shared/Wrapper";
import Logo from "@/components/shared/Logo";
import { auth, signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa6";
import { signInWithGoogle } from "@/lib/actions/nextAuth5.actions";

const SignIn = async () => {
  const session = await auth();

  if (session?.user !== undefined) redirect("/");
  return (
    <section className="w-full">
      <Wrapper className="max-w-5xl">
        <div className="grid md:grid-cols-3 items-center">
          <div className="md:col-span-2">
            <h1 className="page-heading mb-8">Sign In</h1>
            <AuthForm type="SignIn" />

            <div className="flex items-center space-x-2 mt-6">
              <form
                action={async () => {
                  "use server";
                  await signInWithGoogle("google", "/");
                }}
              >
                <Button
                  type="submit"
                  variant="ghost"
                  className="size-10 rounded-full bg-grad-1/30"
                >
                  <FaGoogle />
                </Button>
              </form>
              <p className="p-text">Sign In With Google</p>
            </div>
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
