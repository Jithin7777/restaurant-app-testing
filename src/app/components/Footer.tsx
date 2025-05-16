import { ArrowRight, Facebook, Globe, Instagram } from "lucide-react";
import React from "react";
// import { FaFacebookF, FaInstagram, FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#131313] text-white px-6 md:px-20 py-16 space-y-14">
      <div className="flex flex-col md:flex-row justify-center gap-10 border-b border-gray-700 pb-10">
        <div className="md:w-2/5">
          <h2 className="text-5xl  mb-2 font-playfair">
            <i>
              Subscribe to <br /> our newsletter
            </i>
          </h2>
        </div>

        <div className="md:w-96 space-y-4 font-manrope">
          <p className="text-sm text-[#FBEAD2] max-w-80 font-marope">
            By subscribing to the newsletter, you will always be up to date.
            Find out about new products, events, and specials.
          </p>
          <div className="flex gap-x-2 mt-10">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 border-b  text-[#958B7D]  border-b-amber-100 bg-transparent  placeholder-gray-400  focus:outline-none"
            />
            <button className="flex items-center gap-2 border border-white text-white px-4 py-2  hover:bg-[#D5A859] hover:text-black transition">
              Subscribe
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2   text-sm pl-10 md:pl-40">
        <div className="flex md:pl-10 ">
          <div className="mt-3">
            <ul className="space-y-1.5 mb-2 font-manrope">
              <li>Menu</li>
              <li>About</li>
              <li>Contact</li>
              <li>Booking</li>
              <li>Gift Voucher</li>
            </ul>
          </div>

          <div>
            <div className="pl-15 space-y-1.5 font-manrope">
              <h3 className="font-semibold text-lg mt-3 ">Contact</h3>
              <p>+44 1925 871664</p>
              <p className="max-w-full">
                453 Warrington Rd, Culcheth, Warrington WA3 5SJ, United Kingdom
              </p>
            </div>
            <div className="flex pl-15 gap-3 text-xl mt-5">
              
              {/* Icons go here */}
              <Instagram/>
             <Facebook className="bg-white text-black rounded-full"/>
            <Globe/>
              
              </div>
          </div>
        </div>

        <div className="md:pl-20 space-y-1.5 font-manrope mt-3">
          <h3 className="font-manrope uppercase ">Opening Hours</h3>
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
