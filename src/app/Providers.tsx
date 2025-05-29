"use client";
import { CartProvider } from "@/context/CartContext";
import type { FC } from "react";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return <CartProvider>{children}</CartProvider>;
};

export default Providers;
