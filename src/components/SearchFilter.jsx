import React, { useEffect } from 'react';

function SearchFilter({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, categories }) {
  // Listen for category selection events from CategoriesGrid
  useEffect(() => {
    const handleCategorySelect = (event) => {
      setSelectedCategory(event.detail);
    };
    
    window.addEventListener('selectCategory', handleCategorySelect);
    
    return () => {
      window.removeEventListener('selectCategory', handleCategorySelect);
    };
  }, [setSelectedCategory]);

  return (
    <div className="mb-6 glass-effect p-3 sm:p-4 rounded-3xl backdrop-blur-oneui">
      <div className="flex flex-row items-center gap-2 sm:gap-4">
        <div className="flex-1 min-w-0">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
            <input
              id="search"
              type="text"
              placeholder="Search AI tools..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-modern block w-full pl-10 sm:pl-12 pr-10 py-2.5 sm:py-3 rounded-2xl border border-gray-200/50 dark:border-gray-700/30 bg-white/90 dark:bg-gray-800/60 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-oneui-accent-blue/20 focus:border-oneui-accent-blue/30 text-sm"
              aria-label="Search by name or description"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-3 sm:pr-4 flex items-center text-gray-400 hover:text-gray-500"
                aria-label="Clear search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
        
        <div className="w-auto min-w-[120px] sm:min-w-[180px]">
          <div className="relative">
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="input-modern appearance-none block w-full py-2.5 sm:py-3 pl-3 sm:pl-4 pr-8 sm:pr-10 rounded-2xl border border-gray-200/50 dark:border-gray-700/30 bg-white/90 dark:bg-gray-800/60 text-gray-900 dark:text-white focus:outline-none focus:ring-oneui-accent-blue/20 focus:border-oneui-accent-blue/30 text-sm"
              aria-label="Filter by category"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 sm:px-3 text-gray-500 dark:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchFilter;
