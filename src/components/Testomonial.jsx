import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Define an array of objects containing testimonials
const testimonials = [
  {
    name: "John Doe",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum urna vitae ullamcorper viverra. In nec consectetur lorem. Sed malesuada consequat tellus.",
    image: "/person1.jfif",
  },
  {
    name: "stephine Smith",
    feedback:
      "Suspendisse potenti. Vivamus consequat felis vitae urna convallis, sit amet fermentum mi dapibus. Morbi id turpis in lorem tempor finibus vel eget purus.",
    image: "/person2.jfif",
  },
  {
    name: "Andrew Buzzer",
    feedback:
      "Suspendisse potenti. Vivamus consequat felis vitae urna convallis, sit amet fermentum mi dapibus. Morbi id turpis in lorem tempor finibus vel eget purus.",
    image: "/person3.jfif",
  },
  // Add more testimonials as needed
  // Repeat the above testimonials to create a total of ten
];

const TestimonialSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.5, // Percentage of the section visible before triggering
  });

  return (
    <section className="bg-gray-900 py-12 cursor-pointer" ref={ref}>
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
        >
          Client Testimonials
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 relative overflow-hidden"
              style={{ minWidth: "300px" }}
              initial={{ opacity: 0, x: "-100%" }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: index * 0.1,
              }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black opacity-40"></div>
              <div className="relative z-10">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full w-20 h-20 mx-auto mb-4"
                />
                <p className="text-gray-800">{testimonial.feedback}</p>
                <p className="text-gray-700 mt-4">- {testimonial.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
