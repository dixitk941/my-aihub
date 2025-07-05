import React from 'react';

function CompareTable({ tools }) {
  if (!tools || tools.length === 0) {
    return (
      <div className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <p className="text-gray-600 dark:text-gray-300">No tools selected for comparison</p>
      </div>
    );
  }

  // For mobile view: we'll create a card-based comparison
  const MobileCompare = () => (
    <div className="md:hidden space-y-6">
      {tools.map(tool => (
        <div key={tool.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="p-4 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
            <div className="flex items-center">
              {tool.logo && (
                <img 
                  src={tool.logo} 
                  alt={`${tool.name} logo`} 
                  className="w-8 h-8 object-contain mr-2"
                />
              )}
              <h3 className="font-semibold text-gray-800 dark:text-white">{tool.name}</h3>
            </div>
          </div>
          
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="p-4 flex">
              <span className="w-1/3 font-medium text-gray-700 dark:text-gray-300">Category</span>
              <span className="w-2/3">
                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full">
                  {tool.category}
                </span>
              </span>
            </div>
            
            <div className="p-4 flex">
              <span className="w-1/3 font-medium text-gray-700 dark:text-gray-300">Creator</span>
              <span className="w-2/3 text-gray-600 dark:text-gray-400">{tool.creator}</span>
            </div>
            
            <div className="p-4 flex">
              <span className="w-1/3 font-medium text-gray-700 dark:text-gray-300">Type</span>
              <span className="w-2/3">
                <span className={`inline-block ${tool.free ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' : 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200'} text-xs px-2 py-1 rounded-full`}>
                  {tool.free ? 'Free' : 'Paid'}
                </span>
              </span>
            </div>
            
            <div className="p-4 flex">
              <span className="w-1/3 font-medium text-gray-700 dark:text-gray-300">API</span>
              <span className="w-2/3">
                <span className={`inline-block ${tool.api ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200' : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300'} text-xs px-2 py-1 rounded-full`}>
                  {tool.api ? 'Available' : 'Not Available'}
                </span>
              </span>
            </div>
            
            <div className="p-4 flex flex-col">
              <span className="w-full font-medium text-gray-700 dark:text-gray-300 mb-1">Description</span>
              <span className="w-full text-gray-600 dark:text-gray-400">{tool.description}</span>
            </div>
            
            <div className="p-4">
              <a 
                href={tool.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors text-sm"
              >
                Visit Website
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
  
  // Desktop table view
  const DesktopTable = () => (
    <div className="hidden md:block overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th className="text-left py-4 px-4 border-b dark:border-gray-600 font-medium text-gray-600 dark:text-gray-200">Features</th>
            {tools.map(tool => (
              <th key={tool.id} className="text-left py-4 px-4 border-b dark:border-gray-600 font-medium text-gray-600 dark:text-gray-200">
                <div className="flex items-center">
                  {tool.logo && (
                    <img 
                      src={tool.logo} 
                      alt={`${tool.name} logo`} 
                      className="w-6 h-6 object-contain mr-2"
                    />
                  )}
                  {tool.name}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-4 px-4 border-b dark:border-gray-600 font-medium text-gray-800 dark:text-white">Category</td>
            {tools.map(tool => (
              <td key={`${tool.id}-category`} className="py-4 px-4 border-b dark:border-gray-600 text-gray-600 dark:text-gray-300">
                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full">
                  {tool.category}
                </span>
              </td>
            ))}
          </tr>
          <tr>
            <td className="py-4 px-4 border-b dark:border-gray-600 font-medium text-gray-800 dark:text-white">Creator</td>
            {tools.map(tool => (
              <td key={`${tool.id}-creator`} className="py-4 px-4 border-b dark:border-gray-600 text-gray-600 dark:text-gray-300">{tool.creator}</td>
            ))}
          </tr>
          <tr>
            <td className="py-4 px-4 border-b dark:border-gray-600 font-medium text-gray-800 dark:text-white">Description</td>
            {tools.map(tool => (
              <td key={`${tool.id}-desc`} className="py-4 px-4 border-b dark:border-gray-600 text-gray-600 dark:text-gray-300">{tool.description}</td>
            ))}
          </tr>
          <tr>
            <td className="py-4 px-4 border-b dark:border-gray-600 font-medium text-gray-800 dark:text-white">Free/Paid</td>
            {tools.map(tool => (
              <td key={`${tool.id}-free`} className="py-4 px-4 border-b dark:border-gray-600">
                <span className={`inline-block ${tool.free ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' : 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200'} text-xs px-2 py-1 rounded-full`}>
                  {tool.free ? 'Free' : 'Paid'}
                </span>
              </td>
            ))}
          </tr>
          <tr>
            <td className="py-4 px-4 border-b dark:border-gray-600 font-medium text-gray-800 dark:text-white">API Access</td>
            {tools.map(tool => (
              <td key={`${tool.id}-api`} className="py-4 px-4 border-b dark:border-gray-600">
                <span className={`inline-block ${tool.api ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200' : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300'} text-xs px-2 py-1 rounded-full`}>
                  {tool.api ? 'Yes' : 'No'}
                </span>
              </td>
            ))}
          </tr>
          <tr>
            <td className="py-4 px-4 border-b dark:border-gray-600 font-medium text-gray-800 dark:text-white">Website</td>
            {tools.map(tool => (
              <td key={`${tool.id}-link`} className="py-4 px-4 border-b dark:border-gray-600">
                <a 
                  href={tool.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
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
