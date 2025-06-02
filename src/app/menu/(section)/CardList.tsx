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
  },
  {
    id: 2,
    title: "Fried Mozzarella",
    price: "10.25",
    description: "Thick wedges coated with our own seasoned breadcrumbs.",
    image: "/images/menu/img4.webp",
    likes: 50,
  },
  {
    id: 3,
    title: "Garlic Knots",
    price: "7.00",
    description: "Soft fresh baked garlic rolls topped with melted butter and Romano cheese. Served with marinara sauce. Six per order.",
    image: "/images/menu/img5.webp",
    likes: 75,
  },
  {
    id: 4,
    title: "Nuclear Fries",
    price: "8.00",
    description: "Another Metro Pizza original. Hot and spicy.",
    image: "/images/menu/img6.webp",
    likes: 18,
  },
];

const CardList: React.FC = () => {
  const router = useRouter();
  const {
    quantity,
    setQuantity,
    increaseQty,
    decreaseQty,
    totalPrice,
    selectedItem,
    setSelectedItem,
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

  return (
    <div
      id="appetizers"
      className="grid grid-cols-1 md:gap-4   xl:p-0 lg:grid-cols-2"
    >
      <div className="lg:col-span-2">
        <h2 className="text-xl font-normal font-oswald md:text-2xl lg:text-3xl">
          Appetizers
        </h2>
      </div>

      {items.map((item) => (
<div
  key={item.id}
  title={`Add ${item.title} to your cart`}
  className="relative mt-5 flex md:h-[200px] w-full flex-row justify-between overflow-hidden rounded-lg border border-gray-300 bg-white transition-shadow duration-300 hover:shadow-lg cursor-pointer"
  onClick={() => handleItemOpen(item)}
>
          <div className="flex flex-1 flex-col gap-y-2 p-4">
            <div className="flex flex-col gap-y-1">
              <h3 className="line-clamp-2 text-base font-inter font-bold">
                {item.title}
              </h3>
              <div className="flex items-center gap-x-1">
                <p className="text-base font-bold">${item.price}</p>
                <span>·</span>
                <button
                  aria-label="Like item"
                  className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Heart className="w-4 h-4 fill-current" />
                  <p className="text-sm">{item.likes ?? 0}</p>
                </button>
              </div>
            </div>
            <p className="line-clamp-3 text-sm text-gray-600 font-manrope">
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
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white p-2 shadow-md hover:bg-gray-50 transition-colors">
              <Plus className="text-gray-700 w-5 h-5" />
            </div>
          </div>
        </div>
      ))}

<Dialog open={isDialogOpen} onOpenChange={(open) => !open && closeDialog()}>
  <DialogContent className="bg-white p-0 rounded-4xl sm:max-w-[650px] border border-gray-300 max-h-[90vh] flex flex-col overflow-hidden hide-scrollbar">

    {/* Scrollable Content (image + details) */}
    <div className="overflow-y-auto flex-1 hide-scrollbar">
      {/* Image Section */}
      <div className="relative h-[250px] sm:h-[330px] lg:h-[380px] w-full overflow-hidden">
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
            className=" fixed top-5 right-5 z-10 h-8 w-8 rounded-full bg-white/80 hover:bg-white"
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
            <h2 className="mt-2 text-lg sm:text-xl font-semibold text-gray-900">
              {selectedItem.title}
            </h2>
            <div className="mt-2 space-y-2">
              <p className="text-lg font-semibold text-gray-900">
                ${selectedItem.price}
              </p>
              <p className="text-muted-foreground flex items-center gap-1 text-sm">
                <Heart size={14} className="fill-red-500 text-red-500" />
                {selectedItem.likes ?? 0} likes
              </p>
              <p>{selectedItem.description}</p>
            </div>
             {/* Special Requests Section */}
            <div className="flex flex-col gap-4 mt-6 border-t-1 border-gray-300">
              <h5 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4 font-inter">Special Requests</h5>
              <p className="text-sm text-gray-600 font-manrope">
                We’ll try our best to accommodate requests, but can’t make changes that affect pricing.
              </p>
              <div className="flex w-full flex-col gap-y-1">
                <textarea
                  className="w-full flex-1 bg-transparent px-4 py-3 text-gray-900 transition-all rounded-md border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:ring-red-500 focus:border-red-500"
                  placeholder="Add special request"
                ></textarea>
              </div>
            </div>
          </>
        )}
      </div>
    </div>

    {/* Fixed Footer */}
    <DialogFooter className="border-t border-gray-200 pt-4 px-4 pb-4 bg-white">
      <div className="flex w-full sm:w-auto justify-center sm:justify-start mb-2 sm:mb-0">
        <div className="flex items-center justify-between gap-1 rounded-md border border-gray-300 bg-white w-full max-w-[150px]">
          <Button variant="ghost" size="icon" className="h-10 flex-1" onClick={decreaseQty}>
            <Minus className="h-4 w-4 text-gray-600" />
          </Button>
          <span className="flex-1 text-center text-gray-800 select-none">
            {quantity}
          </span>
          <Button variant="ghost" size="icon" className="h-10 flex-1" onClick={increaseQty}>
            <Plus className="h-4 w-4 text-gray-600" />
          </Button>
        </div>
      </div>

      <Button
        className="flex-1 w-full bg-[#B90606] text-white hover:bg-[#a00505] px-6 py-3"
        onClick={closeDialog}
      >
        <span className="flex justify-between w-full">
          <span>Add {quantity === 1 ? "item" : `${quantity} items`}</span>
          <span>{totalPrice}</span>
        </span>
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
    </div>
  );
};

export default CardList;
