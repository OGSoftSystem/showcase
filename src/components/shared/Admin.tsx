import Image from "next/image";
import { cn } from "@/lib/utils";

const Admin = ({
  className,
  user,
}: {
  className?: string;
  user?: UserType;
}) => {
  return (
    <div className={cn("", className)}>
      <div className="relative size-[2.3rem] rounded-full overflow-hidden">
        <Image src={user?.imageUrl as string} alt="user" fill />
      </div>
    </div>
  );
};

export default Admin;
