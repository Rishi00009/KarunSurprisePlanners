import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="flex flex-col items-center text-center">
          {/* Logo/Brand */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold tracking-tight">Karur Surprise Planners</h2>
            <p className="mt-2 text-gray-300">Serving Karur and nearby areas</p>
          </div>

          {/* Copyright */}
          <div className="mt-8 border-t border-white-700 pt-8 w-full">
            <p className="text-base text-gray-400">
              © 2025 Karur Surprise Planners. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;