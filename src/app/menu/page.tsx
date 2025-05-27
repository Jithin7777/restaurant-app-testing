import Navbar from "@/components/Navbar";
import React from "react";
import SidebarNav from "./(section)/SidebarNav";
import PickupDeliveryInfo from "./(section)/PickupDeliveryInfo";
import Menu from "./(section)/Menu";

const page = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="fixed top-0 z-50 h-16 w-full bg-gray-50 md:bg-transparent">
        <Navbar />
      </div>

      <div className="hide-scrollbar mt-48 flex flex-1 flex-col md:mt-20 xl:flex-row">
        <div className="hide-scrollbar fixed top-0 z-40 mt-16 w-full bg-gray-50 md:hidden">
          <div className="overflow-x-auto px-4 py-2 whitespace-nowrap">
            <SidebarNav />
          </div>
        </div>

        <div className="hide-scrollbar fixed hidden h-[calc(100dvh-4rem)] w-72 overflow-y-auto md:block">
          <div className="hide-scrollbar p-4">
            <SidebarNav />
          </div>
        </div>

        <div className="hide-scrollbar mt-8 flex-1 overflow-x-hidden md:mt-0 md:ml-56 xl:flex-row">
          <div className="hide-scrollbar mx-auto max-w-5xl overflow-x-hidden px-4 py-6 md:pt-8">
            <PickupDeliveryInfo />
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
