import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import type { MenuItem } from "@/types/menu-item.types";
import type { CartItem } from "@/types/cart-item.type";
import toast from "react-hot-toast";

interface CartContextType {
  quantity: number;
  setQuantity: (qty: number) => void;
  increaseQty: () => void;
  decreaseQty: () => void;
  selectedItem: MenuItem | null;
  setSelectedItem: (item: MenuItem | null) => void;
  totalPrice: string;
  addExtraItem: (item: MenuItem) => void;
  removeExtraItem: (itemId: string) => void;
  extraItems: MenuItem[];
  cartItems: CartItem[];
  addToCart: (item: MenuItem, quantity: number, extras?: MenuItem[]) => void;
  increaseCartQty: (item: CartItem) => void; 
  decreaseCartQty: (item: CartItem) => void; 
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [extraItems, setExtraItems] = useState<MenuItem[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const increaseCartQty = (item: CartItem) => {
    setCartItems((prev) => {
      const updated = prev.map((ci) => {
        const isSameItem =
          ci.item.id === item.item.id &&
          JSON.stringify((ci.extras ?? []).map((e) => e.id).sort()) ===
            JSON.stringify((item.extras ?? []).map((e) => e.id).sort());

        if (isSameItem) {
          const newQty = ci.quantity + 1;
          const mainPrice = parseFloat(ci.item.price);
          const extrasPrice =
            ci.extras?.reduce((sum, e) => sum + parseFloat(e.price), 0) || 0;

          return {
            ...ci,
            quantity: newQty,
            lineTotal: ((mainPrice + extrasPrice) * newQty).toFixed(2),
          };
        }

        return ci;
      });

      localStorage.setItem("cartItems", JSON.stringify(updated));
      return updated;
    });
  };

  const decreaseCartQty = (item: CartItem) => {
    setCartItems((prev) => {
      const updated: CartItem[] = [];

      for (const ci of prev) {
        const isSameItem =
          ci.item.id === item.item.id &&
          JSON.stringify((ci.extras ?? []).map((e) => e.id).sort()) ===
            JSON.stringify((item.extras ?? []).map((e) => e.id).sort());

        if (isSameItem) {
          const newQty = ci.quantity - 1;
          const mainPrice = parseFloat(ci.item.price);
          const extrasPrice = (ci.extras ?? []).reduce(
            (sum, e) => sum + parseFloat(e.price),
            0,
          );

          if (newQty > 0) {
            updated.push({
              ...ci,
              quantity: newQty,
              lineTotal: ((mainPrice + extrasPrice) * newQty).toFixed(2),
            });
          }
          // If newQty <= 0, we skip pushing to `updated` (removing the item)
        } else {
          updated.push(ci);
        }
      }

      localStorage.setItem("cartItems", JSON.stringify(updated));
      return updated;
    });
  };

  // Reset extras whenever selectedItem changes
  useEffect(() => {
    setExtraItems([]);
  }, [selectedItem]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const parsedPrice = selectedItem
    ? parseFloat(selectedItem.price.replace("$", ""))
    : 0;

  const totalPrice = (parsedPrice * quantity).toFixed(2);

  const addExtraItem = (item: MenuItem) => {
    setExtraItems((prev) => [...prev, item]);
  };

  const removeExtraItem = (itemId: string) => {
    setExtraItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const addToCart = (
    item: MenuItem,
    quantity: number,
    extras: MenuItem[] = [],
  ) => {
    const itemPrice = parseFloat(item.price.replace("$", "")) || 0;
    const extrasTotal = extras.reduce(
      (sum, extra) => sum + parseFloat(extra.price.replace("$", "")),
      0,
    );
    const lineItemPrice = itemPrice + extrasTotal;

    setCartItems((prev) => {
      // Try to find existing cart item with the same item.id AND same extras
      const existingIndex = prev.findIndex((ci) => {
        const sameItem = ci.item.id === item.id;
        const sameExtras =
          (ci.extras?.length || 0) === extras.length &&
          ci.extras?.every((e) => extras.find((ex) => ex.id === e.id));
        return sameItem && sameExtras;
      });

      let updatedCartItems;
      if (existingIndex !== -1) {
        // Item exists with same extras — update quantity & lineTotal
        updatedCartItems = prev.map((ci, idx) => {
          if (idx === existingIndex) {
            const newQuantity = ci.quantity + quantity;
            const newLineTotal = (newQuantity * lineItemPrice).toFixed(2);
            return {
              ...ci,
              quantity: newQuantity,
              lineTotal: newLineTotal,
            };
          }
          return ci;
        });
      } else {
        // Item doesn't exist — add new line
        updatedCartItems = [
          ...prev,
          {
            item,
            quantity,
            extras: extras ?? [], // ensure extras is always an array
            lineTotal: (lineItemPrice * quantity).toFixed(2),
          },
        ];
      }

      // Save to localStorage
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

      return updatedCartItems;
    });

    toast.success(`${item.title} added to cart!`);

    // Reset extras and quantity after adding to cart
    setExtraItems([]);
    setQuantity(1);
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
        cartItems,
        addToCart,
        decreaseCartQty,
        increaseCartQty,
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
