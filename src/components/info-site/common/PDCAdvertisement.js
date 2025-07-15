import React from 'react';

const PDCAdvertisement = () => {
  const handlePDCClick = () => {
    // Open ticket sale page in new tab
    window.open('https://events.humanitix.com/cevsoc-pdc-2025', '_blank');
    // Redirect current page to blog PDC page
    // window.location.href = 'https://blog.cevsoc.com/pdc';
  };

  return (
    
    <div className="bg-gradient-to-r  py-12 px-4 mx-4 rounded-2xl shadow-2xl mb-8 bg-cover bg-center_15 bg-no-repeat"
    style={{
      backgroundImage: `linear-gradient(rgba(17, 138, 124, 0.6), rgba(24, 139, 66, 0.6), rgba(114, 160, 39, 0.6)), url('/images/hero.png')`
    }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Found this useful? ✨
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">
           CEVSOC's Professional Development Camp will equip you with EVERYTHING you need to know to land your dream role 🚀
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            {/* PDC Logo/Badge */}
            <div className="flex-shrink-0">
              <img 
                src="/images/PDC_CP.png" 
                alt="PDC Professional Development Camp" 
                className="w-48 h-auto md:w-80 object-contain mx-auto"
                style={{ maxHeight: '400px' }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'inline-block';
                }}
              />
              <div className="text-2xl md:text-3xl font-bold text-green-800 text-center mt-2 hidden">
                PDC
              </div>
            </div>
            
            {/* Event Details */}
            <div className="text-center md:text-left">
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-4" style={{ minHeight: '200px' }}>
                <h4 className="text-lg font-semibold mb-2">🗓️ What to Expect:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Exclusive Insider Secrets</li>
                  <li>• Real Advice from our Grads</li>
                  <li>• Max out your Skills and Confidence</li>
                  <li>• Build a Bullet-proof Network</li>
                  <li>• Crazy Games and Wild Parties</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="space-y-4">
            <button
              onClick={handlePDCClick}
              className="inline-block px-8 py-4 bg-white text-green-800 font-bold text-lg rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
            >
              Learn More & Register 📝
            </button>
            
            {/* CEVSoc Affiliation */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2">
                <span className="text-sm font-medium">💚 Affiliated with CEVSOC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDCAdvertisement; 