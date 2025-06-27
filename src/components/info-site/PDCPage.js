import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const PDCPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center text-white">
          <div className="bg-white rounded-full p-8 shadow-2xl inline-block mb-8">
            <div className="text-6xl font-bold text-orange-500">
              PDC
            </div>
            <div className="text-lg text-gray-600 font-medium mt-2">
              Professional<br />Development<br />Camp
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            3 Days of Upskilling & Fun! 🚀
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Join us for an intensive weekend workshop designed to supercharge your career with hands-on learning, networking, and industry insights.
          </p>
          
          <div className="bg-white bg-opacity-20 rounded-lg p-6 inline-block">
            <h3 className="text-2xl font-semibold mb-4">🗓️ Next Workshop Details</h3>
            <div className="grid md:grid-cols-3 gap-4 text-lg">
              <div>
                <strong>📅 When:</strong><br />
                Coming Soon!
              </div>
              <div>
                <strong>📍 Where:</strong><br />
                Sydney, NSW
              </div>
              <div>
                <strong>💰 Cost:</strong><br />
                TBA
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What You'll Learn Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            What You'll Learn 📚
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Resume & Cover Letters</h3>
              <p className="text-gray-600">
                Craft compelling resumes and cover letters that get noticed by recruiters and pass ATS systems.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Interview Skills</h3>
              <p className="text-gray-600">
                Master behavioural interviews, technical questions, and salary negotiations with confidence.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Professional Networking</h3>
              <p className="text-gray-600">
                Build meaningful professional relationships and leverage networking for career advancement.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Industry Insights</h3>
              <p className="text-gray-600">
                Learn from industry professionals about current trends, opportunities, and career pathways.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Skills Development</h3>
              <p className="text-gray-600">
                Hands-on workshops to develop technical and soft skills relevant to your career goals.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Fun Activities</h3>
              <p className="text-gray-600">
                Team building exercises, social events, and networking activities in a fun, relaxed environment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Workshop Schedule Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Workshop Schedule 📅
          </h2>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Day 1: Foundation Building</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Welcome & Networking Breakfast</li>
                <li>• Career Planning & Goal Setting Workshop</li>
                <li>• Resume Writing Masterclass</li>
                <li>• Industry Panel Discussion</li>
                <li>• Evening Social Event</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Day 2: Skills Development</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Interview Skills Workshop</li>
                <li>• Technical Skills Sessions</li>
                <li>• Professional Communication Training</li>
                <li>• Mock Interview Practice</li>
                <li>• Group Project & Team Building</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Day 3: Application & Networking</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Networking Strategies Workshop</li>
                <li>• LinkedIn Optimisation Session</li>
                <li>• Industry Speed Networking</li>
                <li>• Final Presentations</li>
                <li>• Celebration & Graduation Ceremony</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CEVSoc Affiliation Section */}
      <div className="py-16 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">
            Proudly Affiliated with CEVSoc 🤝
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              PDC is proudly affiliated with the Civil and Environmental Engineering Society (CEVSoc), 
              bringing you quality professional development opportunities tailored for engineering students and graduates.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">CEVSoc</div>
                <p className="text-sm text-gray-600">Your Engineering Community</p>
              </div>
              <div className="text-4xl text-gray-400">×</div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">PDC</div>
                <p className="text-sm text-gray-600">Professional Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Section */}
      <div className="py-16 px-4 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-8">
            Ready to Accelerate Your Career? 🚀
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of students and graduates who have already transformed their career prospects through PDC.
          </p>
          
          <div className="bg-white bg-opacity-20 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Registration Coming Soon!</h3>
            <p className="text-lg mb-6">
              We're currently planning our next workshop. Stay tuned for registration details!
            </p>
            
            <div className="space-y-4">
              <button className="w-full md:w-auto px-8 py-4 bg-white text-orange-500 font-bold text-lg rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Notify Me When Registration Opens 📧
              </button>
              
              <div className="text-sm">
                <p>Questions? Contact us at pdc@cevsoc.org.au</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/articles"
              className="px-6 py-3 bg-white bg-opacity-20 text-white font-semibold rounded-lg hover:bg-opacity-30 transition-all duration-300"
            >
              Explore Career Articles
            </Link>
            <Link
              to="/"
              className="px-6 py-3 bg-white bg-opacity-20 text-white font-semibold rounded-lg hover:bg-opacity-30 transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PDCPage; 