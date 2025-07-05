import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header({ darkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  // Animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-500 ease-ios
      ${scrolled 
        ? 'backdrop-blur-lg bg-white/70 dark:bg-ui-dark/70 shadow-ios dark:shadow-ios-dark py-3' 
        : 'bg-white dark:bg-ui-dark py-4'} 
      ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105">
              <img 
                src="/aitoolcraft-logo.svg" 
                alt="AiToolCraft Logo" 
                className="w-10 h-10 transition-transform duration-300 group-hover:rotate-12"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                AiToolCraft
              </span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 mr-1 shadow-soft-sm dark:shadow-dark-soft-sm backdrop-blur-sm border border-gray-100/30 dark:border-gray-700/30 active:scale-95 transition-transform"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 focus:outline-none shadow-soft-sm dark:shadow-dark-soft-sm backdrop-blur-sm border border-gray-100/30 dark:border-gray-700/30 active:scale-95 transition-transform"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              className="px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 hover:backdrop-blur-sm transition-all"
            >
              Home
            </Link>
            <Link 
              to="/compare" 
              className="px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 hover:backdrop-blur-sm transition-all"
            >
              Compare
            </Link>
            <Link 
              to="/blog" 
              className="px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 hover:backdrop-blur-sm transition-all"
            >
              Blog
            </Link>
            <button
              onClick={toggleDarkMode}
              className="ml-2 p-3 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-gray-100/90 dark:hover:bg-gray-700/90 transition-all shadow-soft-sm dark:shadow-dark-soft-sm backdrop-blur-sm border border-gray-100/30 dark:border-gray-700/30 active:scale-95"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
              )}
            </button>
          </nav>
        </div>
        
        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-4 rounded-3xl bg-white/90 dark:bg-gray-800/90 shadow-ios-md dark:shadow-ios-dark-md p-4 transition-all duration-300 animate-scaleIn backdrop-blur-md border border-gray-100/30 dark:border-gray-700/30">
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className="px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-700/80 transition-colors active:scale-98"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/compare" 
                className="px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-700/80 transition-colors active:scale-98"
                onClick={() => setMenuOpen(false)}
              >
                Compare
              </Link>
              <Link 
                to="/blog" 
                className="px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-700/80 transition-colors active:scale-98"
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
