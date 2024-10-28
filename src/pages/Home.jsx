// Home.js
import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProductsSection from '../components/homeComponents/ProductsSection';
import PartnersSection from '../components/homeComponents/PartnersSection';
import OurNumbers from '../components/homeComponents/OurNumbers.jsx';
import WhoWeAre from '../components/homeComponents/WhoWeAre.jsx';
import TopSection from '../components/homeComponents/TopSection.jsx';
import Standards from '../components/homeComponents/Standards.jsx';
import image3 from '../assets/images/homeImages/image3.png'; 
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const sectionRef = useRef(null); // Ref for observing the ProductsSection
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log('Products Section Visibility:', isVisible);
  }, [isVisible]);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Optional: Reset visibility when not in view
        }
      },
      { threshold: 0.1 } // Adjust threshold if necessary
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <>
      <TopSection />
      <div ref={sectionRef}> {/* Attach the ref here for observation */}
        <ProductsSection isVisible={isVisible} />
      </div>
      <Standards imageSrc={image3} />
      <PartnersSection isVisible={isVisible} />
      <WhoWeAre />
      <OurNumbers />
    </>
  );
};

export default Home;
