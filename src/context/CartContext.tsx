import React, { createContext, useContext, useState, ReactNode } from "react";
import type { MenuItem } from "@/types/menu-item.types";

interface CartContextType {
  quantity: number;
  setQuantity: (qty: number) => void;
  increaseQty: () => void;
  decreaseQty: () => void;
  selectedItem: MenuItem | null;
  setSelectedItem: (item: MenuItem | null) => void;
  totalPrice: string;
  addExtraItem: (item: MenuItem) => void;
  removeExtraItem: (itemId: number) => void;
  extraItems: MenuItem[];
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [extraItems, setExtraItems] = useState<MenuItem[]>([]);

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const parsedPrice = selectedItem
    ? parseFloat(selectedItem.price.replace("$", ""))
    : 0;

  const totalPrice = (parsedPrice * quantity).toFixed(2);
  // const extrasTotal = extraItems.reduce(
  //   (acc, item) => acc + parseFloat(item.price.replace("$", "")),
  //   0,
  // );

  const addExtraItem = (item: MenuItem) => {
    setExtraItems((prev) => [...prev, item]);
  };

  const removeExtraItem = (itemId: number) => {
    setExtraItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  return (
    <CartContext.Provider
      value={{
        quantity,
        setQuantity,
        increaseQty,
        decreaseQty,
        selectedItem,
        setSelectedItem,
        totalPrice,
        addExtraItem,
        removeExtraItem,
        extraItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
