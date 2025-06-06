import React from "react";
import MobileCartButton from "@/components/MobileCartButton";

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <MobileCartButton />
    </>
  );
}
