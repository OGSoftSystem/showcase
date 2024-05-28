import { NavLink } from "./NavItems";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { UserType } from "@/types";

const Admin = ({
  className,
  user,
}: {
  className: string;
  user: UserType;
}) => {
  return (
    <NavLink href={`/admin/${user._id}/edit`}>
      <div className={cn("", className)} >
        <div className="relative size-7 rounded-full overflow-hidden">
          <Image src="/assets/images/mela.png" alt="user" fill />
        </div>

        <p className="text-sm md:text-[0.55rem] lg:[0.75rem] hidden md:block">
          {user.username}
        </p>
      </div>
    </NavLink>
  );
};

export default Admin;
