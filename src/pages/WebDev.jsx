import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Define an array of objects containing technology names and their corresponding image paths
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
    threshold: 0.2, // Percentage of the section visible before triggering
  });

  return (
    <div className=" mt-10 p-5">
      <div className="flex flex-wrap items-center justify-between p-10">
        <motion.header
          className="bg-gray-900 text-white py-8 text-center w-full md:w-1/2 x-5"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
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
            animate={inView ? { opacity: 1, y: 0 } : {}}
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
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
        />
      </div>
      <section className="py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Your services section */}
          </div>
        </div>
      </section>
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
  );
};

export default WebDev;
