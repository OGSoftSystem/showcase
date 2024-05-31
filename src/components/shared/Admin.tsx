import Image from "next/image";
import { cn } from "@/lib/utils";

const Admin = ({ className }: { className?: string;}) => {
  return (
    <div className={cn("", className)}>
      <div className="relative size-[2.3rem] rounded-full overflow-hidden">
        {/* user.imageUrl */}
        <Image src="/assets/images/mela.png" alt="user" fill />
      </div>
    </div>
  );
};

export default Admin;
