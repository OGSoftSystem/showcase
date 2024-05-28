import Footer from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { ReactNode } from "react";

export default function BaseLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 size-full">{children}</div>
      <Footer />
    </main>
  );
}
