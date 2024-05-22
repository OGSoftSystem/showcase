import type { Metadata } from "next";
import { Inter, Chakra_Petch, Rajdhani } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

// const chakra = Chakra_Petch({
//   subsets: ["latin"],
//   weight: ["300", "400", "700"],
//   variable: "--font-chakra",
// });

const inter = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
