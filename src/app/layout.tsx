import type { Metadata } from "next";
import { Noto_Sans, Hind } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import Provider from "@/components/shared/Provider";
import { siteConfig } from "@/config/site";

const noto = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-noto",
});
const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-hind",
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.title}`,
    default: siteConfig.defaultDescription,
  },
  authors: {
    name: siteConfig.title,
    url: siteConfig.url,
  },
  keywords: siteConfig.keywords,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen dark font-inter antialiased",
          // chakra.variable,
          noto.variable,
          hind.variable
        )}
      >
        <Provider>{children}</Provider>
        <Toaster />
      </body>
    </html>
  );
}
