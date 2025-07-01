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
  // Handle special articles (like PDC) differently
  const imageUrl = article.isSpecial && article.image 
    ? article.image 
    : getArticleImage(article.category, article.id);
  
  // Get category icon - handle special articles
  const categoryIcon = article.isSpecial 
    ? '🎯' // Default icon for special articles
    : contentStructure[article.category]?.icon || '📄';
  
  return (
    <div className="article-card">
      {/* Article Image */}
      <div className="relative aspect-[2/1] overflow-hidden">
        <img
          src={imageUrl}
          alt={article.title}
          className="article-card-image"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        {showFeatured && (
          <div className="article-card-featured-badge">
            <svg className="article-card-featured-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="article-card-featured-text">Featured</span>
          </div>
        )}
      </div>

      <div className="article-card-content">
        <div className="article-card-header">
          <span className="article-card-category-icon">
            {categoryIcon}
          </span>
          <span className="text-sm text-green-600 font-semibold bg-green-50 px-3 py-1 rounded-full">
            {article.categoryTitle}
          </span>
        </div>
        <h3 className="article-card-title">
          {article.title}
        </h3>
        <p className="article-card-summary">
          {article.summary}
        </p>
        <div className="article-card-tags">
          {article.tags.slice(0, 3).map((tag) => (
            showTagButtons && onToggleTag ? (
              <button
                key={tag}
                onClick={() => onToggleTag(tag)}
                className={`article-card-tag ${
                  selectedTags && selectedTags.includes(tag) ? 'selected' : ''
                }`}
              >
                {tag}
              </button>
            ) : (
              <span
                key={tag}
                className="article-card-tag"
              >
                {tag}
              </span>
            )
          ))}
        </div>
        
        {/* Show read time for special articles */}
        {article.readTime && (
          <div className="article-card-read-time">
            <svg className="article-card-read-time-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {article.readTime}
          </div>
        )}
        
        <Link
          to={article.path}
          className="inline-flex items-center text-green-600 font-semibold hover:text-green-800 transition-colors"
        >
          {article.isSpecial ? 'Learn More' : 'Read Article'}
          <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard; 