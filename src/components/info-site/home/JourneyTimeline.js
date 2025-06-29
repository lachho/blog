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
    <section className="timeline-container">
      <div className="timeline-content">
        <div className="timeline-header">
          <h2 className="timeline-title">
            Where are you along your journey? 🗺️
          </h2>
          <p className="timeline-description">
            Follow this step-by-step pathway to career success. Each stage builds on the previous, 
            guiding you from university through to landing your dream role.
          </p>
        </div>

        <div className="timeline-wrapper">
          {/* Timeline Line */}
          <div className="timeline-line"></div>

          {/* Timeline Steps - Staircase Layout */}
          <div className="timeline-steps">
            {journeySteps.map((step, index) => {
              const category = contentStructure[step.key];
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={step.key} 
                  className="timeline-step"
                >
                  {/* Timeline Dot */}
                  <div className="timeline-dot">
                    <div className={`timeline-dot-inner bg-gradient-to-r ${step.color}`}>
                      {step.step}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`timeline-card-container ${isEven ? 'even' : 'odd'}`}>
                    <div className="timeline-card-content">
                      <div 
                        className={`timeline-card ${isEven ? 'even' : 'odd'}`}
                        style={{ borderImageSource: `linear-gradient(to bottom, ${step.color.replace('from-', '').replace(' to-', ', ')})`, borderImageSlice: 1 }}
                      >
                        <div className="timeline-card-header">
                          <div className={`timeline-card-icon bg-gradient-to-r ${step.color}`}>
                            {step.icon}
                          </div>
                          <div>
                            <div className="timeline-card-meta">
                              Step {step.step}
                            </div>
                            <h3 className="timeline-card-title">
                              {category?.title || step.title}
                            </h3>
                          </div>
                        </div>
                        
                        <p className="timeline-card-description">
                          {category?.description || step.description}
                        </p>
                        
                        <div className="timeline-card-footer">
                          <span className="timeline-card-badge">
                            {category?.articles?.length || 0} articles
                          </span>
                          
                          <Link
                            to={`/articles/${step.key}`}
                            className={`timeline-card-button bg-gradient-to-r ${step.color}`}
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
                    <div className="timeline-spacer"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* View All Articles Button */}
        <div className="timeline-view-all">
          <Link
            to="/articles"
            className="timeline-view-all-button"
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