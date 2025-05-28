import React from "react";
import { Heart, Plus } from "lucide-react";

const items = [
  {
    id: 1,
    title: "Meatball Sub",
    price: 11.75,
    description: "Our Meatball Sub served with Garlic Romano Fries",
    imageUrl: "/images/menu/img3.webp",
    href: "/menu/greenvalley?item=meatball-sub-qE8Y",
  },
  {
    id: 2,
    title: "Meatball Sub",
    price: 11.75,
    description: "Our Meatball Sub served with Garlic Romano Fries",
    imageUrl: "/images/menu/img3.webp",
    href: "/menu/greenvalley?item=meatball-sub-qE8Y",
  },
  {
    id: 3,
    title: "Meatball Sub",
    price: 11.75,
    description: "Our Meatball Sub served with Garlic Romano Fries",
    imageUrl: "/images/menu/img3.webp",
    href: "/menu/greenvalley?item=meatball-sub-qE8Y",
  },
  {
    id: 4,
    title: "Caesar Salad",
    price: 7.25,
    description: "Fresh Caesar Salad with croutons",
    imageUrl: "https://via.placeholder.com/384x384.png?text=Caesar+Salad",
    likes: 9,
    href: "/menu/greenvalley?item=caesar-salad",
  },
  
];

const CardList = () => {
  return (
    <div id="appetizers"  className="grid grid-cols-1  gap-4 p-4 xl:p-0 lg:grid-cols-2">
      <div className="lg:col-span-2">
        <h2 className="text-xl font-semibold md:text-2xl lg:text-3xl">
          Appetizers
        </h2>
      </div>
      {items.map((item) => (
        <a
          key={item.id}
          href={item.href}
          title={`Add ${item.title} to your cart`}
          className="relative mt-5 flex h-full w-full flex-row justify-between overflow-hidden rounded-lg border border-gray-300 bg-white transition-shadow duration-300 hover:shadow-lg"
          rel="nofollow"
        >
          <div className="flex flex-1 flex-col gap-y-2 p-4">
            <div className="flex flex-col gap-y-1">
              <h3 className="line-clamp-2 text-base font-bold">{item.title}</h3>
              <div className="flex items-center gap-x-1">
                <p className="text-base font-semibold">
                  ${item.price.toFixed(2)}
                </p>
                <span>·</span>
                <button
                  aria-label="Like item"
                  className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors"
                >
                  <Heart className="w-4 h-4 fill-current" />
                  <p className="text-sm">{item.likes}</p>
                </button>
              </div>
            </div>
            <p className="line-clamp-3 text-sm text-gray-600">
              {item.description}
            </p>
          </div>
          <div className="w-2/5 max-w-[180px] flex-shrink-0">
            <div className="relative h-full w-full overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                loading="lazy"
                className="aspect-square h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="absolute right-2 bottom-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl  bg-white p-2 shadow-md hover:bg-gray-50 transition-colors">
              <Plus className="text-gray-700 w-5 h-5" />
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default CardList;