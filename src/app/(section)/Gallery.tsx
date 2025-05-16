import React from "react";

const Gallery = () => {
  return (
    <section className="bg-black py-10 px-4 md:px-20">
      <h1 className="text-[100px] text-center xs:text-[100px] sm:text-[120px] md:text-[200px] lg:text-[300px] xl:text-[350px] font-normal font-italiana text-transparent bg-clip-text bg-gradient-to-b from-[#CCAD64] to-[#191616] md:leading-normal transform sm:translate-y-0">
        Layla
      </h1>

      <div className="w-full  bg-[url('/images/gallery/bg.png')]   bg-cover bg-no-repeat ">
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch px-4 md:px-0 ">
          <div className="w-full md:w-1/4 flex flex-col gap-8">
            <img
              src="/images/gallery/img1.png"
              alt="Gallery 1"
              className="object-cover w-full h-80"
            />
            <img
              src="/images/gallery/img2.png"
              alt="Gallery 2"
              className="object-cover w-full h-80"
            />
          </div>

          <div className="w-full md:w-2/4 flex flex-col gap-8">
            <img
              src="/images/gallery/img3.png"
              alt="Gallery 3"
              className="object-cover w-full h-80"
            />
            <img
              src="/images/gallery/img4.png"
              alt="Gallery 4"
              className="object-cover w-full h-80"
            />
          </div>

          <div className="w-full md:w-1/4 flex flex-col gap-8">
            <img
              src="/images/gallery/img5.png"
              alt="Gallery 5"
              className="object-cover w-full h-[200px]"
            />
            <img
              src="/images/gallery/img6.png"
              alt="Gallery 6"
              className="object-cover w-full h-[440px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
