import React, { useState } from 'react';

// Import images
import Dec1 from '../components/images/Baloon Dec/Dec (1).jpg';
import Dec2 from '../components/images/Baloon Dec/Dec (2).jpg';
import Dec3 from '../components/images/Baloon Dec/Dec (3).jpg';
import Dec4 from '../components/images/Baloon Dec/Dec (4).jpg';
import Dec5 from '../components/images/Baloon Dec/Dec (5).jpg';
import Dec6 from '../components/images/Baloon Dec/Dec (6).jpg';
import Dec7 from '../components/images/Baloon Dec/Dec (7).jpg';
import Dec8 from '../components/images/Baloon Dec/Dec (8).jpg';
import Dec9 from '../components/images/Baloon Dec/Dec (9).jpg';
import Dec10 from '../components/images/Baloon Dec/Dec (10).jpg';
import Dec11 from '../components/images/Baloon Dec/Dec (11).jpg';
import Dec12 from '../components/images/Baloon Dec/Dec (12).jpg';
import Dec13 from '../components/images/Baloon Dec/Dec (13).JPG';

const Gallery = () => {
  const balloonImages = [
    { id: 1, title: 'Elegant Arch', category: 'Birthday', img: Dec1 },
    { id: 2, title: 'Rainbow Theme', category: 'Kids Party', img: Dec2 },
    { id: 3, title: 'Golden Decor', category: 'Anniversary', img: Dec3 },
    { id: 4, title: 'Princess Setup', category: 'Birthday', img: Dec4 },
    { id: 5, title: 'Organic Garland', category: 'Baby Shower', img: Dec5 },
    { id: 6, title: 'Number Display', category: 'Birthday', img: Dec6 },
    { id: 7, title: 'Floral Balloons', category: 'Wedding', img: Dec7 },
    { id: 8, title: 'Themed Backdrop', category: 'Birthday', img: Dec8 },
    { id: 9, title: 'Ceiling Decor', category: 'Corporate', img: Dec9 },
    { id: 10, title: 'Balloon Wall', category: 'Photoshoot', img: Dec10 },
    { id: 11, title: 'Custom Sculpture', category: 'Special Event', img: Dec11 },
    { id: 12, title: 'Floating Centerpiece', category: 'Wedding', img: Dec12 },
    { id: 13, title: 'Theme Package', category: 'Birthday', img: Dec13 }
  ];

  const [filteredImages, setFilteredImages] = useState(balloonImages);
  const [activeFilter, setActiveFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);

  // Determine which images to display
  const displayedImages = showAll ? filteredImages : filteredImages.slice(0, 6);

  const filterImages = (category) => {
    setActiveFilter(category);
    if (category === 'All') {
      setFilteredImages(balloonImages);
    } else {
      setFilteredImages(balloonImages.filter(image => image.category === category));
    }
    // Reset to showing only 6 when changing filters
    setShowAll(false);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section id="gallery" className="py-12 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-pink-600 mb-4">Balloon Decor Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our stunning balloon decoration work in Karur
          </p>
          <div className="w-20 h-1 bg-pink-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8 flex-wrap gap-2">
          <button 
            onClick={() => filterImages('All')}
            className={`px-4 py-2 rounded-full font-medium transition ${
              activeFilter === 'All' ? 'bg-pink-600 text-white' : 'bg-white text-gray-700 hover:bg-pink-100'
            }`}
          >
            All
          </button>
          <button 
            onClick={() => filterImages('Birthday')}
            className={`px-4 py-2 rounded-full font-medium transition ${
              activeFilter === 'Birthday' ? 'bg-pink-600 text-white' : 'bg-white text-gray-700 hover:bg-pink-100'
            }`}
          >
            Birthday
          </button>
          <button 
            onClick={() => filterImages('Wedding')}
            className={`px-4 py-2 rounded-full font-medium transition ${
              activeFilter === 'Wedding' ? 'bg-pink-600 text-white' : 'bg-white text-gray-700 hover:bg-pink-100'
            }`}
          >
            Wedding
          </button>
          <button 
            onClick={() => filterImages('Baby Shower')}
            className={`px-4 py-2 rounded-full font-medium transition ${
              activeFilter === 'Baby Shower' ? 'bg-pink-600 text-white' : 'bg-white text-gray-700 hover:bg-pink-100'
            }`}
          >
            Baby Shower
          </button>
          <button 
            onClick={() => filterImages('Corporate')}
            className={`px-4 py-2 rounded-full font-medium transition ${
              activeFilter === 'Corporate' ? 'bg-pink-600 text-white' : 'bg-white text-gray-700 hover:bg-pink-100'
            }`}
          >
            Corporate
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedImages.map((image) => (
            <div 
              key={image.id} 
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image */}
              <div className="aspect-w-1 aspect-h-1 bg-gray-100">
                <img
                  src={image.img}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-bold text-lg">{image.title}</h3>
                  <p className="text-sm text-pink-200">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button - Only show if there are more images to show */}
        {filteredImages.length > 6 && (
          <div className="text-center mt-10">
            <button 
              onClick={toggleShowAll}
              className="px-6 py-3 bg-pink-600 text-white font-medium rounded-full hover:bg-pink-700 transition shadow-lg hover:shadow-xl"
            >
              {showAll ? 'Show Less' : 'View More Decorations'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;