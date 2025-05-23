import React from "react";

const Hero = () => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden sm:h-[90vh] md:h-screen">
      <div className="absolute inset-0 z-0">
        <video
          className="h-full w-full object-cover object-center brightness-100"
          src="/videos/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>

      <div className="absolute inset-0"></div>

      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-white">
        <h1 className="xs:text-[100px] font-italiana -translate-y-10 transform bg-gradient-to-b from-[#CCAD64] to-[#191616] bg-clip-text text-[100px] font-normal text-transparent sm:translate-y-0 sm:text-[120px] md:text-[200px] md:leading-normal lg:text-[300px] xl:text-[350px]">
          Layla
        </h1>
      </div>
    </section>
  );
};

export default Hero;
