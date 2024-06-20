import { AdminHeader } from "@/components/shared/Header";
import { ReactNode } from "react";

export default function BaseLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="flex flex-col min-h-screen">
      <AdminHeader />

      <div className="flex-1 size-full">{children}</div>
    </div>
  );
}
