
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaEye, FaSun, FaStar } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const standards = [
  { icon: <FaLeaf />, text: 'Sustainable Solutions', bgColor: 'bg-black text-white' },
  { icon: <FaEye />, text: 'After-Sales Support', bgColor: 'bg-white text-gray-800' },
  { icon: <FaSun />, text: 'Proactive Maintenance', bgColor: 'bg-white text-gray-800' },
  { icon: <FaStar />, text: 'Business-to-consumer long tail', bgColor: 'bg-white text-gray-800' },
];

const Standards = React.forwardRef(({ imageSrc }, ref) => {
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="flex flex-col md:flex-row items-center p-8 space-y-8 md:space-y-0 md:space-x-8">
      <motion.div
        ref={inViewRef} 
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/2 space-y-4"
      >
        <h2 className="text-3xl font-semibold text-gray-800">Our Standards</h2>
        <div className="space-y-4">
          {standards.map((standard, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`flex items-center p-4 ${standard.bgColor} rounded-lg shadow-md`}
            >
              <span className="mr-2">{standard.icon}</span>
              <span>{standard.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.9 }}
        className="w-full md:w-1/2"
      >
        <img src={imageSrc} alt="Standards Image" className="rounded-lg shadow-md w-full h-auto" />
      </motion.div>
    </section>
  );
});

export default Standards