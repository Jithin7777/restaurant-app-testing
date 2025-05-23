import Image from "next/image";
import React from "react";

interface SignatureCardProps {
  image: string;
  title: string;
  // price: number;
}

const SignatureCard: React.FC<SignatureCardProps> = ({
  image,
  title,
  // price,
}) => {
  return (
    <div className="flex flex-col items-center text-center text-white">
      <div className="relative h-[160px] w-full overflow-hidden md:h-[200px]">
        <Image
          width={200}
          height={200}
          src={image}
          alt={title}
          className="h-full w-[250px] object-cover object-center md:w-[320px]"
          style={{ objectPosition: "center " }}
        />
      </div>
      {/* Price and Title */}
      {/* <div className="absolute top-12 -right-5 bg-yellow-600 text-black font-bold text-sm px-4 py-2 rounded-full shadow-lg">
        € {price}
      </div> */}
      <h3 className="font-playfair mt-2 font-serif text-sm font-normal whitespace-pre-line md:text-xl">
        {title}
      </h3>
    </div>
  );
};

export default SignatureCard;
