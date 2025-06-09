"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Calendar, Search, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PickupDeliveryInfo = () => {
  const [selectedTab, setSelectedTab] = useState("pickup");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [expandedLocation, setExpandedLocation] = useState<string | null>(null);
  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
    setIsDialogOpen(true);
  };

  const handleLocationSelect = (id: string) => {
    setSelectedLocation(id);
    setExpandedLocation(expandedLocation === id ? null : id);
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
                        <div className="flex flex-col">
                          <button
                            className="flex w-full items-center justify-between gap-2 py-4 text-left focus:outline-none"
                            role="radio"
                            aria-checked={selectedLocation === location.id}
                            onClick={() => handleLocationSelect(location.id)}
                          >
                            <div className="flex flex-col gap-1">
                              <label htmlFor={location.id}>
                                <p className="font-medium text-gray-900">
                                  {location.name}
                                </p>
                              </label>
                              <p className="text-sm text-gray-500">
                                {location.status}
                              </p>
                              <p className="text-sm text-gray-500">
                                {location.address}
                              </p>
                            </div>
                            <div className="relative flex items-center gap-4">
                              <div
                                className={`relative h-6 w-6 flex-shrink-0 rounded-full focus-within:outline  focus-within:outline-offset-2 focus-within:outline-gray-900 ${
                                  selectedLocation === location.id
                                    ? "border-[8.75px] border-gray-900"
                                    : "border-2 border-gray-300"
                                }`}
                              >
                                <div
                                  className={`h-full w-full rounded-full ${
                                    selectedLocation === location.id
                                      ? "bg-gray-900"
                                      : "bg-transparent"
                                  }`}
                                />
                                <input
                                  className="sr-only"
                                  type="radio"
                                  checked={selectedLocation === location.id}
                                  onChange={() =>
                                    handleLocationSelect(location.id)
                                  }
                                  name="location"
                                  id={location.id}
                                />
                              </div>
                            </div>{" "}
                          </button>

                          {expandedLocation === location.id && (
                            <div className="overflow-hidden pb-4">
                              <div>
                                <div className="bg-transparent">
                                  <div
                                    role="group"
                                    dir="ltr"
                                    className="flex w-full flex-col gap-2 py-[2px]"
                                    aria-label="Select scheduled or as soon as possible"
                                    tabIndex={0}
                                    style={{ outline: "none" }}
                                  >
                                    <button
                                      type="button"
                                      role="radio"
                                      aria-checked="false"
                                      className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-offset-2 transition-colors hover:border-gray-300 focus:border-gray-900 focus:ring-[1.5px] focus:ring-gray-900 focus:outline f focus:outline-gray-900/10"
                                      aria-label="Schedule your pickup"
                                      tabIndex={0}
                                    >
                                      <div className="bg-transparent">
                                        <div className="flex w-full items-center justify-between">
                                          <div className="flex items-center gap-2 text-left">
                                            <Calendar className="h-5 w-5 text-gray-900" />
                                            <p className="font-medium text-gray-900">
                                              Schedule your pickup
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
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
                disabled={!selectedLocation}
                className={`flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 ${
                  selectedLocation
                    ? "bg-[#B90606] text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                <span>View Menu</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Address and Time Info */}

      <div className="flex w-full gap-8 rounded-xl border border-gray-400 p-4">
        {/* Map Image - visible on md and up */}
        <div className="rounded-mercury-ui-md relative hidden h-[166px] w-[256px] shrink-0 overflow-clip bg-transparent md:block">
          <Image
            alt="Metro Pizza - Green Valley map"
            src="https://static-maps.ordersave.com/?styleKey=202504&width=256&height=166&zoomLevel=14.5&lat=36.0218229&lon=-115.0486843&w=640&q=80"
            width={256}
            height={166}
            className="h-full w-full object-cover"
          />{" "}
        </div>

        <div className="flex w-full">
          {/* Desktop View */}
          <div className="hidden w-full md:flex">
            <div className="flex flex-col justify-between">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <p className="text-mercury-ui-text-base font-manrope text-mercury-ui-secondary">
                    Pickup address
                  </p>
                  <span className="text-mercury-ui-text-primary">·</span>
                  <button className="text-mercury-ui-text-base text-mercury-ui-primary font-mercury-ui-secondary border-mercury-ui-text-primary border-b p-0">
                    Change
                  </button>
                </div>
                <h2 className="font-inter lg:text-mercury-ui-title-2xl text-mercury-ui-primary font-mercury-ui-primary hidden text-2xl font-bold md:block">
                  1420 W Horizon Ridge Pkwy
                </h2>
                <p className="font-manrope">Metro Pizza - Green Valley</p>
              </div>
              <div className="flex">
                <div className="flex flex-col border-r pr-4">
                  <p className="font-manrope text-mercury-ui-primary font-mercury-ui-secondary font-bold">
                    Pickup time
                  </p>
                  <div className="flex gap-1">
                    <div className="flex items-center gap-1">
                      <span className="font-manrope">May 30</span>
                      <span className="text-mercury-ui-text-primary">·</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-manrope text-mercury-ui-text-base font-mercury-ui-secondary text-mercury-ui-secondary">
                        12:00 PM PDT
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex pl-4">
                  <div className="flex flex-col border-t pt-4 md:border-t-0 md:pt-0">
                    <div className="flex">
                      <p className="font-manrope text-mercury-ui-text-base text-mercury-ui-primary font-mercury-ui-secondary hidden font-bold md:block">
                        Closed
                      </p>
                    </div>
                    <div className="flex w-full items-center justify-between gap-2 md:justify-normal">
                      <p className="font-manrope text-mercury-ui-text-base font-mercury-ui-secondary text-mercury-ui-secondary hidden md:block">
                        Opens at 11:00 AM PDT
                      </p>
                      <div className="font-manrope block md:hidden">
                        <span className="text-mercury-ui-text-base text-mercury-ui-primary font-mercury-ui-secondary font-bold">
                          Opening&nbsp;
                        </span>
                        <span className="text-mercury-ui-text-base text-mercury-ui-primary font-mercury-ui-secondary">
                          at 11:00 AM PDT
                        </span>
                      </div>
                      <span className="text-mercury-ui-text-primary hidden md:block">
                        ·
                      </span>
                      <button type="button">
                        <div className="flex items-center gap-1">
                          <p className="border-mercury-ui-text-primary border-b p-0">
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
                    <p className="font-manrope capitalize">pickup</p>
                    <span className="text-mercury-ui-text-primary">·</span>
                    <div className="flex items-center gap-1">
                      <span className="font-manrope">May 30</span>
                      <span className="text-mercury-ui-text-primary">·</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-manrope">12:00 PM PDT</span>
                    </div>
                  </div>
                  <button className="text-mercury-ui-text-base text-mercury-ui-primary font-mercury-ui-secondary border-mercury-ui-text-primary border-b p-0">
                    Change
                  </button>
                </div>
                <p className="font-inter text-mercury-ui-text-base text-mercury-ui-primary font-mercury-ui-secondary font-bold">
                  1420 W Horizon Ridge Pkwy
                </p>
                <p className="font-manrope text-mercury-ui-text-base font-mercury-ui-secondary text-mercury-ui-secondary">
                  Metro Pizza - Green Valley
                </p>
              </div>
              <div className="flex flex-col border-t pt-4">
                <div className="flex">
                  <p className="font-manrope text-mercury-ui-text-base text-mercury-ui-primary font-mercury-ui-secondary hidden font-bold md:block">
                    Closed
                  </p>
                </div>
                <div className="flex w-full items-center justify-between gap-2">
                  <p className="font-manrope text-mercury-ui-text-base font-mercury-ui-secondary text-mercury-ui-secondary hidden md:block">
                    Opens at 11:00 AM PDT
                  </p>
                  <div className="block md:hidden">
                    <span className="font-manrope text-mercury-ui-text-base text-mercury-ui-primary font-mercury-ui-secondary font-bold">
                      Opening&nbsp;
                    </span>
                    <span className="font-manrope text-mercury-ui-text-base text-mercury-ui-primary font-mercury-ui-secondary">
                      at 11:00 AM PDT
                    </span>
                  </div>
                  <span className="text-mercury-ui-text-primary hidden md:block">
                    ·
                  </span>
                  <button type="button">
                    <div className="flex items-center gap-1">
                      <p className="font-manrope text-mercury-ui-text-base text-mercury-ui-primary font-mercury-ui-secondary border-mercury-ui-text-primary border-b p-0">
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
