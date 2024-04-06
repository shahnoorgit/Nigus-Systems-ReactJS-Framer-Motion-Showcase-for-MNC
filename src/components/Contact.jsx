import React from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const ContactUs = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap justify-around  items-center space-x-4 mt-20 p-5"
    >
      <motion.img
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        src="/contact.gif"
        alt="Contact Image"
        className="max-w-full h-auto w-64 md:w-auto mb-8 rounded-lg shadow-lg"
      />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 p-8 rounded-lg shadow-lg bg-gray-900 border-4 border-blue-500"
      >
        <h2 className="text-2xl font-bold mb-4 text-white text-center">
          Contact Us
        </h2>
        <form onSubmit={sendEmail}>
          <div className="mb-4">
            <label htmlFor="name" className="text-white block mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full border border-gray-300 rounded-lg py-2 px-4"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className=" text-white block mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg py-2 px-4"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="text-white block mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="w-full border border-gray-300 rounded-lg py-2 px-4"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Send
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ContactUs;
