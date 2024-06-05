import Wrapper from "@/components/shared/Wrapper";
import AuthForm from "@/components/shared/AuthForm";
import Logo from "@/components/shared/Logo";

const SignUp = () => {
  return (
    <section className="w-full">
      <Wrapper className="max-w-5xl">
        <div className="grid md:grid-cols-3 items-center">
          <div className="md:col-span-2 flex flex-col items-center">
            <h1 className="page-heading mb-8">Sign Up</h1>
            <AuthForm type="SignUp" />
          </div>

          <div className="hidden md:block ">
            <Logo width={400} height={400} />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SignUp;
