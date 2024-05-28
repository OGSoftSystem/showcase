import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Auth",
  description: "Authentication",
};
const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
