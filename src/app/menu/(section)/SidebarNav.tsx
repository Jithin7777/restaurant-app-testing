"use client";

import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
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

  const scrollToCategory = (category: string) => {
    setActiveCategory(category);
    const id = category.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="font-inter sticky top-[112px] z-20 w-full pl-4 text-gray-700 font-bold md:pl-10 lg:w-auto lg:bg-transparent lg:px-0 lg:pt-4">
      <nav className="flex h-full w-full flex-col gap-y-3">
        {/* Search Input - Fixed positioning */}
        <div className="lg:fixed z-10 lg:pt-28 md:bg-white top-0  px-4 md:px-0">
          <div className="relative w-full max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={handleSearchChange}
                className="w-full rounded-xl border border-gray-300 py-2 pl-10 pr-4 focus:ring-2 focus:outline-none focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Category List */}
        <div className="flex gap-2 mt-3 overflow-x-auto px-2 pb-2 hide-scrollbar md:overflow-x-auto md:whitespace-nowrap lg:flex-col lg:overflow-y-auto lg:px-0 lg:pr-4">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                className={`flex-shrink-0 whitespace-nowrap rounded-xl px-4 py-2 text-sm transition-colors ${
                  activeCategory === category 
                    ? "bg-gray-200 font-semibold text-black shadow-sm" 
                    : "hover:bg-gray-100"
                } lg:w-full lg:justify-start`}
                onClick={() => scrollToCategory(category)}
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