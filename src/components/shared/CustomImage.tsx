"use client";

import Image from "next/image";
import { useState } from "react";

export const CustomImage = ({ ext, local }: { ext: string; local: string }) => {
  const [isError, setIsError] = useState(false);
  return (
    <>
      {!isError ? (
        <Image
          src={ext && !isError ? ext : local}
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
