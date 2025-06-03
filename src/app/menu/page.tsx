import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import SidebarNav from "./(section)/SidebarNav";
import PickupDeliveryInfo from "./(section)/PickupDeliveryInfo";
import Menu from "./(section)/Menu";

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col lg:px-16">
      {/* Navbar */}
      <div className="fixed top-0 z-50 h-16 w-full bg-gray-50 md:bg-transparent">
        <Navbar />
      </div>

      {/* Main Content Area */}
      <div className="hide-scrollbar mt-48 flex flex-1 flex-col md:mt-20 lg:flex-row">
        {/* Mobile Sidebar (search fixed, categories scrollable) */}
        <div className="fixed top-0 z-40 w-full bg-gray-50 px-4 py-2 pt-24 md:hidden">
          <SidebarNav />
        </div>

        {/* Responsive Desktop Sidebar */}
        <div
          className={`hide-scrollbar hidden w-full overflow-x-auto md:block lg:fixed lg:top-20 lg:h-[calc(100dvh-4rem)] lg:w-72 lg:overflow-y-auto lg:border-b-0`}
        >
          <div className="flex w-max p-4 md:flex-row lg:w-auto lg:flex-col">
            <SidebarNav />
          </div>
        </div>

        {/* Main Content */}
        <div
          className={`hide-scrollbar mt-8 flex-1 overflow-x-hidden md:mt-16 lg:mt-0 lg:ml-72`}
        >
          <div className="mx-auto max-w-5xl py-6 md:pt-8">
            <PickupDeliveryInfo />
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
