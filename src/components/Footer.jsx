import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-5 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h2 className="text-2xl font-bold mb-3">Your Brand</h2>
            <p className="text-gray-400">
              Providing quality services and products to our valued customers. Let's grow together!
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row md:w-1/3 md:justify-around mb-6 md:mb-0">
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="text-gray-400">
                <li className="mb-2 hover:text-white cursor-pointer">Home</li>
                <li className="mb-2 hover:text-white cursor-pointer">About</li>
                <li className="mb-2 hover:text-white cursor-pointer">Services</li>
                <li className="mb-2 hover:text-white cursor-pointer">Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Resources</h3>
              <ul className="text-gray-400">
                <li className="mb-2 hover:text-white cursor-pointer">Privacy Policy</li>
                <li className="mb-2 hover:text-white cursor-pointer">Terms & Conditions</li>
                <li className="mb-2 hover:text-white cursor-pointer">Blog</li>
                <li className="mb-2 hover:text-white cursor-pointer">FAQs</li>
              </ul>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="md:w-1/3">
            <h3 className="text-lg font-semibold mb-3">Subscribe to Our Newsletter</h3>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white p-2 rounded-l-md outline-none w-full"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-r-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center md:justify-between items-center mt-10">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Your Brand. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
