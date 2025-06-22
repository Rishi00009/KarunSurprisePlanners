import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-12 md:py-16 lg:py-20">
      {/* Background container with responsive margins */}
      <div className="bg-gradient-to-b from-pink-100 to-white mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 rounded-2xl lg:rounded-3xl shadow-lg overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 mb-4 md:mb-6">
              Our Story
            </h2>
            <div className="w-20 sm:w-24 h-1.5 bg-gradient-to-r from-pink-400 to-pink-200 mx-auto rounded-full"></div>
          </div>

          {/* Content with responsive side-by-side layout */}
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-12 max-w-6xl mx-auto">
            {/* Left side - Image placeholder */}
            <div className="w-full lg:w-1/2 rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl border-4 border-white transform hover:scale-[1.01] transition-transform duration-300">
              <div className="bg-gradient-to-br from-pink-100 to-pink-300 h-64 sm:h-80 md:h-96 flex items-center justify-center">
                <span className="text-6xl md:text-7xl">🎂</span> {/* Replace with actual image */}
              </div>
            </div>

            {/* Right side - Text content */}
            <div className="w-full lg:w-1/2 bg-white/90 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-xl md:rounded-2xl shadow-md">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
                Creating Magical Moments in Karur
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Founded in 2023, <span className="font-semibold text-pink-600">Karur Surprise Planners</span> has quickly become the go-to team for unforgettable birthday celebrations.
                </p>
                
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  From <span className="font-semibold text-pink-600">balloon arches</span> to <span className="font-semibold text-pink-600">surprise entries</span>, we handle every element to make your special day magical.
                </p>
              </div>

              {/* Stats with responsive design */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-8 md:mt-12">
                <div className="bg-pink-50/80 p-4 sm:p-5 md:p-6 rounded-lg md:rounded-xl shadow-sm md:shadow-md border-l-4 border-pink-500">
                  <span className="block text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 mb-1 sm:mb-2">13+</span>
                  <p className="text-sm sm:text-base text-gray-700 font-medium">Months Experience</p>
                </div>
                <div className="bg-pink-50/80 p-4 sm:p-5 md:p-6 rounded-lg md:rounded-xl shadow-sm md:shadow-md border-l-4 border-pink-500">
                  <span className="block text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 mb-1 sm:mb-2">20+</span>
                  <p className="text-sm sm:text-base text-gray-700 font-medium">Successful Events</p>
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