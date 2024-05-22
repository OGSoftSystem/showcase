"use client";

import { cn } from "@/lib/utils";
import { NAV_LINKS } from "../../constants";
import Link from "next/link";
import { ComponentProps } from "react";
import { usePathname } from "next/navigation";

const NavItems = ({ className }: { className: string }) => {
  return (
    <nav className={className}>
      <div className="space-x-8">
        {NAV_LINKS.slice(0, NAV_LINKS.length - 2).map((link) => (
          <NavLink key={link.label} href={link.url}>
            {link.label}
          </NavLink>
        ))}
      </div>

      <div className="space-x-8 flex">
        {NAV_LINKS.slice(NAV_LINKS.length - 2).map((link) => (
          <NavLink key={link.label} href={link.url}>
            <div className="flex w-full">
              {/* <span>{link.label}</span> */}
              <div>{link.Icon && <link.Icon size={22} />}</div>
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
        "uppercase text-muted-foreground hover:text-ring focus-visible:text-ring font-semibold",
        {
          "text-ring": pathname == props.href,
        }
      )}
    >
      {props.children}
    </Link>
  );
}
