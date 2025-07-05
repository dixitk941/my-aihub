import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { aiTools } from '../data/aiTools';
import { handleLogoError } from '../utils/logoUtils';

function AiDetailPage() {
  const { id } = useParams();
  const [tool, setTool] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Find the tool with the matching ID
    const foundTool = aiTools.find(tool => tool.id.toString() === id);
    setTool(foundTool);
    setLoading(false);

    // Animation effect on load
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-primary-600 border-t-transparent animate-spin"></div>
      </div>
    );
  }

  if (!tool) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="modern-card p-8 max-w-2xl mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 mx-auto text-gray-400 mb-4">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
          </svg>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">AI Tool Not Found</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">We couldn't find the AI tool you're looking for.</p>
          <Link to="/" className="btn-modern inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // Format category-specific classes
  const getCategoryClasses = () => {
    switch(tool.category) {
      case 'Text Generation':
        return 'bg-blue-100/80 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200/30 dark:border-blue-800/30';
      case 'Image Generation':
        return 'bg-purple-100/80 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200/30 dark:border-purple-800/30';
      case 'Voice Generation':
        return 'bg-rose-100/80 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300 border-rose-200/30 dark:border-rose-800/30';
      case 'Video Generation':
        return 'bg-amber-100/80 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 border-amber-200/30 dark:border-amber-800/30';
      case 'Code Generation':
        return 'bg-emerald-100/80 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 border-emerald-200/30 dark:border-emerald-800/30';
      default:
        return 'bg-primary-100/80 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 border-primary-200/30 dark:border-primary-800/30';
    }
  };

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
    <div className="container mx-auto px-4 py-8">
      <div className={`transition-all duration-700 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <Link to="/" className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 mb-6 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-1">
            <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
          </svg>
          Back to AI Tools
        </Link>
        
        <div className={`modern-card overflow-hidden relative transition-all duration-500 delay-100 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Background gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${getBgGradient()}`}></div>
          
          {/* Decorative elements */}
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-primary-500/10 dark:bg-primary-400/10 blur-3xl"></div>
          <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-indigo-500/10 dark:bg-indigo-400/10 blur-3xl"></div>
          
          <div className="relative p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Logo */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-2xl overflow-hidden bg-white/70 dark:bg-gray-800/40 p-4 flex items-center justify-center shadow-soft-lg backdrop-blur-sm border border-gray-100/40 dark:border-gray-700/30">
                  <img 
                    src={tool.logo || `/logos/${tool.category.toLowerCase().replace(/ /g, '-')}.svg`} 
                    alt={`${tool.name} logo`} 
                    className="w-16 h-16 object-contain"
                    onError={(e) => handleLogoError(e, tool.category)}
                  />
                </div>
              </div>
              
              {/* Tool basic info */}
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">{tool.name}</h1>
                
                <div className="mb-4">
                  <span className={`badge-modern text-xs py-1 px-2.5 backdrop-blur-sm border ${getCategoryClasses()}`}>
                    {tool.category}
                  </span>
                  <span className={`badge-modern text-xs py-1 px-2.5 ml-2 backdrop-blur-sm border ${tool.free 
                    ? 'bg-green-100/80 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200/30 dark:border-green-800/30' 
                    : 'bg-orange-100/80 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 border-orange-200/30 dark:border-orange-800/30'}`}
                  >
                    {tool.free ? 'Free' : 'Paid'}
                  </span>
                  <span className={`badge-modern text-xs py-1 px-2.5 ml-2 backdrop-blur-sm border ${tool.api 
                    ? 'bg-purple-100/80 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200/30 dark:border-purple-800/30' 
                    : 'bg-gray-100/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-300 border-gray-200/30 dark:border-gray-700/30'}`}
                  >
                    {tool.api ? 'API Available' : 'No API'}
                  </span>
                </div>
                
                <div className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                  <p className="mb-1"><span className="font-medium">Creator:</span> {tool.creator || 'Not specified'}</p>
                  <p><span className="font-medium">Release Date:</span> {tool.releaseDate || 'Not specified'}</p>
                </div>
                
                <a 
                  href={tool.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-modern inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 active:bg-primary-800 text-white rounded-xl transition-all text-sm font-medium shadow-soft-md transform hover:translate-y-[-2px] active:translate-y-[0px]"
                >
                  <span className="relative inline-flex items-center">
                    Visit Official Website
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            
            {/* Description */}
            <div className={`mt-8 transition-all duration-500 delay-200 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Description</h2>
              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-5 border border-gray-100/30 dark:border-gray-700/30 shadow-soft-sm">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{tool.description}</p>
              </div>
            </div>
            
            {/* Key Features */}
            <div className={`mt-8 transition-all duration-500 delay-300 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Key Features</h2>
              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-5 border border-gray-100/30 dark:border-gray-700/30 shadow-soft-sm">
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  {tool.features ? (
                    tool.features.map((feature, index) => (
                      <li key={index} className="pl-2">{feature}</li>
                    ))
                  ) : (
                    <li className="text-gray-500 dark:text-gray-400 italic">No feature details available</li>
                  )}
                </ul>
              </div>
            </div>
            
            {/* Pricing */}
            <div className={`mt-8 transition-all duration-500 delay-400 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Pricing</h2>
              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-5 border border-gray-100/30 dark:border-gray-700/30 shadow-soft-sm">
                {tool.pricing ? (
                  <div className="space-y-3">
                    {tool.pricing.map((price, index) => (
                      <div key={index} className="flex flex-col">
                        <span className="font-medium text-gray-800 dark:text-white">{price.plan}</span>
                        <span className="text-gray-700 dark:text-gray-300">{price.cost}</span>
                        {price.description && <span className="text-sm text-gray-500 dark:text-gray-400">{price.description}</span>}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-700 dark:text-gray-300">
                    {tool.free ? 'This tool is available for free.' : 'Pricing information not available. Please check the official website for details.'}
                  </p>
                )}
              </div>
            </div>
            
            {/* Use Cases */}
            <div className={`mt-8 transition-all duration-500 delay-500 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Use Cases</h2>
              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-5 border border-gray-100/30 dark:border-gray-700/30 shadow-soft-sm">
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  {tool.useCases ? (
                    tool.useCases.map((useCase, index) => (
                      <li key={index} className="pl-2">{useCase}</li>
                    ))
                  ) : (
                    <li className="text-gray-500 dark:text-gray-400 italic">No use case details available</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AiDetailPage;
