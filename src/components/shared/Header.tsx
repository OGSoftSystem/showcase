import Wrapper from "./Wrapper";
import { AdminNavItems, NavItems } from "./NavItems";
import { AdminMobileNav, MobileNav } from "./MobileNav";
import Logo from "./Logo";
import Admin from "./Admin";
import { getSession } from "@/lib/actions/auth.actions";
import { findUserById } from "@/lib/actions/user.actions";
import { notFound } from "next/navigation";
import { UserType } from "@/types";

export async function Header() {
  const session = await getSession();
  if (session.userId == undefined) return notFound();
  const user: UserType = await findUserById(session.userId);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <Wrapper>
        <div className="w-full flex items-center justify-between h-16 mmd:h-auto">
          <Logo width={32} height={32} className="object-contain mmd:hidden" />

          {/* Desktop */}
          <div className="flex items-center justify-center w-full">
            <NavItems />
          </div>

          <Admin className="hidden mmd:flex mmd:flex-col" user={user} />

          <div className="mmd:hidden">
            <MobileNav user={user} />
          </div>
        </div>
      </Wrapper>
    </header>
  );
}

export async function AdminHeader() {
  const session = await getSession();
  if (session.userId == undefined) return notFound();
  const user: UserType = await findUserById(session.userId);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <Wrapper>
        <div className="w-full flex items-center justify-between h-16 md:h-auto">
          <Logo width={32} height={32} className="object-contain md:hidden" />

          {/* Desktop */}
          <div className="flex items-center justify-center w-full">
            <AdminNavItems />
          </div>

          <Admin className="hidden md:flex md:flex-col" user={user} />

          <div className="md:hidden">
            <AdminMobileNav user={user} />
          </div>
        </div>
      </Wrapper>
    </header>
  );
}
