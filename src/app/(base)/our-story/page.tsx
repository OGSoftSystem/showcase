import PageHeading from "@/components/shared/PageHeading";
import Wrapper from "@/components/shared/Wrapper";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Story",
};
const OurStoryPage = () => {
  const paragraph = "p-text max-w-prose md:text-justify";
  return (
    <section>
      <Wrapper className="py-20">
        <PageHeading
          pageTitle="Our Story"
          pageSubtitle="A little bit on our journey."
        />
        <div className="w-[100%] h-[200px] md:h-[400px] relative overflow-hidden">
          <Image
            src="https://ll-blog-dev.s3.ap-southeast-2.amazonaws.com/wp-content/uploads/2023/03/19052842/Tellor-Oracle-TRB-Token-1024x576.webp"
            fill
            alt="Tellor"
            className="object-center object-cover"
          />
        </div>

        <h1 className="page-heading">
          Bringing Tellor&apos;s Decentralized Oracle to PulseChain.
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className={paragraph}>
              We are a group of dedicated community members from the PulseChain
              ecosystem who set out to help solve one of the biggest challenges
              facing the chain - ensuring true and reliable price feeds for the
              ecosystem&apos;s native assets like pLUSD. When PulseChain forked
              from Ethereum, the existing Tellor oracle system was brought over
              but it was not functioning properly. The inaccurate price data it
              was providing led to issues like inflation of the pLUSD stablecoin
              price. This posed a major risk to PulseChain&apos;s growth and
              health.
            </p>
            <br />

            <p className={paragraph}>
              As passionate believers in PulseChain&apos;s mission of
              decentralization and financial freedom, we couldn&apos;t stand by
              and watch these problems persist. We formed a team and dedicated
              countless hours to studying Tellor&apos;s technical documentation,
              running tests, and troubleshooting every aspect of the
              protocol.Through sheer determination and collaborative effort, we
              were able to identify and resolve the underlying issues preventing
              Tellor from operating as designed - a truly decentralized and
              permissionless oracle system capable of providing accurate price
              feeds sourced from a distributed network of stakers.
            </p>
          </div>

          <div>
            <p className={paragraph}>
              Our work didn&apos;t just fix pLUSD&apos;s price stability issues
              - it unleashed the full potential of Tellor as a powerful pricing
              oracle for any asset or data feed required by projects building on
              PulseChain. Having access to reliable, manipulation-resistant
              price feeds is critical for next-generation decentralized
              applications. As one of the most decentralized Layer 1 blockchains
              ever created, PulseChain&apos;s community-led ethos perfectly
              aligns with Tellor&apos;s core principle of an oracle &quot;By the
              People, For the People&quot;. Just as pLUSD has no admin keys,
              Tellor has no single controlling party - a truly decentralized
              system.
            </p>
            <br />
            <p className={paragraph}>
              Our mission moving forward is to foster and grow Tellor&apos;s
              ecosystem on PulseChain. We believe uncompromising data integrity
              provided through decentralized oracles will become increasingly
              vital for blockchain&apos;s future. PulseChain, powered by the
              fixed Tellor system, can lead the way for this next era of open,
              transparent, and uncensored data availability. What started as a
              grassroots effort to solve pLUSD&apos;s pricing issue has evolved
              into a critical piece of infrastructure for PulseChain&apos;s
              long-term success. We are proud to have helped bring Tellor&apos;s
              vision to PulseChain, where freedom and the right to true and open
              data reign supreme.
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default OurStoryPage;
