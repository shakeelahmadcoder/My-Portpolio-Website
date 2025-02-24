import React from "react";
import { FaLaptopCode, FaMobileAlt, FaPalette, FaChartBar } from "react-icons/fa";
import { motion } from "framer-motion"; // Framer Motion for animations

const services = [
  {
    title: "Web Development",
    description:
      "Building responsive and user-friendly web applications using modern frontend technologies like React.js and Tailwind CSS.",
    icon: <FaLaptopCode className="text-blue-400 text-4xl mx-auto" />,
  },
  {
    title: "Responsive Design",
    description:
      "Ensuring your website looks great on all devices with fully responsive and mobile-first design principles.",
    icon: <FaMobileAlt className="text-green-400 text-4xl mx-auto" />,
  },
  {
    title: "UI/UX Design",
    description:
      "Creating visually appealing and user-centered designs to enhance the user experience and interface.",
    icon: <FaPalette className="text-pink-400 text-4xl mx-auto" />,
  },
  {
    title: "Performance Optimization",
    description:
      "Optimizing web applications for speed and performance to provide a seamless user experience.",
    icon: <FaChartBar className="text-yellow-400 text-4xl mx-auto" />,
  },
];

const ServicesSection = () => {
  return (
    <motion.div
      id="services"
      className="bg-black text-gray-100 py-10 px-5 sm:px-20 md:px-32"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center">My Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => {
          const animationVariants = {
            0: { opacity: 0, x: -50 }, // Slide from left
            1: { opacity: 0, x: 50 }, // Slide from right
            2: { opacity: 0, y: -50 }, // Slide from top
            3: { opacity: 0, y: 50 }, // Slide from bottom
          };

          return (
            <motion.div
              key={index}
              className="bg-gray-800 shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-transform transform hover:scale-105"
              initial={animationVariants[index % 4]} // Cycle through different animations
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-100">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ServicesSection;
