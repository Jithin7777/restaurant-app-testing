"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Dialog,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import LocationDialogContent from "./LocationDialogContent";

const PickupDeliveryInfo = () => {
  const [selectedTab, setSelectedTab] = useState("pickup");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [expandedLocation, setExpandedLocation] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const locations = [
    {
      id: "nWqvW8vTEknD",
      name: "Metro Pizza - Green Valley",
      slug: "green-valley",
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

  const selectedLocationObj = locations.find(
    (loc) => loc.id === selectedLocation,
  );

  // Load selected location from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLocation = localStorage.getItem("selectedLocation");
      console.log("Loaded from localStorage:", storedLocation);

      if (storedLocation) {
        // Verify the location exists
        const locationExists = locations.some(
          (loc) => loc.id === storedLocation,
        );
        console.log("Location exists:", locationExists);

        if (locationExists) {
          setSelectedLocation(storedLocation);
        } else {
          console.log("Location not found in list, clearing storage");
          localStorage.removeItem("selectedLocation");
        }
      }
      setIsLoading(false);
    }
  }, [locations]); // Add locations to dependencies

  useEffect(() => {
    if (typeof window !== "undefined" && !isLoading) {
      console.log("Saving to localStorage:", selectedLocation);
      if (selectedLocation) {
        localStorage.setItem("selectedLocation", selectedLocation);
      } else {
        localStorage.removeItem("selectedLocation");
      }
    }
  }, [selectedLocation, isLoading]);
  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
    setIsDialogOpen(true);
  };

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
                  <button
                    className="text-mercury-ui-text-base text-mercury-ui-primary font-mercury-ui-secondary border-mercury-ui-text-primary border-b p-0"
                    onClick={() => setIsDialogOpen(true)}
                  >
                    Change
                  </button>
                </div>
                <h2 className="font-inter lg:text-mercury-ui-title-2xl text-mercury-ui-primary font-mercury-ui-primary hidden text-2xl font-bold md:block">
                  {selectedLocationObj?.address?.split(",")[0]}
                </h2>
                <p className="font-manrope">
                  Metro Pizza{" "}
                  {selectedLocationObj?.name.replace("Metro Pizza", "")}
                </p>
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
                <div className="flex w-full items-center justify-between text-sm">
                  <div className="flex gap-1">
                    <p className="font-manrope capitalize">pickup</p>
                    <span className="text-mercury-ui-text-primary">·</span>
                    <div className="flex items-center gap-1">
                      <span className="font-manrope">May 30</span>
                      <span className="text-mercury-ui-text-primary">·</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-manrope">12:00 PM PDT</span>
                    </div>
                  </div>
                  <button
                    className="text-mercury-ui-text-base text-mercury-ui-primary font-mercury-ui-secondary border-mercury-ui-text-primary border-b p-0"
                    onClick={() => setIsDialogOpen(true)}
                  >
                    Change
                  </button>
                </div>
                <p className="font-inter text-mercury-ui-text-base text-mercury-ui-primary font-mercury-ui-secondary font-bold">
                  {selectedLocationObj?.address?.split(",")[0]}{" "}
                </p>
                <p className="font-manrope text-mercury-ui-text-base font-mercury-ui-secondary text-mercury-ui-secondary">
                  Metro Pizza{" "}
                  {selectedLocationObj?.name.replace("Metro Pizza", "")}{" "}
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
