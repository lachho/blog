import React from 'react';
import { Link } from 'react-router-dom';

const UnderConstruction = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-95 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 text-center">
        <div className="mb-6">
          <div className="text-6xl mb-4">🚧</div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Resume Analyser Coming Soon!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Our AI-powered resume analyser is currently under construction and will be unveiled 
            exclusively at our in-person workshop.
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            🎉 Get Exclusive First Access!
          </h2>
          <div className="space-y-3 text-left">
            <div className="flex items-center">
              <span className="text-green-500 mr-3">📅</span>
              <span className="font-semibold">When:</span>
              <span className="ml-2">Next Thursday</span>
            </div>
            <div className="flex items-center">
              <span className="text-blue-500 mr-3">🎯</span>
              <span className="font-semibold">What:</span>
              <span className="ml-2">In-person Resume Workshop</span>
            </div>
            <div className="flex items-center">
              <span className="text-purple-500 mr-3">✨</span>
              <span className="font-semibold">Bonus:</span>
              <span className="ml-2">First to use the new analyser tool</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Link
            to="/pdc"
            className="inline-block w-full px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold text-lg rounded-lg hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Register for Workshop 🎟️
          </Link>
          
          <Link
            to="/"
            className="inline-block w-full px-6 py-3 border-2 border-gray-300 text-gray-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>
            Can't wait? Check out our 
            <Link to="/articles/resume-and-cover-letter" className="text-green-600 hover:text-green-800 mx-1 font-semibold">
              resume writing guides
            </Link>
            in the meantime!
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction; 