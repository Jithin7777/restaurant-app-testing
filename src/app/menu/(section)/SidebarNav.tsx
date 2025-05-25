"use client";

import { Button } from "@/components/ui/button";
import React, { useState, ChangeEvent, FC } from "react";

const categories: string[] = [
  "Popular",
  "Appetizers",
  "Salads",
  "Razor's Edge Tavern-style Pizzas",
  "Let's Get Comfy",
  'Small 9" Regular Pizzas',
  'Large 16" Regular Pizzas',
  'Small 9" East Side Pizzas',
  'Large 16" East Side Pizzas',
  'Small 9" Specialty Pizzas',
  'Large 16" Specialty Pizzas',
  "Small Stuffed Pizzas",
  "Large Stuffed Pizzas",
  "Calzone",
  "Manager Specials",
];

const SidebarNav: FC = () => {
  const [search, setSearch] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>("Popular");

  const filteredCategories = categories.filter((cat) =>
    cat.toLowerCase().includes(search.toLowerCase()),
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="font-inter bg-mercury-ui-primary sticky top-[112px] z-20 w-full pl-4 font-light md:pl-10 xl:h-[calc(100vh-var(--mercury-menu-navbar-height))] xl:w-auto xl:bg-transparent xl:px-0 xl:pt-4">
      <nav
        aria-label="Category Navigation"
        className="flex h-full w-full flex-col gap-y-3 py-4 xl:py-0"
      >
        {/* Search Input */}
        <div className="relative mb-4 flex justify-center">
          <input
            type="text"
            placeholder="Search"
            aria-label="Search"
            value={search}
            onChange={handleSearchChange}
            className="focus:ring-mercury-ui-text-primary w-full max-w-md rounded-xl border border-gray-300 p-2 pl-10 focus:ring-2 focus:outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="pointer-events-none absolute top-2.5 left-3 h-5 w-5 text-gray-400"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
          </svg>
        </div>

        {/* Category Buttons */}
        <ul className="hide-scrollbar  text-[#4D4D4D] flex touch-auto flex-row gap-x-2 overflow-x-scroll scroll-smooth pr-2 md:overflow-x-visible lg:flex-col lg:gap-y-2 lg:overflow-x-hidden lg:overflow-y-auto ">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <li key={category} className="flex-shrink-0 lg:w-full ">
                <Button
                  variant="ghost"
                  className={`w-full justify-start truncate rounded-xl p-2 text-left transition-colors duration-200 ${
                    category === activeCategory
                      ? "bg-gray-200 font-bold text-black"
                      : "hover:border hover:border-gray-400"
                  } `}
                  onClick={() => setActiveCategory(category)}
                  title={category}
                >
                  {category}
                  {category === activeCategory && (
                    <span className="sr-only">Current Category</span>
                  )}
                </Button>
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">No categories found.</li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default SidebarNav;
