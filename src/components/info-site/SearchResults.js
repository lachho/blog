import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { getAllArticles } from '../../data/contentStructure';
import Breadcrumb from './navigation/Breadcrumb';
import Footer from './Footer';
import { SearchForm, LoadingSpinner, Section } from './common';

const SearchResultCard = ({ article, query, highlightText }) => (
  <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
    <div className="flex items-center mb-3">
      <span className="text-sm text-green-600 font-semibold bg-green-50 px-3 py-1 rounded-full mr-3">
        {article.categoryTitle}
      </span>
      <div className="flex flex-wrap gap-2">
        {article.tags && article.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
    <h2 className="text-xl font-bold text-gray-900 mb-2">
      <Link 
        to={article.path}
        className="hover:text-green-600 transition-colours"
      >
        {highlightText(article.title, query)}
      </Link>
    </h2>
    <p className="text-gray-600 mb-3">
      {highlightText(article.summary, query)}
    </p>
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
);

const NoResultsView = ({ query, suggestedSearches, onSuggestionClick }) => (
  <div className="text-center py-10">
    <div className="text-6xl mb-3">🔍</div>
    <h3 className="text-2xl font-bold text-gray-800 mb-2">No results found</h3>
    <p className="text-gray-600 mb-5">
      We couldn't find any articles matching "{query}". Try different keywords or browse our categories.
    </p>
    <div className="mt-6">
      <h4 className="text-lg font-semibold text-gray-800 mb-3">Try searching for:</h4>
      <div className="flex flex-wrap justify-center gap-2">
        {suggestedSearches.map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => onSuggestionClick(suggestion)}
            className="px-4 py-2 bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition-colours"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
    <Link
      to="/articles"
      className="inline-block mt-5 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colours"
    >
      Browse All Articles
    </Link>
  </div>
);

const DefaultSearchView = ({ suggestedSearches, onSuggestionClick }) => (
  <div className="text-center py-10">
    <div className="text-6xl mb-3">🔍</div>
    <h2 className="text-2xl font-bold text-gray-800 mb-3">Search Our Content Library</h2>
    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
      Find articles, tips, and career advice by searching for keywords, topics, or skills.
    </p>
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Popular Searches:</h3>
      <div className="flex flex-wrap justify-center gap-2">
        {suggestedSearches.map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => onSuggestionClick(suggestion)}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-green-100 hover:text-green-700 transition-colours"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
    <Link
      to="/articles"
      className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colours"
    >
      Browse All Content
    </Link>
  </div>
);

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const query = searchParams.get('q') || '';

  useEffect(() => {
    if (query) {
      performSearch(query);
    }
  }, [query]);

  const performSearch = async (term) => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const allArticles = await getAllArticles();
    const searchResults = allArticles.filter(article => 
      (article.title && article.title.toLowerCase().includes(term.toLowerCase())) ||
      (article.summary && article.summary.toLowerCase().includes(term.toLowerCase())) ||
      (article.tags && article.tags.some(tag => tag.toLowerCase().includes(term.toLowerCase()))) ||
      (article.categoryTitle && article.categoryTitle.toLowerCase().includes(term.toLowerCase()))
    );
    
    // Sort results by relevance (title matches first, then content matches)
    const sortedResults = searchResults.sort((a, b) => {
      const aInTitle = a.title && a.title.toLowerCase().includes(term.toLowerCase()) ? 1 : 0;
      const bInTitle = b.title && b.title.toLowerCase().includes(term.toLowerCase()) ? 1 : 0;
      return bInTitle - aInTitle;
    });
    
    setResults(sortedResults);
    setLoading(false);
  };

  const handleSearchSubmit = (searchTerm) => {
    setSearchParams({ q: searchTerm });
  };

  const highlightText = (text, term) => {
    if (!term) return text;
    const regex = new RegExp(`(${term})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, index) => 
      regex.test(part) ? 
        <mark key={index} className="search-highlight">{part}</mark> : 
        part
    );
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchParams({ q: suggestion });
  };

  const suggestedSearches = ['Interview Tips', 'Resume Writing', 'Career Development', 'Technology Jobs', 'Networking'];

  const breadcrumbs = [
    { title: 'Home', path: '/' },
    { title: query ? `Search: "${query}"` : 'All Content', path: '/search' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumb breadcrumbs={breadcrumbs} />
        
        <Section 
          title="Search Results"
          className="pb-0"
          contentClassName="max-w-none"
        >
          <SearchForm
            placeholder="Search for articles, tips, and career advice..."
            size="large"
            showButton={true}
            onSubmit={handleSearchSubmit}
            className="mb-5"
          />
          
          {query && (
            <p className="text-gray-600 mb-6">
              {loading ? 'Searching...' : `Found ${results.length} results for "${query}"`}
            </p>
          )}
        </Section>

        {/* Loading State */}
        {loading && (
          <LoadingSpinner message="Searching articles..." />
        )}

        {/* Search Results */}
        {!loading && query && results.length > 0 && (
          <div className="space-y-4">
            {results.map((article) => (
              <SearchResultCard
                key={`${article.category}-${article.id}`}
                article={article}
                query={query}
                highlightText={highlightText}
              />
            ))}
          </div>
        )}

        {/* No Results */}
        {!loading && query && results.length === 0 && (
          <NoResultsView
            query={query}
            suggestedSearches={suggestedSearches}
            onSuggestionClick={handleSuggestionClick}
          />
        )}

        {/* Default View */}
        {!query && (
          <DefaultSearchView
            suggestedSearches={suggestedSearches}
            onSuggestionClick={handleSuggestionClick}
          />
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default SearchResults; 