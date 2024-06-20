import Wrapper from "./Wrapper";
import { AdminNavItems, NavItems } from "./NavItems";
import { AdminMobileNav, MobileNav } from "./MobileNav";
import Logo from "./Logo";
import Admin from "./Admin";
import { findUserById } from "@/lib/actions/user.actions";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { auth } from "@/auth";
import { handleSignOut } from "@/lib/actions/nextAuth5.actions";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { MdAdminPanelSettings } from "react-icons/md";
import { ExitIcon } from "@radix-ui/react-icons";
import { RiProfileFill } from "react-icons/ri";

export async function Header() {
  const session = await auth();
  const user: UserType = await findUserById(session?.user.id as string);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <Wrapper>
        <div className="w-full flex items-center justify-between h-16 mmd:h-auto">
          <Logo width={32} height={32} className="object-contain mmd:hidden" />

          {/* Desktop */}
          <div className="flex items-center justify-center w-full">
            <NavItems />
          </div>

          {/* <Pop user={user} /> */}

          <div className="mmd:hidden ml-4">
            <MobileNav />
          </div>
        </div>
      </Wrapper>
    </header>
  );
}

export async function AdminHeader() {
  const session = await auth();
  const user: UserType = await findUserById(session?.user.id as string);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <Wrapper>
        <div className="w-full flex items-center justify-between h-16 md:h-auto">
          <Logo width={32} height={32} className="object-contain md:hidden" />

          {/* Desktop */}
          <div className="flex items-center justify-center w-full">
            <AdminNavItems />
          </div>

          <Pop user={user} />

          <div className="md:hidden ml-4">
            <AdminMobileNav />
          </div>
        </div>
      </Wrapper>
    </header>
  );
}

function Pop({ user }: { user: UserType }) {
  return (
    <div className="flex items-center space-x-2">
      <>
        {user._id ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Admin user={user} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="">
              <DropdownMenuItem>
                <div className="flex items-center space-x-4">
                  <RiProfileFill />
                  <Link href={`/profile/${user._id}/edit`} className="text-xs text-white font-light">
                    Profile
                  </Link>
                </div>
              </DropdownMenuItem>
              
              {user.role === "admin" && (
                <DropdownMenuItem>
                  <div className="flex items-center space-x-4">
                    <MdAdminPanelSettings />
                    <Link
                      href="/admin"
                      className="text-xs text-white font-light"
                    >
                      Admin
                    </Link>
                  </div>
                </DropdownMenuItem>
              )}

              <DropdownMenuSeparator className="text-grad-2" />

              <DropdownMenuItem>
                <form action={handleSignOut}>
                  <div className="flex items-center">
                    <ExitIcon />
                    <Button
                      type="submit"
                      variant="ghost"
                      className="text-xs text-white font-light"
                    >
                      Sign out
                    </Button>
                  </div>
                </form>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button
            asChild
            variant="ghost"
            className="bg-grad-2/20 rounded-full text-xs text-white"
          >
            <Link href="/auth/sign-in">Sign in</Link>
          </Button>
        )}
      </>
    </div>
  );
}
