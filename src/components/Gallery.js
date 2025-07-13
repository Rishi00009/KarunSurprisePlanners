import React, { useState } from 'react';

// Import images
import Dec1 from '../components/images/Baloon Dec/Dec (1).jpg';
import Dec2 from '../components/images/Baloon Dec/Dec (2).jpg';
import Dec3 from '../components/images/Baloon Dec/Dec (3).jpg';
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
  // Balloon decoration images
  const balloonImages = [
    { id: 1, title: 'Elegant Black and Red Arch', category: 'Birthday', img: Dec1 },
    { id: 2, title: 'Pink theme', category: 'Birthday', img: Dec2 },
    { id: 3, title: 'Golden Decor', category: 'Birthday', img: Dec3 },
    { id: 5, title: 'Blue and White', category: 'Birthday', img: Dec5 },
    { id: 6, title: 'Violet and Silver', category: 'Birthday', img: Dec6 },
    { id: 7, title: 'Violet and Silver', category: 'Birthday', img: Dec7 },
    { id: 8, title: 'Violet and Silver', category: 'Birthday', img: Dec8 },
    { id: 9, title: 'Silver Gold Rose', category: 'Anniversary', img: Dec9 },
    { id: 10, title: 'Silver Gold Rose', category: 'Anniversary', img: Dec10 },
    { id: 11, title: 'Silver Gold Rose', category: 'Anniversary', img: Dec11 },
    { id: 12, title: 'Pink theme With Heart', category: 'Birthday', img: Dec12 },
    { id: 13, title: 'Blue and white with Dudu', category: 'Birthday', img: Dec13 }
  ];

  // Instagram videos data
  const instagramVideos = [
    { id: 1, title: "wife @chaarming_bharu planned a birthday surprise ✨ to husband", url: 'https://www.instagram.com/reel/C5dWsD1rcjp/' },
    { id: 2, title: 'Wife surprise💫 a her husband Birthday🥳 ', url: 'https://www.instagram.com/reel/C7twK1cPxUs/' },
    { id: 3, title: 'Wife surprised her husband for his birthday 🎊💝', url: 'https://www.instagram.com/reel/C79PUDkSBlB/' },
    { id: 4, title: 'Car boot decoration is also available for low price 💜🎀', url: 'https://www.instagram.com/reel/C8du54ASDRu/' },
    { id: 5, title: '(Midnight 12:00 AM Surprise)😱', url: 'https://www.instagram.com/reel/DAJA6HIStA0/' },
    { id: 6, title: 'Even Husband 🤩 also Surprised her wife 💞👩‍❤️‍👨Birthday', url: 'https://www.instagram.com/reel/DCO3lDeMzqI/' },
    { id: 7, title: '🎉🌟 **Turning ONE in Style!** 🌟🎉', url: 'https://www.instagram.com/reel/DCwdkcnzTxz/' },
    { id: 8, title: 'From France to Karur, love knows no borders!', url: 'https://www.instagram.com/reel/DC_tjQ1zsec/' },
    { id: 9, title: '🎈🚗 A Mother’s Love, Wrapped in a Surprise! 🚗🎈', url: 'https://www.instagram.com/reel/DEhxOquz7Gc/' },
    { id: 10, title: 'Birthday', url: 'https://www.instagram.com/reel/DFksd-pShfE/' },
    { id: 11, title: 'Soulmate Birthday', url: 'https://www.instagram.com/reel/DFxmRNHiTIy/' },
    { id: 12, title: 'Best friend was pure magic', url: 'https://www.instagram.com/reel/DKCbBWsTzCE/' },
    { id: 13, title: '“A son’s love lit up the night! ', url: 'https://www.instagram.com/reel/DKzTfVFTOPh/' },
    { id: 14, title: '✨Stranger Surprise at 11 to 11 Restaurant✨', url: 'https://www.instagram.com/reel/DK9u26XTRrI/' },
    { id: 15, title: 'A Family Bond Beyond Borders! ❤️✨', url: 'https://www.instagram.com/reel/DLKphedTi1q/' },
    { id: 16, title: 'Love in the Air – Right in the Heart of Karur! ❤️🎉', url: 'https://www.instagram.com/reel/DLfAeMFxtp7/' },
    { id: 17, title: '🎉 10 Years of Love & Togetherness! ❤️✨', url: 'https://www.instagram.com/reel/DHDzExNTjIs/' },
    { id: 18, title: 'Wife @roshney._  surprise 💫 to her husband👩‍❤️‍👨', url: 'https://www.instagram.com/reel/C69B0PHPZoo/' }
  ];

  // State management
  const [filteredImages, setFilteredImages] = useState(balloonImages);
  const [activeFilter, setActiveFilter] = useState('All');
  const [showAllImages, setShowAllImages] = useState(false);
  const [showAllVideos, setShowAllVideos] = useState(false);

  // Filter images by category
  const filterImages = (category) => {
    setActiveFilter(category);
    setFilteredImages(category === 'All' ? balloonImages : balloonImages.filter(image => image.category === category));
    setShowAllImages(false);
  };

  // Determine which images/videos to display
  const displayedImages = showAllImages ? filteredImages : filteredImages.slice(0, 14);
  const displayedVideos = showAllVideos ? instagramVideos : instagramVideos.slice(0, 14);

  return (
    <div className="space-y-0">
      {/* Image Gallery Section */}
      <section id="image-gallery" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-pink-600 mb-4">Our Balloon Decorations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our stunning balloon decoration work in Karur
            </p>
            <div className="w-20 h-1 bg-pink-400 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-8 flex-wrap gap-2">
            {['All', 'Birthday', 'Anniversary'].map((category) => (
              <button
                key={category}
                onClick={() => filterImages(category)}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  activeFilter === category ? 'bg-pink-600 text-white' : 'bg-white text-gray-700 hover:bg-pink-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayedImages.map((image) => (
              <div 
                key={image.id} 
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-w-1 aspect-h-1 bg-gray-100">
                  <img
                    src={image.img}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-lg">{image.title}</h3>
                    <p className="text-sm text-pink-200">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Images Button */}
          {filteredImages.length > 16 && (
            <div className="text-center mt-10">
              <button 
                onClick={() => setShowAllImages(!showAllImages)}
                className="px-6 py-3 bg-pink-600 text-white font-medium rounded-full hover:bg-pink-700 transition shadow-lg hover:shadow-xl"
              >
                {showAllImages ? 'Show Less' : 'View More Decorations'}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Video Gallery Section */}
      <section id="video-gallery" className="py-16 bg-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-pink-600 mb-4">Video Gallery</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Watch our decorations in action on Instagram
            </p>
            <div className="w-20 h-1 bg-pink-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6">
            {displayedVideos.map((video) => (
              <a
                key={video.id}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-100 aspect-[9/16]"
              >
                {/* Instagram logo overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 p-3 rounded-full">
                    <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white font-bold text-lg">{video.title}</h3>
                  
                </div>
              </a>
            ))}
          </div>

          {/* View More Videos Button */}
          {instagramVideos.length > 16 && (
            <div className="text-center mt-10">
              <button 
                onClick={() => setShowAllVideos(!showAllVideos)}
                className="px-6 py-3 bg-pink-600 text-white font-medium rounded-full hover:bg-pink-700 transition shadow-lg hover:shadow-xl"
              >
                {showAllVideos ? 'Show Less Videos' : 'View More Videos'}
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;