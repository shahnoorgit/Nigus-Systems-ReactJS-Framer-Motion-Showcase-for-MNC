import React from "react";
import { motion } from "framer-motion";

const LocationPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="location-page bg-gray-100 p-8"
    >
      <h1 className="text-3xl font-bold mb-6">
        Decade-plus of Experience Across the Globe
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="location-card bg-white shadow-md p-6 rounded-lg"
        >
          <h2 className="text-xl font-bold mb-2">India</h2>
          <p>Experience: 10+ years</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="location-card bg-white shadow-md p-6 rounded-lg"
        >
          <h2 className="text-xl font-bold mb-2">USA</h2>
          <p>Experience: 8+ years</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="location-card bg-white shadow-md p-6 rounded-lg"
        >
          <h2 className="text-xl font-bold mb-2">Australia</h2>
          <p>Experience: 5+ years</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="location-card bg-white shadow-md p-6 rounded-lg"
        >
          <h2 className="text-xl font-bold mb-2">Middle East</h2>
          <p>Experience: 7+ years</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="location-card bg-white shadow-md p-6 rounded-lg"
        >
          <h2 className="text-xl font-bold mb-2">Asia Pacific</h2>
          <p>Experience: 6+ years</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LocationPage;
