import Wrapper from "@/components/shared/Wrapper";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { BurnPageVideo } from "./_components/ExternalSite";
import { Metadata } from "next";
import PageHeading from "@/components/shared/PageHeading";
import { MotionDiv } from "@/components/shared/Motions";
import { AnimatedCount } from "./_components/AnimatedCount";
import { CustomImage } from "@/components/shared/CustomImage";
// import { cache } from "@/lib/cache";
import { findBurnValue } from "@/lib/actions/burn.actions";

// ETHERS
// import { ethers } from "ethers";
// import contractABI from "../../../contract-abi.json";

export const metadata: Metadata = {
  title: "Burn",
};

const getTokenBurnDetails = async () => {
  try {
    const res = await fetch(
      `https://api.scan.pulsechain.com/api/v2/tokens/${process.env.CONTRACT_ADDRESS}/holders`
    );
    const data = await res.json();

    if (!data) console.log("Error fetching token details.");

    return {
      amountBurned: data.items[0].value,
      totalSupply: data.items[0].token.total_supply,
    };
  } catch (error) {
    throw error;
  }
};

// Uncomment this to use cache

// Cache API response for 24hrs
// const getTokenDetail = cache(
//   async () => {
//     return await getTokenBurnDetails();
//   },
//   ["getTokenDetail"],
//   { revalidate: 60 * 30 }
// );

// Uncomment to fetch via infura

// const address369 = "0x0000000000000000000000000000000000000369";

// async function getTokenBalance() {
//   const network = process.env.INFURA_NETWORK;
//   const provider = new ethers.InfuraProvider(
//     network,
//     process.env.INFURA_API_KEY
//   );

//   const tokenContract = new ethers.Contract(
//     process.env.CONTRACT_ADDRESS as string,
//     contractABI,
//     provider
//   );

//   try {
//     const addressBalance = await tokenContract.balanceOf(address369);
//     const decimals = await tokenContract.decimals();
//     const adjustedBalance = ethers.formatUnits(addressBalance, decimals);

//     return { xx369Balance: adjustedBalance };
//   } catch (error) {
//     throw error;
//   }
// }

async function getBurnPercentage() {
  const [data1, data2] = await Promise.all([
    getTokenBurnDetails(),
    findBurnValue(),
    // getTokenBalance(),
  ]);

  return {
    amountBurned: data1.amountBurned,
    totalSupply: data1.totalSupply,
    address369: Number(data2[0].value) || 0,
    // xx369Balance: data3.xx369Balance || 0,
  };
}

const BurnPage = async () => {
  const { amountBurned, totalSupply, address369 } = await getBurnPercentage();

  // const xx369Balance = await getTokenBalance();
  // console.log(xx369Balance);

  const extImage =
    "https://crapforcrypto.com/wp-content/uploads/2021/09/Pulse-Wallpaper-28-.jpg";

  const burnPercentage = (amountBurned / totalSupply) * 100;

  return (
    <>
      <section className="pt-16 md:pt-20">
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

              <MotionDiv
                whileHover={{
                  scale: 1.05,
                  transition: {
                    type: "spring",
                    duration: 3,
                    damping: 3,
                  },
                }}
                className="self-center lg:self-start"
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
              <CustomImage
                externalUrl={extImage}
                local="/assets/icons/logo1.png"
              />

              <div className="w-[20rem] h-[20rem] md:w-[18rem] lg:w-[30rem] lg:h-[30rem] absolute bg-grad-2/30 -z-10 -top-4 -right-4" />
            </div>
          </div>
        </Wrapper>
        <Separator />
      </section>

      <section>
        <Wrapper className="py-10" id="others">
          <div className="w-full mb-20">
            <h1 className="page-heading-2 my-4 mb-10">We are currently at</h1>
            {/* <ExternalSite /> */}
            <div className="w-full flex justify-center space-x-2">
              <AnimatedCount end={burnPercentage + address369} />
            </div>
          </div>

          <Separator />
          <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center my-20 gap-10 group">
            <Link
              href={
                "https://www.youtube.com/embed/PxWh__9ttN4?si=I4ySVBvZ0QYieG2d"
              }
              className="page-heading-2 group-hover:text-grad-1"
            >
              How StayBULL works and how to burn pLUSD
            </Link>

            <BurnPageVideo />
          </div>
          <Separator />

          <div className="w-full flex flex-col md:flex-row-reverse md:justify-between md:items-center gap-10 group my-20">
            <div>
              <Link
                href={"https://staybull.giffordwear.win/"}
                target="_blank"
                className="page-heading-2 group-hover:text-grad-1"
              >
                Connect your wallet to use StayBull.
              </Link>
            </div>

            <div className="relative w-full h-[200px] md:w-[480px] md:h-[300px]">
              <div className="w-full h-[200px] md:w-[480px] md:h-[300px] relative overflow-hidden">
                <Link
                  href={"https://staybull.giffordwear.win/"}
                  target="_blank"
                >
                  <Image
                    src="/assets/images/stay_bull.png"
                    alt="stay_bull_page"
                    fill
                    className="object-contain"
                  />
                </Link>
              </div>

              <MotionDiv
                whileInView={{ x: [-200, 0] }}
                transition={{ duration: 0.3, type: "spring", damping: 3 }}
                className="absolute top-2 group-hover:-top-2 right-1 group-hover:-right-2 ease-in duration-300 w-[93%] h-[200px] md:w-[480px] md:h-[300px] -z-10 bg-grad-3/30"
              />
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default BurnPage;
