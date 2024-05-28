import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Logo = ({
  className,
  width,
  height,
}: {
  className?: string;
  width: number;
  height: number;
}) => {
  return (
    <Link href="/">
      <Image
        src="/assets/icons/logo1.png"
        width={width}
        height={height}
        alt="site_logo"
        className={cn("object-contain shrink-0", className)}
        priority
      />
    </Link>
  );
};

export default Logo;
