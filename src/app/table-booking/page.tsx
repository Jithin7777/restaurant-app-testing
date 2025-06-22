"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "./(section)/Hero";
import TableBookingV2 from "./(section)/TableBooking";

const Page = () => {
  const [showWidget, setShowWidget] = useState(false);


  return (
    <div>
      <Navbar />

      <Hero onBookNowClick={() => setShowWidget(true)} />

      {showWidget && (
        <>
          <TableBookingV2  />
        </>
      )}
    </div>
  );
};

export default Page;
