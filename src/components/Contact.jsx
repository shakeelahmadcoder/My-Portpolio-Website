import React, { useState } from 'react';
import { FaUserAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import ContactImage from "../assets/images/contact.svg";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name) errors.name = 'Name is required';
        if (!formData.email) errors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
        if (!formData.message) errors.message = 'Message is required';
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        // Simulate form submission success
        console.log('Form submitted successfully with data:', formData);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div id='contact' className="bg-gray-800 text-white py-10 px-5 sm:px-20 md:px-32">
            <h2 className="text-3xl font-bold mb-8 text-center">Let's Connect</h2>
            <div className="flex items-center justify-between">
                <div className="hidden md:block w-1/2 pl-8">
                    <img
                        src={ContactImage}
                        alt="Contact Illustration"
                        className="w-full h-auto rounded-lg"
                    />
                </div>
                <div className="w-full md:w-1/2">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-lg mb-2">Name</label>
                            <div className="flex items-center border border-gray-500 p-2 rounded-lg">
                                <FaUserAlt className="text-blue-500 mr-2" />
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="bg-gray-800 text-white w-full outline-none"
                                />
                            </div>
                            {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-lg mb-2">Email</label>
                            <div className="flex items-center border border-gray-500 p-2 rounded-lg">
                                <FaEnvelope className="text-blue-500 mr-2" />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="bg-gray-800 text-white w-full outline-none"
                                />
                            </div>
                            {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-lg mb-2">Message</label>
                            <div className="flex items-start border border-gray-500 p-2 rounded-lg">
                                <FaPaperPlane className="text-blue-500 mr-2" />
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Enter your message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="bg-gray-800 text-white w-full outline-none resize-none"
                                />
                            </div>
                            {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg flex items-center w-full justify-center text-center"
                        >
                            <FaPaperPlane className="mr-2" />
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;