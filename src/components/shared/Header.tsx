import Wrapper from "./Wrapper";
import NavItems from "./NavItems";
import { Separator } from "../ui/separator";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header>
      <Wrapper>
        <div className="flex items-center justify-between h-16">
          <div className="w-32">LOGO</div>
          {/* Desktop */}
          <NavItems className="md:flex gap-4 items-center justify-between w-full hidden" />

          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
        <Separator />
      </Wrapper>
    </header>
  );
}
