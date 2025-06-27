import React from 'react';
import { Link } from 'react-router-dom';
import { contentStructure } from '../../../data/contentStructure';

const JourneyTimeline = () => {
  // Define the journey order and add specific content for each step
  const journeySteps = [
    {
      key: 'university',
      step: 1,
      title: 'University Life',
      description: 'Start your journey at university - learn the fundamentals and set yourself up for success.',
      color: 'from-blue-500 to-blue-600',
      icon: '🎓'
    },
    {
      key: 'setting-up-for-success',
      step: 2,
      title: 'Before You Apply',
      description: 'Build your foundation with networking, LinkedIn optimisation, and strategic preparation.',
      color: 'from-purple-500 to-purple-600',
      icon: '🚀'
    },
    {
      key: 'resume-and-cover-letter',
      step: 3,
      title: 'Resume & Cover Letter',
      description: 'Craft compelling application materials that get noticed by recruiters and ATS systems.',
      color: 'from-green-500 to-green-600',
      icon: '📝'
    },
    {
      key: 'job-application-process',
      step: 4,
      title: 'The Job Application Process',
      description: 'Navigate the application process effectively with insider tips and helpful resources.',
      color: 'from-orange-500 to-orange-600',
      icon: '💻'
    },
    {
      key: 'interview-preparation',
      step: 5,
      title: 'Interviews',
      description: 'Master different interview formats and assessment types to secure your dream role.',
      color: 'from-red-500 to-red-600',
      icon: '🎙️'
    },
    {
      key: 'career-guidance',
      step: 6,
      title: 'Career Guidance',
      description: 'Long-term career planning, progression strategies, and thinking about your future.',
      color: 'from-indigo-500 to-indigo-600',
      icon: '🧭'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Where are you along your journey? 🗺️
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow this step-by-step pathway to career success. Each stage builds on the previous, 
            guiding you from university through to landing your dream role.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full hidden md:block"></div>

          {/* Timeline Steps */}
          <div className="space-y-12">
            {journeySteps.map((step, index) => {
              const category = contentStructure[step.key];
              const isEven = index % 2 === 0;
              
              return (
                <div key={step.key} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full border-4 border-gray-200 flex items-center justify-center z-10 hidden md:flex">
                    <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                      {step.step}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="flex-1 md:w-1/2">
                      <div className={`bg-white rounded-2xl shadow-xl p-8 border-l-4 border-gradient-to-b ${step.color} transform hover:scale-105 transition-all duration-300 ${isEven ? 'md:mr-8' : 'md:ml-8'}`}>
                        <div className="flex items-center mb-4">
                          <div className={`text-4xl mr-4 p-3 rounded-full bg-gradient-to-r ${step.color} bg-opacity-10`}>
                            {step.icon}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-500 mb-1">
                              Step {step.step}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800">
                              {step.title}
                            </h3>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {step.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          <span className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                            {category?.articles?.length || 0} articles
                          </span>
                        </div>
                        
                        <Link
                          to={`/articles/${step.key}`}
                          className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${step.color} text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                        >
                          Explore This Stage
                          <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
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
        <div className="text-center mt-16">
          <Link
            to="/articles"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-bold text-lg rounded-xl hover:from-gray-800 hover:to-gray-900 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            View All Articles
            <svg className="ml-2 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4 4m4-4l-4-4" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline; 