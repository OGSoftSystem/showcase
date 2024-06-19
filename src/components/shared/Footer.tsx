import { ReactNode } from "react";
import { Separator } from "../ui/separator";
import Wrapper from "./Wrapper";
import { FaXTwitter, FaTelegram, FaInstagram } from "react-icons/fa6";
import Logo from "./Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <Wrapper>
        <Separator />
        <div className="flex items-center justify-between py-4">
          <div className="flex space-x-2 items-center">
            <Logo width={50} height={50} />
            <p className="font-bold">pLUSD</p>
          </div>

          <div className="flex space-x-2">
            <IconWrapper href="https://x.com/pulseliquity">
              <FaXTwitter size={15} />
            </IconWrapper>
            <IconWrapper href="https://instagram.com/pulseliquity">
              <FaTelegram size={15} />
            </IconWrapper>
            <IconWrapper href="https://instagram.com/pulseliquity">
              <FaInstagram size={15} />
            </IconWrapper>
          </div>
        </div>
      </Wrapper>
      <div className="text-center bg-black py-2">
        @2024 pLUSD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

function IconWrapper({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <div className="size-8 rounded-full flex items-center justify-center bg-grad-2/60 hover:bg-grad-2 text-muted-foreground hover:text-white ease-in duration-300 hover:animate-pulse cursor-pointer">
      <Link href={href} target="_blank">
        {children}
      </Link>
    </div>
  );
}
