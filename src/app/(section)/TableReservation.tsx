import { ArrowRightIcon } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const TableReservation = () => {
  return (
    <section className="flex flex-col items-center justify-between gap-10 bg-black px-4 py-10 md:flex-row md:py-16">
      <div className="relative flex h-[350px] w-full justify-center sm:h-[400px] md:h-[500px] md:w-1/2">
        <Image
          src="/images/table-booking/img.png"
          alt="Table Reservation"
          className="object-cover"
          fill
          sizes="(max-width: 768px) 80vw, 90vw"
          priority
        />
      </div>
      <div className="w-full px-2 text-center md:w-1/2 md:pl-10 md:text-left">
        <h2 className="font-oswald mb-4 bg-gradient-to-b from-[#FFCA4E] to-[#191616] bg-clip-text text-3xl font-light text-transparent uppercase sm:text-4xl md:text-5xl">
          Reserve Table
        </h2>
        <p className="font-manrope mx-auto mb-6 max-w-[90%] text-[16px] leading-[1.6] font-light tracking-[0.03em] text-[#7E6C53] sm:text-[18px] md:mx-0">
          At Layla, our private and group dining options create an intimate
          setting perfect for any occasion, from joyous celebrations to
          meaningful business gatherings. Each space is thoughtfully designed to
          offer warmth, privacy, and comfort, allowing you and your guests to
          savor every moment. With personalized service and curated menus
          inspired by the rich flavors of Lebanon and Syria, we ensure a
          seamless and memorable dining experience for groups of all sizes.
        </p>

        <div className="flex justify-center md:justify-start">
          <Link href={"/table-booking"}>
            <button
              style={{ border: "1px solid #D5A859" }}
              className="bg-gold flex items-center gap-2 px-6 py-3 text-white uppercase transition hover:bg-yellow-600"
            >
              Book Now
              <ArrowRightIcon className="h-5 w-5 text-white" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TableReservation;
