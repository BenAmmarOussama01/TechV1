
import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../assets/images/homeImages/image1.png'; 
import { motion } from 'framer-motion';

const TopSection = () => {
  return (
      <section className="bg-white py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        
     
        <motion.div 
          className="lg:w-1/2 px-4 mb-8 lg:mb-0"
          data-aos="fade-up"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#BEC083] to-black bg-clip-text text-transparent leading-tight">
            WE DELIVER YOUR<br />
            SECURITY AMBITIONS
          </h1>
          <p className="text-lg text-gray-700 mt-6">
            Powerful Security Solutions, Built to Protect Your Behavior. From intelligent cameras to robust risk detection software, ButterTech offers an all-in-one approach to security. Whether it's monitoring your premises or detecting potential risks, our technology adapts to your needs.
          </p>

        
          <div className="mt-8 space-y-4 lg:space-x-4 lg:space-y-0 flex flex-col lg:flex-row items-center lg:items-start">
            <Link
              to="/contact-us"
              className="inline-block px-6 py-3 bg-[#BEC083] text-white rounded-lg font-medium hover:bg-[#a5a863] transition duration-300 text-center"
            >
              Contact us
            </Link>
            <Link
              to="/services"
              className="inline-block px-6 py-3 border border-[#BEC083] text-[#BEC083] rounded-lg font-medium hover:bg-[#f2f4f0] transition duration-300 text-center"
            >
              Discover our services
            </Link>
          </div>
        </motion.div>

        
        <motion.div
          className="lg:w-1/2 px-4"
          data-aos="fade-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={image1}
            className="rounded-lg shadow-lg w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
            alt="Security Solutions"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TopSection;
