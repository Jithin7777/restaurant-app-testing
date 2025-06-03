import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "./(section)/Hero";
import ExploreMenu from "./(section)/ExploreMenu";
import AboutUs from "./(section)/AboutUs";
import Specials from "./(section)/Specials";
import SignatureSpecial from "./(section)/(special)/SignatureSpecial";
import TableReservation from "./(section)/TableReservation";
import Reviews from "./(section)/Reviews";
import Gallery from "./(section)/Gallery";
import ScrollUs from "./(section)/ScrollUs";
import Footer from "../components/Footer";
import ViewMenu from "../components/floating-buttons/ViewMenu";

const page = () => (
  <main>
    <div>
      <Navbar />
      <Hero />
      <ExploreMenu />
      <AboutUs />
      <Specials />
      <SignatureSpecial />
      <TableReservation />
      <Reviews />
      <Gallery />
      <ScrollUs />
      <Footer />
      <div className="fixed right-10 bottom-10 z-50 hidden md:flex">
        <ViewMenu />
      </div>
    </div>
  </main>
);

export default page;
