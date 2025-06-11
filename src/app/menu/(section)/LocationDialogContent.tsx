"use client";

import React from "react";
import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X, Search, ArrowRight, Calendar } from "lucide-react";
import { ScheduleOrderDialog } from "./ScheduleOrder";

interface LocationDialogContentProps {
  selectedTab: string;
  onTabChange: (tab: string) => void;
  selectedLocation: string | null;
  onLocationSelect: (locationId: string) => void;
  expandedLocation: string | null;
  locations: { id: string; name: string; status: string; address: string }[];
  onClose: () => void;
  onViewMenu: () => void;
}

const LocationDialogContent: React.FC<LocationDialogContentProps> = ({
  selectedTab,
  onTabChange,
  selectedLocation,
  onLocationSelect,
  expandedLocation,
  locations,
  onClose,
  onViewMenu,
}) => {
    
  return (
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
            onClick={onClose}
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
                onClick={() => onTabChange(type)}
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
                        onClick={() => onLocationSelect(location.id)}
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
                            className={`relative h-6 w-6 flex-shrink-0 rounded-full focus-within:outline focus-within:outline-offset-2 focus-within:outline-gray-900 ${
                              selectedLocation === location.id
                                ? "border-[8.75px] border-gray-900"
                                : "border-2 border-gray-300"
                            }`}
                          >
                            <div
                              className={`h-full w-full rounded-full ${
                                selectedLocation === location.id
                                  ? "none"
                                  : "bg-transparent"
                              }`}
                            />
                            <input
                              className="sr-only"
                              type="radio"
                              checked={selectedLocation === location.id}
                              onChange={() => onLocationSelect(location.id)}
                              name="location"
                              id={location.id}
                            />
                          </div>
                        </div>
                      </button>

                      {expandedLocation === location.id && (
                        <div className="overflow-hidden pb-4">
                          <div className="bg-transparent">
                            <div
                              role="group"
                              className="flex w-full flex-col gap-2"
                              aria-label="Select scheduled or as soon as possible"
                              tabIndex={0}
                            >
                              <div
                                role="radio"
                                aria-checked="false"
                                className="w-full rounded-lg border border-gray-200 px-4 py-2 hover:border-gray-300 focus:border-gray-900 focus:ring-[1.5px] focus:ring-gray-900 focus:outline focus:outline-gray-900/10"
                              >
                                <div className="flex w-full items-center justify-between">
                                  <div className="flex items-center gap-0 text-left md:gap-2">
                                    <span>
                                      <Calendar className="h-6 w-6 text-gray-900" />
                                    </span>
                                    <ScheduleOrderDialog />
                                  </div>
                                </div>
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
            onClick={onViewMenu}
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
  );
};

export default LocationDialogContent;
