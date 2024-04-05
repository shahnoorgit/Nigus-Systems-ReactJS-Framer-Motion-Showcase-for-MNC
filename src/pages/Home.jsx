import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero";
import OurClientsSection from "../components/Clients";
import FeaturesSection from "../components/Features";
import ImageWithSideText from "../components/Callsection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <OurClientsSection />
      <FeaturesSection />
      <ImageWithSideText />
    </>
  );
};

export default Home;
