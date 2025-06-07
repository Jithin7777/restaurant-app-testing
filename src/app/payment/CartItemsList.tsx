import React from "react";
import { Minus, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import type { CartItem } from "@/types/cart-item.type";

const CartItemsList = () => {
  const {
    cartItems,
    increaseCartQty,
    decreaseCartQty,
    increaseExtraQty,
    decreaseExtraQty,
  } = useCart();

  return (
    <>
      {cartItems.map((cartItem: CartItem, index) => {
        const mainItemPrice = parseFloat(cartItem.item.price);
        const itemTotal = mainItemPrice * cartItem.quantity;

        return (
          <div
            key={`main-${cartItem.item.id}-${index}`}
            className="flex flex-col gap-4 px-4 py-3"
          >
            {/* Main Item */}
            <div
              className="flex gap-4"
              role="button"
              title={`Click to edit ${cartItem.item.title}`}
            >
              <div className="relative h-[46px] w-[46px] shrink-0 overflow-hidden rounded-md bg-gray-100">
                <img
                  src={cartItem.item.image}
                  alt={cartItem.item.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex grow flex-col gap-1">
                <div className="flex flex-col gap-1">
                  <p className="text-base font-medium text-gray-900">
                    {cartItem.item.title}
                  </p>
                </div>
                <div className="flex cursor-default items-center justify-between">
                  <div className="w-[145px]">
                    <div className="mt-3 flex items-center gap-1 rounded-md border border-gray-200 bg-white">
                      <button
                        className="flex h-11 flex-1 items-center justify-center"
                        title="Decrease quantity"
                        onClick={() => decreaseCartQty(cartItem)}
                      >
                        <Minus className="h-4 w-4 text-gray-600" />
                      </button>
                      <span
                        className="flex min-w-9 flex-1 items-center justify-center text-base font-medium text-gray-900"
                        aria-label={`Quantity ${cartItem.quantity}`}
                      >
                        {cartItem.quantity}
                      </span>
                      <button
                        className="flex h-11 flex-1 items-center justify-center"
                        title="Increase quantity"
                        onClick={() => increaseCartQty(cartItem)}
                      >
                        <Plus className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <p className="text-base font-medium text-gray-900">
                      ${itemTotal.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Extras */}
            {cartItem.extras?.map((extra) => {
              const extraPrice = parseFloat(extra.item.price);
              const extraTotal = extraPrice * extra.quantity;

              return (
                <div
                  key={`extra-${extra.item.id}`}
                  className="flex flex-col gap-2"
                >
                  <div
                    className="flex gap-4"
                    role="button"
                    title={`Click to edit ${extra.item.title}`}
                  >
                    <div className="relative h-[46px] w-[46px] shrink-0 overflow-hidden rounded-md bg-gray-100">
                      <img
                        src={extra.item.image || cartItem.item.image}
                        alt={extra.item.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex grow flex-col gap-1">
                      <div className="flex flex-col gap-1">
                        <p className="text-sm font-medium text-gray-900">
                          {extra.item.title}
                        </p>
                      </div>
                      <div className="flex cursor-default items-center justify-between">
                        <div className="w-[145px]">
                          <div className="mt-3 flex items-center gap-1 rounded-md border border-gray-200 bg-white">
                            <button
                              className="flex h-11 flex-1 items-center justify-center"
                              title="Decrease quantity"
                              onClick={() =>
                                decreaseExtraQty(cartItem, extra.item)
                              }
                            >
                              <Minus className="h-4 w-4 text-gray-600" />
                            </button>
                            <span
                              className="flex min-w-9 flex-1 items-center justify-center text-sm font-medium text-gray-900"
                              aria-label={`Quantity ${extra.quantity}`}
                            >
                              {extra.quantity}
                            </span>
                            <button
                              className="flex h-11 flex-1 items-center justify-center"
                              title="Increase quantity"
                              onClick={() =>
                                increaseExtraQty(cartItem, extra.item)
                              }
                            >
                              <Plus className="h-4 w-4 text-gray-600" />
                            </button>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <p className="text-sm font-medium text-gray-900">
                            ${extraTotal.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default CartItemsList;
