import FaQAccordion from "@/components/shared/FaqAccordion";
import RoadMap from "@/components/shared/RoadMap";
import Wrapper from "@/components/shared/Wrapper";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { NOTES } from "@/constants";
import { getSession } from "@/lib/actions/auth.actions";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <>
      <section className="mt-28 xl:mt-44 relative z10">
        <Wrapper className="flex flex-col items-center h-auto justify-center">
          <h1 className="text-5xl leading-[1.2] md:leading-[1.3] md:text-7xl lg:leading-[1] xl:text-8xl font-bold text-white text-center font-inter max-w-prose tracking-tight">
            Liquity on Pulsechain.
          </h1>
          <br className="md:hidden" />
          <h1 className="text-2xl md:mt-6 lg:mt-8 md:text-4xl xl:text-5xl font-bold bg-gradient-to-tr from-grad-3/60 to-grad-1/80 bg-clip-text text-transparent text-center xl:leading-tight tracking-tight">
            The King of pStables.
          </h1>
          <p className="text-sm md:text-lg lg:text-xl font-light text-muted-foreground mt-2 lg:mt-2">
            Join The Future Stablecoin Movement.
          </p>

          <Image
            src="/assets/icons/logo1.png"
            width={250}
            height={250}
            alt="site_logo"
            className="mt-8 shrink-0"
            priority
          />

          <div className="mt-12">
            <Button
              size="lg"
              className="btn text-white bg-grad-1 font-bold h-16"
              asChild
            >
              <Link
                href="https://piteas.io"
                target="_blank"
                className="w-[10rem]"
              >
                Buy pLUSD
              </Link>
            </Button>
          </div>
        </Wrapper>

        <div className="absolute blur-[140px] top-20  size-[250px] md:top-16 md:right-5 bg-gradient-to-tr from-grad-3 to-70% via-grad-2 to-grad-1 md:blur-[700px] md:size-2/4 rounded-full" />
      </section>

      <section className="my-20">
        <Wrapper>
          <Separator />
          <h1 className="page-heading text-center">Learn More</h1>
          <div className="w-full h-auto flex justify-center">
            <p className="p-text max-w-4xl md:text-center ">
              pLUSD is a cryptocurrency initiative that leverages the unique
              capabilities of the PulseChain network. This project is a fork of
              the original LUSD, redesigned to optimize performance within the
              PulseChain ecosystem, which is known for faster transaction speeds
              and lower gas fees. pLUSD holders benefit from enhanced liquidity
              and financial operations on the blockchain. The project aligns
              with the vision of Richard Heart, the founder of PulseChain,
              emphasizing technological innovation and practical utility. pLUSD
              is integral to advancing the ecosystem&apos;s goal of improving
              scalability and user experience, facilitating a more efficient
              blockchain environment for a diverse range of crypto activities.
            </p>
          </div>
        </Wrapper>
      </section>

      <section className="relative w-full my-20 bg-grad-2/15 py-20">
        {/* <Image src="/assets/images/banner.svg" fill alt="banner" /> */}

        <Wrapper className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {NOTES.map((note) => (
            <div
              key={note.title}
              className="z-10 space-y-4 flex flex-col h-auto items-center"
            >
              <h1 className="mb-4 text-accent-foreground font-semibold text-2xl">
                {note.title}
              </h1>
              <div className="min-h-40">
                <p className="p-text font-light">{note.text}</p>
              </div>
              <Button
                asChild
                size="lg"
                className="btn text-white bg-grad-1 w-[8rem] "
              >
                <Link href="/">{note.btnText}</Link>
              </Button>
              <Separator className="md:hidden" />
            </div>
          ))}
        </Wrapper>
      </section>

      <section id="road-map" className="my-20 ">
        <Wrapper>
          {/* <Separator /> */}
          <h1 className="page-heading text-center">Roadmaps</h1>

          <div className="flex flex-col justify-center items-center text-muted-foreground text-base pb-8 sm:text-lg">
            <RoadMap defaultColor="bg-ring" />
          </div>
        </Wrapper>
      </section>

      <section id="faq" className="py-20 relative z-10">
        <Wrapper>
          <Separator />
          <h1 className="page-heading text-center">Faq</h1>

          <div className="flex w-full justify-center h-auto">
            <FaQAccordion />
          </div>
        </Wrapper>
        <div className="absolute top-48 right-5 blur-[140px] size-[300px] md:top-20 md:left-5 bg-gradient-to-tr from-grad-2 to-70% via-grad-1 to-grad-3 md:blur-[700px] md:size-2/6 rounded-full" />
      </section>
    </>
  );
}
