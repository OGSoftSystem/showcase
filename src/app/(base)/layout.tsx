import ContactForm from "@/components/shared/ContactForm";
import Footer from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { ReactNode } from "react";

export default function BaseLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 size-full relative">
        <>
          {/* <ContactForm className="sticky bottom-10 h-20 right-5 z-50" /> */}
          {children}
        </>
      </div>
      <Footer />
    </main>
  );
}
