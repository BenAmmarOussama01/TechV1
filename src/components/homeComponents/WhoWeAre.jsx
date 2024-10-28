import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import image41 from '../../assets/images/homeImages/image41.png';
import image42 from '../../assets/images/homeImages/image42.png';
import image43 from '../../assets/images/homeImages/image43.png';

const WhoWeAre = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  if (inView) {
    controls.start({ opacity: 1, y: 0 });
  }

  return (
    <section
      ref={ref}
      className="flex flex-col md:flex-row items-center justify-between p-8 bg-gray-100 text-gray-700"
    >
    
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 1 }}
        className="relative flex md:w-1/2 mb-8 md:mb-0"
      >
        <div className="relative flex flex-col items-center md:items-start md:flex-row gap-4">
          <motion.img
            src={image41}
            alt="Office scene"
            className="w-40 h-40 md:w-48 md:h-48 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.img
            src={image43}
            alt="Smiling person"
            className="absolute w-44 h-44 md:w-52 md:h-52 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            style={{ top: "20%", left: "25%" }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={controls}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <motion.img
            src={image42}
            alt="Teamwork"
            className="w-40 h-40 md:w-48 md:h-48 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            transition={{ duration: 0.8, delay: 0.7 }}
          />
        </div>
      </motion.div>

    
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 1, delay: 0.5 }}
        className="md:w-1/2 text-center md:text-left"
      >
        <h2 className="text-2xl font-bold text-[#BEC083] mb-4">Who we are?</h2>
        <h3 className="text-3xl font-bold text-gray-900 mb-6">
          Empowering Innovation through <br /> Advanced Technology.
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          Starting in 2016 with software development, we officially embraced artificial intelligence in 2017. Since then, we’ve been increasingly involved in AI-driven projects such as real-time object identification and classification through computer vision, contributing to diverse sectors.
        </p>
        <button className="bg-transparent border-2 border-[#BEC083] text-[#BEC083] font-semibold px-6 py-2 rounded-full hover:bg-[#BEC083] hover:text-white transition duration-300">
          Know More
        </button>
      </motion.div>
    </section>
  );
};

export default WhoWeAre;
