import React from "react";
import Image from "next/image";

const Specials = () => {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-12 sm:px-6 md:px-16">
      <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-40 w-32 rotate-180 sm:h-72 sm:w-52 md:h-[600px] md:w-[350px]">
        <Image
          src="/images/specials/bg-left.png"
          alt="Left Background"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
      <div className="pointer-events-none absolute top-0 right-0 z-0 w-24 sm:w-32 md:h-[600px] md:w-[350px]">
        <Image
          src="/images/specials/bg-right.png"
          alt="Right Background"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      <div className="relative z-10">
        <h1 className="font-oswald mt-10 bg-gradient-to-b from-[#FFCA4E] to-[#191616] bg-clip-text text-center text-3xl font-light text-transparent uppercase sm:text-4xl md:text-5xl">
          Layla Specials
        </h1>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 md:grid-cols-4">
          <div className="relative h-[300px] overflow-hidden rounded-lg rounded-t-full border-[1px] border-[#F29A21] shadow-md sm:h-[500px]">
            <Image
              src="/images/specials/img1.png"
              alt="Special 1"
              fill
              style={{
                objectFit: "cover",
                borderTopLeftRadius: "9999px",
                borderTopRightRadius: "9999px",
              }}
              priority
            />
          </div>

          <div className="relative h-[300px] overflow-hidden rounded-t-none rounded-b-none border-[1px] border-[#F29A21] shadow-md sm:mt-10 sm:h-[500px] md:mt-36">
            <Image
              src="/images/specials/img2.png"
              alt="Special 2"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <div className="relative h-[300px] overflow-hidden rounded-lg rounded-t-full border-[1px] border-[#F29A21] shadow-md sm:h-[500px]">
            <Image
              src="/images/specials/img3.png"
              alt="Special 3"
              fill
              style={{
                objectFit: "cover",
                borderTopLeftRadius: "9999px",
                borderTopRightRadius: "9999px",
              }}
              priority
            />
          </div>

          <div className="relative h-[300px] overflow-hidden rounded-t-none rounded-b-none border-[1px] border-[#F29A21] shadow-md sm:mt-10 sm:h-[500px] md:mt-36">
            <Image
              src="/images/specials/img4.png"
              alt="Special 2"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specials;
