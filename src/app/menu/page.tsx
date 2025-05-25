import Navbar from '@/components/Navbar'
import React from 'react'
import SidebarNav from './(section)/SidebarNav'
import PickupDeliveryInfo from './(section)/PickupDeliveryInfo'

const page = () => {
  return (
    <div>
      {/* Navbar on top */}
     <div className='bg-black w-full'> <Navbar /></div>

      {/* Centered container with max-width and horizontal margin */}
      <div className="max-w-full mx-auto px-4 py-6">
        {/* Flex container for sidebar and main content */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center">
          {/* Sidebar fixed width */}
          <div className="w-full md:w-[280px] mt-20">
            <SidebarNav />
          </div>

          {/* Main content takes remaining space */}
          <div className="flex-1 max-w-[900px] mt-6 md:mt-24">
            <PickupDeliveryInfo />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
