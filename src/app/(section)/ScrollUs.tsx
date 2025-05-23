import React from "react";
import { Instagram } from "lucide-react";

const ScrollUs = () => {
  return (
    <section className="bg-black px-4 py-16 text-white md:px-32">
      <h2 className="font-oswald mb-16 bg-gradient-to-b from-[#FFCA4E] to-[#191616] bg-clip-text text-center text-4xl font-light text-transparent md:text-6xl">
        Scroll Us
      </h2>

      <div className="mb-8 grid grid-cols-2 gap-6 md:grid-cols-4">
        <img
          src="/images/scroll-us/img1.png"
          alt="Image 1"
          className="h-68 w-full object-cover"
        />

        <div className="flex h-64 w-full flex-col items-center justify-center rounded-md text-white">
          <Instagram size={48} className="mt-10 text-[#E2B583]" />
          <p className="font-opensans pt-1 text-center text-xs font-semibold text-[#E2B583] uppercase md:text-sm">
            @istanbulgrillculcheth
          </p>
        </div>

        <img
          src="/images/scroll-us/img3.png"
          alt="Image 3"
          className="h-68 w-full object-cover"
        />
        <img
          src="/images/scroll-us/img4.png"
          alt="Image 4"
          className="h-68 w-full rotate-5 object-cover md:rotate-10"
        />
      </div>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        <img
          src="/images/scroll-us/img5.png"
          alt="Image 5"
          className="col-span-1 h-68 w-full object-cover"
        />
        <img
          src="/images/scroll-us/img6.png"
          alt="Image 6"
          className="col-span-2 h-68 w-full object-cover"
        />
        <img
          src="/images/scroll-us/img7.png"
          alt="Image 7"
          className="col-span-1 h-68 w-full object-cover"
        />
      </div>
    </section>
  );
};

export default ScrollUs;
