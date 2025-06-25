"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "./(section)/Hero";
import TableBookingV2 from "./(section)/TableBooking";
import Footer from "@/components/Footer";
import BookingInfoSection from "./(section)/BookingInfo";

const Page = () => {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-grow">
        <Hero onBookClick={() => setShowBooking(true)} />
        {showBooking ? <TableBookingV2 /> : <BookingInfoSection />}
      </main>

      <Footer />
    </div>
  );
};

export default Page;
