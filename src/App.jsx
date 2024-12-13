import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import the WhatsApp icon
import HeaderSection from './components/HeaderSection';
import ServicesSection from './components/ServicesSection';
import Contact from './components/Contact';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';

const App = () => {
  return (
    <div>
      <HeaderSection />
      <ProjectsSection />
      <ServicesSection />
      <Testimonials />
      <Contact />
      <Footer />
      
      {/* WhatsApp Icon */}
      <a 
        href="https://wa.me/923300642572" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 sm:h-20  sm:w-20 flex flex-col justify-center items-center  "
      >
        <FaWhatsapp size={40} />
      </a>
    </div>
  );
};

export default App;
