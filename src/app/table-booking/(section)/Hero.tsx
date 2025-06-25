"use client";

import { CheckIcon } from "lucide-react";
import React from "react";

interface HeroProps {
  onBookClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section className="flex min-h-[500px] w-full flex-col items-center justify-center gap-6 bg-[url('/images/table-booking/Hero.jpg')] bg-cover bg-[center_bottom] bg-no-repeat text-[1.5rem] leading-[110%]">
      <div className="group relative">
        <button
          className="flex items-center gap-3 rounded bg-[#33bb60] px-6 py-3 text-[18px] text-white transition-all duration-300 hover:bg-[#2aa355] hover:shadow-lg active:scale-95 active:bg-[#1e8a4a]"
          onClick={onBookClick}
        >
          Book Now
          <CheckIcon className="h-6 w-6 text-white transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
};

export default Hero;