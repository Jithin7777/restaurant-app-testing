"use client";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { Dialog } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import useIsMobile from "@/hooks/UseIsMobile";
import LocationDialogContent from "@/app/menu/(section)/LocationDialogContent";
import { useLocation } from "@/context/LocationContext";

interface CartSheetProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  inNavbar?: boolean;
}

const CartSheet: React.FC<CartSheetProps> = ({
  isOpen,
  setIsOpen,
  inNavbar,
}) => {
  const isMobile = useIsMobile();
  const [selectedTab, setSelectedTab] = useState("pickup");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [expandedLocation, setExpandedLocation] = useState<string | null>(null);
  const { selectedLocation, setSelectedLocation, locations } = useLocation();

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

  // const selectedLocationObj = locations.find(
  //   (loc) => loc.id === selectedLocation
  // );

  // Load selected location from localStorage on mount
  useEffect(() => {
    const storedLocation = localStorage.getItem("selectedLocation");
    if (storedLocation) {
      setSelectedLocation(storedLocation);
    }
  }, []);

  // Save selected location to localStorage whenever it changes
  useEffect(() => {
    if (selectedLocation) {
      localStorage.setItem("selectedLocation", selectedLocation);
    } else {
      localStorage.removeItem("selectedLocation");
    }
  }, [selectedLocation]);

  const handleLocationSelect = (id: string) => {
    setSelectedLocation(id);
    setExpandedLocation(expandedLocation === id ? null : id);
  };

  const handleViewMenu = () => {
    if (selectedLocation) {
      setIsDialogOpen(false);
      router.push("/menu");
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <div className="hidden md:block">
        {inNavbar && (
          <SheetTrigger>
            <div className="relative">
              <ShoppingCart className="h-7 w-7" />
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
                {totalCartCount}
              </span>
            </div>
          </SheetTrigger>
        )}
      </div>
      <SheetContent
        side={isMobile ? "bottom" : "right"}
        className={`mt-5 flex transform flex-col bg-white text-black transition-all duration-500 ease-in-out md:mb-5 ${isMobile ? "h-[90vh] w-full rounded-t-3xl px-4" : "h-[calc(100vh-35px)] !max-w-[550px] rounded-4xl sm:!w-[500px] md:mr-2"}`}
      >
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
          className={`flex-1 overflow-y-auto transition-opacity delay-150 duration-300 hide-scrollbar md:px-2 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col px-4 sm:px-6 md:px-10 xl:px-10">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <Tabs defaultValue={selectedTab}>
                <TabsList className="bg-muted mt-2 flex w-full max-w-xl gap-1 rounded-xl bg-[rgb(235,235,236)] p-1 py-5 sm:mt-0 md:py-6">
                  <TabsTrigger
                    value="pickup"
                    className="flex-1 py-4 text-lg data-[state=active]:bg-white data-[state=active]:text-black md:py-5"
                    onClick={() => handleTabClick("pickup")}
                  >
                    Pickup
                  </TabsTrigger>
                  <TabsTrigger
                    value="delivery"
                    className="flex-1 py-4 text-lg data-[state=active]:bg-white data-[state=active]:text-black md:py-5"
                    onClick={() => handleTabClick("delivery")}
                  >
                    Delivery
                  </TabsTrigger>
                </TabsList>
              </Tabs>
              <LocationDialogContent
                selectedTab={selectedTab}
                onTabChange={handleTabClick}
                selectedLocation={selectedLocation}
                onLocationSelect={handleLocationSelect}
                expandedLocation={expandedLocation}
                locations={locations}
                onClose={() => setIsDialogOpen(false)}
                onViewMenu={handleViewMenu}
              />{" "}
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
                <button
                  className="text-mercury-ui-text-base border-b p-0 text-black"
                  onClick={() => setIsDialogOpen(true)}
                >
                  Change
                </button>
              </div>
              {selectedLocation && (
                <>
                  <p className="font-bold">
                    {locations
                      .find((loc) => loc.id === selectedLocation)
                      ?.address.split(",")[0] || "Address not available"}
                  </p>
                  <p className="text-gray-600">
                    {locations.find((loc) => loc.id === selectedLocation)
                      ?.name || "Name not available"}
                  </p>
                </>
              )}
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
                  {cartItem.extras?.map((extra, j) => {
                    const extraPrice = parseFloat(extra.item?.price);
                    const extraTotal = extraPrice * extra.quantity;

                    return (
                      <div
                        key={`extra-${index}-${j}`}
                        className="flex flex-col gap-4"
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
                                <div className="flex items-center gap-1 rounded-md border border-gray-200 bg-white">
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
            })
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
              onClick={() => router.push("/checkout")}
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
