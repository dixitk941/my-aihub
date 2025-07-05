import { useOutletContext } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CompareTable from '../components/CompareTable';
import { handleLogoError } from '../utils/logoUtils';

function Compare() {
  const { selectedTools, toggleToolSelection } = useOutletContext();

  if (selectedTools.length === 0) {
    return (
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Compare AI Tools
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Select AI tools from the home page to compare their features side by side.
          </p>
        </div>
        
        <div className="modern-card backdrop-blur-oneui p-8 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto text-gray-400 mb-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
          </svg>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
            No tools selected for comparison yet.
          </p>
          <Link
            to="/" 
            className="btn-modern inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all shadow-soft-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            Go to Home Page
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Compare AI Tools
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Compare features and capabilities of different AI tools side by side.
        </p>
      </div>
      
      <div className="mb-6 modern-card backdrop-blur-oneui p-4">
        <div className="flex flex-col gap-3">
          {/* Header with title and add button */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
            <div>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Selected Tools ({selectedTools.length})</h2>
              <p className="text-xs text-gray-600 dark:text-gray-400 sm:hidden">Tap to remove</p>
            </div>
            <Link 
              to="/" 
              className="btn-modern inline-flex items-center justify-center px-3 py-2 bg-gray-100/80 dark:bg-gray-700/80 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200/80 dark:hover:bg-gray-600/80 transition-all text-sm shadow-soft-sm backdrop-blur-sm whitespace-nowrap"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span className="hidden sm:inline">Add More Tools</span>
              <span className="sm:hidden">Add More</span>
            </Link>
          </div>
          
          {/* Compact tools list */}
          <div className="flex flex-wrap gap-2">
            {selectedTools.map(tool => (
              <div 
                key={tool.id}
                className="flex items-center badge-modern bg-primary-100/80 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 border border-primary-200/30 dark:border-primary-800/30 px-2.5 py-1.5 transition-all hover:bg-primary-200/80 dark:hover:bg-primary-800/40 hover:scale-[1.02] active:scale-[0.98] cursor-pointer group"
                onClick={() => toggleToolSelection(tool.id)}
              >
                <img 
                  src={tool.logo || `/logos/${tool.category.toLowerCase().replace(/ /g, '-')}.svg`} 
                  alt={`${tool.name} logo`} 
                  className="w-4 h-4 object-contain mr-2 flex-shrink-0"
                  onError={(e) => handleLogoError(e, tool.category)}
                />
                <span className="text-sm font-medium truncate max-w-[120px] sm:max-w-none">{tool.name}</span>
                <div className="ml-1.5 text-primary-600 dark:text-primary-400 group-hover:text-primary-800 dark:group-hover:text-primary-300 transition-colors flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="modern-card backdrop-blur-oneui overflow-hidden">
        <CompareTable tools={selectedTools} />
      </div>
    </div>
  );
}

export default Compare;
