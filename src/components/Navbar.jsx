import React, { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react";
import Logo from '../assets/images/logo.png';
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  // Effect to close the mobile drawer when the screen width exceeds a certain threshold
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // Change this value if your breakpoint is different
        setMobileDrawerOpen(false); // Close mobile drawer when screen is larger than or equal to 1024px
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
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
              <a
                href={item.href}
                className="text-[#BEC083] font-semibold hover:text-[#BEC083] relative transition-all duration-300"
              >
                {item.label}
                <span className="block h-1 w-0 group-hover:w-full transition-all duration-300 bg-[#BEC083]"></span>
              </a>
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
            className="fixed inset-0 z-20 bg-black bg-opacity-50" // Overlay background
            onClick={toggleNavbar} // Close on overlay click
          >
            <div
              className="absolute right-0 z-30 mt-20 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabIndex="-1"
              style={{ backgroundColor: '#F7F8F9' }}
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside the menu
            >
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="text-center">
                    <a
                      href={item.href}
                      className="text-[#BEC083] text-lg hover:underline hover:text-[#BEC083] active:underline block py-2"
                      onClick={toggleNavbar} // Close the drawer on link click
                    >
                      {item.label}
                    </a>
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




