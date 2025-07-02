import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Log the attempted route for debugging
    console.warn('404: User attempted to access non-existent route:', location.pathname);
    
    // Redirect to home page after a brief delay (allows user to see what happened)
    const timer = setTimeout(() => {
      navigate('/', { replace: true });
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate, location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md px-4 py-8">
        <div className="mb-6">
          <h1 className="text-6xl font-bold text-gray-400 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
          <p className="text-gray-500 mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <p className="text-sm text-gray-400">
            Redirecting to home page in a moment...
          </p>
        </div>
        
        {/* Loading animation */}
        <div className="flex justify-centre">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 