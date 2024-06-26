// import ContactForm from "@/components/shared/ContactForm";
import FaQAccordion from "@/components/shared/FaqAccordion";
import { MotionDiv } from "@/components/shared/Motions";
import RoadMap from "@/components/shared/RoadMap";
import Wrapper from "@/components/shared/Wrapper";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { NOTES } from "@/constants";
import { cache } from "@/lib/cache";
// import { formatDateTime } from "@/lib/utils";
import { ArrowDown, ArrowRight, ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <section className="mt-28 xl:mt-40 relative">
        <Wrapper className="flex flex-col items-center h-auto justify-center">
          <h1 className="text-5xl leading-[1.2] md:leading-[1.3] md:text-7xl lg:leading-[1] xl:text-8xl font-bold text-white text-center font-inter max-w-prose tracking-tight uppercase">
            Liquity{" "}
            <span className="lowercase bg-gradient-to-tr from-grad-2 to-70% to-grad-3  bg-clip-text text-transparent">
              on
            </span>{" "}
            Pulsechain.
          </h1>
          <br className="md:hidden" />
          <h1 className="text-2xl md:mt-6 lg:mt-8 md:text-4xl xl:text-6xl font-bold text-grad-1 text-center xl:leading-tight tracking-tight font-hind">
            The King of pStables.
          </h1>
          <div className="text-sm md:text-lg lg:text-xl font-light text-white mt-1 font-hind">
            Join The Future Stablecoin Movement.
          </div>

          <Image
            src="/assets/icons/logo1.png"
            width={250}
            height={250}
            alt="site_logo"
            className="mt-10 shrink-0 object-contain hover:scale-105 cursor-pointer ease-in-out duration-300"
            priority
          />

          <MotionDiv
            className="mt-12"
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
              href="https://gopulse.com/token/pLUSD"
              target="_blank"
              className={buttonVariants({
                size: "lg",
                className: "w-[10rem] btn",
              })}
            >
              Buy pLUSD
            </Link>
          </MotionDiv>
        </Wrapper>

        <div className="absolute blur-[100px] top-20 size-[280px] md:top-16 md:right-5 bg-gradient-to-tr from-grad-3 to-70% via-grad-2 to-grad-1 md:blur-[160px] md:size-2/4 rounded-full -z-10" />
      </section>

      {/* Live Tx */}
      <section className="my-20">
        <Wrapper>
          <Separator />
          <LandingPageHeading
            title="
          Live Transactions"
            subtitle="How it's going"
          />

          <div className="w-full grid grid-cols-1 space-y-4 lg:grid-cols-3 lg:space-x-4 lg:space-y-0">
            <Suspense
              fallback={
                <>
                  <TxSkeleton />
                  <TxSkeleton />
                  <TxSkeleton />
                </>
              }
            >
              <Fetch3Transactions />
            </Suspense>
          </div>
          <div className="flex justify-center w-full mt-2">
            <Link
              href={`https://oldscan.gopulse.com/#/address/${process.env.CONTRACT_ADDRESS}`}
              target="_blank"
              className="text-grad-1 hover:text-grad-2 hover:translate-x-2 transition-all duration-300 ease-in mt-2"
            >
              <ArrowRight />
            </Link>
          </div>
        </Wrapper>
      </section>
      <section className="my-20">
        <Wrapper>
          <Separator />
          <LandingPageHeading title="Learn More" subtitle="Introduction" />

          <div className="w-full h-auto flex justify-center">
            <p className="p-text max-w-4xl md:text-center ">
              pLUSD is a stablecoin on the PulseChain network, designed to reach
              $1 parity. It is a fork of LUSD optimized for PulseChain&apos;s
              faster transactions and lower gas fees. Offering improved
              liquidity and financial operations, pLUSD aligns with Richard
              Heart&apos;s vision for technological innovation and practical
              utility. It aims to enhance scalability and user experience,
              supporting a more efficient blockchain ecosystem.
            </p>
          </div>
          <div className="flex justify-center w-full">
            <Link
              href="/our-story"
              className="text-grad-1 hover:text-grad-2 hover:translate-x-2 transition-all duration-300 ease-in mt-2"
            >
              <ArrowRight />
            </Link>
          </div>
        </Wrapper>
      </section>

      <section className="relative w-full my-20 bg-grad-2/15 py-20">
        {/* <Image src="/assets/images/banner.svg" fill alt="banner" /> */}

        <Wrapper className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 md:gap-16 gap-8">
          {NOTES.map((note) => (
            <MotionDiv
              whileInView={{
                x: [300, 0],
                opacity: [0, 1],
              }}
              transition={{
                type: "spring",
                duration: 0.7,
              }}
              key={note.title}
              className="z-10 space-y-4 flex flex-col h-auto items-center hover:bg-grad-2/10 p-4 rounded-lg transition-all duration-300 ease-in"
            >
              <h1 className="mb-4 text-accent-foreground font-semibold text-2xl">
                {note.title}
              </h1>
              <div className="min-h-40">
                <p className="p-text font-light md:text-center">{note.text}</p>
              </div>

              {/* <Link
                className={buttonVariants({
                  variant: "default",
                  size: "lg",
                  className: "btn w-[8rem] ",
                })}
                href="/"
              >
                {note.btnText}
              </Link> */}

              <Separator className="md:hidden" />
            </MotionDiv>
          ))}
        </Wrapper>
      </section>

      {/* ROAD MAP */}
      <section id="road-map" className="my-20 ">
        <Wrapper>
          {/* <Separator /> */}
          <LandingPageHeading title="Roadmap" subtitle="Follow our journey" />

          <div className="flex flex-col justify-center items-center text-muted-foreground text-base pb-8 sm:text-lg">
            <RoadMap defaultColor="bg-ring" />
          </div>
        </Wrapper>
      </section>

      <section id="faq" className="py-20 relative z-10">
        <Wrapper>
          <Separator />
          <LandingPageHeading title="Faq" subtitle="Good to know" />

          <div className="flex w-full justify-center h-auto">
            <FaQAccordion />
          </div>
        </Wrapper>
        <div className="absolute top-48 right-5 blur-[140px] size-[200px] md:top-20 md:left-5 bg-gradient-to-tr from-grad-2 to-70% via-grad-1 to-grad-3 md:blur-[170px] md:size-2/6 rounded-full -z-10" />
      </section>

      {/* <section id="contact" className="py-20 relative z-10">
        <Wrapper>
          <Separator />
          <LandingPageHeading title="Contact" subtitle="Reach us" />

          <MotionDiv
            whileInView={{
              y: [200, 0],
              transition: {
                duration: 0.3,
              },
            }}
            className="flex w-full justify-center h-auto"
          >
            <ContactForm />
          </MotionDiv>
        </Wrapper>
        <div className="absolute top-48 right-5 blur-[140px] size-[200px] md:top-20 md:right-5 bg-gradient-to-tr from-grad-1 to-70% via-grad-3 to-grad-2 md:blur-[170px] md:size-2/6 rounded-full -z-10" />
      </section> */}
    </>
  );
}

// Section Titles
function LandingPageHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <>
      <h1 className="page-heading-1 text-center font-noto">{title}</h1>
      <p className="page-heading-1_subtitle font-hind">{subtitle}</p>
    </>
  );
}

// Fetch tx
const getTransactions = async () => {
  try {
    const res = await fetch(
      `https://api.scan.pulsechain.com/api/v2/tokens/${process.env.CONTRACT_ADDRESS}/transfers`
    );
    const data = await res.json();

    return data.items.slice(0, 3);
  } catch (error) {
    throw error;
  }
};

const getTx = cache(
  async () => {
    return await getTransactions();
  },
  ["getTx"],
  { revalidate: 60 * 30 }
);

async function Fetch3Transactions() {
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  const data = await getTx();

  return data.map(
    (
      item: {
        block_hash: string;
        timestamp?: string;
        from: { hash: string };
        to: { hash: string };
        total: { value: string };
      },
      i: number
    ) => (
      <Card key={item.block_hash} className="group cursor-pointer">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl font-noto">Transaction</CardTitle>
              <CardDescription className="font-hind ">
                Occurred at {item.timestamp?.split("T")[1].split(".")[0]} -{" "}
                {item.timestamp?.split("T")[0]}
              </CardDescription>
            </div>

            <div className="size-8 rounded-full inline-flex items-center justify-center bg-grad-1/50 text-white text-xs group-hover:bg-grad-2/50 group-hover:animate-pulse">
              {i + 1}
            </div>
          </div>
        </CardHeader>
        <CardContent className="pb-5">
          <div>
            <span className="inline-flex items-center space-x-2 text-[0.6rem] md:text-sm lg:text-xs text-grad-3 font-noto">
              <p>From</p>
              <ArrowUp
                size={15}
                className="text-red-600 group-hover:rotate-45 ease-in duration-300"
              />
            </span>

            <p className="text-[0.6rem] font-noto md:text-sm lg:text-xs">
              {item.from.hash}
            </p>
          </div>

          <div>
            <span className="inline-flex items-center space-x-2 text-[0.6rem] md:text-sm lg:text-xs text-grad-2 font-noto">
              <p>To</p>
              <ArrowDown
                size={15}
                className="text-green-600 group-hover:-rotate-45 ease-in duration-300"
              />
            </span>
            <p className="text-[0.6rem] font-noto md:text-sm lg:text-xs ">
              {item.to.hash}
            </p>
          </div>
        </CardContent>

        <Separator />

        <CardFooter className="pt-4 text-xs md:text-sm text-muted-foreground font-hind">
          <p>
            <span className="text-grad-1"> Value:</span> {item.total.value}
          </p>
        </CardFooter>
      </Card>
    )
  );
}

function TxSkeleton() {
  return (
    <div className="w-[300px] animate-pulse">
      <div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xl w-[300px] h-4 bg-gray-200" />
            <div className="text-xl w-[300px]  h-4 bg-gray-200" />
          </div>

          <div className="size-10 rounded-full bg-gray-400 text-white" />
        </div>
      </div>
      <div className="pb-5">
        <div>
          <span className="inline-flex items-center space-x-2 ">
            <div className="bg-gray-200 w-[100px] h-4" />
          </span>

          <div className="w-[280px] h-4 bg-gray-200 " />
        </div>

        <div>
          <span className="inline-flex items-center space-x-2 ">
            <div className="bg-gray-200 w-[100px] h-4" />
          </span>

          <div className="w-[280px] h-4 bg-gray-200 " />
        </div>
      </div>

      <Separator />

      <div className="w-[300px] h-4 bg-gray-200 " />
    </div>
  );
}
