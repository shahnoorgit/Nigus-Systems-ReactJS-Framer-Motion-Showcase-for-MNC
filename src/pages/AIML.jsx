import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TestimonialSection from "../components/Testomonial";

// Define an array of objects containing technology names and their corresponding image paths
const listVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const technologies = [
  { name: "ChatBot Development ", image: "/chatbot.png" },
  { name: "TensorFlow.", image: "/tensorflow.jpg" },
  { name: "Natural Language Processing", image: "/NLP.jfif" },
  { name: "Deep Learning", image: "/DL.jpg" },
  { name: "IBM watson", image: "/IBM.png" },
  { name: "Machine Learning", image: "/ML.jpg" },
  { name: "Natural Language Toolkit", image: "/NLTK.png" },
  { name: "Keras", image: "/keras.webp" },
];

const AIML = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0, // Percentage of the section visible before triggering
  });

  return (
    <div className=" mt-10 p-5">
      <div className="flex flex-wrap items-center justify-between p-10">
        <motion.img
          src="/AIML2.jpg"
          alt="Hero Image"
          className="w-25 md:w-[400px] rounded-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
        />
        <motion.header
          className="bg-gray-900 text-white py-8 text-center w-full md:w-1/2 x-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
        >
          <motion.h1
            className="text-4xl font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Empower Your Business with Cutting-Edge AIML Development Services
          </motion.h1>
          <motion.p
            className="mt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
          >
            Unlock the full potential of artificial intelligence and machine
            learning with our bespoke AIML development services. From creating
            intelligent chatbots and virtual assistants to implementing advanced
            natural language processing algorithms, our team of experts
            leverages the latest technologies to craft solutions tailored to
            your unique business needs. With our AIML expertise, enhance
            customer engagement, streamline operations, and stay ahead in
            today's competitive landscape. Explore limitless possibilities with
            our AIML development services and drive your business towards
            unprecedented success.
          </motion.p>
        </motion.header>
      </div>

      <section className="bg-gray-200 py-12" ref={ref}>
        <div className="container mx-auto">
          <motion.h2
            className="text-2xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
          >
            Technologies We Work With
          </motion.h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5">
            {/* Mapping through technologies and displaying technology name along with its image */}
            {technologies.map((tech, index) => (
              <motion.li
                key={index}
                className="bg-white p-4 rounded-lg shadow-lg text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, ease: "easeIn" }}
              >
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="w-20 h-20 mx-auto mb-2"
                />
                <p>{tech.name}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
      <TestimonialSection />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="aiml-development-section bg-gray-200 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <motion.h2
            className="text-2xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            AIML Development
          </motion.h2>
          <motion.p
            className="text-lg mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            At our company, we specialize in artificial intelligence and machine
            learning development, harnessing the power of data to drive
            innovation. Here's why you should choose us for your AIML
            development project:
          </motion.p>
          <motion.ul
            className="list-disc ml-6"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
          >
            <motion.li variants={listVariants} className="mb-4">
              Experienced Team: Our team comprises AI and ML experts with
              extensive experience in developing cutting-edge solutions across
              various domains.
            </motion.li>
            <motion.li variants={listVariants} className="mb-4">
              Custom Solutions: We tailor our AIML solutions to your specific
              business needs, ensuring optimal performance and efficiency.
            </motion.li>
            <motion.li variants={listVariants} className="mb-4">
              Advanced Algorithms: We leverage advanced algorithms and
              techniques to deliver AI and ML models that provide valuable
              insights and predictive capabilities.
            </motion.li>
            <motion.li variants={listVariants} className="mb-4">
              Data-driven Approach: Our development process is driven by data,
              enabling us to build robust models that learn and adapt to
              changing environments.
            </motion.li>
            <motion.li variants={listVariants} className="mb-4">
              Continuous Improvement: We are committed to continuous
              improvement, refining and optimizing AIML models to deliver
              maximum value to your business.
            </motion.li>
            <motion.li variants={listVariants} className="mb-4">
              Ethical AI: We adhere to ethical AI principles, ensuring fairness,
              transparency, and accountability in our AIML solutions.
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AIML;
