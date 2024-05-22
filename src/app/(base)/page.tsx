import DaysFilter from "@/components/shared/DaysFilter";
import FaQAccordion from "@/components/shared/FaqAccordion";
import RoadMap from "@/components/shared/RoadMap";
import SearchInput from "@/components/shared/SearchInput";
import Wrapper from "@/components/shared/Wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { NOTES } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* <section className="my-10">
        <Wrapper className="flex flex-col gap-10">
          <SearchInput />
        </Wrapper>
      </section>


      <section className="my-10">
        <Wrapper className="flex flex-col md:flex-row items-center md:justify-between">
          <p className="text-xl font-semibold text-muted-foreground">
            Filter Moments
          </p>
          <DaysFilter />
        </Wrapper>
      </section>

      <section className="my-20">
        <Wrapper>
          <div className="flex gap-2">
            <div className="size-10 rounded-full bg-ring" />
            <div>
              <h1>PLS</h1>
              <p>Pulse</p>
            </div>
          </div>
        </Wrapper>
      </section> */}

      <section className="mt-10 xl:my-36">
        <Wrapper className="flex flex-col items-center h-auto justify-center">
          <h1 className="text-5xl leading-[1.2] md:leading-[1.3] md:text-8xl lg:leading-[1] xl:text-[9rem] font-bold text-accent-foreground text-center font-inter max-w-prose">
            Liquity on Pulsechain.
          </h1>
          <br />
          <h1 className="text-2xl leading-3 md:leading-5 md:text-4xl font-bold text-ring text-center lg:leading-tight font-inter">
            The King of pStables.
          </h1>
          <p className="md:text-lg lg:text-xl font-light text-muted-foreground mt-4 lg:mt-2">
            Join The Future Stablecoin Movement.
          </p>

          <div className="mt-12">
            <Button size="lg" className="btn" asChild>
              <Link href="https://piteas.io" target="_blank">
                Buy pLUSD
              </Link>
            </Button>
          </div>
        </Wrapper>
      </section>

      <section className="my-20">
        <Wrapper>
          <Separator />
          <h1 className="page-heading">Learn More</h1>
          <div className="w-full h-auto flex justify-center">
            <p className="md:text-justify p-text max-w-4xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              officia qui minima quod. Perferendis minus, pariatur obcaecati
              distinctio nulla error quod velit eveniet molestias, adipisci
              ipsam? Vero quidem sed nemo unde dicta adipisci repellendus
              sapiente placeat nulla magnam? Earum labore asperiores cumque non
              quae eveniet assumenda, vero nulla commodi quasi maxime quisquam
              inventore dolorem blanditiis a, provident perspiciatis quaerat
              nobis ipsum dignissimos culpa illum aspernatur cum? Doloribus
              optio debitis quae ipsum, est ex tempora quidem voluptatum amet
              impedit, eos rerum veritatis sunt eveniet eius recusandae animi
              totam fugit eum voluptatibus qui pariatur nostrum? Dolores beatae
              reprehenderit explicabo? Sapiente doloremque iure placeat quaerat
              non nesciunt perspiciatis maxime, aliquid fuga dolorum rerum
              veritatis ab distinctio eaque reiciendis aut provident inventore
              adipisci labore? Quasi, sapiente est. Velit, fugit totam. Dicta
              magnam maxime quidem temporibus magni veniam? Expedita fuga atque
              iusto ducimus maiores, quasi aut distinctio. Quisquam suscipit.
            
            </p>
          </div>
        </Wrapper>
      </section>

      <section className="relative w-full my-20">
        {/* <Image src="/assets/images/banner.svg" fill alt="banner" /> */}

        <Wrapper className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NOTES.map((note) => (
            <Card key={note.title} className="z-10">
              <CardHeader>
                <CardTitle className="mb-4 text-white font-semibold text-2xl">
                  {note.title}
                </CardTitle>
                <Separator />
              </CardHeader>
              <CardContent className="p-text font-light">
                {note.text}
              </CardContent>
            </Card>
          ))}
        </Wrapper>
      </section>

      <section id="road-map" className="my-20">
        <Wrapper>
          <Separator />
          <h1 className="page-heading">Roadmaps</h1>

          <div className="flex flex-col justify-center items-center text-muted-foreground text-base pb-8 sm:text-lg">
            <RoadMap defaultColor="bg-ring" />
          </div>
        </Wrapper>
      </section>

      <section id="faq" className="my-20">
        <Wrapper>
          <Separator />
          <h1 className="page-heading">Faq</h1>

          <div className="flex w-full justify-center h-auto">
            <FaQAccordion />
          </div>
        </Wrapper>
      </section>
    </>
  );
}
