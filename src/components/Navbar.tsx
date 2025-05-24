"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="fixed -top-10 left-0 z-50 flex w-full items-center justify-between bg-transparent px-5">
      <div className="relative h-40 w-40 md:ml-20 md:h-60 md:w-60">
        <Image
          src="/images/nav/logo.png"
          alt="Logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Right Side - Navigation Links + Button */}
      <div className="hidden items-center gap-8 space-x-10 md:flex">
        <Link href="/" className="text-white">
          Home
        </Link>
        <Link href="/menu" className="text-white">
          Menu
        </Link>
        <Link href="/about" className="text-white">
          About
        </Link>
        <Link href="/contact" className="text-white">
          Contact
        </Link>
        <button className="rounded-none bg-[#CDAE64] px-4 py-2 text-black hover:opacity-90 md:mr-20">
          ORDER NOW
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="flex items-center md:hidden">
        <button
          onClick={handleSidebarToggle}
          className="p-2 text-white focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isSidebarOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Sidebar (Right Side Menu) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white transition-transform ${
          isSidebarOpen ? "transform-none" : "translate-x-full transform"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={handleSidebarToggle}
            className="p-2 text-white"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-x"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center py-3">
          {["/", "/menu", "/about", "/contact"].map((path, idx) => (
            <Link
              key={idx}
              href={path}
              className="py-2 text-white"
              onClick={handleSidebarToggle}
            >
              {path === "/"
                ? "Home"
                : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}
          <button
            className="mt-4 rounded-none bg-[#CDAE64] px-4 py-2 text-black hover:opacity-90"
            onClick={handleSidebarToggle}
          >
            ORDER NOW
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
