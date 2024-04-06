import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import ContactUs from "../components/Contact";

const ContactPage = () => {
  const locations = [
    {
      city: "Bangalore, India",
      address:
        "No.8, 20th Main Road, Koramangala 5th Block, Bangalore-560095, Karnataka",
      description: "Opposite to HDFC/Federal Bank, Above Gocolors",
    },
    {
      city: "Chennai, India",
      address:
        "No.3, 2nd floor, Antona apartments, Ayyavoo street, Shenoy Nagar, Chennai-600030, Tamil Nadu",
      description: "",
    },
  ];
  return (
    <>
      <ContactUs />
      <div className="flex flex-wrap justify-center bg-slate-700 items-center border">
        <div>
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-lg m-4 flex flex-col items-center"
            >
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">{location.city}</h2>
                <p className="text-lg mb-2">{location.address}</p>
                {location.description && (
                  <p className="text-gray-600">{location.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        <div>
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            src="/location.webp"
            alt="Contact Image"
            className="max-w-full h-auto w-64 md:w-auto mb-8 rounded-lg shadow-lg"
          />
          <center>
            <h1 className=" text-white text-3xl mb-5">Office Locations</h1>
          </center>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-lg shadow-lg m-4"
      >
        <h2 className="text-2xl font-bold mb-4">For Sales & Support</h2>
        <motion.p whileHover={{ scale: 1.05, originX: 0 }} className="mb-2">
          For any sales & support inquiries, please contact us at:
        </motion.p>
        <motion.div
          whileHover={{ scale: 1.05, originX: 0 }}
          className="flex items-center mb-2"
        >
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          <p>sales@nigussystems.com</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05, originX: 0 }}
          className="flex items-center mb-2"
        >
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          <p>saravanaguptha@nigussystems.com</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05, originX: 0 }}
          className="flex items-center"
        >
          <FontAwesomeIcon icon={faPhone} className="mr-2" />
          <p>India: +91 98806 98312</p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ContactPage;
