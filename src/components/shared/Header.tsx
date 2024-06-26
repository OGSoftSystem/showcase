"use client";
import Wrapper from "./Wrapper";
import { AdminNavItems, NavItems } from "./NavItems";
import { AdminMobileNav, MobileNav } from "./MobileNav";
import Logo from "./Logo";
import Admin from "./Admin";
import { findUserById } from "@/lib/actions/user.actions";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { useSession } from "next-auth/react";
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
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import useUser from "@/hooks/useUser";

export function Header() {
  const [showArrowUp, setShowArrowUp] = useState(false);
  const backToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleScroll = useCallback(() => {
    if (window.scrollY > 100) {
      setShowArrowUp(true);
    } else {
      setShowArrowUp(false);
    }
  }, [setShowArrowUp]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <Wrapper>
          <div className="w-full flex items-center justify-between h-16 md:h-auto">
            <Logo width={32} height={32} className="object-contain md:hidden" />

            {/* Desktop */}
            <div className="flex items-center justify-center w-full">
              <NavItems />
            </div>

            <Pop />

            <div className="md:hidden ml-4">
              <MobileNav />
            </div>
          </div>
        </Wrapper>
      </header>

      <div
        className={cn("hidden", {
          "fixed bottom-[20px] right-[15px] w-10 h-10 rounded-full bg-grad-1 hover:bg-grad-2 flex items-center justify-center animate-slide-left z-30 opacity-[0.9] cursor-pointer":
            showArrowUp,
        })}
        onClick={() => backToTop()}
      >
        <p className="text-white">&#8679;</p>
      </div>
    </>
  );
}

export async function AdminHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <Wrapper>
        <div className="w-full flex items-center justify-between h-16 md:h-auto">
          <Logo width={32} height={32} className="object-contain md:hidden" />

          {/* Desktop */}
          <div className="flex items-center justify-center w-full">
            <AdminNavItems />
          </div>

          <Pop />

          <div className="md:hidden ml-4">
            <AdminMobileNav />
          </div>
        </div>
      </Wrapper>
    </header>
  );
}

function Pop() {
  const { user } = useUser();

  return (
    <div className="flex items-center space-x-2">
      <>
        {
          user._id && user.role === "admin" && (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Admin imageUrl={user.imageUrl} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="">
                <DropdownMenuItem>
                  <div className="flex items-center space-x-4">
                    <RiProfileFill />
                    <Link
                      href={`/profile/${user._id}/edit`}
                      className="text-xs text-white font-light"
                    >
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
          )
          // : (
          //   <Button
          //     asChild
          //     variant="ghost"
          //     className="bg-grad-2/20 rounded-full text-xs text-white"
          //   >
          //     <Link href="/auth/sign-in">Sign in</Link>
          //   </Button>
          // )
        }
      </>
    </div>
  );
}
