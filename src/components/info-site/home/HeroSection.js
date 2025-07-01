import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = ({ onExploreClick }) => {
  return (
    // <section className="h-screen bg-gradient-to-br from-green-400 via-green-500 to-yellow-600 text-white flex items-center justify-center w-full pb-20 sm:pb-32">
    <section 
      className="h-screen bg-cover bg-[center_15%] text-white flex items-center justify-center w-full pb-16 sm:pb-24"
      style={{
        backgroundImage: `linear-gradient(rgba(20, 184, 166, 0.2), rgba(34, 197, 94, 0.2), rgba(163, 230, 53, 0.2)), url('/images/hero-green.png')`
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center">
          <img 
            src="/images/cevsoc_logo.avif" 
            alt="CEVSOC Logo" 
            className="w-14 h-14 object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'inline-block';
            }}
          />
          <div className="text-xl md:text-2xl leading-relaxed text-white"> 
            <strong>CEVSOC Presents:</strong>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-5 text-white">
          Career Compass
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold mb-5 text-white">
          Your one stop shop for everything you need to know to get your dream role.
        </h2>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
          Practical advice, industry secrets, and free resources for internships and grad roles.
        </p>
        
        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          {/* <button
            onClick={onExploreClick}
            className="px-8 py-3 bg-white text-green-600 font-bold text-lg rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Need Help? Click Here
          </button> */}
          <Link
            to="/articles"
            className="px-8 py-3 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-green-600 transform hover:scale-105 transition-all duration-300 shadow-lg inline-block"
          >
            Need Help? Click Here
          </Link>
          <Link
            to="/resume-analyser"
            className="px-8 py-3 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-green-600 transform hover:scale-105 transition-all duration-300 shadow-lg inline-block"
          >
            Fix My Resume!
          </Link>
          <Link
            to="/pdc"
            className="px-8 py-3 bg-white text-green-600 font-bold text-lg rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Buy My PDC Ticket
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 