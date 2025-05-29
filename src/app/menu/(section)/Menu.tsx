"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import type { MenuItem } from "@/types/menu-item.types";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Minus, Plus, X } from "lucide-react";
import CardList from "./CardList";
import { useSearchParams, useRouter } from "next/navigation";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useCart } from "@/context/CartContext";

const menuItems: MenuItem[] = [
  {
    id: "1",
    title: "Cheese Pizza (Lg)",
    price: "$21.95",
    likes: 229,
    image: "/images/menu/img1.webp",
  },
  {
    id: "2",
    title: "Cheese Pizza (sm)",
    price: "$11.00",
    likes: 120,
    image: "/images/menu/img1.webp",
  },
  {
    id: "3",
    title: "Cheese Pizza (sm)",
    price: "$11.00",
    likes: 120,
    image: "/images/menu/img2.webp",
  },
];

const PopularMenu = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

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
    setQuantity(1); // Reset quantity
    router.push(`?item=${item.id}`, { scroll: false });
  };
  const closeDialog = () => {
    setSelectedItem(null);
    router.push("", { scroll: false });
  };

  useEffect(() => {
    // Run only once on mount, ignore URL params at start
    setSelectedItem(null);
  }, []);
  return (
    <section
      id="popular"
      className="mt-10 ml-0 flex flex-col gap-10 pb-28 xl:ml-10"
    >
      <div className="flex items-center justify-between gap-3 px-4 md:px-10 xl:px-0">
        <h2 className="text-primary text-xl font-semibold md:text-2xl lg:text-3xl">
          Popular
        </h2>
      </div>

      {/* Scrollable Menu */}
      <div className="hide-scrollbar flex snap-x snap-mandatory scroll-ps-4 gap-4 overflow-x-auto scroll-smooth px-4 md:scroll-ps-10 md:px-10 xl:px-0">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="w-64 shrink-0 snap-start md:w-[310px]"
            title={`Add ${item.title} to your cart`}
          >
            <Card className="relative h-60 w-full overflow-hidden rounded-xl border-0">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={item.id === "1"}
              />
              <div className="absolute right-2 bottom-2 z-10">
                <Button
                  size="icon"
                  className="h-10 w-10 rounded-xl bg-white p-2 hover:bg-gray-100"
                  onClick={() => handleItemOpen(item)}
                  aria-label={`Add ${item.title} to cart`}
                >
                  <Plus className="h-5 w-5 text-gray-800" />
                </Button>
              </div>
            </Card>

            <CardContent className="mt-2 space-y-1 px-2">
              <h3 className="line-clamp-2 font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="text-muted-foreground flex items-center gap-1 text-sm">
                {item.price} ·{" "}
                <Heart size={14} className="fill-red-500 text-red-500" />{" "}
                {item.likes}
              </p>
            </CardContent>
          </div>
        ))}
      </div>

      {/* Dialog */}
      <Dialog
        open={isDialogOpen}
        onOpenChange={(open) => !open && closeDialog()}
      >
        <DialogContent className="overflow-hidden bg-white p-0 sm:max-w-[650px]">
          <div className="relative h-[330px] w-full overflow-hidden rounded-xl lg:h-[400px]">
            {selectedItem && (
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                sizes="(max-width: 768px) 100vw, (min-width: 768px) 640px"
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
                className="absolute top-3 right-3 z-10 h-8 w-8 rounded-full bg-white/80 hover:bg-white"
                aria-label="Close"
              >
                <X className="h-4 w-4 text-black" />
              </Button>
            </DialogClose>
          </div>

          <div className="p-4">
            {selectedItem && (
              <h2 className="mt-2 text-xl font-semibold text-gray-900">
                {selectedItem.title}
              </h2>
            )}
            <div className="mt-2 space-y-2">
              <p className="text-lg font-semibold text-gray-900">
                {selectedItem?.price}
              </p>
              <p className="text-muted-foreground flex items-center gap-1 text-sm">
                <Heart size={14} className="fill-red-500 text-red-500" />
                {selectedItem?.likes} likes
              </p>
            </div>
            <DialogFooter className="mt-4 flex w-full items-center gap-4 border-t border-gray-200 px-4 py-4">
              {/* Quantity Selector - for lg screens */}
              <div className="hidden min-w-36 lg:flex">
                <div className="flex w-full items-center justify-between gap-1 rounded-md border border-gray-300 bg-white">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-11 flex-1"
                    title="Decrease quantity"
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
                    className="h-11 flex-1"
                    title="Increase quantity"
                    onClick={increaseQty}
                  >
                    <Plus className="h-4 w-4 text-gray-600" />
                  </Button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <Button
                className="flex flex-1 items-center justify-between bg-[#B90606] p-5 text-white hover:bg-[#a00505]"
                onClick={closeDialog}
              >
                <span>Add {quantity === 1 ? "item" : `${quantity} items`}</span>{" "}
                <span> {totalPrice}</span>
              </Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>

      <CardList />
    </section>
  );
};

export default PopularMenu;
