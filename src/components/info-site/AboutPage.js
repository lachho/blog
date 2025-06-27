import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import SocialLinks from './common/SocialLinks';
import PDCAdvertisement from './common/PDCAdvertisement';

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Banner Image */}
      <div className="w-full h-64 md:h-96 bg-gradient-to-r from-green-400 via-green-500 to-yellow-600 relative overflow-hidden">
        <img
          src="/mugshot_24.jpg"
          alt="Lachlan Ho"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-2 text-gray-200">About Me</h1>
          <p className="text-lg md:text-xl">A little bit about me</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-gray-900 mb-5">About Career Compass</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unsure about the job process? Here to help. I've put together this website to provide some clarity on jobs, 
            applications and the future. 
          </p>
        </div>

        {/* Mission Section with Profile Photo */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Profile Photo */}
            <div className="relative w-32 h-32 rounded-full shadow-lg border-4 border-green-100 overflow-hidden mx-auto md:mx-0">
              <img
                src="/mugshot_23.jpg"
                alt="Lachlan Ho"
                className="w-full h-full object-cover"
                style={{ transform: 'scale(1.5)  translate(0%, 12%)' , transformOrigin: 'centre centre' }}
              />
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-5">Hi, I'm Lachlan</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                I'm a final year computer science/civil engineering undergraduate at UNSW. Next year, I'm starting a 
                graduate role as a full stack developer (not civil ik) at Macquarie Bank. In my free time I like to go to 
                the gym and boulder, and recently took up an interest in drawing. 
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                I understand the struggle of finding a job and really wished I had something like this when I was younger, 
                so here it is!
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                How reliable is the information on this site?
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-3">
                Everything here is basically my heavily researched opinion, accumulated wisdom from myself and those before me gathered from years of research, practice and failures. 
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-3">
                Take everything with a grain of salt, and question everything I say. If you think my advice isn't going to work for you, 100% do not listen to me. This may have worked for me, but you're not me! You know best for you so trust your gut. Additionally, times have changed (about only 6 months) but still. 
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                However, some stats about me over the past year:
              </p>
              <ul className="list-disc list-inside mb-3">
                <li>Job Applications submitted: 70</li>
                <li>Online Assessments/Interviews completed: 47</li>
                <li>Interviews: 11</li>
                <li>Networking Events attended: 10</li>
                <li>Rejections: 40</li>
                <li>Times Ghosted: 20+</li>
                <li>Offers: 2</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                I've experienced the ups and downs and got through it in the end. 
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Hang in there and I believe in you. 
              </p>
            </div>
          </div>
        </div>

      {/* Social Links Section */}
      <div 
        title="🔗 Let's Connect"
        subtitle="I'm always excited to discuss new opportunities, collaborate on projects, or simply chat about technology"
        className="bg-white"
      >
        <div className="text-center">
          <SocialLinks 
            layout="horizontal"
            size="large"
            showLabels={true}
            className="justify-center"
          />
          <p className="mt-5 text-gray-600">
            Feel free to reach out through any of these platforms!
          </p>
        </div>
      </div>

        {/* Our Approach */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-5">What you'll Find Here</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Career Guidance</h4>
              <p className="text-gray-600 text-sm">
                Grounded, realistic guides written from a student's perspectives to help you succeed.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Practical Professional Development</h4>
              <p className="text-gray-600 text-sm">
                Every piece of content is designed to provide actionable insights you can implement immediately.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">💡</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Industry Insights</h4>
              <p className="text-gray-600 text-sm">
                Strategies for continuous learning, skill enhancement, leadership development, 
                and building a successful long-term career trajectory.
              </p>
            </div>
          </div>
        </div>

          {/* What We Offer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-3">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Resume Analyser</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              The AI-powered resume analyser provides detailed feedback on your CV, helping you 
              identify areas for improvement and optimise your application materials for success.
            </p>
            <Link 
              to="/resume-analyser" 
              className="inline-block mt-3 text-green-600 font-semibold hover:text-green-800 transition-colours"
            >
              Try Resume Analyser →
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-3">
              <div className="bg-yellow-100 p-3 rounded-full mr-4">
                <svg className="h-8 w-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Career Guidance</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Access a comprehensive library of career development resources, from resume writing tips 
              to interview strategies and industry-specific insights to help you stand out.
            </p>
            <Link 
              to="/articles" 
              className="inline-block mt-3 text-yellow-600 font-semibold hover:text-yellow-800 transition-colours"
            >
              Explore Content →
            </Link>
          </div>
        </div>


        {/* Technology Section */}
        <div className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-xl p-6 mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-5">Powered by Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                The platform is built with modern web technologies including React, Tailwind CSS, 
                and follows accessibility best practices to ensure an optimal experience for all users.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-5 shadow-md">
                <div className="text-4xl mb-3">🤖</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Analysis</h4>
                <p className="text-gray-600 text-md">
                  Advanced algorithms provide insights similar to industry resume reviewers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Ready to get started?</h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Whether you're just starting your career journey or looking to get ahead, 
            Career Compass has the tools and insights you need to succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/resume-analyser"
              className="px-7 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colours shadow-lg"
            >
              Analyse Your Resume
            </Link>
            <Link
              to="/articles"
              className="px-7 py-3 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colours"
            >
              Explore Content
            </Link>
          </div>
        </div>
      </div>
      
      {/* PDC Advertisement */}
      <PDCAdvertisement />
      
      <Footer />
    </div>
  );
};

export default AboutPage; 