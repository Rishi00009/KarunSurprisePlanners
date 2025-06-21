import React from 'react';

const About = () => {
  return (
    <section id="about" className="pt-0 pb-16"> {/* Removed top padding */}
      {/* Background container with margins */}
      <div className="bg-pink-300 from-pink-50 via-white to-pink-50 mx-4 md:mx-8 lg:mx-16 mb-16 rounded-2xl">
        <div className="container mx-auto px-4 py-12">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-pink-600 mb-6">Our Story</h2>
            <div className="w-24 h-2 bg-gradient-to-r from-pink-400 to-pink-200 mx-auto rounded-full"></div>
          </div>

          {/* Content with side-by-side layout */}
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            {/* Left side - Image placeholder */}
            <div className="lg:w-1/2 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <div className="bg-gradient-to-br from-pink-100 to-pink-300 h-96 flex items-center justify-center">
                <span className="text-6xl">🎂</span> {/* Replace with actual image */}
              </div>
            </div>

            {/* Right side - Text content */}
            <div className="lg:w-1/2 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Creating Magical Moments in Karur
              </h3>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Founded in 2023, <span className="font-semibold text-pink-600">Karur Surprise Planners</span> has quickly become the go-to team for unforgettable birthday celebrations.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  From <span className="font-semibold text-pink-600">balloon arches</span> to <span className="font-semibold text-pink-600">surprise entries</span>, we handle every element to make your special day magical.
                </p>
              </div>

              {/* Stats with improved design */}
              <div className="grid grid-cols-2 gap-6 mt-12">
                <div className="bg-pink-50/80 p-6 rounded-xl shadow-md border-l-4 border-pink-500">
                  <span className="block text-5xl font-bold text-pink-600 mb-2">13+</span>
                  <p className="text-gray-700 font-medium">Months Experience</p>
                </div>
                <div className="bg-pink-50/80 p-6 rounded-xl shadow-md border-l-4 border-pink-500">
                  <span className="block text-5xl font-bold text-pink-600 mb-2">20+</span>
                  <p className="text-gray-700 font-medium">Successful Events</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;