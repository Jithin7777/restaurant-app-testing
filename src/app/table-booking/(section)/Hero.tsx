import { CheckIcon } from "lucide-react";
import React from "react";


interface HeroProps{
  onBookNowClick:()=>void
}

const Hero:React.FC<HeroProps> = ({onBookNowClick}) => {



  return (
    <section className="flex min-h-[500px] w-full flex-col items-center justify-center gap-6 bg-[url('/images/table-booking/Hero.jpg')] bg-cover bg-[center_bottom] bg-no-repeat text-[1.5rem] leading-[110%]">
      <button  onClick={onBookNowClick} className="bg-[#33bb60] text-white text-[18px] py-3 px-6 flex items-center gap-3 rounded">
        Book Now
        <CheckIcon className="w-6 h-6 text-white" />
      </button>
    </section>
  );
};

export default Hero;
