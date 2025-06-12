import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-black px-4 text-black md:px-10">
      <div>
        <h2 className="font-oswald bg-gradient-to-b from-[#CCAD64] to-[#191616] bg-clip-text text-4xl font-light text-transparent md:pl-36 md:text-[80px]">
          About Us
        </h2>
      </div>
      <div className="grid grid-cols-2 items-start gap-0 md:grid-cols-2">
        <div className="mb-0 p-0">
          <h1 className="font-italiana mx-auto mt-10 md:mt-0 bg-gradient-to-b from-[#CCAD64] to-[#191616] bg-clip-text text-[70px] font-normal text-transparent sm:text-[120px] md:text-[200px] lg:text-[300px] xl:text-[320px]">
            Layla
          </h1>
        </div>

        <div className="md:mb-24 flex items-start justify-start p-0">
          <img
            src="/images/about-us/img.png"
            alt="About us"
            className="max-h-[350px] w-full rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-3">
        <div className="">
          <p className="font-inter max-w-lg align-middle text-sm leading-[20px] font-light tracking-[0px] text-[#7E6C53]">
            At Layla, our menu is a heartfelt tribute to the rich culinary
            traditions of Lebanon and Syria. Every dish is crafted with
            authenticity, care, and a deep passion for Middle Eastern flavors.
            Our skilled chefs bring generations of heritage to the table, using
            the freshest local ingredients to create meals that are both vibrant
            and soulful. We invite you to experience the warmth, hospitality,
            and unforgettable tastes of Layla — where every plate tells a story
            of love and tradition.
          </p>
        </div>

        <div className="flex max-w-sm items-center justify-start">
          <div>
            <p className="font-inter max-w-lg align-middle text-sm leading-[20px] font-light text-[#7E6C53]">
              From aromatic spices to timeless recipes, every bite captures the
              spirit of our homeland. Come, savor the journey with us at Layla,
              where tradition and flavor come together in every dish.
            </p>
            <button className="mt-4 rounded-md bg-[#CCAD64] px-4 py-2 text-sm text-black uppercase transition hover:bg-[#191616]">
              order now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
