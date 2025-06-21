import React from 'react';
import { FaWhatsapp, FaPhoneAlt, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-pink-50">
      <div className="mx-auto px-8 lg:px-24 xl:px-32">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-pink-600 mb-4">Let's Create Magic Together</h2>
          <div className="w-20 h-1 bg-pink-400 mx-auto"></div>
          <p className="text-xl text-gray-700 mt-6 max-w-2xl mx-auto">
            Reach out to start planning your unforgettable celebration!
          </p>
        </div>

        {/* Contact Methods */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* WhatsApp */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
            <div className="bg-green-500 p-4 text-white text-center">
              <FaWhatsapp className="inline-block text-4xl mb-2" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Instant messaging for quick queries</p>
              <a 
                href="https://wa.me/919025548482" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300"
              >
                Message Now
              </a>
            </div>
          </div>

          {/* Instagram */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-4 text-white text-center">
              <FaInstagram className="inline-block text-4xl mb-2" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Instagram</h3>
              <p className="text-gray-600 mb-4">See our latest work and ideas</p>
              <a 
                href="https://www.instagram.com/karursurpriseplanners/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300"
              >
                Follow Us
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
            <div className="bg-blue-500 p-4 text-white text-center">
              <FaPhoneAlt className="inline-block text-4xl mb-2" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Direct conversation with our team</p>
              <a 
                href="tel:+919025548482" 
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;