import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const OurNumbers = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.2,    
  });

  return (
    <section
      ref={ref}
      className="flex flex-col items-center py-16 px-8 bg-white rounded-lg shadow-lg text-gray-700 border border-black"
    >
      <h3 className="text-lg font-semibold text-[#BEC083] mb-4">Our numbers</h3>
      <p className="text-2xl font-semibold text-gray-900 mb-12 text-center max-w-2xl">
        Our success is reflected in the key milestones and achievements that drive ButterTech forward.
      </p>

      <div className="flex flex-wrap justify-center gap-12">
        {/* Stat Cards */}
        <div className="text-center">
          {inView && (
            <CountUp start={0} end={10} duration={2.5} prefix="+" className="text-5xl font-bold text-[#BEC083]" />
          )}
          <p className="text-lg text-gray-700 mt-4">Partners</p>
        </div>
        <div className="text-center">
          {inView && (
            <CountUp start={0} end={100} duration={2.5} prefix="+" className="text-5xl font-bold text-[#BEC083]" />
          )}
          <p className="text-lg text-gray-700 mt-4">Projects</p>
        </div>
        <div className="text-center">
          {inView && (
            <CountUp start={0} end={50} duration={2.5} prefix="+" className="text-5xl font-bold text-[#BEC083]" />
          )}
          <p className="text-lg text-gray-700 mt-4">Experts</p>
        </div>
        <div className="text-center">
          {inView && (
            <CountUp start={0} end={5} duration={2.5} prefix="+" className="text-5xl font-bold text-[#BEC083]" />
          )}
          <p className="text-lg text-gray-700 mt-4">Key Sectors</p>
        </div>
      </div>
    </section>
  );
};

export default OurNumbers;
