import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TestimonialSection from "../components/Testomonial";

// Define an array of objects containing technology names and their corresponding image paths
const technologies = [
  { name: "Kotlin ", image: "/kotlin.png" },
  { name: "Flutter", image: "/flutter.jpg" },
  { name: "Figma (UI)", image: "/figma.png" },
  { name: "React.Native", image: "/reactN.webp" },
  { name: "MongoDB", image: "/mongodb.png" },
  { name: "Swift", image: "/swift.png" },
  { name: "Java", image: "/java.png" },
  { name: "Firebase", image: "/Firebase.png" },
];

const AppDev = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0, // Percentage of the section visible before triggering
  });

  return (
    <div className=" mt-10 p-5">
      <div className="flex flex-wrap items-center justify-between p-10">
        <motion.img
          src="/App_dev.avif"
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
            Elevate Your Digital Presence with Innovative App Development
            Solutions
          </motion.h1>
          <motion.p
            className="mt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
          >
            Embark on a transformative journey in the digital realm with our
            pioneering app development solutions. Harnessing the power of
            cutting-edge technologies and creative ingenuity, we craft bespoke
            applications tailored to your unique vision and business objectives.
            Whether you're looking to conquer the mobile market with intuitive
            user experiences or revolutionize your industry with groundbreaking
            functionality, our seasoned team of developers is committed to
            turning your ideas into reality. Join forces with us and unlock the
            full potential of your digital aspirations. Let's build the future
            together.
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
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>Contact us for all your web development needs!</p>
      </footer>
    </div>
  );
};

export default AppDev;
