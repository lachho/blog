import React from 'react';
import { getArticleImage } from '../../../data/stockImages';

const ArticleView = ({ article }) => {
  const imageUrl = getArticleImage(article.category || article.categoryKey, article.id);
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Article Header Image */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={imageUrl}
          alt={article.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{article.title}</h1>
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {article.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-white bg-opacity-20 text-white rounded-full backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Article Content */}
      <article className="prose lg:prose-xl max-w-none p-8 md:p-12">
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </article>
    </div>
  );
};

export default ArticleView; 