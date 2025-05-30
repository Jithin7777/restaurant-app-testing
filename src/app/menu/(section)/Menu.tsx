"use client";

import Image from "next/image";
import { useEffect } from "react";
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
import { useRouter } from "next/navigation";
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
    setSelectedItem(null);
  }, []);

  return (
    <section
      id="popular"
      className="mt-10 flex flex-col gap-10 pb-28 px-4 md:px-10 xl:px-0 xl:ml-10"
    >
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-primary font-normal font-oswald text-xl  md:text-2xl lg:text-3xl">
          Popular
        </h2>
      </div>

      {/* Scrollable Menu */}
      <div className="hide-scrollbar flex snap-x snap-mandatory overflow-x-auto scroll-smooth gap-4">
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
                  onClick={() => handleItemOpen(item)}
                  aria-label={`Add ${item.title} to cart`}
                >
                  <Plus className="h-5 w-5 text-gray-800" />
                </Button>
              </div>
            </Card>

            <CardContent className="mt-2 space-y-1 px-2">
              <h3 className=" font-inter font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="text-muted-foreground font-bold flex items-center gap-1 text-sm">
                {item.price} ·{" "}
                <Heart size={14} className="fill-red-500 text-red-500" />
                {item.likes}
              </p>
            </CardContent>
          </div>
        ))}
      </div>

      {/* Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={(open) => !open && closeDialog()}>
        <DialogContent className="overflow-hidden bg-white p-0 sm:max-w-[650px] boder border-gray-300">
          <div className="relative h-[250px] sm:h-[330px] lg:h-[400px] w-full overflow-hidden rounded-xl">
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
              <DialogTitle className="sr-only ">
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
              <h2 className="mt-2 text-lg sm:text-xl font-semibold text-gray-900">
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

            <DialogFooter className="mt-4 flex flex-col sm:flex-row w-full gap-4 border-t border-gray-200 pt-4">
              {/* Quantity Selector */}
              <div className="flex w-full sm:w-auto justify-center sm:justify-start">
                <div className="flex items-center justify-between gap-1 rounded-md border border-gray-300 bg-white w-full max-w-[150px]">
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

              {/* Add to Cart Button */}
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
          </div>
        </DialogContent>
      </Dialog>

      <CardList />
    </section>
  );
};

export default PopularMenu;
