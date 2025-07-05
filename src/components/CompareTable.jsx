import React from 'react';

function CompareTable({ tools }) {

  if (!tools || tools.length === 0) {
    return (
      <div className="text-center p-8 glass-effect backdrop-blur-sm rounded-3xl">
        <p className="text-gray-600 dark:text-gray-300">No tools selected for comparison</p>
      </div>
    );
  }

  // Mobile comparison view - horizontal scrollable table for side-by-side comparison
  const MobileCompare = () => (
    <div className="md:hidden">
      {/* Header showing tool count and scroll hint */}
      <div className="flex items-center justify-between mb-4 px-1">
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Comparing {tools.length} tool{tools.length !== 1 ? 's' : ''}
        </h3>
        <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
          </svg>
          Swipe to scroll
        </div>
      </div>

      {/* Horizontal scrollable comparison table */}
      <div className="modern-card backdrop-blur-oneui overflow-hidden">
        <div className="mobile-compare-table overflow-x-auto hide-scrollbar">
          <table className="w-full min-w-max">
            {/* Header with tool names and logos */}
            <thead className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-oneui sticky top-0 z-10">
              <tr>
                <th className="text-left py-3 px-3 border-b border-gray-200/50 dark:border-gray-700/50 font-medium text-gray-600 dark:text-gray-200 bg-white/95 dark:bg-gray-800/95 sticky left-0 z-20 min-w-[100px]">
                  <span className="text-xs">Features</span>
                </th>
                {tools.map(tool => (
                  <th key={tool.id} className="text-center py-3 px-4 border-b border-gray-200/50 dark:border-gray-700/50 font-medium text-gray-600 dark:text-gray-200 min-w-[140px] max-w-[160px]">
                    <div className="flex flex-col items-center space-y-2">
                      {tool.logo && (
                        <div className="w-8 h-8 flex-shrink-0 rounded-lg overflow-hidden bg-white/70 dark:bg-gray-800/40 p-1 flex items-center justify-center shadow-soft-sm backdrop-blur-sm border border-gray-100/40 dark:border-gray-700/30">
                          <img 
                            src={tool.logo} 
                            alt={`${tool.name} logo`} 
                            className="w-6 h-6 object-contain"
                          />
                        </div>
                      )}
                      <span className="text-xs font-semibold text-center leading-tight">{tool.name}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            
            <tbody className="divide-y divide-gray-200/50 dark:divide-gray-700/50">
              {/* Category Row */}
              <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
                <td className="py-3 px-3 font-medium text-gray-800 dark:text-white bg-white/95 dark:bg-gray-800/95 sticky left-0 z-10 text-xs border-r border-gray-200/50 dark:border-gray-700/50">
                  Category
                </td>
                {tools.map(tool => (
                  <td key={`${tool.id}-category`} className="py-3 px-4 text-center">
                    <span className="badge-modern bg-blue-100/80 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border border-blue-200/30 dark:border-blue-800/30 text-xs">
                      {tool.category}
                    </span>
                  </td>
                ))}
              </tr>
              
              {/* Creator Row */}
              <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
                <td className="py-3 px-3 font-medium text-gray-800 dark:text-white bg-white/95 dark:bg-gray-800/95 sticky left-0 z-10 text-xs border-r border-gray-200/50 dark:border-gray-700/50">
                  Creator
                </td>
                {tools.map(tool => (
                  <td key={`${tool.id}-creator`} className="py-3 px-4 text-gray-600 dark:text-gray-300 text-center text-xs">
                    {tool.creator}
                  </td>
                ))}
              </tr>
              
              {/* Free/Paid Row */}
              <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
                <td className="py-3 px-3 font-medium text-gray-800 dark:text-white bg-white/95 dark:bg-gray-800/95 sticky left-0 z-10 text-xs border-r border-gray-200/50 dark:border-gray-700/50">
                  Pricing
                </td>
                {tools.map(tool => (
                  <td key={`${tool.id}-free`} className="py-3 px-4 text-center">
                    <span className={`badge-modern text-xs ${tool.free 
                      ? 'bg-green-100/80 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200/30 dark:border-green-800/30' 
                      : 'bg-orange-100/80 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 border-orange-200/30 dark:border-orange-800/30'}`}>
                      {tool.free ? 'Free' : 'Paid'}
                    </span>
                  </td>
                ))}
              </tr>
              
              {/* API Access Row */}
              <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
                <td className="py-3 px-3 font-medium text-gray-800 dark:text-white bg-white/95 dark:bg-gray-800/95 sticky left-0 z-10 text-xs border-r border-gray-200/50 dark:border-gray-700/50">
                  API
                </td>
                {tools.map(tool => (
                  <td key={`${tool.id}-api`} className="py-3 px-4 text-center">
                    <span className={`badge-modern text-xs ${tool.api 
                      ? 'bg-purple-100/80 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200/30 dark:border-purple-800/30' 
                      : 'bg-gray-100/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-300 border-gray-200/30 dark:border-gray-700/30'}`}>
                      {tool.api ? 'Yes' : 'No'}
                    </span>
                  </td>
                ))}
              </tr>
              
              {/* Features Row */}
              <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
                <td className="py-3 px-3 font-medium text-gray-800 dark:text-white bg-white/95 dark:bg-gray-800/95 sticky left-0 z-10 text-xs border-r border-gray-200/50 dark:border-gray-700/50">
                  Key Features
                </td>
                {tools.map(tool => (
                  <td key={`${tool.id}-features`} className="py-3 px-4 text-gray-600 dark:text-gray-300 text-xs leading-relaxed max-w-[160px]">
                    {tool.features && tool.features.length > 0 ? (
                      <div className="space-y-1">
                        {tool.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <span className="text-green-500 mr-1 flex-shrink-0">•</span>
                            <span className="line-clamp-2">{feature}</span>
                          </div>
                        ))}
                        {tool.features.length > 3 && (
                          <div className="text-gray-500 dark:text-gray-400 text-xs">
                            +{tool.features.length - 3} more
                          </div>
                        )}
                      </div>
                    ) : (
                      <span className="text-gray-400 dark:text-gray-500">Not specified</span>
                    )}
                  </td>
                ))}
              </tr>
              
              {/* Pricing Row */}
              <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
                <td className="py-3 px-3 font-medium text-gray-800 dark:text-white bg-white/95 dark:bg-gray-800/95 sticky left-0 z-10 text-xs border-r border-gray-200/50 dark:border-gray-700/50">
                  Pricing Plans
                </td>
                {tools.map(tool => (
                  <td key={`${tool.id}-pricing`} className="py-3 px-4 text-gray-600 dark:text-gray-300 text-xs leading-relaxed max-w-[160px]">
                    {tool.pricing && tool.pricing.length > 0 ? (
                      <div className="space-y-1.5">
                        {tool.pricing.slice(0, 2).map((plan, idx) => (
                          <div key={idx} className="border border-gray-200 dark:border-gray-700 rounded-lg p-2 bg-white/50 dark:bg-gray-800/50">
                            <div className="font-medium text-gray-800 dark:text-white">{plan.plan}</div>
                            <div className="text-primary-600 dark:text-primary-400 font-semibold">{plan.cost}</div>
                          </div>
                        ))}
                        {tool.pricing.length > 2 && (
                          <div className="text-gray-500 dark:text-gray-400 text-xs text-center">
                            +{tool.pricing.length - 2} more plans
                          </div>
                        )}
                      </div>
                    ) : (
                      <span className="text-gray-400 dark:text-gray-500">Not specified</span>
                    )}
                  </td>
                ))}
              </tr>
              
              {/* Use Cases Row */}
              <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
                <td className="py-3 px-3 font-medium text-gray-800 dark:text-white bg-white/95 dark:bg-gray-800/95 sticky left-0 z-10 text-xs border-r border-gray-200/50 dark:border-gray-700/50">
                  Use Cases
                </td>
                {tools.map(tool => (
                  <td key={`${tool.id}-usecases`} className="py-3 px-4 text-gray-600 dark:text-gray-300 text-xs leading-relaxed max-w-[160px]">
                    {tool.useCases && tool.useCases.length > 0 ? (
                      <div className="space-y-1">
                        {tool.useCases.slice(0, 3).map((useCase, idx) => (
                          <div key={idx} className="flex items-start">
                            <span className="text-blue-500 mr-1 flex-shrink-0">•</span>
                            <span className="line-clamp-2">{useCase}</span>
                          </div>
                        ))}
                        {tool.useCases.length > 3 && (
                          <div className="text-gray-500 dark:text-gray-400 text-xs">
                            +{tool.useCases.length - 3} more
                          </div>
                        )}
                      </div>
                    ) : (
                      <span className="text-gray-400 dark:text-gray-500">Not specified</span>
                    )}
                  </td>
                ))}
              </tr>
              
              {/* Description Row */}
              <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
                <td className="py-3 px-3 font-medium text-gray-800 dark:text-white bg-white/95 dark:bg-gray-800/95 sticky left-0 z-10 text-xs border-r border-gray-200/50 dark:border-gray-700/50">
                  Description
                </td>
                {tools.map(tool => (
                  <td key={`${tool.id}-desc`} className="py-3 px-4 text-gray-600 dark:text-gray-300 text-xs leading-relaxed max-w-[160px]">
                    <div className="line-clamp-3 text-center">
                      {tool.description}
                    </div>
                  </td>
                ))}
              </tr>
              
              {/* Website Links Row */}
              <tr>
                <td className="py-3 px-3 font-medium text-gray-800 dark:text-white bg-white/95 dark:bg-gray-800/95 sticky left-0 z-10 text-xs border-r border-gray-200/50 dark:border-gray-700/50">
                  Website
                </td>
                {tools.map(tool => (
                  <td key={`${tool.id}-link`} className="py-3 px-4 text-center">
                    <a 
                      href={tool.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-2 py-1.5 text-xs bg-primary-600 hover:bg-primary-700 text-white rounded-lg shadow-soft-sm transition-all hover:scale-105 active:scale-95"
                    >
                      Visit
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 ml-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Helper text */}
      <div className="mt-3 text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Scroll horizontally to compare all features side by side
        </p>
      </div>
    </div>
  );
  
  // Desktop table view
  const DesktopTable = () => (
    <div className="hidden md:block overflow-x-auto">
      <table className="min-w-full modern-card overflow-hidden">
        <thead className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-oneui">
          <tr>
            <th className="text-left py-4 px-4 border-b border-gray-200/50 dark:border-gray-700/50 font-medium text-gray-600 dark:text-gray-200">Features</th>
            {tools.map(tool => (
              <th key={tool.id} className="text-left py-4 px-4 border-b border-gray-200/50 dark:border-gray-700/50 font-medium text-gray-600 dark:text-gray-200">
                <div className="flex items-center">
                  {tool.logo && (
                    <div className="w-8 h-8 flex-shrink-0 rounded-lg overflow-hidden bg-white/70 dark:bg-gray-800/40 p-1 mr-2 flex items-center justify-center shadow-soft-sm backdrop-blur-sm border border-gray-100/40 dark:border-gray-700/30">
                      <img 
                        src={tool.logo} 
                        alt={`${tool.name} logo`} 
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                  )}
                  {tool.name}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200/50 dark:divide-gray-700/50">
          <tr>
            <td className="py-4 px-4 border-b border-gray-200/50 dark:border-gray-700/50 font-medium text-gray-800 dark:text-white">Category</td>
            {tools.map(tool => (
              <td key={`${tool.id}-category`} className="py-4 px-4 border-b border-gray-200/50 dark:border-gray-700/50 text-gray-600 dark:text-gray-300">
                <span className="badge-modern bg-blue-100/80 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border border-blue-200/30 dark:border-blue-800/30">
                  {tool.category}
                </span>
              </td>
            ))}
          </tr>
          <tr>
            <td className="py-4 px-4 border-b border-gray-200/50 dark:border-gray-700/50 font-medium text-gray-800 dark:text-white">Creator</td>
            {tools.map(tool => (
              <td key={`${tool.id}-creator`} className="py-4 px-4 border-b border-gray-200/50 dark:border-gray-700/50 text-gray-600 dark:text-gray-300">{tool.creator}</td>
            ))}
          </tr>
          <tr>
            <td className="py-4 px-4 border-b border-gray-200/50 dark:border-gray-700/50 font-medium text-gray-800 dark:text-white">Key Features</td>
            {tools.map(tool => (
              <td key={`${tool.id}-features`} className="py-4 px-4 border-b border-gray-200/50 dark:border-gray-700/50 text-gray-600 dark:text-gray-300">
                {tool.features && tool.features.length > 0 ? (
                  <div className="space-y-1">
                    {tool.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start text-sm">
                        <span className="text-green-500 mr-2 flex-shrink-0">•</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                    {tool.features.length > 4 && (
                      <div className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                        +{tool.features.length - 4} more features
                      </div>
                    )}
                  </div>
                ) : (
                  <span className="text-gray-400 dark:text-gray-500">Not specified</span>
                )}
              </td>
            ))}
          </tr>
          <tr>
            <td className="py-4 px-4 border-b border-gray-200/50 dark:border-gray-700/50 font-medium text-gray-800 dark:text-white">Pricing Plans</td>
            {tools.map(tool => (
              <td key={`${tool.id}-pricing`} className="py-4 px-4 border-b border-gray-200/50 dark:border-gray-700/50 text-gray-600 dark:text-gray-300">
                {tool.pricing && tool.pricing.length > 0 ? (
                  <div className="space-y-2">
                    {tool.pricing.map((plan, idx) => (
                      <div key={idx} className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 bg-white/50 dark:bg-gray-800/50">
                        <div className="font-medium text-gray-800 dark:text-white">{plan.plan}</div>
                        <div className="text-primary-600 dark:text-primary-400 font-semibold text-lg">{plan.cost}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{plan.description}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <span className="text-gray-400 dark:text-gray-500">Not specified</span>
                )}
              </td>
            ))}
          </tr>
          <tr>
            <td className="py-4 px-4 border-b border-gray-200/50 dark:border-gray-700/50 font-medium text-gray-800 dark:text-white">Use Cases</td>
            {tools.map(tool => (
              <td key={`${tool.id}-usecases`} className="py-4 px-4 border-b border-gray-200/50 dark:border-gray-700/50 text-gray-600 dark:text-gray-300">
                {tool.useCases && tool.useCases.length > 0 ? (
                  <div className="space-y-1">
                    {tool.useCases.slice(0, 4).map((useCase, idx) => (
                      <div key={idx} className="flex items-start text-sm">
                        <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                        <span>{useCase}</span>
                      </div>
                    ))}
                    {tool.useCases.length > 4 && (
                      <div className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                        +{tool.useCases.length - 4} more use cases
                      </div>
                    )}
                  </div>
                ) : (
                  <span className="text-gray-400 dark:text-gray-500">Not specified</span>
                )}
              </td>
            ))}
          </tr>
          <tr>
            <td className="py-4 px-4 border-b border-gray-200/50 dark:border-gray-700/50 font-medium text-gray-800 dark:text-white">Description</td>
            {tools.map(tool => (
              <td key={`${tool.id}-desc`} className="py-4 px-4 border-b border-gray-200/50 dark:border-gray-700/50 text-gray-600 dark:text-gray-300">{tool.description}</td>
            ))}
          </tr>
          <tr>
            <td className="py-4 px-4 border-b border-gray-200/50 dark:border-gray-700/50 font-medium text-gray-800 dark:text-white">Free/Paid</td>
            {tools.map(tool => (
              <td key={`${tool.id}-free`} className="py-4 px-4 border-b border-gray-200/50 dark:border-gray-700/50">
                <span className={`badge-modern ${tool.free 
                  ? 'bg-green-100/80 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200/30 dark:border-green-800/30' 
                  : 'bg-orange-100/80 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 border-orange-200/30 dark:border-orange-800/30'}`}>
                  {tool.free ? 'Free' : 'Paid'}
                </span>
              </td>
            ))}
          </tr>
          <tr>
            <td className="py-4 px-4 border-b border-gray-200/50 dark:border-gray-700/50 font-medium text-gray-800 dark:text-white">API Access</td>
            {tools.map(tool => (
              <td key={`${tool.id}-api`} className="py-4 px-4 border-b border-gray-200/50 dark:border-gray-700/50">
                <span className={`badge-modern ${tool.api 
                  ? 'bg-purple-100/80 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200/30 dark:border-purple-800/30' 
                  : 'bg-gray-100/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-300 border-gray-200/30 dark:border-gray-700/30'}`}>
                  {tool.api ? 'Yes' : 'No'}
                </span>
              </td>
            ))}
          </tr>
          <tr>
            <td className="py-4 px-4 font-medium text-gray-800 dark:text-white">Website</td>
            {tools.map(tool => (
              <td key={`${tool.id}-link`} className="py-4 px-4">
                <a 
                  href={tool.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-modern inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                >
                  Visit Site
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <>
      <MobileCompare />
      <DesktopTable />
    </>
  );

}

export default CompareTable;
