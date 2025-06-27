import React from 'react';
import { Link } from 'react-router-dom';

const PDCAdvertisement = () => {
  return (
    <div className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 py-12 px-4 mx-4 rounded-2xl shadow-2xl mb-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Found this useful? ✨
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">
            Check out PDC for 3 days of upskilling and fun! 🚀
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            {/* PDC Logo/Badge */}
            <div className="bg-white rounded-full p-6 shadow-lg">
              <div className="text-4xl md:text-5xl font-bold text-orange-500">
                PDC
              </div>
              <div className="text-sm text-gray-600 font-medium mt-1">
                Professional<br />Development<br />Camp
              </div>
            </div>
            
            {/* Event Details */}
            <div className="text-center md:text-left">
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-4">
                <h4 className="text-lg font-semibold mb-2">🗓️ What to Expect:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Weekend-long intensive workshop</li>
                  <li>• Hands-on career skill building</li>
                  <li>• Networking opportunities</li>
                  <li>• Industry expert sessions</li>
                  <li>• Fun team activities</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="space-y-4">
            <Link
              to="/pdc"
              className="inline-block px-8 py-4 bg-white text-orange-500 font-bold text-lg rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Learn More & Register 📝
            </Link>
            
            {/* CEVSoc Affiliation */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2">
                <span className="text-sm font-medium">🤝 Affiliated with CEVSoc</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDCAdvertisement; 