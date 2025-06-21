import React from 'react';

const Services = () => {
  const services = [
    {
      emoji: '🎨',
      title: 'Birthday Party Decoration',
      description: 'Beautiful themed decorations that transform any space into a magical celebration venue.',
      bgColor: 'bg-gradient-to-br from-pink-100 to-purple-100'
    },
    {
      emoji: '🎉',
      title: 'Surprise Planning for Kids/Adults',
      description: 'Expertly coordinated surprise parties that create unforgettable moments of joy and wonder.',
      bgColor: 'bg-gradient-to-br from-blue-100 to-purple-100'
    },
    {
      emoji: '🎂',
      title: 'Customized Cake & Gifts Coordination',
      description: 'Personalized cakes and thoughtfully selected gifts that perfectly match the celebration theme.',
      bgColor: 'bg-gradient-to-br from-yellow-100 to-pink-100'
    }
  ];

  return (
    <section id="services" className="py-16 bg-white from-pink-50 via-white to-purple-50">
      {/* Container with margin and rounded corners */}
      <div className="mx-4 sm:mx-6 lg:mx-8 xl:mx-10 2xl:mx-12 bg-rose-100 rounded-3xl shadow-lg overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-pink-300 mix-blend-multiply filter blur-xl"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-purple-300 mix-blend-multiply filter blur-xl"></div>
        </div>

        <div className="relative mx-auto px-8 lg:px-24 xl:px-32 py-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-pink-600 mb-4 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 right-0 mx-auto w-16 h-1 bg-pink-400 rounded-full"></span>
              <span className="absolute -bottom-4 left-0 right-0 mx-auto w-12 h-1 bg-pink-300 rounded-full opacity-70"></span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We create magical moments with our comprehensive party services
            </p>
          </div>

          {/* Services Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={`relative overflow-hidden p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center ${service.bgColor}`}
                >
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute -right-8 -top-8 w-16 h-16 bg-white bg-opacity-30 transform rotate-45"></div>
                  </div>
                  
                  <div className="text-5xl mb-6 animate-bounce">{service.emoji}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-700 text-lg">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;