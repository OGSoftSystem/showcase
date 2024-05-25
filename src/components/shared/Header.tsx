import Wrapper from "./Wrapper";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <Wrapper>
        <div className="w-full flex items-center justify-between h-16 md:h-auto">
          <Image src='/assets/icons/logo1.png' width={30} height={30} alt="site_logo" className="object-contain md:hidden" />

          {/* Desktop */}
          <div className="flex items-center justify-center w-full">

          <NavItems />
          </div>

          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </Wrapper>
    </header>
  );
}
