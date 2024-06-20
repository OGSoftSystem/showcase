import Wrapper from "@/components/shared/Wrapper";
import { buttonVariants } from "@/components/ui/button";
import { burnVideoLink } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { ExternalSite, BurnPageVideo } from "./_components/ExternalSite";
import { Metadata } from "next";
import PageHeading from "@/components/shared/PageHeading";
import { MotionDiv } from "@/components/shared/Motions";

export const metadata: Metadata = {
  title: "Burn",
};
const BurnPage = () => {
  return (
    <>
      <section className="pt-20">
        <Wrapper className="md:mb-10">
          <PageHeading pageTitle="Burn" pageSubtitle="Learn about burning." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full items-center mt-12">
            <div className="z-20 col-span-1 flex flex-col justify-center">
              <h1 className="text-3xl text-center lg:text-left lg:text-6xl font-bold ">
                Welcome to the journey to burning
                <br />
                <span className="text-3xl text-grad-1 lg:text-8xl">
                  95-99%
                </span>{" "}
                <br />
                <span>of the supply!</span>
              </h1>
              {/* <span className="text-xl text-center lg:text-left lg:text-2xl font-light text-muted-foreground my-2 mb-8 mt-4 lg:mt-0">
              Get daily updates on everything{" "}
              <span className="font-bold text-3xl">Pulsechain.</span>
            </span> */}

              <MotionDiv
                whileHover={{
                  scale: 1.05,
                  transition: {
                    type: "spring",
                    duration: 3,
                    damping: 3,
                  },
                }}
              >
                <Link
                  href="#others"
                  className={buttonVariants({
                    variant: "default",
                    className: "w-52 btn self-center lg:self-start my-8",
                  })}
                >
                  Explore
                </Link>
              </MotionDiv>
            </div>

            <div className="relative w-[20rem] h-[20rem] md:w-[18rem] lg:w-[30rem] lg:h-[30rem] col-span-1 hidden md:block">
              <Image
                src="https://crapforcrypto.com/wp-content/uploads/2021/09/Pulse-Wallpaper-28-.jpg"
                fill
                priority
                alt="banner"
              />

              <div className="w-[20rem] h-[20rem] md:w-[18rem] lg:w-[30rem] lg:h-[30rem] absolute bg-grad-2/30 -z-10 -top-4 -right-4" />
            </div>
          </div>
        </Wrapper>
        <Separator />
      </section>

      <section>
        <Wrapper className="py-10" id="others">
          <div className="w-full">
            <h1 className="page-heading my-4 mb-10">We are currently at</h1>
            <ExternalSite />
          </div>

          <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center my-20 gap-10 group">
            <Link
              href={
                "https://www.youtube.com/embed/PxWh__9ttN4?si=I4ySVBvZ0QYieG2d"
              }
              className="page-heading group-hover:text-grad-1"
            >
              How StayBULL works and how to burn pLUSD
            </Link>

            <BurnPageVideo />
          </div>

          <div className="w-full flex flex-col md:flex-row-reverse md:justify-between md:items-center gap-10 group my-20">
            <div>
              <Link
                href={"https://staybull.giffordwear.win/"}
                className="page-heading group-hover:text-grad-1"
              >
                Connect your wallet and try StayBull.
              </Link>
            </div>

            <div className="w-full h-[200px] md:w-[480px] md:h-[300px] relative overflow-hidden">
              <Link href={"https://staybull.giffordwear.win/"}>
                <Image
                  src="/assets/images/stay_bull.png"
                  alt="stay_bull_page"
                  fill
                  className="object-contain"
                />
              </Link>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default BurnPage;
