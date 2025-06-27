import React from 'react';
import { Link } from 'react-router-dom';
import { contentStructure } from '../../../data/contentStructure';
import ArticleCard from '../home/ArticleCard';
import JourneyTimeline from '../home/JourneyTimeline';

const ArticleLibraryView = ({ 
  showAllArticles, 
  setShowAllArticles, 
  articleMetadata 
}) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-900">Article Library</h1>
        <div className="flex space-x-3">
          <button
            onClick={() => setShowAllArticles(false)}
            className={`px-4 py-2 rounded-lg font-medium transition-colours ${
              !showAllArticles
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-green-50'
            }`}
          >
            Journey View
          </button>
          <button
            onClick={() => setShowAllArticles(true)}
            className={`px-4 py-2 rounded-lg font-medium transition-colours ${
              showAllArticles
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-green-50'
            }`}
          >
            All Articles
          </button>
        </div>
      </div>

      {!showAllArticles ? (
        <JourneyTimelineView />
      ) : (
        <AllArticlesView articleMetadata={articleMetadata} />
      )}
    </div>
  );
};

const JourneyTimelineView = () => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
    <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-green-50 to-blue-50">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Where are you along your journey? 🗺️
      </h2>
      <p className="text-gray-600">
        Follow this step-by-step pathway to career success. Each stage builds on the previous, 
        guiding you from university through to landing your dream role.
      </p>
    </div>
    
    <div className="p-6">
      <JourneyTimeline />
    </div>
  </div>
);

const AllArticlesView = ({ articleMetadata }) => (
  <div className="space-y-5">
    {Object.entries(contentStructure).map(([categoryKey, category]) => (
      <div key={categoryKey} className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
          <div className="flex items-center">
            <span className="text-2xl mr-3">{category.icon}</span>
            <h2 className="text-xl font-bold text-gray-900">{category.title}</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
          {category.articles.map((article) => {
            const metadata = articleMetadata[`${categoryKey}-${article.id}`];
            
            // Convert metadata to ArticleCard format
            const articleData = {
              id: article.id,
              title: metadata?.title || article.id,
              summary: metadata?.summary || 'No summary available',
              tags: metadata?.tags || [],
              category: categoryKey,
              categoryTitle: metadata?.categoryTitle || category.title,
              path: `/articles/${categoryKey}/${article.id}`
            };

            return (
              <ArticleCard
                key={article.id}
                article={articleData}
                showTagButtons={false}
              />
            );
          })}
        </div>
      </div>
    ))}
  </div>
);

export default ArticleLibraryView; 