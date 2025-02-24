import React, { useState } from 'react';
import MyLogo from '../assets/images/logo.jpg';
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { FaTwitter } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { FaFigma } from 'react-icons/fa';
import { SiSass } from 'react-icons/si';
import { SiBootstrap } from 'react-icons/si';
import { FaGit } from 'react-icons/fa';
import { motion, AnimatePresence } from "framer-motion"; // Framer Motion imports

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className='flex flex-col md:flex-row justify-between items-center font-poppins gap-5 md:gap-20 px-5'>
            {/* Left - Content */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className='text-center md:text-left'
            >
                <h1 className='text-3xl md:text-5xl font-bold mb-2 md:mb-4'>Shakeel Ahmed</h1>
                <h3 className='text-xl md:text-2xl font-semibold text-gray-300 mb-4'>Front-End React.js Developer</h3>
                <p className='text-gray-400 leading-7 mb-6'>I create beautiful, responsive, and user-friendly web interfaces using modern frontend technologies.</p>
                <button 
                    onClick={() => setIsModalOpen(true)} 
                    className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 hover:scale-105 transform transition"
                >
                    About Me
                </button>
            </motion.div>

            {/* Mid - Image */}
            <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-60 h-60 rounded-full border-4 border-gray-200 shadow-lg" 
                src={MyLogo} 
                alt="Developer" 
            />

            {/* Right - Social Icons */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-row md:flex-col items-center gap-5 text-gray-400"
            >
                <a href="https://www.linkedin.com/in/shakeel-ahmed-a87a6a314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-blue-600 cursor-pointer transition transform hover:scale-110">
                    <TiSocialLinkedin />
                </a>

                <a href="https://www.facebook.com/profile.php?id=100088995935858&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-blue-500 cursor-pointer transition transform hover:scale-110">
                    <TiSocialFacebookCircular />
                </a>

                <a href="https://www.instagram.com/developer_shakeel?igsh=MW9wOG42d3RscWt1aw==" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-pink-500 cursor-pointer transition transform hover:scale-110">
                    <SlSocialInstagram />
                </a>

                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-400 cursor-pointer transition transform hover:scale-110">
                    <FaTwitter />
                </a>

                <a href="https://github.com/shakeelahmadcoder" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-gray-300 cursor-pointer transition transform hover:scale-110">
                    <ImGithub />
                </a>
            </motion.div>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="bg-gray-900 text-white rounded-lg shadow-lg p-8 w-11/12 md:w-2/3 lg:w-1/2 relative flex flex-col md:flex-row gap-8"
                        >
                            {/* Left - Information */}
                            <div className="flex-1">
                                <button 
                                    onClick={() => setIsModalOpen(false)} 
                                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 text-4xl"
                                >
                                    &times;
                                </button>
                                <h2 className="text-2xl font-bold mb-4">About Me</h2>
                                <p className="text-gray-300 mb-6">
                                    I am a passionate Front-End Developer specialized in creating responsive and user-friendly web interfaces. My core skills include:
                                </p>
                                <div className='flex justify-center items-center'>
                                    <ul className="list-disc list-inside text-gray-400 mb-4">
                                        <li className="flex items-center gap-2 text-blue-600 text-2xl"><FaReact /> React.js</li>
                                        <li className="flex items-center gap-2 text-blue-400 text-2xl"><SiTailwindcss /> Tailwind CSS</li>
                                        <li className="flex items-center gap-2 text-yellow-400 text-2xl"><SiJavascript /> JavaScript</li>
                                        <li className="flex items-center gap-2 text-orange-500 text-2xl"><SiHtml5 /> HTML5</li>
                                        <li className="flex items-center gap-2 text-blue-500 text-2xl"><SiCss3 /> CSS3</li>
                                        <li className="flex items-center gap-2 text-purple-600 text-2xl"><FaFigma /> Figma</li>
                                        <li className="flex items-center gap-2 text-pink-400 text-2xl"><SiSass /> SASS</li>
                                        <li className="flex items-center gap-2 text-indigo-600 text-2xl"><SiBootstrap /> Bootstrap</li>
                                        <li className="flex items-center gap-2 text-gray-600 text-2xl"><FaGit /> Git & GitHub</li>
                                    </ul>
                                </div>
                                <p className="text-gray-300">
                                    <strong>Education:</strong> Self-learning through YouTube and online resources.
                                </p>
                            </div>

                            {/* Right - Image */}
                            <div className="flex-1 flex justify-center items-center">
                                <img 
                                    className="hidden sm:block w-60 h-60 rounded-full border-4 border-gray-200 shadow-lg" 
                                    src={MyLogo} 
                                    alt="Shakeel Ahmed" 
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Hero;