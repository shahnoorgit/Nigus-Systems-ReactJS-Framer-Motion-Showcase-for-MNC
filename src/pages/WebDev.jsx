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
  { name: "HTML5", image: "/html.jpg" },
  { name: "CSS3", image: "/css.jpg" },
  { name: "JavaScript", image: "/js.jpg" },
  { name: "React", image: "/reactjs.png" },
  { name: "JQuery", image: "/jquery.png" },
  { name: "bootstrap", image: "/bootstrap.png" },
  { name: "mySql", image: "/mysql.png" },
  { name: "Node.js", image: "/nodejs.png" },
];

const WebDev = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0, // Percentage of the section visible before triggering
  });

  return (
    <div className=" mt-10 p-5">
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
            Elevate Your Online Presence
          </motion.h1>
          <motion.p
            className="mt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
          >
            Let our team of skilled developers elevate your online presence to
            new heights. With a deep understanding of industry trends and
            cutting-edge technologies, our seasoned developers are poised to
            transform your digital presence into a compelling force in the
            online world. From sleek and intuitive website designs to robust and
            scalable web applications, we specialize in crafting solutions that
            not only meet but exceed your expectations.
          </motion.p>
        </motion.header>
        <motion.img
          src="/web_dev.jpg"
          alt="Hero Image"
          className="w-25 md:w-[400px] rounded-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
        />
      </div>

      <section className="bg-gray-200 py-12" ref={ref}>
        <div className="container mx-auto">
          <motion.h2
            className="text-2xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
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
          className="web-development-section bg-gray-200 p-8 rounded-lg shadow-lg"
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
            Web Development
          </motion.h2>
          <motion.p
            className="text-lg mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            At our company, we specialize in crafting cutting-edge web
            applications tailored to your specific needs. Here's why you should
            choose us for your web development project:
          </motion.p>
          <motion.ul
            className="list-disc ml-6"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
          >
            <motion.li variants={listVariants} className="mb-4">
              Experienced Team: Our team consists of seasoned web developers
              with years of experience in building successful applications
              across various industries.
            </motion.li>
            <motion.li variants={listVariants} className="mb-4">
              Custom Solutions: We understand that every business is unique.
              That's why we offer customized web development solutions to meet
              your specific requirements.
            </motion.li>
            <motion.li variants={listVariants} className="mb-4">
              Innovative Approach: We stay updated with the latest technologies
              and trends in the web development landscape, ensuring that your
              web app stands out in the market.
            </motion.li>
            <motion.li variants={listVariants} className="mb-4">
              User-Centric Design: We prioritize user experience in our web
              development process, creating intuitive and engaging interfaces
              that keep your users coming back for more.
            </motion.li>
            <motion.li variants={listVariants} className="mb-4">
              Quality Assurance: Our rigorous quality assurance processes ensure
              that your web app is bug-free, reliable, and performs seamlessly
              across different devices and platforms.
            </motion.li>
            <motion.li variants={listVariants} className="mb-4">
              Timely Delivery: We understand the importance of deadlines. With
              our efficient project management and development process, we
              ensure timely delivery of your web app without compromising on
              quality.
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WebDev;
