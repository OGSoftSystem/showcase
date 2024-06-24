import { MotionDiv } from "@/components/shared/Motions";
import { burnVideoLink } from "@/constants";
import React from "react";
import Iframe from "react-iframe";

export const ExternalSite = () => {
  return (
    <>
      <Iframe
        url={"https://gopulse.com/token/pLUSD"}
        width="100%"
        height="500px"
        id=""
        className=""
        display="block"
        position="relative"
        allowFullScreen
      />
    </>
  );
};

export const BurnPageVideo = () => {
  return (
    <div className="relative w-[100%] h-[200px] md:w-[400px] md:h-[250px] lg:w-[540px] lg:h-[300px]">
      <Iframe
        url={burnVideoLink}
        // width="540px"
        // height="300px"
        id=""
        className="w-[100%] h-[200px] md:w-[400px] md:h-[250px] lg:w-[540px] lg:h-[300px]"
        display="block"
        position="relative"
      />

      <MotionDiv
        whileInView={{ x: [200, 0] }}
        transition={{ duration: 0.3, type: "spring", damping: 3 }}
        className="absolute top-2 group-hover:-top-2 group-hover:-right-2 ease-in duration-300 right-2 w-[100%] h-[200px] md:w-[400px] md:h-[250px] lg:w-[540px] lg:h-[300px] -z-10 bg-grad-3/30"
      />
    </div>
  );
};
