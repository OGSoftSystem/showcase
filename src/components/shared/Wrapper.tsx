import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
}
export default function Wrapper({ children, className }: Props) {
  return (
    <div
      className={cn(
        "size-full mx-auto max-w-screen-xl px-8 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
}
