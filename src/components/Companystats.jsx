import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CompanyStats = () => {
  const [firstView, setFirstView] = useState(false);
  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView && !firstView) {
      controls.start("visible");
      setFirstView(true);
    }
  }, [controls, inView, firstView]);

  return (
    <section className="py-12 bg-gray-800 p-10">
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: "-100%" },
          }}
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <h3 className="text-xl font-semibold mb-4">
              200+ Products Developed
            </h3>
            <p>
              Discover our extensive portfolio of over 200 successful product
              developments spanning various industries and domains.
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <h3 className="text-xl font-semibold mb-4">
              200+ Clients Served Worldwide
            </h3>
            <p>
              Join our global network of satisfied clients from across the world
              who have entrusted us with their software needs.
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <h3 className="text-xl font-semibold mb-4">
              $10K+ Average Project Size
            </h3>
            <p>
              Experience our commitment to quality with an average project size
              exceeding $10,000, ensuring robust and scalable solutions.
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <h3 className="text-xl font-semibold mb-4">
              100% Success Delivery
            </h3>
            <p>
              Experience our unwavering commitment to success with a 100%
              delivery rate, ensuring your projects are completed on time and
              within budget.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyStats;
