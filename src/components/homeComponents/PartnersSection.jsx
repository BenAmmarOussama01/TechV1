// PartnersSection.js
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Partners } from '../../constants/index.jsx';

const PartnersSection = ({ isVisible }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ToShow = 3; 
  const totalLogos = Partners.length;

  const moveLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const moveRight = () => {
    if (currentIndex < totalLogos - ToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section className="py-12 bg-gray-50">
      <motion.div 
        className="container mx-auto px-4" 
        initial={{ opacity: 1, y: 0 }} 
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-center text-[#BEC083] text-5xl font-semibold mb-2">
          Our Partners
        </h2>
        <p className="text-center text-gray-600 mb-8 text-lg">
          We are proud to collaborate with innovative societies in all our solutions.
        </p>
      </motion.div>

      <div className="flex items-center justify-center relative w-full">
        <button 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[#BEC083] hover:text-[#A5A863] transition duration-300" 
          onClick={moveLeft}
        >
          <ChevronLeft size={32} />
        </button>

        <div className="overflow-hidden w-full md:w-3/4 flex justify-center">
          <div 
            className="flex transition-transform duration-500 ease-out" 
            style={{ transform: `translateX(-${(currentIndex * 100) / ToShow}%)` }}
          >
            {Partners.slice(currentIndex, currentIndex + ToShow).map((partner) => (
              <div 
                key={partner.id} 
                className="flex justify-center w-full p-4"
              >
                <img 
                  src={partner.img} 
                  alt={partner.alt} 
                  className="max-w-[120px] max-h-[120px] transition-transform duration-300 transform hover:scale-110 mx-auto" 
                  style={{ margin: '0 30px' }} 
                />
              </div>
            ))}
          </div>
        </div>

        <button 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#BEC083] hover:text-[#A5A863] transition duration-300" 
          onClick={moveRight}
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </section>
  );
};

export default PartnersSection;
