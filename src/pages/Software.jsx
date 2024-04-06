import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TestimonialSection from "../components/Testomonial";

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
// Define an array of objects containing technology names and their corresponding image paths
const technologies = [
  { name: "Selelium ", image: "/selelium.png" },
  { name: "Docker", image: "/docker.png" },
  { name: "MicroServices", image: "/microservice.png" },
  { name: "Maintainance", image: "/maintain.jfif" },
  { name: "Jira", image: "/jira.png" },
  { name: "Agile", image: "/Agile.jpg" },
  { name: "Analytics", image: "/analytics.png" },
  { name: "Jenkins", image: "/jenkins.png" },
];

const Software = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0, // Percentage of the section visible before triggering
  });

  return (
    <div className=" mt-10 p-5">
      <div className="flex flex-wrap items-center justify-between p-10">
        <motion.img
          src="/software_dev.avif"
          alt="Hero Image"
          className="w-25 md:w-[400px] rounded"
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
            Transforming Ideas into Powerful Software Solutions
          </motion.h1>
          <motion.p
            className="mt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
          >
            Welcome to the forefront of innovation, where ideas meet technology
            to shape the future of software development. Our mission is to turn
            your vision into reality through bespoke software solutions tailored
            to your unique needs and aspirations. With a focus on cutting-edge
            technologies and industry best practices, we empower businesses to
            thrive in the digital landscape. Whether you're embarking on a new
            venture or seeking to enhance existing systems, our dedicated team
            of experts is committed to delivering excellence at every step of
            the journey. Let's embark on this transformative path together and
            build the software that drives your success.
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
          className="software-development-section bg-gray-200 p-8 rounded-lg shadow-lg"
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
            Software Development
          </motion.h2>
          <motion.p
            className="text-lg mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            At our company, we specialize in crafting robust software solutions
            tailored to your specific needs. Here's why you should choose us for
            your software development project:
          </motion.p>
          <motion.ul
            className="list-disc ml-6"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
          >
            <motion.li variants={listVariants} className="mb-4">
              Experienced Team: Our team consists of seasoned software
              developers with years of experience in building successful
              applications across various industries.
            </motion.li>
            <motion.li variants={listVariants} className="mb-4">
              Custom Solutions: We understand that every business is unique.
              That's why we offer customized software development solutions to
              meet your specific requirements.
            </motion.li>
            <motion.li variants={listVariants} className="mb-4">
              Innovative Approach: We stay updated with the latest technologies
              and trends in the software development landscape, ensuring that
              your software stands out in the market.
            </motion.li>
            <motion.li variants={listVariants} className="mb-4">
              Quality Assurance: Our rigorous quality assurance processes ensure
              that your software is bug-free, reliable, and meets the highest
              standards of performance and security.
            </motion.li>
            <motion.li variants={listVariants} className="mb-4">
              Scalability: We design software solutions with scalability in
              mind, ensuring that they can grow with your business and handle
              increased demand without compromising performance.
            </motion.li>
            <motion.li variants={listVariants} className="mb-4">
              Support and Maintenance: Our commitment to post-launch support and
              maintenance ensures that your software remains up-to-date, secure,
              and fully functional.
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Software;
