"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import { ArrowRight, Search, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";

const CartSheet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("pickup");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
    setIsDialogOpen(true);
  };

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
      <SheetTrigger>
        <ShoppingCart className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="mt-5 mb-5 flex h-[calc(100vh-35px)] w-full !max-w-[550px] transform flex-col rounded-4xl bg-white text-black transition-all duration-500 ease-in-out sm:!w-[500px] md:mr-2"
      >
        {/* Header */}
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

        {/* Main Content */}
        <div
          className={`flex-1 overflow-y-auto py-4 transition-opacity delay-150 duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Delivery Method Selector */}
          <div className="flex flex-col px-4 sm:px-6 md:px-10 xl:px-10">
            {/* Mobile Tabs */}
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
                  {/* Header */}
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

                  {/* Inner tabs */}
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

                  {/* Main Content Section */}
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
                      {/* Pickup content */}

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
                    // Delivery content
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

          {/* Location Info */}
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
          {/* Empty Cart Message */}
          <div className="flex flex-1 items-center justify-center">
            <p className="text-gray-500">No items in your cart</p>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`transition-opacity delay-200 duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <hr className="border-t border-gray-200" />
          <div className="mr-3 ml-3 flex justify-between py-4">
            <p className="text-lg">Subtotal</p>
            <p className="text-lg">$0.00</p>
          </div>
          <div className="mr-3 ml-3">
            <Button
              disabled
              className="mb-9 w-full rounded-md bg-gray-200 py-3 text-gray-500 transition-colors hover:bg-gray-300"
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
