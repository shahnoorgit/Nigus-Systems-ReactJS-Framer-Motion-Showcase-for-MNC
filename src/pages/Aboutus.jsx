import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TestimonialSection from "../components/Testomonial";

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

const AboutPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0, // Percentage of the section visible before triggering
  });

  return (
    <>
      <div className=" mt-10 p-5">
        <div className="flex flex-wrap items-center justify-between p-10">
          <motion.img
            src="/about.jpg"
            alt="Hero Image"
            className="w-25 md:w-[600px] rounded"
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
              Nigus Systems - Decade of experience in IT
            </motion.h1>
            <motion.p
              className="mt-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
            >
              At Nigus Systems, we are passionate about leveraging cutting-edge
              technologies to create innovative solutions that drive business
              success. With a focus on excellence and customer satisfaction, our
              team of experts is dedicated to delivering high-quality products
              and services tailored to meet your specific needs. Partner with us
              and experience the difference of reliable, scalable, and
              future-ready solutions.
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

        <footer className="bg-gray-800 text-white py-8 text-center">
          <p>Contact us for all your web development needs!</p>
        </footer>
      </div>
      <section className="py-12 bg-gray-800 p-10">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl text-white font-bold text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Nigus Systems?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4">Expertise</h3>
              <p>
                At Nigus Systems, we have a team of highly skilled professionals
                with years of experience in the field of software development.
                Our expertise allows us to deliver top-notch solutions that meet
                the unique needs of our clients.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p>
                We are committed to staying at the forefront of technological
                innovation. By leveraging the latest tools and techniques, we
                ensure that our clients benefit from cutting-edge solutions that
                give them a competitive edge in the market.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-4">
                Customer Satisfaction
              </h3>
              <p>
                Customer satisfaction is our top priority. We strive to
                understand our clients' needs and exceed their expectations
                through personalized service, timely delivery, and ongoing
                support.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
              <p>
                We believe in the power of collaboration. We work closely with
                our clients throughout the development process, ensuring that
                their input is valued and incorporated into the final product.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
