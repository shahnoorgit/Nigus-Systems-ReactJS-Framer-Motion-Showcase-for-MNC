import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TestimonialSection from "../components/Testomonial";
import CompanyStats from "../components/Companystats";
import LocationPage from "../components/Locations";

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
        <center className=" text-white text-3xl mt-5">
          <h1>About Us</h1>
        </center>
        <div className="flex flex-wrap items-center justify-between p-10">
          <motion.img
            src="/aboutgif2.gif"
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
        <div className=" p-5">
          <div className="flex flex-wrap items-center justify-between p-10">
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
                Industries
              </motion.h1>
              <motion.p
                className="mt-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
              >
                At Nigus Systems, we are dedicated to developing cutting-edge
                technology solutions that empower businesses across various
                industries. Our team of experts specializes in software
                development, digital platforms, and IT consulting services. We
                harness the power of artificial intelligence, cloud computing,
                and data analytics to create customized solutions that drive
                efficiency, productivity, and growth for our clients.
                <br />
                We provide a range of software solutions, applications, and
                system integrations with business applications, offering
                numerous advantages as the software extracts insights from
                various applications.
              </motion.p>
            </motion.header>
            <motion.img
              src="/aboutgif.gif"
              alt="Hero Image"
              className="w-25 md:w-[600px] rounded"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
            />
          </div>
        </div>
      </div>
      <LocationPage />
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
              className="bg-white p-6 rounded-lg shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 ">Expertise</h3>
              <p>
                At Nigus Systems, we have a team of highly skilled professionals
                with years of experience in the field of software development.
                Our expertise allows us to deliver top-notch solutions that meet
                the unique needs of our clients.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg cursor-pointer"
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
              className="bg-white p-6 rounded-lg shadow-lg cursor-pointer"
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
              className="bg-white p-6 rounded-lg shadow-lg cursor-pointer"
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
          <TestimonialSection />
          <CompanyStats />
        </div>
      </section>
    </>
  );
};

export default AboutPage;
