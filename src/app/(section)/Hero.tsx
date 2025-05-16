import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-[80vh] sm:h-[90vh] md:h-screen relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover object-center brightness-100"
          src="/videos/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>

      <div className="absolute inset-0  "></div>

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4">
        <h1 className="text-[100px] xs:text-[100px] sm:text-[120px] md:text-[200px] lg:text-[300px] xl:text-[350px] font-normal font-italiana text-transparent bg-clip-text bg-gradient-to-b from-[#CCAD64] to-[#191616] md:leading-normal transform -translate-y-10 sm:translate-y-0">
          Layla
        </h1>
      </div>
    </section>
  );
};

export default Hero;
