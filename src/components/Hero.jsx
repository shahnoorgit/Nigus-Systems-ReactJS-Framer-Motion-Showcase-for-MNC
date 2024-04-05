import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gray-900 text-white py-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-5">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-md md:w-1/2 mb-8 md:mb-0 md:ml-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Revolutionizing Enterprise with Innovative Solutions
          </h1>
          <p className="text-lg md:text-xl  mb-8">
            Modernize the organization with innovative software solutions,
            applications and integrations
          </p>
          <button className="bg-white text-gray-900 hover:bg-gray-800 hover:text-white py-2 px-6 rounded-full shadow-md transition duration-300">
            Get Started
          </button>
        </motion.div>
        <div className="w-full max-w-md md:w-1/2">
          <motion.img
            key={currentSlide}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src={
              currentSlide === 0
                ? "./image1.avif"
                : currentSlide === 1
                ? "image2.svg"
                : "image3.jpg"
            }
            alt="Slide"
            className="w-full h-full max-h-[600px] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
