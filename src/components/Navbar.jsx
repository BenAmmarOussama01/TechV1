import React, { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react";
import Logo from '../assets/images/logo.png';
import { navItems } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { 
        setMobileDrawerOpen(false); 
      }
    };

    window.addEventListener('resize', handleResize);

  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-white shadow-md" style={{ height: '90px' }}>
      <div className="container mx-auto flex justify-between items-center" style={{ height: '90px' }}>
        {/* Logo */}
        <div className="flex items-center">
          <img style={{ width: '250px', paddingTop: '0' }} className="mr-2" src={Logo} alt="Logo" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-10">
          {navItems.map((item, index) => (
            <li key={index} className="group">
              <Link
                to={item.href}
                className="text-[#BEC083] font-semibold hover:text-[#BEC083] relative transition-all duration-300"
              >
                {item.label}
                <span className="block h-1 w-0 group-hover:w-full transition-all duration-300 bg-[#BEC083]"></span>
                </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleNavbar} className="text-gray-700">
            {mobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div
            className="fixed inset-0 z-20 bg-black bg-opacity-50" 
            onClick={toggleNavbar} 
          >
            <div
              className="absolute right-0 z-30 mt-20 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabIndex="-1"
              style={{ backgroundColor: '#F7F8F9' }}
              onClick={(e) => e.stopPropagation()} 
            >
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="text-center">
                    <Link
                      to={item.href}
                      className="text-[#BEC083] text-lg hover:underline hover:text-[#BEC083] active:underline block py-2"
                      onClick={toggleNavbar} 
                    >
                      {item.label}
                      </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;




