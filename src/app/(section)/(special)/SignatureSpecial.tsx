"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import SignatureCard from "./SignatureCard";
import { ArrowLeft, ArrowRight } from "lucide-react";

const specials = [
  {
    image: "/images/signature-specials/steak1.png",
    title: "Garlic \nLamb Chops",
    price: 35,
  },
  {
    image: "/images/signature-specials/steak2.png",
    title: "Garlic \nRibeye Steak",
    price: 35,
  },
  {
    image: "/images/signature-specials/steak1.png",
    title: "Garlic \nLamb Chops",
    price: 35,
  },
  {
    image: "/images/signature-specials/steak3.png",
    title: "Smoky \nBBQ Brisket",
    price: 32,
  },
  {
    image: "/images/signature-specials/steak2.png",
    title: "Garlic \nRibeye Steak",
    price: 35,
  },
  {
    image: "/images/signature-specials/steak2.png",
    title: "Garlic \nRibeye Steak",
    price: 35,
  },
];

const SignatureSpecial = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  const [visibleSlides, setVisibleSlides] = useState(1);
  const [centerIndex, setCenterIndex] = useState(0);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

  const centerOffset = Math.floor(visibleSlides / 2);

  useEffect(() => {
    const updateVisibleSlides = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleSlides(1);
      else if (width < 768) setVisibleSlides(2);
      else setVisibleSlides(2);
    };

    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);
    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, []);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const leftMostIndex = emblaApi.selectedScrollSnap();

      let center = leftMostIndex + centerOffset;
      if (center >= specials.length) center = specials.length - 1;
      if (center < 0) center = 0;

      setCenterIndex(center);

      setPrevBtnEnabled(emblaApi.canScrollPrev());
      setNextBtnEnabled(emblaApi.canScrollNext());
    };

    emblaApi.on("select", onSelect);

    emblaApi.scrollTo(0);

    onSelect();
  }, [emblaApi, centerOffset]);

  return (
    <section className="relative bg-[#121212] text-gold py-16 px-4 overflow-hidden">
      <div
        className="absolute inset-0  bg-cover bg-center opacity-50 z-0"
        style={{
          backgroundImage: "url('/images/signature-specials/bg.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="relative max-w-full mx-auto z-10">
        <h2 className="text-4xl font-serif tracking-wide uppercase text-left md:ml-32 font-normal font-italiana text-transparent bg-clip-text bg-gradient-to-b from-[#CFAC6A] to-[#191616]">
          LAYLA <br />
          <span className="font-italina text-transparent bg-clip-text bg-gradient-to-b from-[#CFAC6A] to-[#191616]">
            SIGNATURE <br />
            SPECIALS
          </span>
        </h2>

        <div className="overflow-x-scroll hide-scrollbar" ref={emblaRef}>
          <div className="embla__container flex">
            {specials.map((item, index) => {
              const isActive = index === centerIndex;

              const base =
                "flex justify-center items-center transition-all duration-300 ease-in-out";
              const activeStyle = isActive
                ? "scale-85 brightness-100"
                : "scale-60 brightness-50 opacity-80 mt-5 sm:mt-8 md:mt-12 lg:mt-20";

              return (
                <div
                  key={index}
                  className={`${base} embla__slide w-full sm:w-1/2 md:w-1/3 ${activeStyle}`}
                >
                  <SignatureCard {...item} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative flex justify-end right-16 text-white px-4 md:px-32">
          <span className="absolute text-gold text-lg right-0.5 md:right-3/12 bottom-5/12">
            {centerIndex + 1} / {specials.length}
          </span>
        </div>

        <div className="flex justify-center items-center gap-4 mt-8 text-white">
          <button
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            className={`p-3 border-[1.5px] border-[#BC995D] rounded-full transition ${
              !prevBtnEnabled
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-gold hover:text-black"
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            className={`p-3 border-[1.5px] border-[#BC995D] rounded-full transition ${
              !nextBtnEnabled
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-gold hover:text-black"
            }`}
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignatureSpecial;
