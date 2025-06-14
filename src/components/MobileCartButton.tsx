"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import CartSheet from "./cart/CartSheet";
import { Button } from "./ui/button";

const MobileCartButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((total, cartItem) => {
    const extrasQty =
      cartItem.extras?.reduce((eTotal, extra) => eTotal + extra.quantity, 0) ||
      0;
    return total + cartItem.quantity + extrasQty;
  }, 0);

  if (totalItems === 0) return null;

  return (
    <>
      <div className="fixed right-2 bottom-[calc(0.5rem+env(safe-area-inset-bottom,0))] left-2 z-50 md:hidden [&>button]:w-full">
        <Button
          onClick={() => setIsOpen(true)}
          aria-label={`View Cart ${totalItems} Items`}
          className="group relative flex min-h-12 w-full items-center justify-center bg-[#B90606] px-4 py-3 text-white transition-all ease-in-out"
        >
          <span className="pointer-events-none absolute inset-0 bg-black/[0.04] opacity-0 transition-opacity group-hover:opacity-100" />
          <span className="flex flex-1 items-center justify-center gap-x-2">
            <span className="flex items-center gap-x-2">
              <span>View Cart</span>·<span>{totalItems} Items</span>
            </span>
          </span>
        </Button>
      </div>

      <CartSheet isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default MobileCartButton;
