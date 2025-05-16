import React from "react";
import { Instagram } from "lucide-react";

const ScrollUs = () => {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-32">
      <h2 className="text-4xl  md:text-6xl font-light text-center mb-16 font-oswald text-transparent bg-clip-text bg-gradient-to-b from-[#FFCA4E] to-[#191616] ">
        Scroll Us
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <img
          src="/images/scroll-us/img1.png"
          alt="Image 1"
          className="w-full h-68 object-cover"
        />

        <div className="flex flex-col items-center justify-center  text-white h-64 w-full rounded-md">
          <Instagram size={48} className="mt-10 text-[#E2B583]" />
          <p className="text-center uppercase pt-1 font-opensans text-sm md:text-base font-semibold text-[#E2B583]">
            @istanbulgrillculcheth
          </p>
        </div>

        <img
          src="/images/scroll-us/img3.png"
          alt="Image 3"
          className="w-full h-68 object-cover"
        />
        <img
          src="/images/scroll-us/img4.png"
          alt="Image 4"
          className="w-full h-68 object-cover rotate-10 "
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <img
          src="/images/scroll-us/img5.png"
          alt="Image 5"
          className="col-span-1 w-full h-68 object-cover"
        />
        <img
          src="/images/scroll-us/img6.png"
          alt="Image 6"
          className="col-span-2 w-full h-68 object-cover"
        />
        <img
          src="/images/scroll-us/img7.png"
          alt="Image 7"
          className="col-span-1 w-full h-68 object-cover"
        />
      </div>
    </section>
  );
};

export default ScrollUs;
