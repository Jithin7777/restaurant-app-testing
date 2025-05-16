import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./(section)/Hero";
import ExploreMenu from "./(section)/ExploreMenu";
import AboutUs from "./(section)/AboutUs";
import Specials from "./(section)/Specials";
import SignatureSpecial from "./(section)/(special)/SignatureSpecial";
import TableReservation from "./(section)/TableReservation";
import Reviews from "./(section)/Reviews";
import Gallery from "./(section)/Gallery";
import ScrollUs from "./(section)/ScrollUs";
import Footer from "./components/Footer";
import ViewMenu from "./components/floating-buttons/ViewMenu";

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
      <div className="fixed bottom-10 right-10 hidden md:flex z-50">
        <ViewMenu />
      </div>
    </div>
  </main>
);

export default page;
