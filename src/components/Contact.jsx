import React, { useState } from 'react';
import { FaUserAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';  // Import EmailJS
import { motion } from 'framer-motion';
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

        emailjs.sendForm('service_ijsugv2', 'template_jcw3dxg', e.target, 'dxlIerXfEdTyPTsYl')
            .then((result) => {
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            }, (error) => {
                alert('Failed to send message. Please try again.');
            });
    };

    return (
        <motion.div 
            id='contact' 
            className="bg-black text-white py-10 w-full px-5 sm:px-20 md:px-32"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-3xl font-bold mb-8 text-center">Let's Connect</h2>
            <div className="flex items-center justify-between">
                <motion.div 
                    className="hidden md:block w-1/2 pl-8"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img src={ContactImage} alt="Contact Illustration" className="w-full h-auto rounded-lg" />
                </motion.div>
                <motion.div 
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <form onSubmit={handleSubmit}>
                        {[{ label: 'Name', icon: <FaUserAlt />, id: 'name' },
                          { label: 'Email', icon: <FaEnvelope />, id: 'email' },
                          { label: 'Message', icon: <FaPaperPlane />, id: 'message' }]
                          .map(({ label, icon, id }) => (
                            <motion.div 
                                key={id} 
                                className="mb-4"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <label htmlFor={id} className="block text-lg mb-2">{label}</label>
                                <div className="flex items-center border border-gray-500 p-2 rounded-lg">
                                    {icon}
                                    {id === 'message' ? (
                                        <textarea id={id} name={id} placeholder={`Enter your ${label.toLowerCase()}`} rows="4" value={formData[id]} onChange={handleChange} className="bg-transparent text-white w-full outline-none resize-none"/>
                                    ) : (
                                        <input type={id === 'email' ? 'email' : 'text'} id={id} name={id} placeholder={`Enter your ${label.toLowerCase()}`} value={formData[id]} onChange={handleChange} className="bg-transparent text-white w-full outline-none"/>
                                    )}
                                </div>
                                {formErrors[id] && <p className="text-red-500 text-sm">{formErrors[id]}</p>}
                            </motion.div>
                        ))}
                        <motion.button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg flex items-center w-full justify-center text-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <FaPaperPlane className="mr-2" />
                            Send Message
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Contact;
