"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Search, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const PickupDeliveryInfo = () => {
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
    <div className="flex flex-col gap-4 px-4 sm:px-6 md:px-10 xl:px-0">
      {/* Mobile Tabs */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <Tabs defaultValue={selectedTab}>
          <TabsList className="bg-muted mt-2 flex w-full max-w-60 gap-1 rounded-xl bg-[rgb(235,235,236)] p-1 py-6 sm:mt-0">
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
          <div className="flex h-[100vh] flex-col bg-white md:h-[80vh]">
            {/* Header */}
            <div className="flex items-center justify-between p-6 md:p-8">
              <DialogHeader>
                <DialogTitle className="text-xl md:text-2xl lg:text-3xl">
                  Select location
                </DialogTitle>
              </DialogHeader>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="rounded-full border p-2"
              >
                <X className="h-4 w-4" />
              </button>
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

                <div className="max-h-[300px] overflow-y-auto px-6 sm:max-h-none md:px-8">
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

      {/* Desktop Layout */}
      <div className="hidden gap-8 rounded-xl border border-gray-400 p-4 md:flex">
        <div className="h-[166px] w-[256px] overflow-hidden rounded-md">
          <Image
            src="https://static-maps.ordersave.com/?styleKey=202504&width=256&height=166&zoomLevel=14.5&lat=36.0218229&lon=-115.0486843&w=640&q=80"
            alt="Map"
            width={256}
            height={166}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div>
            <div className="text-muted-foreground flex items-center gap-2 text-sm">
              <p>Pickup address</p>
              <span className="text-primary">·</span>
              <Button
                variant="link"
                className="text-primary h-auto p-0 text-sm underline-offset-2"
              >
                Change
              </Button>
            </div>
            <h4 className="mt-1 text-lg font-bold">
              1420 W Horizon Ridge Pkwy
            </h4>
            <p className="text-sm">Metro Pizza - Green Valley</p>
          </div>
          <div className="text-muted-foreground mt-4 flex gap-8 text-sm">
            <div>
              <p className="text-primary font-semibold">Pickup time</p>
              <p>May 26, 11:00 AM</p>
            </div>
            <div>
              <p className="text-primary font-semibold">Status</p>
              <p>Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickupDeliveryInfo;
