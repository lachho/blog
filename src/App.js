import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom';
import MainPage from './components/resume-analyser/MainPage';
import JobDescription from './components/resume-analyser/JobDescription';

// Import info site components
import Navigation from './components/info-site/navigation/Navigation';
import SidebarNavigation from './components/info-site/navigation/SidebarNavigation';
import InfoHomePage from './components/info-site/InfoHomePage';
import ContentPage from './components/info-site/ContentPage';
import SearchResults from './components/info-site/SearchResults';
import AboutPage from './components/info-site/AboutPage';
import PDCPage from './components/info-site/PDCPage';
import NotFound from './components/NotFound';

// Scroll restoration component
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Layout() {
  const location = useLocation();
  
  // Safely get pathname
  const currentPath = location?.pathname || '/';
  
  // Determine if we should show the sidebar (for content pages)
  const shouldShowSidebar = currentPath.startsWith('/articles') || 
                           currentPath === '/search';
  
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navigation />
      {shouldShowSidebar && <SidebarNavigation />}
      
      {/* Updated layout to centre content properly */}
      <div className={`pt-16 ${shouldShowSidebar ? 'lg:ml-80' : ''}`}>
        <Outlet />
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <InfoHomePage />
      },
      {
        path: "about",
        element: <AboutPage />
      },
      {
        path: "pdc",
        element: <PDCPage />
      },
      {
        path: "resume-analyser",
        element: <MainPage bypassUnderConstruction/>
      },
      {
        path: "resume-analyser/unlocked",
        element: <MainPage bypassUnderConstruction />
      },
      {
        path: "job-description",
        element: <JobDescription />
      },
      {
        path: "search",
        element: <SearchResults />
      },
      {
        path: "articles/*",
        element: <ContentPage />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
]);

function App() {
  React.useEffect(() => {
    // Delay Ko-fi widget loading to prevent initial runtime errors
    const loadKofiWidget = () => {
      // Check if Ko-fi script is already loaded
      if (document.querySelector('script[src*="ko-fi.com"]') || window.kofiWidgetOverlay) {
        // If script already exists or widget is already loaded, just initialize
        if (window.kofiWidgetOverlay) {
          try {
            window.kofiWidgetOverlay.draw('lachlanho', {
              'type': 'floating-chat',
              'floating-chat.donateButton.text': 'Support Me',
              'floating-chat.donateButton.background-color': '#5cb85c',
              'floating-chat.donateButton.text-color': '#fff'
            });
          } catch (error) {
            console.warn('Ko-fi widget initialization failed:', error);
          }
        }
        return;
      }

      // Load Ko-fi widget script
      const script = document.createElement('script');
      script.src = 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js';
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        // Add a longer delay to ensure everything is ready
        setTimeout(() => {
          try {
            if (window.kofiWidgetOverlay) {
              window.kofiWidgetOverlay.draw('lachlanho', {
                'type': 'floating-chat',
                'floating-chat.donateButton.text': 'Support Me',
                'floating-chat.donateButton.background-color': '#5cb85c',
                'floating-chat.donateButton.text-color': '#fff'
              });
            }
          } catch (error) {
            console.warn('Ko-fi widget initialization failed:', error);
          }
        }, 500); // Increased delay to 500ms
      };
      
      script.onerror = (error) => {
        console.warn('Ko-fi script failed to load:', error);
      };
      
      try {
        document.head.appendChild(script);
      } catch (error) {
        console.warn('Ko-fi script append failed:', error);
      }
    };

    // Wait for page to be fully loaded before loading Ko-fi
    if (document.readyState === 'complete') {
      // Page already loaded, wait a bit more then load Ko-fi
      setTimeout(loadKofiWidget, 1000);
    } else {
      // Wait for page to finish loading
      const handleLoad = () => {
        setTimeout(loadKofiWidget, 1000);
        window.removeEventListener('load', handleLoad);
      };
      window.addEventListener('load', handleLoad);
      
      // Cleanup function
      return () => {
        window.removeEventListener('load', handleLoad);
      };
    }
  }, []);

  return <RouterProvider router={router} />;
}

export default App; 