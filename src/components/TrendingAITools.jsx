import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function TrendingAITools({ tools = [], maxDisplay = 3 }) {
  const [isVisible, setIsVisible] = useState(false);

  // Sort tools by newest (assuming they have a releaseDate property)
  const sortedTools = [...tools]
    .filter(tool => tool.releaseDate)
    .sort((a, b) => {
      const dateA = new Date(a.releaseDate);
      const dateB = new Date(b.releaseDate);
      return dateB - dateA;
    })
    .slice(0, maxDisplay);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  if (sortedTools.length === 0) return null;

  return (
    <div className={`modern-card backdrop-blur-oneui p-6 relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* Decorative elements */}
      <div className="absolute -right-16 -top-16 w-32 h-32 rounded-full bg-purple-500/10 dark:bg-purple-400/10 blur-2xl"></div>
      <div className="absolute -left-16 -bottom-16 w-32 h-32 rounded-full bg-pink-500/10 dark:bg-pink-400/10 blur-2xl"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-purple-100 dark:bg-purple-900/30 p-2.5 rounded-xl text-purple-600 dark:text-purple-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.942" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Trending AI Tools</h3>
        </div>
        
        <div className="space-y-4">
          {sortedTools.map(tool => (
            <div key={tool.id} className="flex items-start p-3 rounded-xl transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50">
              <img 
                src={tool.logo || `/logos/${tool.category.toLowerCase().replace(/ /g, '-')}.svg`}
                alt={`${tool.name} logo`}
                className="w-10 h-10 rounded-lg object-contain mr-3 bg-white/70 dark:bg-gray-800/40 p-1.5"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `/logos/${tool.category.toLowerCase().replace(/ /g, '-')}.svg`;
                }}
              />
              <div className="flex-1 min-w-0">
                <Link 
                  to={`/details/${tool.id}`}
                  className="text-base font-medium text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {tool.name}
                </Link>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-2">
                  {tool.description}
                </p>
                <div className="flex items-center mt-1.5 gap-1.5">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary-100/80 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300">
                    {tool.category}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {tool.releaseDate ? formatReleaseDate(tool.releaseDate) : ''}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 text-center">
          <Link 
            to="/"
            className="inline-flex items-center text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
          >
            View all tools
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1">
              <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

// Helper function to format release date
function formatReleaseDate(dateString) {
  const date = new Date(dateString);
  // If it can't be parsed as a date, return the original string
  if (isNaN(date.getTime())) return dateString;
  
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays < 30) {
    return 'New';
  } else {
    return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(date);
  }
}

export default TrendingAITools;
