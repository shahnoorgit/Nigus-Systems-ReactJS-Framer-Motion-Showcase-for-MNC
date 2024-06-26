import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FeaturesSection = () => {
  const features = [
    {
      title: "Web development",
      image: "./web.png",
    },
    {
      title: "Application development",
      image: "./crm.png",
    },
    {
      title: "Software Development",
      image: "./communication.png",
    },
    {
      title: "AI/ML development",
      image: "./AIML.png",
    },
    {
      title: "System integration",
      image: "./call.png",
    },
    {
      title: "Application integration",
      image: "./system.png",
    },
  ];

  return (
    <section className="bg-gray-200 py-8 md:py-12">
      <div className="container mx-auto p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8">
          Future-Ready Solutions: Transforming Your Business With Innovative
          Software
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 p- cursor-pointer">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ feature }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.5, // Percentage of the card visible before triggering
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg overflow-hidden shadow-md"
    >
      <img src={feature.image} alt={feature.title} className="w-15 h-15" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo
          nibh nec risus consequat tincidunt.
        </p>
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
