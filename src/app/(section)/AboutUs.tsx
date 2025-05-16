import React from "react";

const AboutUs = () => {
  return (
    <section className="px-4 md:px-10 text-black bg-black">
      <div>
        <h2 className="text-4xl md:text-[80px]  font-oswald md:pl-36 font-light text-transparent bg-clip-text bg-gradient-to-b from-[#CCAD64] to-[#191616]">
          About Us
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-start">
        <div className="mb-0 p-0">
          <h1 className="mx-auto text-[130px] sm:text-[120px] md:text-[200px] lg:text-[300px] xl:text-[320px] font-normal font-italiana text-transparent bg-clip-text bg-gradient-to-b from-[#CCAD64] to-[#191616] ">
            Layla
          </h1>
        </div>

        <div className="flex items-start justify-start mb-24 p-0">
          <img
            src="/images/about-us/img.png"
            alt="About us"
            className="w-full max-h-[350px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start ">
        <div className="">
          <p className="text-sm leading-[20px] tracking-[0px] font-inter font-light text-[#7E6C53] max-w-lg align-middle ">
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

        <div className="flex justify-start items-center max-w-sm">
          <div>
            <p className=" text-[#7E6C53] leading-[20px]  text-sm align-middle font-inter font-light max-w-lg">
              From aromatic spices to timeless recipes, every bite captures the
              spirit of our homeland. Come, savor the journey with us at Layla,
              where tradition and flavor come together in every dish.
            </p>
            <button className="mt-4 text-black uppercase bg-[#CCAD64]  py-2 px-4 text-sm rounded-md hover:bg-[#191616] transition">
              order now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
