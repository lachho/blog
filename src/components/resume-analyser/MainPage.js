import React, { useState } from 'react';
import FileUpload from './FileUpload';
import AnalysisDashboard from './AnalysisDashboard';
import Footer from '../info-site/Footer';
import ExportButtons from './ExportButtons';
import UnderConstruction from './UnderConstruction';
import PDCAdvertisement from '../info-site/common/PDCAdvertisement';
import { parseFile } from '../../utils/fileParser';
import { analyseResume } from '../../utils/resumeAnalyser';

const MainPage = ({ bypassUnderConstruction = false }) => {
  const [analysisResults, setAnalysisResults] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInteraction = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowModal(true);
  };

  const handleFileSelect = async (files) => {
    setError(null);
    setLoading(true);
    setAnalysisResults(null);
    try {
      const parsingResult = await parseFile(files[0]);
      const results = await analyseResume(parsingResult);
      setAnalysisResults(results);
    } catch (err) {
      setError(typeof err === 'string' ? err : 'Failed to analyse resume.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans flex flex-col relative">
      {/* Interactive Overlay */}
      {!bypassUnderConstruction && (
        <div 
          className="absolute inset-0 z-40 cursor-pointer pointer-events-auto"
          onClick={handleInteraction}
        />
      )}
      
      {/* Under Construction Modal */}
      {!bypassUnderConstruction && (
        <UnderConstruction isOpen={showModal} onClose={() => setShowModal(false)} />
      )}
      
      <div className="container mx-auto px-4 py-8 md:py-12 flex-grow relative z-30">
        
        <header className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Resume Analyser
          </h1>
          <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">
            Get instant, detailed feedback on your resume to stand out and land your dream job.
          </p>
          
          {/* Analysis Overview */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto text-left">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">🤖 ATS Compatibility</h3>
              <p className="text-sm text-gray-600">Companies use Applicant Tracking System algorithms to parse resumes. Checks how easy your resume is to read by bots.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">✍️ Content Quality</h3>
              <p className="text-sm text-gray-600">Analyses your resume's quality. Looks for strong action verbs, quantifiable achievements, and professional language.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">🎯 Job Requirements</h3>
              <p className="text-sm text-gray-600">Compares your resume against mock a job posting to see how your resume ranks in the algorithm.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">📋 Data Extraction</h3>
              <p className="text-sm text-gray-600">Identifies key information from your resume. This checks how easy ATS can extract data from your resume.</p>
            </div>
          </div>
        </header>

        <main>
          {error && (
            <div className="text-red-600 text-center mb-4 font-semibold">{error}</div>
          )}
          {loading && (
            <div className="text-center text-lg text-gray-700 my-8">
              <p className="mt-4 text-lg font-semibold text-gray-700">Analysing your resume...</p>
              <p className="text-gray-500">This might take a moment.</p>
            </div>
          )}
          {!analysisResults && !loading && (
            <FileUpload onFileSelect={handleFileSelect} />
          )}

          {analysisResults && (
            <div>
              <AnalysisDashboard results={analysisResults} />
              
              {/* Export Buttons */}
              <ExportButtons results={analysisResults} />
              
              <div className="text-center mt-8">
                  <button 
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      setAnalysisResults(null);
                    }}
                    className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Analyse Another Resume
                  </button>
              </div>
            </div>
          )}
        </main>
        
      </div>
      
      {/* PDC Advertisement */}
      <div className="pointer-events-none">
        <PDCAdvertisement />
      </div>
      
      <div className="pointer-events-none">
        <Footer />
      </div>
    </div>
  );
};

export default MainPage; 