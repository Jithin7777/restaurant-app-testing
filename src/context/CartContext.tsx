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
addToCart: (
  item: MenuItem,
  quantity: number,
  extras?: { item: MenuItem; quantity: number }[]
) => void;  increaseCartQty: (item: CartItem) => void; 
  decreaseCartQty: (item: CartItem) => void; 
  increaseExtraQty: (mainItem: CartItem, extra: MenuItem) => void;
decreaseExtraQty: (mainItem: CartItem, extra: MenuItem) => void;
subtotal: number;

}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [extraItems, setExtraItems] = useState<MenuItem[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

// Helper: calculate total price of extras
const calculateExtrasTotal = (extras?: { item: MenuItem; quantity: number }[]) => {
  if (!extras) return 0;
  return extras.reduce(
    (sum, e) => sum + parseFloat(e.item.price) * e.quantity,
    0
  );
};

// Helper: calculate total line price for a cart item
const calculateLineTotal = (cartItem: CartItem) => {
  const mainPrice = parseFloat(cartItem.item.price);
  const extrasPrice = calculateExtrasTotal(cartItem.extras);
  return ((mainPrice + extrasPrice) * cartItem.quantity).toFixed(2);
};

const increaseCartQty = (item: CartItem) => {
  setCartItems((prev) => {
    const updated = prev.map((ci) => {
      const isSameItem =
        ci.item.id === item.item.id &&
        JSON.stringify((ci.extras ?? []).map((e) => e.item.id).sort()) ===
          JSON.stringify((item.extras ?? []).map((e) => e.item.id).sort());

      if (isSameItem) {
        const newQty = ci.quantity + 1;
        const updatedItem = { ...ci, quantity: newQty };
        return {
          ...updatedItem,
          lineTotal: calculateLineTotal(updatedItem),
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
        JSON.stringify((ci.extras ?? []).map((e) => e.item.id).sort()) ===
          JSON.stringify((item.extras ?? []).map((e) => e.item.id).sort());

      if (isSameItem) {
        const newQty = ci.quantity - 1;
        if (newQty > 0) {
          const updatedItem = { ...ci, quantity: newQty };
          updated.push({
            ...updatedItem,
            lineTotal: calculateLineTotal(updatedItem),
          });
        }
        // else skip (remove item)
      } else {
        updated.push(ci);
      }
    }

    localStorage.setItem("cartItems", JSON.stringify(updated));
    return updated;
  });
};

const increaseExtraQty = (mainItem: CartItem, extra: MenuItem) => {
  setCartItems((prev) => {
    return prev.map((ci) => {
      const isSameItem =
        ci.item.id === mainItem.item.id &&
        JSON.stringify((ci.extras ?? []).map((e) => e.item.id).sort()) ===
          JSON.stringify((mainItem.extras ?? []).map((e) => e.item.id).sort());

      if (!isSameItem) return ci;

      const updatedExtras = (ci.extras || []).map((e) =>
        e.item.id === extra.id
          ? { ...e, quantity: e.quantity + 1 }
          : e
      );

      const updatedItem = { ...ci, extras: updatedExtras };
      return {
        ...updatedItem,
        lineTotal: calculateLineTotal(updatedItem),
      };
    });
  });
};

const decreaseExtraQty = (mainItem: CartItem, extra: MenuItem) => {
  setCartItems((prev) => {
    return prev.map((ci) => {
      const isSameItem =
        ci.item.id === mainItem.item.id &&
        JSON.stringify((ci.extras ?? []).map((e) => e.item.id).sort()) ===
          JSON.stringify((mainItem.extras ?? []).map((e) => e.item.id).sort());

      if (!isSameItem) return ci;

      const updatedExtras = (ci.extras || [])
        .map((e) =>
          e.item.id === extra.id
            ? { ...e, quantity: e.quantity - 1 }
            : e
        )
        .filter((e) => e.quantity > 0);

      const updatedItem = { ...ci, extras: updatedExtras };
      return {
        ...updatedItem,
        lineTotal: calculateLineTotal(updatedItem),
      };
    });
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
  extras: { item: MenuItem; quantity: number }[] = []
) => {
  const itemPrice = parseFloat(item.price.replace("$", "")) || 0;
  const extrasTotal = extras.reduce(
    (sum, extra) =>
      sum + parseFloat(extra.item.price.replace("$", "")) * extra.quantity,
    0
  );
  const lineItemPrice = itemPrice + extrasTotal;

  setCartItems((prev) => {
    const existingIndex = prev.findIndex((ci) => {
      const sameItem = ci.item.id === item.id;
      const sameExtras =
        (ci.extras?.length || 0) === extras.length &&
        ci.extras?.every((e) =>
          extras.find(
            (ex) =>
              ex.item.id === e.item.id && ex.quantity === e.quantity
          )
        );
      return sameItem && sameExtras;
    });

    let updatedCartItems;

    if (existingIndex !== -1) {
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
      updatedCartItems = [
        ...prev,
        {
          item,
          quantity,
          extras,
          lineTotal: (lineItemPrice * quantity).toFixed(2),
        },
      ];
    }

    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    return updatedCartItems;
  });

  toast.success(`${item.title} added to cart!`);
  setExtraItems([]);
  setQuantity(1);
};



  const calculateSubtotal = () => {
    return cartItems.reduce((total, cartItem) => {
      const mainItemPrice = parseFloat(cartItem.item.price);
      const mainItemTotal = mainItemPrice * cartItem.quantity;

      const extrasTotal =
        cartItem.extras?.reduce(
          (acc, extra) =>
            acc + parseFloat(extra.item.price) * extra.quantity,
          0
        ) || 0;

      return total + mainItemTotal + extrasTotal;
    }, 0);
  };

 const subtotal = calculateSubtotal();
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
         increaseExtraQty,
         decreaseExtraQty,
         subtotal
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
