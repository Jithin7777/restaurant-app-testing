"use client";

import Image from "next/image";
import { useEffect } from "react";
import type { MenuItem } from "@/types/menu-item.types";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Minus, Plus, X } from "lucide-react";
import CardList from "./CardList";
import { usePathname, useRouter } from "next/navigation";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useCart } from "@/context/CartContext";

const menuItems: MenuItem[] = [
  {
    id: "1",
    title: "Cheese Pizza (Lg)",
    price: "21.95",
    likes: 229,
    image: "/images/menu/img1.webp",
  },
  {
    id: "2",
    title: "Cheese Pizza (sm)",
    price: "11.00",
    likes: 120,
    image: "/images/menu/img1.webp",
  },
  {
    id: "3",
    title: "Cheese Pizza (sm)",
    price: "11.00",
    likes: 120,
    image: "/images/menu/img2.webp",
  },
];

const PopularMenu = () => {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);

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
    setSelectedItem(item); // Open the dialog by setting item
    setQuantity(1); // Reset quantity
    router.push(`${pathname}?item=${item.id}`, { scroll: false }); // Add ?item= to the URL
  };

  const closeDialog = () => {
    setSelectedItem(null);
    console.log("Closing dialog, current pathname:", pathname);
    console.log("Current search params:", window.location.search);

    router.replace(pathname, { scroll: false });
  };
  useEffect(() => {
    setSelectedItem(null);
  }, []);
  return (
    <section
      id="popular"
      className="mt-10 flex flex-col gap-10 px-4 pb-28 md:px-10 xl:ml-10 xl:px-0"
    >
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-primary font-oswald text-xl font-normal md:text-2xl lg:text-3xl">
          Popular
        </h2>
      </div>

      {/* Scrollable Menu */}
      <div className="hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth">
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
                sizes="100vw"
                priority={item.id === "1"}
              />
              <div className="absolute right-2 bottom-2 z-10">
                <Button
                  size="icon"
                  className="h-10 w-10 rounded-xl bg-white p-2 hover:bg-gray-100"
                  aria-label={`Add ${item.title} to cart`}
                  onClick={() => handleItemOpen(item)}
                >
                  <Plus className="h-5 w-5 text-gray-800" />
                </Button>
              </div>
            </Card>

            <CardContent className="mt-2 space-y-1 px-2">
              <h3 className="font-inter font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="text-muted-foreground flex items-center gap-1 text-sm font-bold">
                ${item.price} ·{" "}
                <Heart size={14} className="fill-red-500 text-red-500" />
                {item.likes}
              </p>
            </CardContent>
          </div>
        ))}
      </div>

      {/* Dialog */}
      <Dialog
        open={isDialogOpen}
        onOpenChange={(open) => {
          if (!open) {
            closeDialog();
          }
        }}
      >
        <DialogContent
          aria-labelledby="dialog-title"
          aria-describedby="dialog-desc"
          className="boder overflow-hidden border-gray-300 bg-white p-0 sm:max-w-[650px]"
        >
          <div className="relative h-[250px] w-full overflow-hidden rounded-xl sm:h-[330px] lg:h-[400px]">
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

            <Button
              variant="ghost"
              size="icon"
              className="absolute top-3 right-3 z-10 h-8 w-8 rounded-full bg-white/80 hover:bg-white"
              aria-label="Close"
              onClick={() => {
                // Add item to cart here if needed
                closeDialog();
              }}
            >
              <X className="h-4 w-4 text-black" />
            </Button>
          </div>

          <div className="p-4">
            {selectedItem && (
              <h2 className="mt-2 text-lg font-semibold text-gray-900 sm:text-xl">
                {selectedItem.title}
              </h2>
            )}
            <div className="mt-2 space-y-2">
              <p className="text-lg font-semibold text-gray-900">
                ${selectedItem?.price}
              </p>
              <p className="text-muted-foreground flex items-center gap-1 text-sm">
                <Heart size={14} className="fill-red-500 text-red-500" />
                {selectedItem?.likes} likes
              </p>
            </div>

            <DialogFooter className="mt-4 flex w-full flex-col gap-4 border-t border-gray-200 pt-4 sm:flex-row">
              {/* Quantity Selector */}
              <div className="flex w-full justify-center sm:w-auto sm:justify-start">
                <div className="flex w-full max-w-[150px] items-center justify-between gap-1 rounded-md border border-gray-300 bg-white">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 flex-1"
                    onClick={decreaseQty}
                    aria-label="Decrease quantity"
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
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4 text-gray-600" />
                  </Button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <Button
                className="w-full flex-1 bg-[#B90606] px-6 py-3 text-white hover:bg-[#a00505]"
                onClick={closeDialog}
              >
                <span className="flex w-full justify-between">
                  <span>
                    Add {quantity === 1 ? "item" : `${quantity} items`}
                  </span>
                  <span>{totalPrice}</span>
                </span>
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
