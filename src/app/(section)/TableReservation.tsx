import { ArrowRightIcon } from "lucide-react";
import React from "react";
import Image from "next/image";

const TableReservation = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-black px-4 py-10 md:py-16 gap-10">
<div className="w-full md:w-1/2 flex justify-center relative h-[350px] sm:h-[400px] md:h-[500px]">
  <Image
    src="/images/table-booking/img.png"
    alt="Table Reservation"
    className="object-cover"
    fill
    sizes="(max-width: 768px) 80vw, 90vw"
    priority
  />
</div>
      <div className="w-full md:w-1/2 text-center md:text-left md:pl-10 px-2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl uppercase text-transparent font-oswald font-light mb-4 bg-clip-text bg-gradient-to-b from-[#FFCA4E] to-[#191616]">
          Reserve Table
        </h2>
        <p className="font-manrope text-[#7E6C53] text-[16px] sm:text-[18px] font-light leading-[1.6] tracking-[0.03em] mb-6 max-w-[90%] mx-auto md:mx-0">
          At Layla, our private and group dining options create an intimate
          setting perfect for any occasion, from joyous celebrations to
          meaningful business gatherings. Each space is thoughtfully designed to
          offer warmth, privacy, and comfort, allowing you and your guests to
          savor every moment. With personalized service and curated menus
          inspired by the rich flavors of Lebanon and Syria, we ensure a
          seamless and memorable dining experience for groups of all sizes.
        </p>

        <div className="flex justify-center md:justify-start">
          <button
            style={{ border: "1px solid #D5A859" }}
            className="bg-gold uppercase text-white px-6 py-3 flex items-center gap-2 hover:bg-yellow-600 transition"
          >
            Book Now
            <ArrowRightIcon className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TableReservation;
