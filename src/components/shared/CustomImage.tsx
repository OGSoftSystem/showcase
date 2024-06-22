"use client";

import Image from "next/image";
import { useState } from "react";

export const CustomImage = ({ externalUrl, local }: { externalUrl: string; local: string }) => {
  const [isError, setIsError] = useState(false);
  return (
    <>
      {!isError ? (
        <Image
          src={externalUrl && !isError ? externalUrl : local}
          fill
          alt="banner"
          className="object-center object-cover"
          onError={() => setIsError(true)}
        />
      ) : (
        <Image
          src={local}
          fill
          alt="banner"
          className="object-center object-cover"
        />
      )}
    </>
  );
};
