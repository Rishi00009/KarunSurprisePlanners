import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

// Import your logo image (adjust the path as needed)
import logo from './images/logo.png'; // Update this path

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <header className="bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          {/* Logo & Branding with Image */}
          <div className="flex items-center">
            <div className="flex items-center">
              {/* Logo Image */}
              <img 
                src={logo} 
                alt="Karur Surprise Planners Logo" 
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover border-2 border-white mr-3"
              />
              {/* Brand Text */}
              <div>
                <h1 className="text-xl sm:text-2xl font-bold">
                  <a 
                    href="#home" 
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll('home');
                    }} 
                    className="hover:text-yellow-200 transition duration-200 flex items-center"
                  >
                    Karur Surprise Planners
                  </a>
                </h1>
                <p className="hidden sm:block text-sm italic text-pink-200">
                  We create magical moments!
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll('home');
                  }}
                  className="hover:text-yellow-300 transition duration-200 font-medium px-2 py-1 rounded hover:bg-pink-700"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll('services');
                  }}
                  className="hover:text-yellow-300 transition duration-200 font-medium px-2 py-1 rounded hover:bg-pink-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#gallery" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll('gallery');
                  }}
                  className="hover:text-yellow-300 transition duration-200 font-medium px-2 py-1 rounded hover:bg-pink-700"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll('about');
                  }}
                  className="hover:text-yellow-300 transition duration-200 font-medium px-2 py-1 rounded hover:bg-pink-700"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll('contact');
                  }}
                  className="hover:text-yellow-300 transition duration-200 font-medium px-2 py-1 rounded hover:bg-pink-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2">
            <ul className="flex flex-col space-y-3">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll('home');
                  }}
                  className="block hover:text-yellow-300 transition duration-200 font-medium px-3 py-2 rounded hover:bg-pink-700"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll('services');
                  }}
                  className="block hover:text-yellow-300 transition duration-200 font-medium px-3 py-2 rounded hover:bg-pink-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#gallery" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll('gallery');
                  }}
                  className="block hover:text-yellow-300 transition duration-200 font-medium px-3 py-2 rounded hover:bg-pink-700"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll('about');
                  }}
                  className="block hover:text-yellow-300 transition duration-200 font-medium px-3 py-2 rounded hover:bg-pink-700"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll('contact');
                  }}
                  className="block hover:text-yellow-300 transition duration-200 font-medium px-3 py-2 rounded hover:bg-pink-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;