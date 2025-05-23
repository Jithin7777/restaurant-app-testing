import React from "react";

const Gallery = () => {
  return (
    <section className="bg-black px-4 py-10 md:px-20">
      <h1 className="xs:text-[100px] font-italiana transform bg-gradient-to-b from-[#CCAD64] to-[#191616] bg-clip-text text-center text-[100px] font-normal text-transparent sm:translate-y-0 sm:text-[120px] md:text-[200px] md:leading-normal lg:text-[300px] xl:text-[350px]">
        Layla
      </h1>

      <div className="w-full bg-[url('/images/gallery/bg.png')] bg-cover bg-no-repeat">
        <div className="flex flex-col items-stretch justify-center gap-6 px-4 md:flex-row md:px-0">
          <div className="flex w-full flex-col gap-8 md:w-1/4">
            <img
              src="/images/gallery/img1.png"
              alt="Gallery 1"
              className="h-80 w-full object-cover"
            />
            <img
              src="/images/gallery/img2.png"
              alt="Gallery 2"
              className="h-80 w-full object-cover"
            />
          </div>

          <div className="flex w-full flex-col gap-8 md:w-2/4">
            <img
              src="/images/gallery/img3.png"
              alt="Gallery 3"
              className="h-80 w-full object-cover"
            />
            <img
              src="/images/gallery/img4.png"
              alt="Gallery 4"
              className="h-80 w-full object-cover"
            />
          </div>

          <div className="flex w-full flex-col gap-8 md:w-1/4">
            <img
              src="/images/gallery/img5.png"
              alt="Gallery 5"
              className="h-[200px] w-full object-cover"
            />
            <img
              src="/images/gallery/img6.png"
              alt="Gallery 6"
              className="h-[440px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
