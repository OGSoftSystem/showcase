import { CiMenuKebab } from "react-icons/ci";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { NAV_LINKS } from "../../constants";
import Logo from "./Logo";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <SheetHeader>
          <CiMenuKebab />
        </SheetHeader>
      </SheetTrigger>
      <SheetContent>
        <nav className="flex flex-col justify-between h-full md:hidden">
          <div className="flex flex-col space-y-6 mt-20">
            {NAV_LINKS.map((link) => (
              <SheetClose key={link.label} asChild>
                <div className="flex space-x-4 items-center">
                <span>{link.Icon && <link.Icon size={22} />}</span>
                <p className="text-sm md:text-[0.55rem] lg:[0.75rem] lg:block"> {link.label}</p>
            </div>
              </SheetClose>
            ))}
          </div>

          <div className="space-x-4 flex items-center">
          <Logo width={30} height={30} className="md:hidden"/>
          <p className="text-muted-foreground text-sm">Company name</p>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
