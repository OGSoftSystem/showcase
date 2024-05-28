import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
  id?: string;
}
export default function Wrapper({ children, className, id }: Props) {
  return (
    <div
      id={id}
      className={cn(
        "size-full mx-auto max-w-screen-xl px-8 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
}
