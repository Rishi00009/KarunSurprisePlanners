import React from "react";
import bannerBg from "./images/banner.jpg"; // Import your image

const Banner = () => {
  return (
    <div 
      className="relative h-96 w-full overflow-hidden"
      style={{
        backgroundImage: `url(${bannerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        {/* Animated main heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-bounce">
          Make Every Birthday Special!
        </h1>
        
        {/* Subheading */}
        <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">
          From surprise decorations to theme parties, we plan everything in Karur!
        </p>
        
        {/* CTA Button */}
        <button className="mt-8 bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Banner;