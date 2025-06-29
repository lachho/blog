import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm = ({ 
  placeholder = "Search content...",
  size = 'medium',
  onSubmit,
  className = '',
  showButton = false
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const sizeClasses = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-3 py-2 text-sm',
    large: 'px-3 py-3 text-lg'
  };

  const widthClasses = {
    small: 'w-48',
    medium: 'w-64',
    large: 'flex-1'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      if (onSubmit) {
        onSubmit(searchTerm.trim());
      } else {
        navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      }
      setSearchTerm('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className={`relative ${showButton ? 'flex' : ''}`}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder}
          className={`${widthClasses[size]} ${sizeClasses[size]} border border-gray-300 ${showButton ? 'rounded-l-lg' : 'rounded-lg'} focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-green-500`}
        />
        
        {!showButton ? (
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-green-600 transition-colors"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        ) : (
          <button
            type="submit"
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-r-lg hover:bg-green-700 transition-colors"
          >
            Search
          </button>
        )}
      </div>
    </form>
  );
};

export default SearchForm; 