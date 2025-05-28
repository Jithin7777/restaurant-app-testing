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
    <div className="flex flex-col gap-4 px-4 sm:px-6 md:px-10 xl:px-10">
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
          <div className="flex h-[90vh] flex-col bg-white md:h-[80vh]">
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

<div className="flex w-full gap-8 rounded-mercury-ui-sm border border-mercury-ui-divider p-4">
  {/* Map Image - visible on md and up */}
  <div className="bg-transparent overflow-clip rounded-mercury-ui-md relative hidden h-[166px] w-[256px] shrink-0 md:block">
    <img
      alt="Metro Pizza - Green Valley map"
      loading="lazy"
      width="256"
      height="166"
      decoding="async"
      srcSet="https://static-maps.ordersave.com/?styleKey=202504&width=256&height=166&zoomLevel=14.5&lat=36.0218229&lon=-115.0486843&w=256&q=80 1x, https://static-maps.ordersave.com/?styleKey=202504&width=256&height=166&zoomLevel=14.5&lat=36.0218229&lon=-115.0486843&w=640&q=80 2x"
      src="https://static-maps.ordersave.com/?styleKey=202504&width=256&height=166&zoomLevel=14.5&lat=36.0218229&lon=-115.0486843&w=640&q=80"
      style={{ color: "transparent", maxWidth: "100%" }}
    />
  </div>

  {/* Address and Time Info */}
  <div className="flex w-full">
    {/* Desktop View */}
    <div className=" hidden w-full md:flex">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <p className="text-mercury-ui-text-base font-mercury-ui-secondary text-mercury-ui-secondary">
              Pickup address
            </p>
            <span className="text-mercury-ui-text-primary">·</span>
            <button className="text-mercury-ui-text-base text-mercury-ui-primary font-mercury-ui-secondary border-b border-mercury-ui-text-primary p-0">
              Change
            </button>
          </div>
          <h4 className="text-mercury-ui-title-lg md:text-mercury-ui-title-xl lg:text-mercury-ui-title-2xl text-mercury-ui-primary font-mercury-ui-primary hidden md:block">
            1420 W Horizon Ridge Pkwy
          </h4>
          <p className="text-mercury-ui-text-base text-mercury-ui-secondary font-mercury-ui-secondary">
            Metro Pizza - Green Valley
          </p>
        </div>
        <div className="flex">
          <div className="flex flex-col border-r pr-4">
            <p className="text-mercury-ui-text-base text-mercury-ui-primary font-bold font-mercury-ui-secondary">
              Pickup time
            </p>
            <div className="flex gap-1">
              <div className="flex items-center gap-1">
                <span className="text-mercury-ui-text-base font-mercury-ui-secondary text-mercury-ui-secondary">
                  May 30
                </span>
                <span className="text-mercury-ui-text-primary">·</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-mercury-ui-text-base font-mercury-ui-secondary text-mercury-ui-secondary">
                  12:00 PM PDT
                </span>
              </div>
            </div>
          </div>
          <div className="flex pl-4">
            <div className="flex flex-col border-t pt-4 md:border-t-0 md:pt-0">
              <div className="flex">
                <p className="text-mercury-ui-text-base text-mercury-ui-primary font-bold font-mercury-ui-secondary hidden md:block">
                  Closed
                </p>
              </div>
              <div className="flex w-full items-center justify-between gap-2 md:justify-normal">
                <p className="text-mercury-ui-text-base font-mercury-ui-secondary text-mercury-ui-secondary hidden md:block">
                  Opens at 11:00 AM PDT
                </p>
                <div className="block md:hidden">
                  <span className="text-mercury-ui-text-base text-mercury-ui-primary font-bold font-mercury-ui-secondary">
                    Opening&nbsp;
                  </span>
                  <span className="text-mercury-ui-text-base text-mercury-ui-primary font-mercury-ui-secondary">
                    at 11:00 AM PDT
                  </span>
                </div>
                <span className="hidden text-mercury-ui-text-primary md:block">·</span>
                <button type="button">
                  <div className="flex items-center gap-1">
                    <p className="text-mercury-ui-text-base text-mercury-ui-primary font-mercury-ui-secondary border-b border-mercury-ui-text-primary p-0">
                      See Hours
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Mobile View */}
    <div className="flex w-full md:hidden">
      <div className="flex w-full flex-col gap-4">
        <div className="flex w-full flex-col">
          <div className="flex w-full justify-between">
            <div className="flex gap-1">
              <p className="text-mercury-ui-text-base font-mercury-ui-secondary text-mercury-ui-secondary capitalize">
                pickup
              </p>
              <span className="text-mercury-ui-text-primary">·</span>
              <div className="flex items-center gap-1">
                <span className="text-mercury-ui-text-base font-mercury-ui-secondary text-mercury-ui-secondary">
                  May 30
                </span>
                <span className="text-mercury-ui-text-primary">·</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-mercury-ui-text-base font-mercury-ui-secondary text-mercury-ui-secondary">
                  12:00 PM PDT
                </span>
              </div>
            </div>
            <button className="text-mercury-ui-text-base text-mercury-ui-primary font-mercury-ui-secondary border-b border-mercury-ui-text-primary p-0">
              Change
            </button>
          </div>
          <p className="text-mercury-ui-text-base text-mercury-ui-primary font-bold font-mercury-ui-secondary">
            1420 W Horizon Ridge Pkwy
          </p>
          <p className="text-mercury-ui-text-base font-mercury-ui-secondary text-mercury-ui-secondary">
            Metro Pizza - Green Valley
          </p>
        </div>
        <div className="flex flex-col border-t pt-4">
          <div className="flex">
            <p className="text-mercury-ui-text-base text-mercury-ui-primary font-bold font-mercury-ui-secondary hidden md:block">
              Closed
            </p>
          </div>
          <div className="flex w-full items-center justify-between gap-2">
            <p className="hidden md:block text-mercury-ui-text-base font-mercury-ui-secondary text-mercury-ui-secondary">
              Opens at 11:00 AM PDT
            </p>
            <div className="block md:hidden">
              <span className="text-mercury-ui-text-base text-mercury-ui-primary font-bold font-mercury-ui-secondary">
                Opening&nbsp;
              </span>
              <span className="text-mercury-ui-text-base text-mercury-ui-primary font-mercury-ui-secondary">
                at 11:00 AM PDT
              </span>
            </div>
            <span className="hidden text-mercury-ui-text-primary md:block">·</span>
            <button type="button">
              <div className="flex items-center gap-1">
                <p className="text-mercury-ui-text-base text-mercury-ui-primary font-mercury-ui-secondary border-b border-mercury-ui-text-primary p-0">
                  See Hours
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default PickupDeliveryInfo;
