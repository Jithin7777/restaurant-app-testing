"use client";

import React, { useEffect } from "react";
import { Heart, Minus, Plus, X } from "lucide-react";
import type { MenuItem } from "@/types/menu-item.types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { DialogTitle } from "@radix-ui/react-dialog";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// Dummy items array
const items: MenuItem[] = [
  {
    id: 1,
    title: "Meatball Sub",
    price: "11.75",
    description: "Our Meatball Sub served with Garlic Romano Fries",
    image: "/images/menu/img3.webp",
    likes: 12,
    goesWellWith: [
      {
        id: 101,
        title: "Garlic Knots",
        price: "7.00",
        description:
          "Soft fresh baked garlic rolls topped with melted butter and Romano cheese. Served with marinara sauce. Six per order.",
        image: "/images/menu/img5.webp",
      },
      {
        id: 102,
        title: "Nuclear Fries",
        price: "8.00",
        description: "Another Metro Pizza original. Hot and spicy.",
        image: "/images/menu/img6.webp",
      },
    ],
  },
  {
    id: 2,
    title: "Fried Mozzarella",
    price: "10.25",
    description: "Thick wedges coated with our own seasoned breadcrumbs.",
    image: "/images/menu/img4.webp",
    likes: 50,
    goesWellWith: [
      {
        id: 101,
        title: "Garlic Knots",
        price: "7.00",
        description:
          "Soft fresh baked garlic rolls topped with melted butter and Romano cheese. Served with marinara sauce. Six per order.",
        image: "/images/menu/img5.webp",
      },
      {
        id: 102,
        title: "Nuclear Fries",
        price: "8.00",
        description: "Another Metro Pizza original. Hot and spicy.",
        image: "/images/menu/img6.webp",
      },
    ],
  },
  {
    id: 3,
    title: "Garlic Knots",
    price: "7.00",
    description:
      "Soft fresh baked garlic rolls topped with melted butter and Romano cheese. Served with marinara sauce. Six per order.",
    image: "/images/menu/img5.webp",
    likes: 75,
    goesWellWith: [
      {
        id: 103,
        title: "Nuclear Fries",
        price: "8.00",
        description: "Another Metro Pizza original. Hot and spicy.",
        image: "/images/menu/img6.webp",
      },
      {
        id: 104,
        title: "Fried Mozzarella",
        price: "7.00",
        description: "Thick wedges coated with our own seasoned breadcrumbs.",

        image: "/images/menu/img4.webp",
      },
    ],
  },
  {
    id: 4,
    title: "Nuclear Fries",
    price: "8.00",
    description: "Another Metro Pizza original. Hot and spicy.",
    image: "/images/menu/img6.webp",
    likes: 18,
    goesWellWith: [
      {
        id: 101,
        title: "Garlic Knots",
        price: "7.00",
        description:
          "Soft fresh baked garlic rolls topped with melted butter and Romano cheese. Served with marinara sauce. Six per order.",
        image: "/images/menu/img5.webp",
      },
      {
        id: 104,
        title: "Fried Mozzarella",
        price: "10.25",
        description: "Thick wedges coated with our own seasoned breadcrumbs.",

        image: "/images/menu/img4.webp",
      },
    ],
  },
];

const CardList: React.FC = () => {
  const router = useRouter();
  const {
    quantity,
    setQuantity,
    increaseQty,
    decreaseQty,
    selectedItem,
    setSelectedItem,
    addExtraItem,
    extraItems,
    removeExtraItem,
  } = useCart();

  const isDialogOpen = !!selectedItem;

  const handleItemOpen = (item: MenuItem) => {
    setSelectedItem(item);
    setQuantity(1);
    router.push(`?item=${item.id}`, { scroll: false });
  };

  const closeDialog = () => {
    setSelectedItem(null);
    router.push("", { scroll: false });
  };

  useEffect(() => {
    setSelectedItem(null);
  }, []);

  const handleAddExtraItem = (item: MenuItem) => {
    if (!extraItems.find((i) => i.id === item.id)) {
      addExtraItem(item);
    }
  };

  const extrasTotal = extraItems.reduce(
    (acc, item) => acc + parseFloat(item.price),
    0,
  );

  const grandTotal = (
    parseFloat(selectedItem?.price || "0") * quantity +
    extrasTotal
  ).toFixed(2);
  const totalItemCount = quantity + extraItems.length;

  return (
    <div
      id="appetizers"
      className="grid grid-cols-1 md:gap-4 lg:grid-cols-2 xl:p-0"
    >
      <div className="lg:col-span-2">
        <h2 className="font-oswald text-xl font-normal md:text-2xl lg:text-3xl">
          Appetizers
        </h2>
      </div>

      {items.map((item) => (
        <div
          key={item.id}
          title={`Add ${item.title} to your cart`}
          className="relative mt-5 flex w-full cursor-pointer flex-row justify-between overflow-hidden rounded-lg border border-gray-300 bg-white transition-shadow duration-300 hover:shadow-lg md:h-[200px]"
          onClick={() => handleItemOpen(item)}
        >
          <div className="flex flex-1 flex-col gap-y-2 p-4">
            <div className="flex flex-col gap-y-1">
              <h3 className="font-inter line-clamp-2 text-base font-bold">
                {item.title}
              </h3>
              <div className="flex items-center gap-x-1">
                <p className="text-base font-bold">${item.price}</p>
                <span>·</span>
                <button
                  aria-label="Like item"
                  className="flex items-center space-x-1 text-gray-500 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Heart className="h-4 w-4 text-red-500" />
                  <p className="text-sm">{item.likes ?? 0}</p>
                </button>
              </div>
            </div>
            <p className="font-manrope line-clamp-3 text-sm text-gray-600">
              {item.description}
            </p>
          </div>

          <div className="w-2/5 max-w-[180px] flex-shrink-0">
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="absolute right-2 bottom-2 z-10">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white p-2 shadow-md transition-colors hover:bg-gray-50">
              <Plus className="h-5 w-5 text-gray-700" />
            </div>
          </div>
        </div>
      ))}

      <Dialog
        open={isDialogOpen}
        onOpenChange={(open) => !open && closeDialog()}
      >
        <DialogContent className="hide-scrollbar flex max-h-[90vh] flex-col overflow-hidden rounded-4xl border border-gray-300 bg-white p-0 sm:max-w-[650px]">
          {/* Scrollable Content (image + details) */}
          <div className="hide-scrollbar flex-1 overflow-y-auto">
            {/* Image Section */}
            <div className="relative h-[250px] w-full overflow-hidden sm:h-[330px] lg:h-[380px]">
              {selectedItem && (
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority
                />
              )}
              <DialogHeader>
                <DialogTitle className="sr-only">
                  {selectedItem?.title || "Selected Item"}
                </DialogTitle>
              </DialogHeader>
              <DialogClose asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="fixed top-5 right-5 z-10 h-8 w-8 rounded-full bg-white/80 hover:bg-white"
                  aria-label="Close"
                >
                  <X className="h-4 w-4 text-black" />
                </Button>
              </DialogClose>
            </div>

            {/* Item Details */}
            <div className="p-4">
              {selectedItem && (
                <>
                  <h2 className="mt-2 text-lg font-semibold text-gray-900 sm:text-3xl">
                    {selectedItem.title}
                  </h2>
                  <div className="mt-2 space-y-2">
                    <p className="text-lg font-semibold text-gray-900">
                      ${selectedItem.price}
                    </p>
                    <p className="text-muted-foreground flex items-center gap-1 text-sm">
                      <Heart size={14} className="text-red-500" />
                      {selectedItem.likes ?? 0} likes
                    </p>
                    <p>{selectedItem.description}</p>
                  </div>
                  {/* Special Requests Section */}
                  <div className="mt-6 flex flex-col gap-4 border-t-1 border-gray-300">
                    <h5 className="font-inter mt-4 text-lg font-semibold text-gray-900 sm:text-xl">
                      Special Requests
                    </h5>
                    <p className="font-manrope text-sm text-gray-600">
                      We’ll try our best to accommodate requests, but can’t make
                      changes that affect pricing.
                    </p>
                    <div className="flex w-full flex-col gap-y-1">
                      <textarea
                        className="w-full flex-1 rounded-md border border-gray-300 bg-transparent px-4 py-3 text-gray-900 transition-all placeholder:text-gray-400 focus:border-red-500 focus:ring-0 focus:ring-red-500 focus:outline-none"
                        placeholder="Add special request"
                      ></textarea>
                    </div>
                  </div>
                  {/* goes weel section */}
                  <div className="mt-6 border-t border-gray-300 bg-white">
                    <h5 className="mt-5 text-xl">Goes Well With</h5>

                    {selectedItem?.goesWellWith?.map((item) => {
                      const isExtraSelected = extraItems.some(
                        (extra) => extra.id === item.id,
                      );

                      return (
                        <button
                          key={item.id}
                          aria-label={`${isExtraSelected ? "Remove" : "Add"} ${item.title} to order`}
                          className="mt-3 flex w-full items-center gap-4 p-0 text-left hover:bg-gray-50 md:mt-5"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (isExtraSelected) {
                              removeExtraItem(Number(item.id));
                            } else {
                              handleAddExtraItem(item);
                            }
                          }}
                        >
                          <span
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${isExtraSelected ? "bg-gray-500" : "bg-[#B90606]"} text-white`}
                          >
                            {isExtraSelected ? (
                              <Minus className="h-4 w-4" />
                            ) : (
                              <Plus className="h-4 w-4" />
                            )}
                          </span>
                          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover"
                              loading="lazy"
                            />
                          </div>
                          <div className="flex min-w-0 flex-grow flex-col gap-1">
                            <div className="flex justify-between gap-2">
                              <p className="truncate text-base font-semibold text-gray-900">
                                {item.title}
                              </p>
                              <p className="text-base font-medium whitespace-nowrap text-gray-900">
                                ${item.price}
                              </p>
                            </div>
                            <p className="truncate text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>{" "}
                  <div className="flex flex-col gap-4 border-t border-gray-300 mt-5">
                    <div className="mt-8 gap-4">
                      <h5 className="md:text-2xl text-xl ">Pay With Points</h5>
                    </div>
                    <div className="ml-4 ">
                      <p className="font-semibold">
                        <button className="underline underline-offset-8 text-gray-600 hover:text-gray-700">Sign in</button> pay With Points
                      </p>{" "}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Fixed Footer */}
          <DialogFooter className="border-t border-gray-200 bg-white px-4 pt-4 pb-4">
            <div className="mb-2 flex w-full justify-center sm:mb-0 sm:w-auto sm:justify-start">
              <div className="flex w-full max-w-[150px] items-center justify-between gap-1 rounded-md border border-gray-300 bg-white">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 flex-1"
                  onClick={decreaseQty}
                >
                  <Minus className="h-4 w-4 text-gray-600" />
                </Button>
                <span className="flex-1 text-center text-gray-800 select-none">
                  {quantity}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 flex-1"
                  onClick={increaseQty}
                >
                  <Plus className="h-4 w-4 text-gray-600" />
                </Button>
              </div>
            </div>

            <Button
              className="w-full flex-1 bg-[#B90606] px-6 py-3 text-white hover:bg-[#a00505]"
              onClick={closeDialog}
            >
              <span className="flex w-full justify-between">
                <span>
                  Add{" "}
                  {totalItemCount === 1 ? "item" : `${totalItemCount} items`}
                </span>
                <span>${grandTotal}</span>
              </span>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CardList;
