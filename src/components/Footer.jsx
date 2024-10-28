
import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Logo from '../assets/images/logo.png';
const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
      
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 space-y-4">
  <img src={Logo} alt="ButterTech Logo" style={{ width: "200px", height: "auto" }} className="mb-2" />

  {/* Social Media Links */}
  <div className="flex space-x-6 justify-center md:justify-start mt-2">
    <Link to="#" aria-label="LinkedIn" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
      <FaLinkedin size={24} />
    </Link>
    <Link to="#" aria-label="Facebook" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
      <FaFacebook size={24} />
    </Link>
    <Link to="#" aria-label="Instagram" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
      <FaInstagram size={24} />
    </Link>
    <Link to="#" aria-label="Twitter" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
      <FaTwitter size={24} />
    </Link>
  </div>
</div>


       
          <div className="flex justify-around flex-1 space-x-8">
            {/* Landings */}
            <div className="text-center md:text-left">
              <h3 className="text-black font-bold">Landings</h3>
              <ul className="text-gray-500 text-sm space-y-2">
                <li><Link to="#" className="hover:underline">Home</Link></li>
                <li><Link to="#" className="hover:underline">Product</Link></li>
                <li><Link to="#" className="hover:underline">Service</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div className="text-center md:text-left">
              <h3 className="text-black font-bold">Company</h3>
              <ul className="text-gray-500 text-sm space-y-2">
                <li><Link to="#" className="hover:underline">Home</Link></li>
                <li>
                  <Link to="#" className="relative inline-flex items-center space-x-1 hover:underline">
                    <span>Careers</span>
                    <span className="bg-[#BEC083] text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                      Hiring!
                    </span>
            </Link>
                </li>
                <li><Link to="#" className="hover:underline">Services</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="text-center md:text-left">
              <h3 className="text-black font-bold">Resources</h3>
              <ul className="text-gray-500 text-sm space-y-2">
                <li><Link to="#" className="hover:underline">Blog</Link></li>
                <li><Link to="#" className="hover:underline">Products</Link></li>
                <li><Link to="#" className="hover:underline">Services</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-xs mt-6">
          &copy; 2024 ButterTech. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
