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
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="app-development-section bg-gray-200 p-8 rounded-lg shadow-lg"
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
            App Development
          </motion.h2>
          <motion.p
            className="text-lg mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            At our company, we specialize in crafting cutting-edge mobile
            applications tailored to your specific needs. Here's why you should
            choose us for your app development project:
          </motion.p>
          <motion.ul
            className="list-disc ml-6"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
          >
            <motion.li variants={listVariants} className="mb-4">
              Experienced Team: Our team consists of seasoned app developers
              with years of experience in building successful applications
              across various industries.
            </motion.li>
            <motion.li variants={listVariants} className="mb-4">
              Custom Solutions: We understand that every business is unique.
              That's why we offer customized app development solutions to meet
              your specific requirements.
            </motion.li>
            <motion.li variants={listVariants} className="mb-4">
              Innovative Approach: We stay updated with the latest technologies
              and trends in the app development landscape, ensuring that your
              app stands out in the market.
            </motion.li>
            <motion.li variants={listVariants} className="mb-4">
              User-Centric Design: We prioritize user experience in our app
              development process, creating intuitive and engaging interfaces
              that keep your users coming back for more.
            </motion.li>
            <motion.li variants={listVariants} className="mb-4">
              Quality Assurance: Our rigorous quality assurance processes ensure
              that your app is bug-free, reliable, and performs seamlessly
              across different devices and platforms.
            </motion.li>
            <motion.li variants={listVariants} className="mb-4">
              Timely Delivery: We understand the importance of deadlines. With
              our efficient project management and development process, we
              ensure timely delivery of your app without compromising on
              quality.
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AppDev;
