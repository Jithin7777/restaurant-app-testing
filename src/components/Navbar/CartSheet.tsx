"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { ArrowRight, Search, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import useIsMobile from "@/hooks/UseIsMobile";

interface CartSheetProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const CartSheet: React.FC<CartSheetProps> = ({ isOpen, setIsOpen }) => {
  const isMobile = useIsMobile(); 
  const [selectedTab, setSelectedTab] = useState("pickup");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const {
    cartItems,
    increaseCartQty,
    decreaseCartQty,
    increaseExtraQty,
    decreaseExtraQty,
    subtotal,
  } = useCart();

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
    setIsDialogOpen(true);
  };

  const router = useRouter();

  const totalCartCount = cartItems.reduce((total, cartItem) => {
    const mainQty = cartItem.quantity;
    const extrasQty =
      cartItem.extras?.reduce((eTotal, extra) => eTotal + extra.quantity, 0) ||
      0;
    return total + mainQty + extrasQty;
  }, 0);

  const locations = [
    {
      id: "nWqvW8vTEknD",
      name: "Metro Pizza - Green Valley",
      status: "Closed until 11:00 AM PDT",
      address: "1420 W Horizon Ridge Pkwy, Henderson, NV 89012, USA",
    },
    {
      id: "sCxs2Rm88CU2",
      name: "Metro Pizza - Tropicana",
      status: "Closed until 11:00 AM PDT",
      address: "1395 E Tropicana Ave, Las Vegas, NV 89119, USA",
    },
    {
      id: "9qdPXDuXyKA0",
      name: "Metro Pizza - Decatur",
      status: "Closed until 11:00 AM PDT",
      address: "4001 S Decatur Blvd, Las Vegas, NV 89103, USA",
    },
    {
      id: "FcuzBPk5UhUP",
      name: "Metro Pizza - Northwest",
      status: "Closed until 11:00 AM PDT",
      address: "6720 Sky Pointe Dr, Las Vegas, NV 89131, USA",
    },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <div className="hidden md:block">
        <SheetTrigger>
          <div className="relative">
            <ShoppingCart className="h-7 w-7" />
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
              {totalCartCount}
            </span>
          </div>
        </SheetTrigger>{" "}
      </div>
      <SheetContent
        side={isMobile? "bottom" :"right"}
 className={`mt-5 md:mb-5 transform flex flex-col bg-white text-black transition-all duration-500 ease-in-out
    ${isMobile ? "h-[90vh] w-full   rounded-t-3xl px-4" : "h-[calc(100vh-35px)] !max-w-[550px] sm:!w-[500px] rounded-4xl md:mr-2"}`
    }      >
        <SheetHeader
          className={`transition-opacity delay-100 duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <SheetTitle
            className={`text-3xl transition-transform duration-300 ${
              isOpen ? "translate-y-0" : "translate-y-4"
            }`}
          >
            Cart
          </SheetTitle>
        </SheetHeader>

        <div
          className={`flex-1 overflow-y-auto py-4 transition-opacity delay-150 duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col px-4 sm:px-6 md:px-10 xl:px-10">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <Tabs defaultValue={selectedTab}>
                <TabsList className="bg-muted mt-2 flex w-full max-w-xl gap-1 rounded-xl bg-[rgb(235,235,236)] p-1 py-6 sm:mt-0">
                  <TabsTrigger
                    value="pickup"
                    className="flex-1 py-5 text-lg data-[state=active]:bg-white data-[state=active]:text-black"
                    onClick={() => handleTabClick("pickup")}
                  >
                    Pickup
                  </TabsTrigger>
                  <TabsTrigger
                    value="delivery"
                    className="flex-1 py-5 text-lg data-[state=active]:bg-white data-[state=active]:text-black"
                    onClick={() => handleTabClick("delivery")}
                  >
                    Delivery
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              <DialogContent className="max-w-[100vw] overflow-hidden rounded-none p-0 md:max-w-2xl md:rounded-xl">
                <div className="flex h-[90vh] flex-col bg-white md:h-[80vh]">
                  <div className="flex items-center justify-between p-6 md:p-8">
                    <DialogHeader>
                      <DialogTitle className="text-xl md:text-2xl lg:text-3xl">
                        Select location
                      </DialogTitle>
                    </DialogHeader>
                    <Button
                      onClick={() => setIsDialogOpen(false)}
                      className="rounded-full border p-2"
                    >
                      <X className="h-8 w-8" />
                    </Button>
                  </div>

                  <div className="px-6 pb-4 md:px-8">
                    <div className="flex rounded-lg bg-gray-100 p-1">
                      {["pickup", "delivery"].map((type) => (
                        <button
                          key={type}
                          className={`flex flex-1 items-center justify-center gap-2 rounded-md py-3 ${
                            selectedTab === type ? "bg-white shadow" : ""
                          }`}
                          onClick={() => setSelectedTab(type)}
                        >
                          <span className="capitalize">{type}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {selectedTab === "pickup" ? (
                    <>
                      <div className="px-6 pb-4 md:px-8">
                        <div className="relative">
                          <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                          <input
                            type="search"
                            placeholder="Find the closest location for your order"
                            className="w-full rounded-lg border border-gray-200 py-3 pr-4 pl-10 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="max-h-[350px] overflow-y-auto px-6 sm:max-h-none md:px-8">
                        <fieldset className="space-y-4">
                          {locations.map((location) => (
                            <div key={location.id} className="space-y-4">
                              <button className="flex w-full items-center justify-between gap-4 py-4 text-left">
                                <div className="flex-1">
                                  <p className="font-medium">{location.name}</p>
                                  <p className="text-sm text-gray-500">
                                    {location.status}
                                  </p>
                                  <p className="text-sm text-gray-500">
                                    {location.address}
                                  </p>
                                </div>
                                <div className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-300">
                                  <div className="h-3 w-3 rounded-full bg-transparent" />
                                </div>
                              </button>
                              <hr className="border-gray-200" />
                            </div>
                          ))}
                        </fieldset>
                      </div>
                    </>
                  ) : (
                    <div className="flex h-full flex-col overflow-hidden">
                      <div className="flex flex-col px-6 md:px-8">
                        <div className="relative flex">
                          <div className="relative flex w-full flex-col gap-y-1">
                            <div className="relative">
                              <Search className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
                              <input
                                type="search"
                                placeholder="Delivery address"
                                className="w-full rounded-lg border border-gray-300 bg-white py-3 pr-4 pl-10 focus:ring focus:outline-none"
                                name="delivery-location"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="mt-4">
                          <input
                            type="text"
                            placeholder="Apartment / Unit number"
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:ring focus:outline-none"
                            name="unit-number"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="p-6 md:p-8">
                    <button
                      disabled
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-gray-200 px-4 py-3 text-gray-500"
                    >
                      <span>View Menu</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="mr-3 ml-2">
            <div className="mt-5 w-full rounded-md border border-gray-200 p-4">
              <div className="flex w-full justify-between">
                <div className="flex gap-1">
                  <p className="text-gray-600 capitalize">pickup</p>
                  <span>·</span>
                  <div className="flex items-center gap-1">
                    <span className="text-gray-600">Jun 1</span>
                    <span>·</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-gray-600">11:45 AM PDT</span>
                  </div>
                </div>
                <button className="border-b border-black p-0 text-blue-600">
                  Change
                </button>
              </div>
              <p className="font-bold">1395 East Tropicana Ave</p>
              <p className="text-gray-600">Metro Pizza - Tropicana</p>
            </div>
          </div>
          {cartItems.length === 0 ? (
            <div className="py-10 text-center text-base text-gray-600">
              Your cart is empty.
            </div>
          ) : (
            cartItems.map((cartItem, index) => {
              const mainItemPrice = parseFloat(cartItem.item.price);
              const itemTotal = mainItemPrice * cartItem.quantity;

              return (
                <div
                  key={`main-${index}`}
                  className="flex flex-col gap-4 px-4 py-3"
                >
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
                          <div className="flex items-center gap-1 rounded-md border mt-3 border-gray-200 bg-white">
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
                  {cartItem.extras?.map((extra, j) => {
                    const extraPrice = parseFloat(extra.item?.price);
                    const extraTotal = extraPrice * extra.quantity;

                    return (
                      <div
                        key={`extra-${index}-${j}`}
                        className=" flex flex-col gap-4"
                      >
                        <div
                          className="flex gap-4"
                          role="button"
                          title={`Click to edit ${extra.item?.title}`}
                        >
                          <div className="relative h-[46px] w-[46px] shrink-0 overflow-hidden rounded-md bg-gray-100">
                            <img
                              src={extra.item?.image || cartItem.item?.image}
                              alt={extra.item?.title}
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />
                          </div>
                          <div className="flex grow flex-col gap-1">
                            <div className="flex flex-col gap-1">
                              <p className="text-sm font-medium text-gray-900">
                                {extra.item?.title}
                              </p>
                            </div>
                            <div className="flex cursor-default items-center justify-between">
                              <div className="w-[145px]">
                                <div className="flex items-center gap-1  rounded-md border border-gray-200 bg-white">
                                  <button
                                    className="flex h-11 flex-1 items-center justify-center "
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
            }
          )
          )}
        </div>

        <div
          className={`transition-opacity delay-200 duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <hr className="border-t border-gray-200" />
          <div className="mr-3 ml-3 flex justify-between py-4">
            <p className="text-lg">Subtotal</p>
            <p className="text-lg">${subtotal}</p>
          </div>
          <div className="mr-3 ml-3">
            <Button
              disabled={cartItems.length === 0}
              onClick={() => router.push("/payment")}
              className={`mb-9 w-full rounded-md py-3 transition-colors ${
                cartItems.length === 0
                  ? "bg-gray-200 text-gray-500"
                  : "bg-[#B90606] text-white hover:bg-[#a10505]"
              }`}
            >
              Go To Checkout
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
