import React from 'react';
import { Link } from 'react-router-dom';

const AboutMeSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Photo */}
            <div className="relative w-40 h-40 rounded-full shadow-lg border-4 border-green-100 overflow-hidden mx-auto md:mx-0">
              <img
                src="/mugshot_23.jpg"
                alt="Lachlan Ho"
                className="w-full h-full object-cover"
                style={{ transform: 'scale(1.5)  translate(0%, 12%)' , transformOrigin: 'centre centre' }}
              />
            </div>
            
            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Hi, I'm Lachlan! 👋
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I'm a final year computer science/civil engineering undergraduate at UNSW, starting as a 
                full stack developer at Macquarie Bank next year. I understand the struggle of finding a job 
                and created this site to help students navigate their career journey with practical advice and real insights.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colours shadow-md"
              >
                Learn More About Me
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection; 