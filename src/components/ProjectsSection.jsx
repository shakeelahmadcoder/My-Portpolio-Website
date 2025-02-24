import React from "react";
import projectImage1 from "../assets/images/ecomerce.png";
import projectImage2 from "../assets/images/digitalassests.png";
import projectImage3 from "../assets/images/miltaryacademy.png";
import projectImage4 from "../assets/images/travel.png";
import projectImage5 from "../assets/images/employeemanagment.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion"; // Framer Motion import

const projects = [
  { image: projectImage1, link: "https://ecomerece-website.vercel.app/" },
  { image: projectImage2, link: "https://digital-assets-ecomerece-website-2tba.vercel.app/" },
  { image: projectImage3, link: "https://miltary-academy-website.vercel.app/" },
  { image: projectImage4, link: "https://travel-agency-website-rose.vercel.app/" },
  { image: projectImage5, link: "https://employee-management-system-in-react-js.vercel.app/" },
];

const ProjectsSection = () => {
  return (
    <motion.div
      id="projects"
      className="bg-[#121212] py-12 px-5 sm:px-20 md:px-28"
      style={{ minHeight: "100vh" }}
      initial={{ opacity: 0, y: 50 }} // Initial state (hidden)
      whileInView={{ opacity: 1, y: 0 }} // Animate when in view
      transition={{ duration: 0.8 }} // Animation duration
    >
      <h2 className="text-4xl font-bold mb-12 text-center tracking-wide text-white">
        My Creative Projects
      </h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
        className="w-full"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center">
            <motion.div
              className="h-[75vh] rounded-md overflow-y-auto overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }} // Initial state (hidden)
              whileInView={{ opacity: 1, scale: 1 }} // Animate when in view
              transition={{ duration: 0.8, delay: index * 0.2 }} // Animation duration with delay
            >
              <img
                src={project.image}
                alt={`Project ${index + 1}`}
                className="w-full object-cover"
              />
            </motion.div>
            <motion.div
              className="text-center mt-4"
              initial={{ opacity: 0, y: 20 }} // Initial state (hidden)
              whileInView={{ opacity: 1, y: 0 }} // Animate when in view
              transition={{ duration: 0.8, delay: index * 0.2 }} // Animation duration with delay
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold text-sm rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                View Project
              </a>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default ProjectsSection;