import React from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const PickupDeliveryInfo = () => {
  return (
    <div className="flex flex-col gap-4 px-4 sm:px-6 md:px-10 xl:px-0">
      {/* Pickup / Delivery Toggle */}
      <Tabs defaultValue="pickup" className="">
        <TabsList className="bg-muted flex w-full max-w-60 gap-1 rounded-xl bg-[rgb(235,235,236)] p-1 py-6">
          <TabsTrigger
            value="pickup"
            className="flex-1 py-5 text-lg data-[state=active]:bg-white data-[state=active]:text-black data-[state=inactive]:bg-transparent"
          >
            Pickup
          </TabsTrigger>
          <TabsTrigger
            value="delivery"
            className="flex-1 rounded-xl py-5 text-lg data-[state=active]:bg-white data-[state=active]:text-black data-[state=inactive]:bg-transparent"
          >
            Delivery
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Desktop / Tablet Layout */}
      <div className="border-muted boder-[rgb(214 214 214)] hidden w-full flex-row gap-8 rounded-xl border p-4 md:flex">
        {/* Map Image */}
<div className="rounded-mercury-ui-md h-[166px] w-[256px] shrink-0 overflow-hidden">
      <Image
        src="https://static-maps.ordersave.com/?styleKey=202504&width=256&height=166&zoomLevel=14.5&lat=36.0218229&lon=-115.0486843&w=640&q=80"
        alt="Metro Pizza - Green Valley map"
        width={256}
        height={166}
        className="h-full w-full object-cover"
        priority={false} // or true if you want it loaded early
      />
    </div>
        {/* Pickup Details */}
        <div className="flex w-full flex-col justify-between">
          <div className="font-opensans flex flex-col">
            <div className="flex items-center gap-2">
              <p className="text-muted-foreground font-inter text-sm">
                Pickup address
              </p>
              <span className="text-primary">·</span>
              <Button
                variant="link"
                className="text-primary font-inter h-auto p-0 text-sm underline-offset-2"
              >
                Change
              </Button>
            </div>

            <h4 className="font-oswald font-inter mt-1 text-lg font-bold md:mt-2 md:text-xl lg:text-2xl">
              1420 W Horizon Ridge Pkwy
            </h4>
            <p className="font-inter text-sm">Metro Pizza - Green Valley</p>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:gap-8">
            <div className="border-muted flex flex-col border-r pr-0 sm:pr-4">
              <p className="text-primary font-inter text-sm font-semibold">
                Pickup time
              </p>
              <div className="text-muted-foreground font-inter flex gap-1 text-sm">
                <span>May 26</span>
                <span className="text-primary">·</span>
                <span>11:45 AM PDT</span>
              </div>
            </div>

            <div className="border-muted flex flex-col border-t pt-4 pl-0 sm:border-t-0 sm:pt-0 sm:pl-4">
              <p className="text-primary font-inter hidden text-sm font-semibold md:block">
                Closed
              </p>
              <div className="flex w-full items-center justify-between gap-2 md:justify-normal">
                <p className="text-muted-foreground font-inter hidden text-sm md:block">
                  Opens at 11:00 AM PDT
                </p>
                <div className="block md:hidden">
                  <span className="text-primary font-inter text-sm font-semibold">
                    Opening&nbsp;
                  </span>
                  <span className="text-primary font-inter text-sm">
                    at 11:00 AM PDT
                  </span>
                </div>
                <Button
                  variant="link"
                  className="text-primary font-inter h-auto p-0 text-sm underline-offset-2"
                >
                  See Hours
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="border-muted flex w-full flex-col gap-4 rounded-xl border p-4 md:hidden">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="text-muted-foreground font-inter flex items-center gap-1 text-sm">
              <p className="font-inter capitalize">pickup</p>
              <span className="text-primary">·</span>
              <span>May 26</span>
              <span className="text-primary">·</span>
              <span>11:45 AM PDT</span>
            </div>
            <Button
              variant="link"
              className="text-primary font-inter h-auto p-0 text-sm underline-offset-2"
            >
              Change
            </Button>
          </div>
          <p className="text-sm font-semibold">1420 W Horizon Ridge Pkwy</p>
          <p className="text-muted-foreground font-inter text-sm">
            Metro Pizza - Green Valley
          </p>
        </div>

        <div className="border-muted flex flex-col gap-2 border-t pt-4">
          <p className="text-primary font-inter text-sm font-semibold">
            Closed
          </p>
          <div className="flex items-center justify-between gap-2">
            <div>
              <span className="text-primary font-inter text-sm font-semibold">
                Opening&nbsp;
              </span>
              <span className="text-primary font-inter text-sm">
                at 11:00 AM PDT
              </span>
            </div>
            <Button
              variant="link"
              className="text-primary font-inter h-auto p-0 text-sm underline-offset-2"
            >
              See Hours
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickupDeliveryInfo;
