import React from 'react';
import { Link } from 'react-router-dom';
import { contentStructure } from '../../../data/contentStructure';

const JourneyTimeline = () => {
  // Define the journey order using actual contentStructure data
  const journeySteps = [
    {
      key: 'university',
      step: 1,
      color: 'from-blue-500 to-blue-600',
      icon: '🎓'
    },
    {
      key: 'setting-up-for-success',
      step: 2,
      color: 'from-purple-500 to-purple-600',
      icon: '🚀'
    },
    {
      key: 'resume-and-cover-letter',
      step: 3,
      color: 'from-green-500 to-green-600',
      icon: '📝'
    },
    {
      key: 'job-application-process',
      step: 4,
      color: 'from-orange-500 to-orange-600',
      icon: '💻'
    },
    {
      key: 'interview-preparation',
      step: 5,
      color: 'from-red-500 to-red-600',
      icon: '🎙️'
    },
    {
      key: 'career-guidance',
      step: 6,
      color: 'from-indigo-500 to-indigo-600',
      icon: '🧭'
    }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            Where are you along your journey? 🗺️
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow this step-by-step pathway to career success. Each stage builds on the previous, 
            guiding you from university through to landing your dream role.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full hidden md:block"></div>

          {/* Timeline Steps - Staircase Layout */}
          <div className="relative">
            {journeySteps.map((step, index) => {
              const category = contentStructure[step.key];
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={step.key} 
                  className="relative mb-4"
                  style={{ marginTop: index === 0 ? '0' : '-60px' }}
                >
                  {/* Timeline Dot */}
                  <div 
                    className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white rounded-full border-4 border-gray-200 flex items-center justify-center z-20 hidden md:flex"
                    style={{ top: '5px' }}
                  >
                    <div className={`w-8 h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                      {step.step}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`flex items-start ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="flex-1 md:w-1/2">
                      <div className={`bg-white rounded-lg shadow-lg p-4 md:p-5 border-l-4 transform hover:scale-102 transition-all duration-300 relative z-10 ${isEven ? 'md:mr-6' : 'md:ml-6'}`}
                           style={{ borderImageSource: `linear-gradient(to bottom, ${step.color.replace('from-', '').replace(' to-', ', ')})`, borderImageSlice: 1 }}>
                        <div className="flex items-center mb-3">
                          <div className={`text-2xl mr-3 p-2 rounded-full bg-gradient-to-r ${step.color} bg-opacity-10`}>
                            {step.icon}
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-gray-500 mb-1">
                              Step {step.step}
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-gray-800">
                              {category?.title || step.title}
                            </h3>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                          {category?.description || step.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                            {category?.articles?.length || 0} articles
                          </span>
                          
                          <Link
                            to={`/articles/${step.key}`}
                            className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${step.color} text-white font-medium text-sm rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                          >
                            Explore
                            <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                    
                    {/* Spacer for non-mobile */}
                    <div className="hidden md:block md:w-1/2"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* View All Articles Button */}
        <div className="text-center mt-6">
          <Link
            to="/articles"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-bold rounded-lg hover:from-gray-800 hover:to-gray-900 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            View All Articles
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4 4m4-4l-4-4" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline; 