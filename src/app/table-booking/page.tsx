"use client";

import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "./(section)/Hero";
import TableBookingV2 from "./(section)/TableBooking";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <TableBookingV2 />
      </main>

      <Footer />
    </div>
  );
};

export default Page;
