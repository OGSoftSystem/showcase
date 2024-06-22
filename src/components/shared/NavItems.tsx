"use client";

import { cn } from "@/lib/utils";
import { NAV_LINKS } from "../../constants";
import Link from "next/link";
import { ComponentProps } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export const NavItems = ({ className }: { className?: string }) => {
  return (
    <nav
      className={cn(
        "hidden md:flex items-center justify-center w-fit h-auto shadow-lg rounded-[2rem] py-2 px-8 mt-2 bg-[#21104b]",
        className
      )}
    >
      <Logo width={30} height={30} className="mr-4" />

      <div className="flex items-center">
        {NAV_LINKS.map((link) => (
          <NavLink key={link.label} href={link.url}>
            <div className="flex flex-col items-center">
              <span>{link.Icon && <link.Icon size={20} />}</span>
              <p className="text-sm md:text-[0.55rem] lg:[0.75rem]">
                {" "}
                {link.label}
              </p>
            </div>
          </NavLink>
        ))}

      </div>

    </nav>
  );
};

export const AdminNavItems = ({ className }: { className?: string }) => {
  return (
    <nav
      className={cn(
        "hidden md:flex items-center justify-center w-fit h-auto shadow-lg rounded-[2rem] py-2 px-8 mt-2 bg-[#21104b]",
        className
      )}
    >
      <Logo width={30} height={30} className="mr-4" />

      <div className="flex items-center">
        {NAV_LINKS.slice(0,1).map((link) => (
          <NavLink key={link.label} href={link.url}>
            <div className="flex flex-col items-center">
              <span>{link.Icon && <link.Icon size={20} />}</span>
              <p className="text-sm md:text-[0.55rem] lg:[0.75rem]">
                {" "}
                {link.label}
              </p>
            </div>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};



export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      className={cn(
        "uppercase px-4 h-10 text-white hover:text-ring focus-visible:text-ring font-light",
        {
          "text-ring": pathname == props.href,
        }
      )}
    >
      {props.children}
    </Link>
  );
}
