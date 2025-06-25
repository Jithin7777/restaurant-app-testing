import React from "react";
import { Phone, AtSign, MapPin } from "lucide-react";

const BookingInfoSection = () => {
  return (
    <div>
      {" "}
      <section className="bg-gray-50 py-10 md:px-28">
        <div className="flex flex-wrap">
          {/* Opening Hours Section */}
          <div className="mb-4 w-full px-2 sm:w-1/3 md:w-1/4">
            <section
              id="schedule"
              className="h-full rounded-lg bg-white p-6 shadow-md"
            >
              <h2 className="mb-4 text-xl font-bold">Opening Hours</h2>
              <table className="w-full">
                <tbody>
                  {[
                    { day: "Mon", time: "12:00 - 22:00" },
                    { day: "Tue", time: "12:00 - 22:00" },
                    { day: "Wed", time: "12:00 - 22:00" },
                    { day: "Thu", time: "12:00 - 22:00" },
                    { day: "Fri", time: "12:00 - 22:00" },
                    { day: "Sat", time: "13:00 - 22:00" },
                    { day: "Sun", time: "13:00 - 20:00" },
                  ].map((item, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-2 font-medium">{item.day}</td>
                      <td className="py-2 text-right">{item.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </div>

          {/* About Us Section */}
          <div className="mb-4 w-full px-2 sm:w-1/3 md:w-1/2">
            <section
              id="about-us"
              className="h-full rounded-lg bg-white p-6 shadow-md"
            >
              <h2 className="mb-4 text-xl font-bold">Layla </h2>
              <p className="text-gray-700">
                Layla is an authentic Tapas and Cocktail Bar located in the
                heart of Huyton Village. We're aiming to bring a little corner
                of Spain to Huyton with our savory small-plates accompanied by a
                warm welcome to our guests.
              </p>
            </section>
          </div>

          {/* Contact Us Section */}
          <div className="mb-4 w-full px-2 sm:w-1/3 md:w-1/4">
            <section
              id="contacts"
              className="h-full rounded-lg bg-white p-6 shadow-md"
            >
              <h2 className="mb-4 text-xl font-bold">Contact us</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Phone className="mr-3 h-5 w-5 text-gray-500" />
                  <a href="tel:+441514808702" className="hover:text-blue-600">
                    +441514808702
                  </a>
                </li>
                <li className="flex items-center">
                  <AtSign className="mr-3 h-5 w-5 text-gray-500" />{" "}
                  <a
                    href="mailto:elpueblohuyton@gmail.com"
                    className="hover:text-blue-600"
                  >
                    Layla@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <MapPin className="mr-3 h-5 w-5 text-gray-500" />{" "}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Hunter Street, Liverpool, GB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600"
                  >
                    Hunter Street, Liverpool, GB
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
        {/* Google Map */}
        <div className="mt-10">
          <h2 className="mb-4 text-center text-2xl font-semibold">
            Our Location
          </h2>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=53.410580,-2.977940&hl=es;z=14&output=embed"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default BookingInfoSection;
