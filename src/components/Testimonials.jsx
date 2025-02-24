import React from "react";
import { motion } from "framer-motion";
import Iqbal from "../assets/images/iqbal.jpg";
import WahidBux from "../assets/images/wahidbux.jpg";
import Aitbar from "../assets/images/aitbar.jpg";

const testimonials = [
  {
    name: "Iqbal (Life Coach)",
    role: "Life Coach Extraordinaire",
    message: "Shakeel is the guy who helps you debug your life. I am still waiting for him to fix my morning routine!",
    img: Iqbal,
  },
  {
    name: "WahidBux (Army Officer)",
    role: "Army Officer - But can’t stand Code",
    message: "I tried to teach Shakeel how to march, but he was more interested in React than running. Typical developer!",
    img: WahidBux,
  },
  {
    name: "Aitbar (Writer)",
    role: "Writer, Storyteller, and Developer's Nightmare",
    message: "Shakeel once wrote a 'Hello World' that even my characters couldn't understand. But he's got a future in front-end for sure!",
    img: Aitbar,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#121212] py-16">
      <div className="container mx-auto px-4 text-center text-white">
        <h2 className="text-3xl font-bold mb-8">What My Friends Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} // Left for even, right for odd
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-400 mb-4">"{testimonial.message}"</p>
              <div className="text-center">
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
