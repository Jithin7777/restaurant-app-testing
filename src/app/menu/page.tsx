import Navbar from "@/components/Navbar";
import React from "react";
import SidebarNav from "./(section)/SidebarNav";
import PickupDeliveryInfo from "./(section)/PickupDeliveryInfo";
import Menu from "./(section)/Menu";

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar */}
    <div className="fixed top-0 z-50 h-16 w-full bg-gray-50 md:bg-transparent">
        <Navbar />
      </div>

      {/* Main Content Area */}
      <div className="hide-scrollbar mt-48 flex flex-1 flex-col md:mt-20 lg:flex-row">
        
        {/* Mobile Sidebar (search fixed, categories scrollable) */}
        <div className="fixed top-0 pt-24 z-40 w-full bg-gray-50 px-4 py-2 md:hidden">
          <SidebarNav />
        </div>

        {/* Responsive Desktop Sidebar */}
        <div className={`
          hide-scrollbar fixed hidden h-[calc(100dvh-4rem)] overflow-y-auto
          md:block md:top-20
          md:w-full md:h-auto md:border-b md:bg-gray-50
          lg:w-72 lg:h-[calc(100dvh-4rem)] lg:border-b-0 lg:bg-transparent
        `}>
          <div className="p-4">
            <SidebarNav />
          </div>
        </div>

        {/* Main Content */}
        <div className={`
          hide-scrollbar mt-8 flex-1 overflow-x-hidden
          md:mt-72
          
          lg:ml-72 lg:mt-0
        `}>
          <div className="mx-auto max-w-5xl  py-6 md:pt-8">
            <PickupDeliveryInfo />
            <Menu />
                       

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Page;
