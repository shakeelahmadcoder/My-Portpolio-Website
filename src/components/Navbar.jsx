import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import MyLogo from "../assets/images/logo.jpg";
import { motion, AnimatePresence } from "framer-motion"; // Framer Motion imports

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-white body-font shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
        
        {/* Mobile: Logo & Menu Icon in One Row */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between w-full md:w-auto"
        >
          <a href="#home" className="flex items-center gap-3">
            <img
              className="rounded-full w-14 md:w-16 border-2 border-blue-600"
              src={MyLogo}
              alt="Shakeel Ahmed Logo"
              aria-label="Shakeel Ahmed Logo"
            />
            <span className="ml-3 text-xl font-semibold">Shakeel Ahmed</span>
          </a>
          
          {/* Mobile Menu Button */}
          <button
            className="text-2xl focus:outline-none md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
          >
            ☰
          </button>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center text-base justify-center"
        >
          <a href="#home" className="mr-5 hover:text-blue-400 font-bold text-xl">Home</a>
          <a href="#projects" className="mr-5 hover:text-blue-400 font-bold text-xl">Projects</a>
          <a href="#services" className="mr-5 hover:text-blue-400 font-bold text-xl">Services</a>
          <a href="#contact" className="mr-5 hover:text-blue-400 font-bold text-xl">Contact</a>
        </motion.nav>

        {/* Desktop CTA Button */}
        <motion.a
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          href="https://wa.me/923300642572" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hidden md:inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg text-lg font-semibold hover:bg-blue-500 transition-all"
        >
          Let's Connect <FaArrowRight className="ml-2" />
        </motion.a>

        {/* Mobile Menu with CTA Button */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col items-center justify-center z-50"
            >
              <button
                className="absolute top-5 right-5 text-3xl text-white focus:outline-none"
                onClick={() => setIsOpen(false)}
                aria-label="Close Navigation Menu"
              >
                ✖
              </button>
              <motion.ul
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                className="flex flex-col gap-6 text-xl text-center"
              >
                <li><a href="#home" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</a></li>
                <li><a href="#projects" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Projects</a></li>
                <li><a href="#services" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Services</a></li>
                <li><a href="#contact" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Contact</a></li>
              </motion.ul>
              {/* Mobile CTA Button - Only Visible in Menu */}
              <motion.a
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                href="https://wa.me/923300642572" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-6 inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg text-lg font-semibold hover:bg-blue-500 transition-all"
              >
                Let's Connect <FaArrowRight className="ml-2" />
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
};

export default Navbar;