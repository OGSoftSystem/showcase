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

export const BurnPageVideo = () =>{
    return (
      <>
        <Iframe
          url={burnVideoLink}
          // width="540px"
          // height="300px"
          id=""
          className="w-[100%] h-[200px] md:w-[400px] md:h-[250px] lg:w-[540px] lg:h-[300px]"
          display="block"
          position="relative"
        />
      </>
    );
}
