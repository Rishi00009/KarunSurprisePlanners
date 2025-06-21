import React from 'react';

const Header = () => {
  return (
    <header className="bg-pink-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left side - Logo & Tagline */}
        <div>
          <h1 className="text-2xl font-bold">Karur Surprise Planners</h1>
          <p className="text-sm italic text-pink-200">We create magical  moments!</p>
        </div>

        {/* Right side - Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="hover:text-yellow-300 transition duration-200 font-medium">
                Home
              </a>
            </li>
            <li>
              <a href="/gallery" className="hover:text-yellow-300 transition duration-200 font-medium">
                Gallery
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-300 transition duration-200 font-medium">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-300 transition duration-200 font-medium">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;