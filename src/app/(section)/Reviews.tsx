import React from "react";
import { Star } from "lucide-react";
import Image from "next/image";

const Reviews = () => {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-16 md:px-12">
      <div
        className="absolute top-0 left-0 z-0 h-full w-1/3 rotate-180 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/reviews/bg.png')` }}
      ></div>

      <h2 className="font-oswald relative z-10 mb-20 bg-gradient-to-b from-[#FFCA4E] to-[#191616] bg-clip-text text-center text-4xl font-light text-transparent uppercase">
        Reviews
      </h2>

      <div className="relative z-10 grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-3">
        {/* Review 1 */}
        <div className="h-[350px] border border-[#BC995D] bg-black p-6 text-white shadow-md">
          <div className="mb-4 flex items-center gap-4">
            <Image
              src="/images/reviews/user.jpg"
              alt="User 1"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-manrope text-lg font-normal text-[#CDAE64]">
                Ida Larsson
              </h4>
              <p className="font-manrope text-xs font-normal text-[#CDAE64]">
                One day ago
              </p>
            </div>
          </div>

          <div className="mt-10 mb-4 flex items-center gap-3 text-[#CDAE64]">
            {[...Array(5)].map((_, index) => (
              <Star key={index} className="h-4 w-4 fill-yellow-500" />
            ))}
          </div>
          <p className="font-inter max-w-82 text-sm font-normal text-[#CDAE64]">
            The food here is fantastic! I had the chicken doner, which was
            packed with flavor and came in a generous portion. My friends loved
            the mixed meat platter and lamb chop as well. The mocktails,
            desserts, and in-house tea were a great addition to the meal. Will
            definitely come back again soon…
          </p>
        </div>

        {/* Review 2 */}
        <div className="border border-[#BC995D] bg-black p-6 text-white shadow-md">
          <div className="mb-4 flex items-center gap-4">
            <Image
              src="/images/reviews/user.jpg"
              alt="User 2"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-manrope text-lg font-normal text-[#CDAE64]">
                Ida Larsson
              </h4>
              <p className="font-manrope text-xs font-normal text-[#CDAE64]">
                One day ago
              </p>
            </div>
          </div>
          <div className="mt-10 mb-4 flex items-center gap-3 text-[#CDAE64]">
            {[...Array(5)].map((_, index) => (
              <Star key={index} className="h-4 w-4 fill-yellow-500" />
            ))}
          </div>
          <p className="font-inter max-w-82 text-sm font-normal text-[#CDAE64]">
            Amazing restaurant if you&apos;re craving something interesting. The
            atmosphere is great with lots of lighting and plants. Food was
            really delicious and the drinks were spot on! I will definitely come
            back for more!
          </p>
        </div>

        {/* Review 3 */}
        <div className="border border-[#BC995D] bg-black p-6 text-white shadow-md">
          <div className="mb-4 flex items-center gap-4">
            <Image
              src="/images/reviews/user.jpg"
              alt="User 3"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-manrope text-lg font-normal text-[#CDAE64]">
                Ida Larsson
              </h4>
              <p className="font-manrope text-xs font-normal text-[#CDAE64]">
                One day ago
              </p>
            </div>
          </div>
          <div className="mt-10 mb-4 flex items-center gap-3 text-[#CDAE64]">
            {[...Array(5)].map((_, index) => (
              <Star key={index} className="h-4 w-4 fill-yellow-500" />
            ))}
          </div>
          <p className="font-inter max-w-82 text-sm font-normal text-[#CDAE64]">
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
