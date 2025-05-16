import React from "react";
import Image from "next/image";

const Specials = () => {
  return (
    <section className="relative bg-black py-12 px-4 sm:px-6 md:px-16 overflow-hidden">
      <div className="absolute rotate-180 bottom-0 left-0 w-32 h-40 sm:w-52 sm:h-72 md:w-[350px] md:h-[600px] z-10 pointer-events-none">
        <Image
          src="/images/specials/bg-left.png"
          alt="Left Background"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
      <div className="absolute top-0 right-0 w-24 sm:w-32 md:w-[350px] md:h-[600px] z-0 pointer-events-none">
        <Image
          src="/images/specials/bg-right.png"
          alt="Right Background"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      <div className="relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl uppercase text-center font-light font-oswald mt-10 bg-gradient-to-b from-[#FFCA4E] to-[#191616] text-transparent bg-clip-text">
          Layla Specials
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12 sm:mt-16">
          {/* Special 1 */}
          <div className="overflow-hidden rounded-lg shadow-md relative h-[300px] sm:h-[500px] rounded-t-full border-[1px] border-[#F29A21]">
            <Image
              src="/images/specials/img1.png"
              alt="Special 1"
              fill
              style={{ objectFit: "cover", borderTopLeftRadius: "9999px", borderTopRightRadius: "9999px" }}
              priority
            />
          </div>

          {/* Special 2 */}
          <div className="overflow-hidden shadow-md relative h-[300px] sm:h-[500px] border-[1px] border-[#F29A21] sm:mt-10 md:mt-36 rounded-t-none rounded-b-none">
            <Image
              src="/images/specials/img2.png"
              alt="Special 2"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          {/* Special 3 */}
          <div className="overflow-hidden rounded-lg shadow-md relative h-[300px] sm:h-[500px] border-[1px] border-[#F29A21] rounded-t-full">
            <Image
              src="/images/specials/img3.png"
              alt="Special 3"
              fill
              style={{ objectFit: "cover", borderTopLeftRadius: "9999px", borderTopRightRadius: "9999px" }}
              priority
            />
          </div>

          {/* Special 4 */}
          <div className="overflow-hidden shadow-md relative h-[300px] sm:h-[500px] border-[1px] border-[#F29A21] sm:mt-10 md:mt-36 rounded-t-none rounded-b-none">
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
