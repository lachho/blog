import React from 'react';
import { Link } from 'react-router-dom';
import { contentStructure } from '../../../data/contentStructure';
import { getArticleImage } from '../../../data/stockImages';

const ArticleCard = ({ 
  article, 
  selectedTags = [], 
  onToggleTag = () => {}, 
  showFeatured = false,
  showTagButtons = true 
}) => {
  const imageUrl = getArticleImage(article.category, article.id);
  
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-1">
      {/* Article Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        {showFeatured && (
          <div className="absolute top-3 right-3 bg-yellow-500 text-white px-2 py-1 rounded-full flex items-center">
            <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-xs font-semibold">Featured</span>
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-center mb-3">
          <span className="text-2xl mr-3">
            {contentStructure[article.category].icon}
          </span>
          <span className="text-sm text-green-600 font-semibold bg-green-50 px-3 py-1 rounded-full">
            {article.categoryTitle}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-gray-600 mb-3 line-clamp-3">
          {article.summary}
        </p>
        <div className="flex flex-wrap gap-2 mb-3">
          {article.tags.slice(0, 3).map((tag) => (
            showTagButtons && onToggleTag ? (
              <button
                key={tag}
                onClick={() => onToggleTag(tag)}
                className={`px-3 py-1 text-xs rounded-full transition-colours ${
                  selectedTags && selectedTags.includes(tag)
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700'
                }`}
              >
                {tag}
              </button>
            ) : (
              <span
                key={tag}
                className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
              >
                {tag}
              </span>
            )
          ))}
        </div>
        <Link
          to={article.path}
          className="inline-flex items-center text-green-600 font-semibold hover:text-green-800 transition-colours"
        >
          Read Article
          <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard; 