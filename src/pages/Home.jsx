import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero";
import OurClientsSection from "../components/Clients";
import FeaturesSection from "../components/Features";
import ImageWithSideText from "../components/Callsection";

const Home = () => {
  return (
    <div className=" p-2">
      <HeroSection />
      <OurClientsSection />
      <FeaturesSection />
      <ImageWithSideText />
    </div>
  );
};

export default Home;
