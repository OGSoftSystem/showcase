import { CiMenuKebab } from "react-icons/ci";
import { NavLink } from "./NavItems";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { NAV_LINKS } from "../../constants";

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
            {NAV_LINKS.slice(0, NAV_LINKS.length - 2).map((link) => (
              <SheetClose key={link.label} asChild>
                <NavLink href={link.url}>{link.label}</NavLink>
              </SheetClose>
            ))}
          </div>

          <div className="space-x-4 flex">
            {NAV_LINKS.slice(NAV_LINKS.length - 2).map((link) => (
              <SheetClose key={link.label} asChild>
                <NavLink href={link.url}>
                  <div className="flex w-full">
                    {/* <span>{link.label}</span> */}
                    <div>{link.Icon && <link.Icon size={22} />}</div>
                  </div>
                </NavLink>
              </SheetClose>
            ))}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
