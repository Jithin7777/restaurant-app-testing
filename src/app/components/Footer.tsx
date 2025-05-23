import { ArrowRight, Facebook, Globe, Instagram } from "lucide-react";
import React from "react";
// import { FaFacebookF, FaInstagram, FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="space-y-14 bg-[#131313] px-6 py-16 text-white md:px-20">
      <div className="flex flex-col justify-center gap-10 border-b border-gray-700 pb-10 md:flex-row">
        <div className="md:w-2/5">
          <h2 className="font-playfair mb-2 text-5xl">
            <i>
              Subscribe to <br /> our newsletter
            </i>
          </h2>
        </div>

        <div className="font-manrope space-y-4 md:w-96">
          <p className="font-marope max-w-80 text-sm text-[#FBEAD2]">
            By subscribing to the newsletter, you will always be up to date.
            Find out about new products, events, and specials.
          </p>
          <div className="mt-10 flex gap-x-2">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border-b border-b-amber-100 bg-transparent p-2 text-[#958B7D] placeholder-gray-400 focus:outline-none"
            />
            <button className="flex items-center gap-2 border border-white px-4 py-2 text-white transition hover:bg-[#D5A859] hover:text-black">
              Subscribe
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 pl-10 text-sm md:grid-cols-2 md:pl-40 lg:grid-cols-2 xl:grid-cols-2">
        <div className="flex md:pl-10">
          <div className="mt-3">
            <ul className="font-manrope mb-2 space-y-1.5">
              <li>Menu</li>
              <li>About</li>
              <li>Contact</li>
              <li>Booking</li>
              <li>Gift Voucher</li>
            </ul>
          </div>

          <div>
            <div className="font-manrope space-y-1.5 pl-15">
              <h3 className="mt-3 text-lg font-semibold">Contact</h3>
              <p>+44 1925 871664</p>
              <p className="max-w-full">
                453 Warrington Rd, Culcheth, Warrington WA3 5SJ, United Kingdom
              </p>
            </div>
            <div className="mt-5 flex gap-3 pl-15 text-xl">
              {/* Icons go here */}
              <Instagram />
              <Facebook className="rounded-full bg-white text-black" />
              <Globe />
            </div>
          </div>
        </div>

        <div className="font-manrope mt-3 space-y-1.5 md:pl-20">
          <h3 className="font-manrope uppercase">Opening Hours</h3>
          <p>Mon - Thurs : 12-10PM</p>
          <p>Fri - Sun : 12-11PM</p>
          <p>Saturday : 12-11:30 PM</p>
          <p>Sunday : 12-9:00 PM</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
