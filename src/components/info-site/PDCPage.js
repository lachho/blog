import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const PDCPage = () => {
  const handleTicketPurchase = () => {
    window.open('https://events.humanitix.com/cevsoc-pdc-2025', '_blank');
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-teal-600 to-green-600 shadow-lg border-t-4 border-yellow-400">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-white">
            <div className="font-bold text-lg">PDC 2025 - Tickets Available!</div>
            <div className="text-sm opacity-90">19-21 September • From $215</div>
          </div>
          <button 
            onClick={handleTicketPurchase}
            className="px-6 py-3 bg-white text-green-800 font-bold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Buy Ticket Now! 🎟️
          </button>
        </div>
      </div>

      {/* Main Content with bottom padding to account for fixed CTA */}
      <div className="pb-20">
        {/* Hero Section */}
        <div 
          className="relative py-10 px-4 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(20, 184, 166, 0.4), rgba(34, 197, 94, 0.4), rgba(163, 230, 53, 0.4)), url('/hero.png')`
          }}
        >
          <div className="max-w-6xl mx-auto text-center text-white relative z-10">
            {/* <div className="bg-white rounded-full p-8 shadow-2xl inline-block mb-8">
              <div className="text-6xl font-bold text-green-800">
                PDC
              </div>
              <div className="text-lg text-gray-600 font-medium mt-2">
                Professional<br />Development<br />Camp
              </div>
            </div> */}
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              CEVSOC Presents:
            </h2>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Professional Development Camp
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              3 Days of Upskilling & Fun! 🚀
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Join us for an intensive weekend workshop designed to supercharge your career with hands-on learning, networking, and industry insights.
            </p>
            
            <div className="bg-white bg-opacity-20 rounded-lg p-6 inline-block backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4">🗓️ Tickets Available Now!</h3>
              <div className="grid md:grid-cols-3 gap-4 text-lg">
                <div>
                  <strong>📅 When:</strong><br />
                  19-21 September 2025 (Term 1 Week 3)
                </div>
                <div>
                  <strong>📍 Where:</strong><br />
                  Camp Wombaroo, NSW
                </div>
                <div>
                  <strong>💰 Cost:</strong><br />
                  From $215
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What You'll Learn Section */}
        <div className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              Expect to walk away with: 📚
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Personalised insights</h3>
                <p className="text-gray-600">
                  Personalised insights on how to leverage on your own experiences, strengths and skills to get your foot into the door of the industry
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Individualised feedback</h3>
                <p className="text-gray-600">
                  Individualised feedback and actionables on your mock interviews, soft skills, resumes and cover letters from industry mentors and peers
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">🗣️</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Reflections from early grads</h3>
                <p className="text-gray-600">
                  Reflections from early career professionals to gain insights into different career paths and advice in beginning your professional journey. 
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">📂</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Develop your Experience Portfolio</h3>
                <p className="text-gray-600">
                  A customised portfolio of experiences and achievements from the camp to showcase your initiative, teamwork, and leadership skills to potential employers.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">📸</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Life-long Memories</h3>
                <p className="text-gray-600">
                  Photos, memories, and life-long friendships to remind you of this standout moment of your uni journey! 
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">🥳</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Fun Games and Parties</h3>
                <p className="text-gray-600">
                  Two nights of action packed parties, drinks and fun.                 
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Workshop Schedule Section */}
        {/* <div className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              Expect to Learn 📅
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
        </div> */}

        {/* CEVSOC Affiliation Section */}
        <div className="py-16 px-4 bg-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              Proudly Affiliated with CEVSOC 🤝
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                CEVSOC is the undergraduate society affiliated with the School of Civil and Environmental Engineering.
                We are proudly student-run and always deliver the highest quality professional development opportunities 
                tailoured for engineering students, by engineering students.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">CEVSOC</div>
                  <p className="text-sm text-gray-600">Your Engineering Community</p>
                </div>
                <div className="text-4xl text-gray-400">×</div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-800 mb-2">PDC</div>
                  <p className="text-sm text-gray-600">Professional Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Section */}
        <div className="py-16 px-4 bg-gradient-to-r from-teal-800 via-green-500 to-lime-500">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-8">
              Ready to Accelerate Your Career? 🚀
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of students and graduates who have already transformed their career prospects through PDC.
            </p>
            
            <div className="bg-white bg-opacity-20 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">Tickets Are Now Open!</h3>
              <p className="text-lg mb-6">
                Early Bird tickets are selling out fast!
              </p>
              
              <div className="space-y-4">
                <button 
                  onClick={handleTicketPurchase}
                  className="w-full md:w-auto px-8 py-4 bg-white text-green-800 font-bold text-lg rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Buy My Ticket Now!
                </button>
                
                <div className="text-sm">
                  <p>Questions? Contact us at camp@cevsoc.com</p>
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
    </div>
  );
};

export default PDCPage; 