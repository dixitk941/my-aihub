import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function FeatureShowcase() {
  const [activeTab, setActiveTab] = useState('search');
  const tabContentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  // Animation for tab change
  useEffect(() => {
    if (tabContentRef.current) {
      tabContentRef.current.style.opacity = '0';
      tabContentRef.current.style.transform = 'translateY(10px)';
      
      setTimeout(() => {
        if (tabContentRef.current) {
          tabContentRef.current.style.opacity = '1';
          tabContentRef.current.style.transform = 'translateY(0)';
        }
      }, 50);
    }
  }, [activeTab]);

  const features = {
    search: {
      title: "Discover AI Tools",
      description: "Search and filter through hundreds of AI tools to find exactly what you need for your workflow or project.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      ),
      image: '/blog-images/top-10-ai-tools-2025.svg'
    },
    compare: {
      title: "Compare AI Tools",
      description: "Not sure which AI tool is right for you? Compare features, pricing, and capabilities side by side.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
      ),
      image: '/blog-images/top-10-ai-tools-2025.svg'
    },
    blog: {
      title: "Expert AI Insights",
      description: "Stay up to date with the latest AI trends, tutorials, and best practices through our regularly updated blog.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
        </svg>
      ),
      image: '/blog-images/top-10-ai-tools-2025.svg'
    }
  };

  return (
    <div className={`py-8 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Explore the Best AI Tools
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Find, compare, and choose the perfect AI tools for your needs with our comprehensive database and expert insights.
          </p>
        </div>

        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {Object.keys(features).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === tab 
                  ? 'bg-primary-100 dark:bg-primary-900/40 text-primary-800 dark:text-primary-300 ring-2 ring-primary-500/20'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center gap-2">
                {features[tab].icon}
                {features[tab].title}
              </div>
            </button>
          ))}
        </div>

        <div
          ref={tabContentRef}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                {features[activeTab].icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {features[activeTab].title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {features[activeTab].description}
              </p>
              <div>
                <Link
                  to={activeTab === 'blog' ? '/blog' : activeTab === 'compare' ? '/compare' : '/'}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors dark:bg-primary-700 dark:hover:bg-primary-600"
                >
                  Get Started
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 -mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 bg-gray-50 dark:bg-gray-750 flex items-center justify-center p-6">
              <img
                src={features[activeTab].image}
                alt={features[activeTab].title}
                className="max-w-full h-auto rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureShowcase;
