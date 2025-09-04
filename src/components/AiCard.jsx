import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { handleLogoError } from '../utils/logoUtils';

function AiCard({ tool, onCompareToggle, isSelected }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [rating, setRating] = useState(tool.rating || Math.floor(Math.random() * 2) + 4); // Random rating between 4-5 if not provided
  const [hoverRating, setHoverRating] = useState(0);

  // Check if tool is bookmarked on mount
  useEffect(() => {
    const bookmarkedTools = JSON.parse(localStorage.getItem('bookmarkedTools') || '[]');
    setIsBookmarked(bookmarkedTools.includes(tool.id));
  }, [tool.id]);

  // Animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Handle bookmark toggle
  const toggleBookmark = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const bookmarkedTools = JSON.parse(localStorage.getItem('bookmarkedTools') || '[]');
    
    if (isBookmarked) {
      const updatedBookmarks = bookmarkedTools.filter(id => id !== tool.id);
      localStorage.setItem('bookmarkedTools', JSON.stringify(updatedBookmarks));
    } else {
      bookmarkedTools.push(tool.id);
      localStorage.setItem('bookmarkedTools', JSON.stringify(bookmarkedTools));
    }
    
    setIsBookmarked(!isBookmarked);
  };

  // Generate a unique background gradient based on the tool category
  const getBgGradient = () => {
    switch(tool.category) {
      case 'Text Generation':
        return 'from-blue-400/5 to-indigo-500/5';
      case 'Image Generation':
        return 'from-purple-400/5 to-pink-500/5';
      case 'Voice Generation':
        return 'from-rose-400/5 to-orange-500/5';
      case 'Video Generation':
        return 'from-amber-400/5 to-red-500/5';
      case 'Code Generation':
        return 'from-emerald-400/5 to-cyan-500/5';
      default:
        return 'from-primary-400/5 to-violet-500/5';
    }
  };

  return (
    <div 
      className={`modern-card group transition-all duration-500 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} 
        ${isPressed ? 'scale-[0.98]' : isHovered ? 'scale-[1.01] shadow-soft-lg dark:shadow-dark-soft-lg' : 'scale-100'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {setIsHovered(false); setIsPressed(false);}}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
    >
      <div className="p-5 relative overflow-hidden">
        {/* iOS/One UI style background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${getBgGradient()} opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out`}></div>
        
        {/* iOS-style decorative elements */}
        <div className="absolute -right-16 -top-16 w-32 h-32 rounded-full bg-primary-500/10 dark:bg-primary-400/10 blur-2xl transition-opacity duration-700 opacity-0 group-hover:opacity-70"></div>
        <div className="absolute -left-16 -bottom-16 w-32 h-32 rounded-full bg-indigo-500/10 dark:bg-indigo-400/10 blur-2xl transition-opacity duration-700 opacity-0 group-hover:opacity-70"></div>
        
        {/* Bookmark button */}
        <button
          onClick={toggleBookmark}
          className="absolute top-3 right-3 z-20 p-1.5 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:bg-white dark:hover:bg-gray-700"
          aria-label={isBookmarked ? "Remove from bookmarks" : "Add to bookmarks"}
        >
          {isBookmarked ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-primary-600 dark:text-primary-400">
              <path fillRule="evenodd" d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 001.075.676L10 15.082l5.925 2.844A.75.75 0 0017 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0010 2z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-500 dark:text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
            </svg>
          )}
        </button>
        
        {/* Card Content */}
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
            <div className="flex items-center">
              <div className="w-12 h-12 flex-shrink-0 rounded-2xl overflow-hidden bg-white/70 dark:bg-gray-800/40 p-1.5 mr-3 flex items-center justify-center shadow-soft-md backdrop-blur-sm border border-gray-100/40 dark:border-gray-700/30 transition-all duration-300 group-hover:shadow-soft-lg">
                <img 
                  src={tool.logo || `/logos/${tool.category.toLowerCase().replace(/ /g, '-')}.svg`} 
                  alt={`${tool.name} logo`} 
                  className="w-9 h-9 object-contain transition-transform duration-500 group-hover:scale-110"
                  onLoad={(e) => e.target.classList.add('loaded')}
                  onError={(e) => handleLogoError(e, tool.category)}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white transition-colors duration-300">{tool.name}</h3>
                {tool.creator && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">by {tool.creator}</p>
                )}
              </div>
            </div>
            
            <div className="flex items-center">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={isSelected}
                  onChange={() => onCompareToggle(tool.id)}
                  aria-label={`Add ${tool.name} to comparison`}
                />
                <div className={`w-10 h-6 rounded-full peer-focus:ring-2 peer-focus:ring-primary-300/40 dark:peer-focus:ring-primary-800/40 transition-all duration-300
                  ${isSelected 
                    ? 'bg-primary-600 after:translate-x-[1.1rem] after:border-white' 
                    : 'bg-gray-200 dark:bg-gray-700 after:border-gray-300 dark:after:border-gray-600'} 
                  after:content-[''] after:absolute after:top-[0.1rem] after:left-[0.1rem] after:bg-white after:border after:rounded-full after:h-5 after:w-5 
                  after:transition-all after:duration-300 peer-checked:after:border-white shadow-inner`}
                ></div>
                <span className="ml-1.5 text-xs font-medium text-gray-700 dark:text-gray-300">
                  Compare
                </span>
              </label>
            </div>
          </div>
          
          <div className="mb-3 flex flex-wrap gap-1.5">
            <span className="badge-modern bg-primary-100/80 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 backdrop-blur-sm border border-primary-200/30 dark:border-primary-800/30 text-xs py-1 px-2">
              {tool.category}
            </span>
            <span className={`badge-modern backdrop-blur-sm border text-xs py-1 px-2 ${tool.free 
              ? 'bg-green-100/80 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200/30 dark:border-green-800/30' 
              : 'bg-orange-100/80 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 border-orange-200/30 dark:border-orange-800/30'}`}
            >
              {tool.free ? 'Free' : 'Paid'}
            </span>
            <span className={`badge-modern backdrop-blur-sm border text-xs py-1 px-2 ${tool.api 
              ? 'bg-purple-100/80 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200/30 dark:border-purple-800/30' 
              : 'bg-gray-100/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-300 border-gray-200/30 dark:border-gray-700/30'}`}
            >
              {tool.api ? 'API' : 'No API'}
            </span>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed line-clamp-3 mb-3">{tool.description}</p>
          
          {/* Star Rating */}
          <div className="flex items-center mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <button 
                  key={star}
                  type="button"
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setRating(star);
                  }}
                  className="cursor-pointer p-0.5 focus:outline-none"
                >
                  <svg 
                    className={`w-4 h-4 transition-colors duration-200 
                      ${(hoverRating !== 0 ? star <= hoverRating : star <= rating) 
                        ? 'text-yellow-400' 
                        : 'text-gray-300 dark:text-gray-600'}`} 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </button>
              ))}
            </div>
            <span className="ml-1.5 text-xs text-gray-500 dark:text-gray-400">
              {rating.toFixed(1)}
            </span>
          </div>
          
          <div className="flex justify-between items-center mt-auto">
            <a 
              href={tool.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 mr-1">
                <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
              </svg>
              Website
            </a>
            
            <Link 
              to={`/details/${tool.id}`}
              className="inline-flex items-center justify-center px-3 py-1.5 text-xs font-medium bg-primary-600/10 hover:bg-primary-600/20 text-primary-700 dark:bg-primary-900/30 dark:hover:bg-primary-900/40 dark:text-primary-300 rounded-full transition-all backdrop-blur-sm border border-primary-200/30 dark:border-primary-800/30"
            >
              <span>View Details</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 ml-1">
                <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AiCard;
