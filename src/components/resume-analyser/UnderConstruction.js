import React from 'react';
import { Link } from 'react-router-dom';

const UnderConstruction = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-gray-900 bg-opacity-95 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[94vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header - Fixed */}
        <div className="p-6 text-center border-b border-gray-200">
          <div className="text-4xl mb-2">🚧</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Resume Analyser Coming Soon!
          </h1>
          <p className="text-gray-600">
            Our AI-powered resume analyser will be unveiled exclusively at CEVSOC's LinkedIn + Resume Workshop.
          </p>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 space-y-4">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4">
            <h2 className="text-lg font-bold text-gray-800 mb-3">
              🎉 Get Exclusive First Access!
            </h2>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <span className="text-green-500 mr-2">📅</span>
                <span className="font-medium">When:</span>
                <span className="ml-1">Thursday 3rd July (Week 5)</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 mr-2">🎯</span>
                <span className="font-medium">What:</span>
                <span className="ml-1">Get Personalised Resume Feedback</span>
              </div>
              <div className="flex items-center">
                <span className="text-purple-500 mr-2">✨</span>
                <span className="font-medium">Bonus:</span>
                <span className="ml-1">Bring your smile for a free professional headshot</span>
              </div>
              <div className="flex items-center">
                <span className="text-purple-500 mr-2">🏢</span>
                <span className="font-medium">Where:</span>
                <span className="ml-1">Lower Ground, Civil Engineering Building UNSW</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Link
              target="_blank"
              to="https://docs.google.com/forms/d/e/1FAIpQLSemgi8aA0hPG1KYZP3GqbkxvLqtXfGJrBYn9eOceXrnLMn3Mw/viewform"
              className="block w-full px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold text-center rounded-lg hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Register for Workshop 🎟️
            </Link>
            
            <button
              onClick={onClose}
              className="block w-full px-4 py-2 border-2 border-gray-300 text-gray-600 font-medium text-center rounded-lg hover:bg-gray-50 transition-all duration-300"
            >
              Continue Exploring
            </button>
          </div>

          <div className="text-center text-sm text-gray-500 pt-2">
            <p>
              Can't wait? Check out our 
              <Link to="/articles/resume-and-cover-letter" className="text-green-600 hover:text-green-800 mx-1 font-medium">
                resume writing guides
              </Link>
              in the meantime!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction; 