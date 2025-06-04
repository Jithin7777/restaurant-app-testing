"use client";
import { CartProvider } from "@/context/CartContext";
import type { FC } from "react";
import { Toaster } from "react-hot-toast";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <CartProvider>
      {children}
      <Toaster position="top-right" />
    </CartProvider>
  );
};

export default Providers;
