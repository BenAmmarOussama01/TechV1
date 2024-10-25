import React, { useEffect,useState,useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import image1 from '../assets/images/homeImages/image1.png';
import { Products } from "../constants/index.jsx"
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is in view
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const productsToShow = 3; // Number of products to show at a time
  const [isVisible, setIsVisible] = useState(false); // For scroll animation
  const sectionRef = useRef(null); // Reference to the section for intersection observer

  // Handle previous button click
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Products.length - productsToShow : prevIndex - 1
    );
  };
  // Handle next button click
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Products.length - productsToShow ? 0 : prevIndex + 1
    );
  };

  // Get the products to display based on the current index
  const displayedProducts = Products.slice(currentIndex, currentIndex + productsToShow);


  return (
    <>   
      <section className="bg-white py-12">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          
          {/* Text Block */}
          <div className="lg:w-1/2 px-4 mb-8 lg:mb-0" data-aos="fade-up">
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#BEC083] to-black bg-clip-text text-transparent leading-tight">
              WE DELIVER YOUR<br />
              SECURITY AMBITIONS
            </h1>
            <p className="text-lg text-gray-700 mt-6">
              Powerful Security Solutions, Built to Protect Your Behavior. From intelligent cameras to robust risk detection software, ButterTech offers an all-in-one approach to security. Whether it's monitoring your premises or detecting potential risks, our technology adapts to your needs.
            </p>
            
            {/* Buttons */}
            <div className="mt-8 space-x-4">
              <Link
                to="/contact-us"
                className="inline-block px-6 py-3 bg-[#BEC083] text-white rounded-lg font-medium hover:bg-[#a5a863] transition duration-300"
              >
                Contact us
              </Link>
              <Link
                to="/services"
                className="inline-block px-6 py-3 border border-[#BEC083] text-[#BEC083] rounded-lg font-medium hover:bg-[#f2f4f0] transition duration-300"
              >
                Discover our services
              </Link>
            </div>
          </div>

          {/* Image Block */}
          <div className="lg:w-1/2 px-4" data-aos="fade-left">
            <img
              src={image1}
              className="rounded-lg shadow-lg w-full h-auto object-cover"
              alt="Security Solutions"
            />
          </div>
        </div>
      </section>
      {/*products section*/ }

      <section
      className={`bg-[#f5f9ff] py-12 relative overflow-hidden transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      ref={sectionRef}
    >
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 50 }} // For smooth scroll appearance
        animate={isVisible ? { opacity: 1, y: 0 } : {}} // When section is visible, animate it
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-center text-[#BEC083] text-4xl font-semibold mb-8">
          Our Smart Security Solutions
        </h2>
        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          We provide high-performance security solutions using cutting-edge technology and real-time monitoring for residential, commercial, and large-scale environments. Our solutions, designed for large-scale traffic analysis, enable instant processing of video streams, delivering valuable insights for efficient and reliable security management.
        </p>

        {/* Product Carousel */}
        <div className="flex items-center justify-center relative">
          {/* Left Arrow */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[#BEC083] hover:text-[#a5a863] transition duration-300"
            onClick={prevSlide}
          >
            <ChevronLeft size={32} />
          </button>

          <div className="flex gap-8 transition-transform duration-500 transform">
            {displayedProducts.map((product, index) => {
              const isCenter = index === Math.floor(productsToShow / 2); 
              return (
                <motion.div
                  key={index}
                  className={`text-center transition-transform duration-500 ${
                    isCenter ? "scale-110" : "scale-100"
                  }`}
                  whileHover={{ scale: 1.2 }} 
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="mx-auto mb-4"
                    style={{ width: "80px", height: "auto" }}
                  />
                  <h3 className="text-[#BEC083] font-bold text-xl mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-700 mb-4">{product.Description}</p>
                  <Link
                    to="/products"
                    className="inline-flex items-center text-[#BEC083] font-semibold hover:underline"
                  >
                    Explore page
                    <span className="ml-2 text-[#BEC083]">&#x2192;</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#BEC083] hover:text-[#a5a863] transition duration-300"
            onClick={nextSlide}
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </motion.div>
    </section>
    </>
  );
};

export default Home;
