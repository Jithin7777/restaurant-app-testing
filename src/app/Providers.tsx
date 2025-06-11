"use client";
import { CartProvider } from "@/context/CartContext";
import { LocationProvider } from "@/context/LocationContext";
import type { FC } from "react";
import { Toaster } from "react-hot-toast";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <CartProvider>
      <LocationProvider> {children}</LocationProvider>
      <Toaster position="top-center" />
    </CartProvider>
  );
};

export default Providers;
