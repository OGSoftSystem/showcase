"use client";

import { cn } from "@/lib/utils";
import { NAV_LINKS } from "../../constants";
import Link from "next/link";
import { ComponentProps } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const NavItems = ({ className }: { className?: string }) => {
  return (
    <nav className={cn('hidden md:flex items-center justify-center w-fit shadow-lg rounded-[2rem] py-2 px-8 mt-2 bg-[#21104b]',className)}>
      <Logo width={40} height={40} className="mr-4" />

      <div className="flex items-center">
        {NAV_LINKS.map((link) => (
          <NavLink key={link.label} href={link.url}>
            
            <div className="flex flex-col items-center">
                <span>{link.Icon && <link.Icon size={22} />}</span>
                <p className="text-sm md:text-[0.55rem] lg:[0.75rem] lg:block"> {link.label}</p>
            </div>

          </NavLink>
        ))}
      </div>

    
    </nav>
  );
};

export default NavItems;

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
