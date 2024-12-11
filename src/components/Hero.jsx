import React, { useState } from 'react';
import MyLogo from '../assets/images/logo.jpg';
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { FaTwitter } from "react-icons/fa";
import { ImGithub } from "react-icons/im";

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className='flex flex-col md:flex-row justify-between items-center font-poppins mt-10 gap-5 md:gap-20 px-5'>
            {/* Left - Content */}
            <div className='text-center md:text-left'>
                <h1 className='text-3xl md:text-5xl font-bold mb-4'>Shakeel Ahmed</h1>
                <h3 className='text-xl md:text-2xl font-semibold text-gray-300 mb-4'>Front-End React.js Developer</h3>
                <p className='text-gray-400 leading-7 mb-6'>I create beautiful, responsive, and user-friendly web interfaces using modern frontend technologies.</p>
                <button 
                    onClick={() => setIsModalOpen(true)} 
                    className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 hover:scale-105 transform transition"
                >
                    About Me
                </button>
            </div>

            {/* Mid - Image */}
            <img className="w-60 h-60 rounded-full border-4 border-gray-200 shadow-lg" src={MyLogo} alt="Developer" />

            {/* Right - Social Icons */}
            <div className="flex flex-row md:flex-col items-center gap-5 text-gray-400">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-blue-600 cursor-pointer transition transform hover:scale-110" 
                >
                    <TiSocialLinkedin />
                </a>

                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-blue-500 cursor-pointer transition transform hover:scale-110" 
                >
                    <TiSocialFacebookCircular />
                </a>

                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-pink-500 cursor-pointer transition transform hover:scale-110" 
                >
                    <SlSocialInstagram />
                </a>

                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-400 cursor-pointer transition transform hover:scale-110" 
                >
                    <FaTwitter />
                </a>

                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-gray-300 cursor-pointer transition transform hover:scale-110" 
                >
                    <ImGithub />
                </a>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-gray-900 text-white rounded-lg shadow-lg p-8 w-11/12 md:w-2/3 lg:w-1/2 relative">
                        <button 
                            onClick={() => setIsModalOpen(false)} 
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 text-xl"
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl font-bold mb-4">About Me</h2>
                        <p className="text-gray-300 mb-6">
                            I help business owners and web developers design and develop creative websites that fit their vision and attract visitors. Technologies I use include JavaScript, React.js, Redux, Node.js, Tailwind CSS, and more. My goal is to deliver responsive, user-friendly, and modern web interfaces.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {[
                                '#javascript', '#react.js', '#redux', '#node.js',
                                '#express.js', '#mongoDB', '#tailwind', '#html',
                                '#css', '#sass', '#bootstrap', '#git', '#github',
                                '#figma'
                            ].map((tag, index) => (
                                <span 
                                    key={index} 
                                    className="px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Hero;
