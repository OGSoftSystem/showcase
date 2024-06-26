import Image from "next/image";
import { cn } from "@/lib/utils";

const Admin = ({
  className,
  imageUrl,
}: {
  className?: string;
  imageUrl?: string;
}) => {
  return (
    <div className={cn("", className)}>
      <div className="relative size-[2rem] md:size-[2.3rem] rounded-full overflow-hidden">
        <Image src={imageUrl as string} alt="user" fill />
      </div>
    </div>
  );
};

export default Admin;
