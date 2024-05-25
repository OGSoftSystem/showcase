import { ReactNode } from "react";
import { Separator } from "../ui/separator";
import Wrapper from "./Wrapper";
import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer>
      <Wrapper>
        <Separator />
        <div className="flex items-center justify-between py-4">

          <div>
            <Logo width={50} height={50}/>
          </div>

          <div className="flex space-x-2">
            <IconWrapper>
              <FaXTwitter size={15} />
            </IconWrapper>
            <IconWrapper>
              <FaFacebook size={15} />
            </IconWrapper>
            <IconWrapper>
              <FaInstagram size={15} />
            </IconWrapper>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;

function IconWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="size-8 rounded-full flex items-center justify-center bg-grad-2/60 hover:bg-grad-2 text-muted-foreground hover:text-white ease-in duration-300 hover:animate-pulse cursor-pointer">
      {children}
    </div>
  );
}
