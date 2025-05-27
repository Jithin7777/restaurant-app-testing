"use client";

import { Button } from "@/components/ui/button";
import React, { useState, ChangeEvent, FC } from "react";

const categories = [
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
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Popular");

  const filteredCategories = categories.filter(cat =>
    cat.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="font-inter sticky top-[112px] z-20 w-full pl-4 font-light md:pl-10 lg:w-auto lg:bg-transparent lg:px-0 lg:pt-4">
      <nav className="flex h-full w-full flex-col gap-y-3">
        {/* Search Input */}
        <div className="sticky  z-10 bg-white md:top-0">
          <div className="relative flex justify-center">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={handleSearchChange}
              className="w-full max-w-md rounded-xl border border-gray-300 p-2 pl-10 focus:ring-2 focus:outline-none"
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
        </div>

        {/* Category List */}
        <div
          className={`
            flex gap-2 overflow-x-auto px-2 pb-2 hide-scrollbar
            md:overflow-x-auto md:whitespace-nowrap
            lg:flex-col lg:overflow-y-auto lg:px-0
          `}
        >
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                className={`
                  flex-shrink-0 whitespace-nowrap rounded-xl px-4 py-2 text-sm
                  ${activeCategory === category ? "bg-gray-200 font-semibold text-black" : "hover:border hover:border-gray-400"}
                  lg:w-full lg:justify-start
                `}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))
          ) : (
            <div className="p-2 text-gray-500">No categories found.</div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default SidebarNav;
