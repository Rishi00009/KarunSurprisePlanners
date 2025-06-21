import React from 'react';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: 'Princess Theme Event',
      date: 'Feb 2024',
      description: 'A magical princess celebration with royal decorations and enchanting surprises.',
      emoji: '👑',
      bgGradient: 'from-purple-200 to-pink-300'
    },
    {
      id: 2,
      title: 'Simple Elegant Setup',
      date: 'May 2025',
      description: 'Elegant and minimalist birthday setup with beautiful balloon arrangements.',
      emoji: '🎈',
      bgGradient: 'from-blue-100 to-purple-200'
    },
    {
      id: 3,
      title: 'Superhero Party',
      date: 'Mar 2024',
      description: 'Action-packed superhero birthday with dynamic decorations and fun activities.',
      emoji: '🦸',
      bgGradient: 'from-red-100 to-yellow-200'
    },
    {
      id: 4,
      title: 'Unicorn Fantasy',
      date: 'Jun 2024',
      description: 'Rainbows, glitter and magical unicorns for a dreamy celebration.',
      emoji: '🦄',
      bgGradient: 'from-indigo-200 to-pink-300'
    },
    {
      id: 5,
      title: 'Dinosaur Adventure',
      date: 'Sep 2024',
      description: 'Prehistoric fun with dinosaur decorations and fossil hunting activities.',
      emoji: '🦖',
      bgGradient: 'from-green-200 to-teal-300'
    },
    {
      id: 6,
      title: 'Space Explorer',
      date: 'Nov 2024',
      description: 'Blast off to an interstellar party with planets, rockets and stars.',
      emoji: '🚀',
      bgGradient: 'from-blue-200 to-indigo-400'
    }
  ];

  return (
    <section id="gallery" className="py-16 bg-rose-200 from-pink-50 to-white">
      {/* Container with margin and rounded corners */}
      <div className="mx-4 sm:mx-6 lg:mx-8 xl:mx-10 2xl:mx-12 bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4 relative inline-block">
              Our Gallery
              <span className="absolute -bottom-2 left-0 right-0 mx-auto w-16 h-1 bg-pink-400 rounded-full"></span>
              <span className="absolute -bottom-4 left-0 right-0 mx-auto w-12 h-1 bg-pink-300 rounded-full opacity-70"></span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our magical birthday setups that brought joy to countless celebrations
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
            {galleryItems.map((item) => (
              <div 
                key={item.id}
                className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-pink-100 hover:border-pink-200 relative"
              >
                {/* Image Placeholder with Gradient */}
                <div className={`bg-gradient-to-br ${item.bgGradient} h-64 flex items-center justify-center relative overflow-hidden`}>
                  <span className="text-7xl z-10 group-hover:scale-110 transition-transform duration-500">
                    {item.emoji}
                  </span>
                  {/* Decorative elements */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white"></div>
                    <div className="absolute bottom-8 right-6 w-12 h-12 rounded-full bg-white"></div>
                    <div className="absolute top-1/2 left-1/4 w-6 h-6 rounded-full bg-white"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 relative">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <span className="text-sm bg-pink-100 text-pink-600 px-3 py-1 rounded-full whitespace-nowrap">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  {/* View More Button */}
                  <button className="text-pink-600 font-medium flex items-center group-hover:underline">
                    View more photos
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  {/* Corner decoration */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute -right-8 -top-8 w-16 h-16 bg-pink-100 transform rotate-45"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:from-pink-600 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-1">
              View All Events
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;