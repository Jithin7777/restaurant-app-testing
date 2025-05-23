import React from "react";
import Image from "next/image";

const ExploreMenu = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black px-4 py-16 sm:px-8 md:px-16">
      <div className="mb-12 px-2 text-center">
        <h2 className="font-oswald bg-gradient-to-r from-[#FFCA4E] to-[#191616] bg-clip-text text-4xl font-light text-transparent sm:text-5xl">
          Explore Our Menu
        </h2>
      </div>

      {/* Menu Items */}
      <div className="relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:px-40">
        <div className="w-full">
          <div className="mx-auto h-36 w-36 overflow-hidden rounded-tr-[100px] sm:h-60 sm:w-60 sm:rounded-tr-[165.5px] xl:h-80 xl:w-80">
            <Image
              src="/images/explore-menu/food1.png"
              alt="Food 1"
              width={320}
              height={320}
              className="h-full w-full object-cover shadow-lg"
            />
          </div>
          <div className="font-oswald mt-8 bg-gradient-to-r from-[#FFCA4E] to-[#191616] bg-clip-text text-center text-lg font-bold text-transparent uppercase sm:text-xl">
            desserts
          </div>
        </div>

        <div className="w-full">
          <div className="mx-auto h-36 w-36 overflow-hidden rounded-full sm:h-60 sm:w-60 xl:h-80 xl:w-80">
            <Image
              src="/images/explore-menu/food2.png"
              alt="Food 2"
              width={320}
              height={320}
              className="h-full w-full object-cover shadow-lg"
            />
          </div>
          <div className="font-oswald mt-8 bg-gradient-to-r from-[#FFCA4E] to-[#191616] bg-clip-text text-center text-lg font-bold text-transparent uppercase sm:text-xl">
            breads
          </div>
        </div>

        <div className="w-full">
          <div className="relative z-10 mx-auto h-36 w-36 overflow-hidden rounded-tr-[100px] sm:h-60 sm:w-60 sm:rounded-tr-[165.5px] xl:h-80 xl:w-80">
            <Image
              src="/images/explore-menu/food3.png"
              alt="Food 3"
              width={320}
              height={320}
              className="h-full w-full object-cover shadow-lg"
            />
          </div>
          <div className="font-oswald mt-8 bg-gradient-to-r from-[#FFCA4E] to-[#191616] bg-clip-text text-center text-lg font-bold text-transparent uppercase sm:text-xl">
            lamb sizzeler
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute right-0 bottom-[-150px] z-0 max-w-[100vw] overflow-visible">
        <Image
          src="/images/explore-menu/bg.png"
          alt="Smoke"
          width={630}
          height={630}
          className="absolute right-0 bottom-60 z-10 w-[220px] translate-x-1/4 rotate-[-22deg] opacity-70 brightness-80 sm:w-[400px] md:w-[500px] md:rotate-[-32deg] xl:w-[630px]"
        />

        <Image
          src="/images/explore-menu/bgImg.png"
          alt="Decorative Shape"
          width={650}
          height={650}
          className="z-0 w-[300px] translate-x-1/4 translate-y-0 rotate-[-7deg] sm:w-[400px] sm:translate-y-36 md:w-[500px] md:translate-y-48 md:rotate-[-12deg] xl:w-[650px]"
        />
      </div>
    </section>
  );
};

export default ExploreMenu;
