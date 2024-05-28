"use client";

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
import Admin from "./Admin";
import { NavLink } from "./NavItems";
import { UserType } from "@/types";
import { useState } from "react";

export const MobileNav = ({ user }: { user: UserType }) => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet onOpenChange={() => setOpen(!open)} open={open}>
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
                <NavLink href={link.url}>
                  <div className="flex space-x-4 items-center">
                    <span>{link.Icon && <link.Icon size={22} />}</span>
                    <p className="text-sm md:text-[0.55rem] lg:[0.75rem] lg:block">
                      {" "}
                      {link.label}
                    </p>
                  </div>
                </NavLink>
              </SheetClose>
            ))}
          </div>

          <div className="space-x-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Logo width={30} height={30} className="md:hidden" />
              <p className="text-sm uppercase">Company name</p>
            </div>

            <div onClick={() => setOpen((p) => !p)}>
              <Admin className="flex flex-col items-center" user={user} />
            </div>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};


export const AdminMobileNav = ({ user }: { user: UserType }) => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet onOpenChange={() => setOpen(!open)} open={open}>
      <SheetTrigger>
        <SheetHeader>
          <CiMenuKebab />
        </SheetHeader>
      </SheetTrigger>
      <SheetContent>
        <nav className="flex flex-col justify-between h-full md:hidden">
          <div className="flex flex-col space-y-6 mt-20">
            {NAV_LINKS.slice(0,1).map((link) => (
              <SheetClose key={link.label} asChild>
                <NavLink href={link.url}>
                  <div className="flex space-x-4 items-center">
                    <span>{link.Icon && <link.Icon size={22} />}</span>
                    <p className="text-sm md:text-[0.55rem] lg:[0.75rem] lg:block">
                      {" "}
                      {link.label}
                    </p>
                  </div>
                </NavLink>
              </SheetClose>
            ))}
          </div>

          <div className="space-x-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Logo width={30} height={30} className="md:hidden" />
              <p className="text-sm uppercase">Company name</p>
            </div>

            <div onClick={() => setOpen((p) => !p)}>
              <Admin className="flex flex-col items-center" user={user} />
            </div>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

