import ContactForm from "@/components/shared/ContactForm";
import FaQAccordion from "@/components/shared/FaqAccordion";
import RoadMap from "@/components/shared/RoadMap";
import Wrapper from "@/components/shared/Wrapper";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { NOTES } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="mt-28 xl:mt-40 relative">
        <Wrapper className="flex flex-col items-center h-auto justify-center">
          <h1 className="text-5xl leading-[1.2] md:leading-[1.3] md:text-7xl lg:leading-[1] xl:text-8xl font-bold text-white text-center font-inter max-w-prose tracking-tight uppercase">
            Liquity <span className="lowercase text-grad-2">on</span>{" "}
            Pulsechain.
          </h1>
          <br className="md:hidden" />
          <h1 className="text-2xl md:mt-6 lg:mt-8 md:text-4xl xl:text-6xl font-bold text-grad-1 text-center xl:leading-tight tracking-tight font-hind">
            The King of pStables.
          </h1>
          <p className="text-sm md:text-lg lg:text-xl font-light text-white mt-1 font-hind">
            Join The Future Stablecoin Movement.
          </p>

          <Image
            src="/assets/icons/logo1.png"
            width={250}
            height={250}
            alt="site_logo"
            className="mt-10 shrink-0"
            priority
          />

          <div className="mt-12">
            <Link
              href="https://piteas.io"
              target="_blank"
              className={buttonVariants({
                size: "lg",
                className: "w-[10rem] btn",
              })}
            >
              Buy pLUSD
            </Link>
          </div>
        </Wrapper>

        <div className="absolute blur-[100px] top-20 size-[280px] md:top-16 md:right-5 bg-gradient-to-tr from-grad-3 to-70% via-grad-2 to-grad-1 md:blur-[150px] md:size-2/4 rounded-full -z-10" />
      </section>

      {/* LEARN MORE */}
      <section className="my-20">
        <Wrapper>
          <Separator />
          <h1 className="page-heading text-center">Learn More</h1>
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
        </Wrapper>
      </section>

      <section className="relative w-full my-20 bg-grad-2/15 py-20">
        {/* <Image src="/assets/images/banner.svg" fill alt="banner" /> */}

        <Wrapper className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 md:gap-16 gap-8">
          {NOTES.map((note) => (
            <div
              key={note.title}
              className="z-10 space-y-4 flex flex-col h-auto items-center hover:bg-grad-2/10 p-4 rounded-md transition-all duration-300 ease-in"
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
            </div>
          ))}
        </Wrapper>
      </section>

      {/* ROAD MAP */}
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
        <div className="absolute top-48 right-5 blur-[140px] size-[200px] md:top-20 md:left-5 bg-gradient-to-tr from-grad-2 to-70% via-grad-1 to-grad-3 md:blur-[170px] md:size-2/6 rounded-full -z-10" />
      </section>

      <section id="contact" className="py-20 relative z-10">
        <Wrapper>
          <Separator />
          <h1 className="page-heading text-center">Contact</h1>

          <div className="flex w-full justify-center h-auto">
            <ContactForm />
          </div>
        </Wrapper>
        <div className="absolute top-48 right-5 blur-[140px] size-[200px] md:top-20 md:right-5 bg-gradient-to-tr from-grad-1 to-70% via-grad-3 to-grad-2 md:blur-[170px] md:size-2/6 rounded-full -z-10" />
      </section>
    </>
  );
}
