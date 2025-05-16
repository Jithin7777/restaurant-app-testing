import React from "react";
import { Star } from "lucide-react";
import Image from "next/image";

const Reviews = () => {
  return (
    <section className="relative bg-black py-16 px-4 md:px-12 overflow-hidden">
      <div
        className="absolute left-0 top-0 h-full w-1/3 bg-cover bg-center z-0 rotate-180"
        style={{ backgroundImage: `url('/images/reviews/bg.png')` }}
      ></div>

      <h2 className="relative z-10 text-4xl text-center uppercase font-oswald font-light text-transparent bg-clip-text bg-gradient-to-b from-[#FFCA4E] to-[#191616] mb-20">
        Reviews
      </h2>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
        {/* Review 1 */}
        <div className="border bg-black border-[#BC995D] shadow-md p-6 text-white h-[350px]">
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="/images/reviews/user.jpg"
              alt="User 1"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="text-lg font-normal font-manrope text-[#CDAE64]">
                Ida Larsson
              </h4>
              <p className="text-xs text-[#CDAE64] font-normal font-manrope">
                One day ago
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-[#CDAE64] mb-4 mt-10">
            {[...Array(5)].map((_, index) => (
              <Star key={index} className="w-4 h-4 fill-yellow-500" />
            ))}
          </div>
          <p className="text-sm text-[#CDAE64] max-w-82 font-inter font-normal">
            The food here is fantastic! I had the chicken doner, which was
            packed with flavor and came in a generous portion. My friends loved
            the mixed meat platter and lamb chop as well. The mocktails,
            desserts, and in-house tea were a great addition to the meal. Will
            definitely come back again soon…
          </p>
        </div>

        {/* Review 2 */}
        <div className="border bg-black border-[#BC995D] shadow-md p-6 text-white">
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="/images/reviews/user.jpg"
              alt="User 2"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="text-lg font-normal font-manrope text-[#CDAE64]">
                Ida Larsson
              </h4>
              <p className="text-xs font-normal font-manrope text-[#CDAE64]">
                One day ago
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-[#CDAE64] mb-4 mt-10">
            {[...Array(5)].map((_, index) => (
              <Star key={index} className="w-4 h-4 fill-yellow-500" />
            ))}
          </div>
          <p className="text-sm text-[#CDAE64] max-w-82 font-inter font-normal">
            Amazing restaurant if you&apos;re craving something interesting. The
            atmosphere is great with lots of lighting and plants. Food was
            really delicious and the drinks were spot on! I will definitely come
            back for more!
          </p>
        </div>

        {/* Review 3 */}
        <div className="border border-[#BC995D] bg-black shadow-md p-6 text-white">
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="/images/reviews/user.jpg"
              alt="User 3"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="text-lg font-normal font-manrope text-[#CDAE64]">
                Ida Larsson
              </h4>
              <p className="text-xs font-normal font-manrope  text-[#CDAE64]">
                One day ago
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-[#CDAE64] mb-4 mt-10">
            {[...Array(5)].map((_, index) => (
              <Star key={index} className="w-4 h-4 fill-yellow-500 " />
            ))}
          </div>
          <p className="text-sm text-[#CDAE64] max-w-82 font-inter font-normal">
            Tasty food, lovely staff, lovely atmosphere, and considering how
            busy it was, the service was still extremely fast! Had a couple of
            sauce refills and bread with no extra charge, and free Turkish tea
            at the end of the meal. Highly recommend this place 👍
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
