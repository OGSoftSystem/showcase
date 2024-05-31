import Wrapper from "./Wrapper";
import { AdminNavItems, NavItems } from "./NavItems";
import { AdminMobileNav, MobileNav } from "./MobileNav";
import Logo from "./Logo";
import Admin from "./Admin";
import { getSession, signOut } from "@/lib/actions/auth.actions";
import { findUserById } from "@/lib/actions/user.actions";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { signIn } from "../../../auth";
import { FaGoogle } from "react-icons/fa6";

export async function Header() {
  const session = await getSession();
  const user: UserType = await findUserById(session.userId as string);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <Wrapper>
        <div className="w-full flex items-center justify-between h-16 mmd:h-auto">
          <Logo width={32} height={32} className="object-contain mmd:hidden" />

          {/* Desktop */}
          <div className="flex items-center justify-center w-full">
            <NavItems />
          </div>

          <Pop user={user} isLoggedIn={session.isLoggedIn} />

          <div className="mmd:hidden ml-4">
            <MobileNav />
          </div>
        </div>
      </Wrapper>
    </header>
  );
}

export async function AdminHeader() {
  const session = await getSession();
  const user: UserType = await findUserById(session.userId as string);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <Wrapper>
        <div className="w-full flex items-center justify-between h-16 md:h-auto">
          <Logo width={32} height={32} className="object-contain md:hidden" />

          {/* Desktop */}
          <div className="flex items-center justify-center w-full">
            <AdminNavItems />
          </div>

          <Pop user={user} isLoggedIn={session.isLoggedIn} />

          <div className="md:hidden ml-4">
            <AdminMobileNav />
          </div>
        </div>
      </Wrapper>
    </header>
  );
}

function Pop({ user, isLoggedIn }: { user: UserType; isLoggedIn: boolean }) {
  return (
    <div className="flex items-center space-x-2">
      <>
        {isLoggedIn && user._id ? (
          <Popover>
            <PopoverTrigger>
              <Admin />
            </PopoverTrigger>
            <PopoverContent className="w-fit flex flex-col items-center bg-grad-2/20">
              <form action={signOut}>
                <Button type="submit" variant="ghost">
                  Sign out
                </Button>
              </form>
              <Link
                href="/"
                className={`text-xs ${buttonVariants({ variant: "ghost" })}`}
              >
                Edit Profile
              </Link>
            </PopoverContent>
          </Popover>
        ) : (
          <Button
            asChild
            variant="ghost"
            className="bg-grad-2/20 rounded-full text-xs  text-white"
          >
            <Link href="/auth/sign-in">Sign in</Link>
          </Button>
        )}
      </>

      <>
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <Button
            type="submit"
            variant="ghost"
            className="size-10 rounded-full bg-grad-1/30"
          >
            <FaGoogle />
          </Button>
        </form>
      </>
    </div>
  );
}
