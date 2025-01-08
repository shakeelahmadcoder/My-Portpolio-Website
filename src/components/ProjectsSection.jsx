import React from "react";
import projectImage1 from "../assets/images/ecomerce.png";
import projectImage2 from "../assets/images/digitalassests.png";
import projectImage3 from "../assets/images/miltaryacademy.png";
import projectImage4 from "../assets/images/travel.png";
import projectImage5 from "../assets/images/employeemanagment.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const projects = [
  { image: projectImage1, link: "https://ecomerece-website.vercel.app/" },
  { image: projectImage2, link: "https://digital-assets-ecomerece-website-2tba.vercel.app/" },
  { image: projectImage3, link: "https://miltary-academy-website.vercel.app/" },
  { image: projectImage4, link: "https://travel-agency-website-rose.vercel.app/" },
  { image: projectImage5, link: "https://employee-management-system-in-react-js.vercel.app/" },
];

const ProjectsSection = () => {
  return (
    <div
      id="projects"
      className="bg-[#121212] py-12 px-5 sm:px-20 md:px-28"
      style={{ minHeight: "100vh" }}
    >
      <h2 className="text-4xl font-bold mb-12 text-center tracking-wide text-white">
        Explore Our Works
      </h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
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
          <SwiperSlide key={index}>
            <div className="h-[100vh] rounded-md overflow-y-auto overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src={project.image}
                alt={`Project ${index + 1}`}
                className="w-full object-cover"
              />
            </div>
            <div className="text-center mt-8 cursor-pointer">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold text-sm rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                View Project
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectsSection;
