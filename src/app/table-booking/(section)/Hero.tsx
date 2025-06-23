import { CheckIcon } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section className="flex min-h-[500px] w-full flex-col items-center justify-center gap-6 bg-[url('/images/table-booking/Hero.jpg')] bg-cover bg-[center_bottom] bg-no-repeat text-[1.5rem] leading-[110%]">
      <button className="flex items-center gap-3 rounded bg-[#33bb60] px-6 py-3 text-[18px] text-white">
        Book Now
        <CheckIcon className="h-6 w-6 text-white" />
      </button>
    </section>
  );
};

export default Hero;
