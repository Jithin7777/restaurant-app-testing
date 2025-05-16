import React from "react";
import Image from "next/image";

const ExploreMenu = () => {
  return (
    <section className="w-full py-16 min-h-screen bg-black px-4 sm:px-8 md:px-16 relative overflow-hidden">
      <div className="text-center mb-12 px-2">
        <h2 className="text-4xl sm:text-5xl font-oswald font-light text-transparent bg-clip-text bg-gradient-to-r from-[#FFCA4E] to-[#191616]">
          Explore Our Menu
        </h2>
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-40 relative z-10">
        <div className="w-full">
          <div className="mx-auto overflow-hidden rounded-tr-[100px] sm:rounded-tr-[165.5px] h-36 w-36 sm:h-60 sm:w-60 xl:h-80 xl:w-80">
            <Image
              src="/images/explore-menu/food1.png"
              alt="Food 1"
              width={320}
              height={320}
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
          <div className="mt-8 font-oswald font-bold uppercase text-center text-lg sm:text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFCA4E] to-[#191616]">
            desserts
          </div>
        </div>

        <div className="w-full">
          <div className="overflow-hidden rounded-full h-36 w-36 sm:h-60 sm:w-60 xl:h-80 xl:w-80 mx-auto">
            <Image
              src="/images/explore-menu/food2.png"
              alt="Food 2"
              width={320}
              height={320}
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
          <div className="mt-8 font-oswald font-bold uppercase text-center text-lg sm:text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFCA4E] to-[#191616]">
            breads
          </div>
        </div>

        <div className="w-full">
          <div className="relative z-10 overflow-hidden h-36 w-36 sm:h-60 sm:w-60 xl:h-80 xl:w-80 mx-auto rounded-tr-[100px] sm:rounded-tr-[165.5px]">
            <Image
              src="/images/explore-menu/food3.png"
              alt="Food 3"
              width={320}
              height={320}
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
          <div className="mt-8 font-oswald font-bold text-lg sm:text-xl uppercase text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FFCA4E] to-[#191616]">
            lamb sizzeler
          </div>
        </div>
      </div>

      <div className="absolute right-0 bottom-[-150px] max-w-[100vw] overflow-visible z-0 pointer-events-none">
        <Image
          src="/images/explore-menu/bg.png"
          alt="Smoke"
          width={630}
          height={630}
          className="absolute opacity-70 brightness-80 right-0 bottom-60 w-[220px] sm:w-[400px] md:w-[500px] xl:w-[630px]  rotate-[-22deg]  md:rotate-[-32deg] translate-x-1/4 z-10"
        />

        <Image
          src="/images/explore-menu/bgImg.png"
          alt="Decorative Shape"
          width={650}
          height={650}
          className="w-[300px] sm:w-[400px] md:w-[500px] xl:w-[650px]  rotate-[-7deg] md:rotate-[-12deg] translate-y-0 sm:translate-y-36 md:translate-y-48 translate-x-1/4 z-0"
        />
      </div>
    </section>
  );
};

export default ExploreMenu;
