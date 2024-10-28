// ProductsSection.js
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Products } from '../../constants/index.jsx';

const ProductsSection = ({ isVisible }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ToShow = 3;
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Products.length - ToShow : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Products.length - ToShow ? 0 : prevIndex + 1
    );
  };

  const displayedProducts = Products.slice(currentIndex, currentIndex + ToShow);

  return (
    <section className={`bg-[#f5f9ff] py-12 relative overflow-hidden transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <motion.div className="container mx-auto px-4" initial={{ opacity: 0, y: 50 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
        <h2 className="text-center text-[#BEC083] text-4xl font-semibold mb-8">Our Smart Security Solutions</h2>
        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          We provide high-performance security solutions using cutting-edge technology and real-time monitoring for residential, commercial, and large-scale environments. Our solutions, designed for large-scale traffic analysis, enable instant processing of video streams, delivering valuable insights for efficient and reliable security management.
        </p>
        
        <div className="flex items-center justify-center relative">
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[#BEC083] hover:text-[#a5a863] transition duration-300" onClick={prevSlide}>
            <ChevronLeft size={32} />
          </button>

          <div className="flex gap-8 transition-transform duration-500 transform">
            {displayedProducts.map((product, index) => {
              const isCenter = index === Math.floor(ToShow / 2);
              return (
                <motion.div key={index} className={`text-center transition-transform duration-500 ${isCenter ? 'scale-110' : 'scale-100'}`} whileHover={{ scale: 1.2 }}>
                  <img src={product.image} alt={product.name} className="mx-auto mb-4" style={{ width: '80px', height: 'auto' }} />
                  <h3 className="text-[#BEC083] font-bold text-xl mb-2">{product.name}</h3>
                  <p className="text-gray-700 mb-4">{product.Description}</p>
                  <Link to="/products" className="inline-flex items-center text-[#BEC083] font-semibold hover:underline">
                    Explore page
                    <span className="ml-2 text-[#BEC083]">&#x2192;</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#BEC083] hover:text-[#a5a863] transition duration-300" onClick={nextSlide}>
            <ChevronRight size={32} />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default ProductsSection;
