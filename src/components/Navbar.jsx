import React, { useState } from 'react';
import MyLogo from '../assets/images/logo.jpg';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='flex justify-between items-center px-5 py-3 shadow-md'>
            {/* Logo */}
            <img
                className='rounded-full w-16 md:w-20'
                src={MyLogo}
                alt="My Logo"
                aria-label="Shakeel Ahmed Logo"
            />

            {/* Desktop Navigation Menu */}
            <nav>
                <ul className='hidden md:flex gap-8 font-poppins text-lg '>
                    <li className='hover:text-blue-600 hover:underline cursor-pointer'>Home</li>
                    <li className='hover:text-blue-600 hover:underline cursor-pointer'>Projects</li>
                    <li className='hover:text-blue-600 hover:underline cursor-pointer'>Services</li>
                    <li className='hover:text-blue-600 hover:underline cursor-pointer'>Portfolio</li>
                    <li className='hover:text-blue-600 hover:underline cursor-pointer'>Contact</li>
                </ul>
            </nav>

            {/* Mobile Menu (Hamburger Icon) */}
            <div className='md:hidden'>
                <button className='text-2xl focus:outline-none' onClick={toggleMenu} aria-label="Toggle Navigation Menu" > ☰ </button>
            </div>

            {/* Full-Screen Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className='fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col items-center justify-center z-50'>
                    {/* Close Button */}
                    <button
                        className='absolute top-5 right-5 text-3xl text-white focus:outline-none'
                        onClick={toggleMenu}
                        aria-label="Close Navigation Menu"
                    >
                        ✖
                    </button>

                    <ul className='flex flex-col gap-8 font-poppins text-2xl font-bold text-center'>
                        <li
                            className='hover:text-gray-400 cursor-pointer'
                            onClick={toggleMenu} // Close menu on click
                        >
                            Home
                        </li>
                        <li
                            className='hover:text-gray-400 cursor-pointer'
                            onClick={toggleMenu}
                        >
                            Projects
                        </li>
                        <li
                            className='hover:text-gray-400 cursor-pointer'
                            onClick={toggleMenu}
                        >
                            Services
                        </li>
                        <li
                            className='hover:text-gray-400 cursor-pointer'
                            onClick={toggleMenu}
                        >
                            Portfolio
                        </li>
                        <li
                            className='hover:text-gray-400 cursor-pointer'
                            onClick={toggleMenu}
                        >
                            Contact
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
