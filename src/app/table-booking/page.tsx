"use client";

import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "./(section)/Hero";
import TableBookingV2 from "./(section)/TableBooking";

const Page = () => {
  return (
    <div>
      <Navbar />

      <Hero />

      <TableBookingV2 />
    </div>
  );
};

export default Page;
