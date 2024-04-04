import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const OurClientsSection = () => {
  const clients = ["./slider1.png", "./slider2.png"]; // List of client images

  const [currentClient, setCurrentClient] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentClient((prevClient) => (prevClient + 1) % clients.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [clients.length]);

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Our Clients
        </h2>
        <div className="w-full max-w-4xl mx-auto relative">
          <motion.img
            key={currentClient}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            src={clients[currentClient]}
            alt="Client"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default OurClientsSection;
