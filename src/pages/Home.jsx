import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AiCard from '../components/AiCard';
import SearchFilter from '../components/SearchFilter';
import SEO from '../components/SEO';
import { aiTools, categories } from '../data/aiTools';
import { useOutletContext } from 'react-router-dom';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredTools, setFilteredTools] = useState(aiTools);
  const { selectedTools, toggleToolSelection } = useOutletContext();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation effect on load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const filtered = aiTools.filter(tool => {
      const matchesSearch = 
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        tool.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === '' || tool.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredTools(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <>
      <SEO 
        title="AiToolCraft - Discover & Compare the Best AI Tools for 2025"
        description="Explore our comprehensive directory of AI tools for creators, developers, and innovators. Compare features, pricing, and find the perfect AI solution for your needs."
        keywords="AI tools directory, best AI tools 2025, artificial intelligence software, creative AI tools, productivity AI apps, AI comparison platform, machine learning tools, AI automation software, AI writing tools, AI image generators, AI video editors, AI chatbots, AI code generators, AI design tools, AI marketing tools, AI analytics tools, AI data analysis, AI voice tools, AI translation tools, OpenAI tools, GPT applications, ChatGPT alternatives, Claude AI, Midjourney AI, DALL-E alternatives, Stable Diffusion tools, AI content creation, AI workflow automation, enterprise AI solutions, free AI tools, paid AI software, AI tool reviews, AI tool comparison, AI directory 2025, AI marketplace, AI SaaS platforms, AI APIs, generative AI tools, conversational AI, AI assistants, AI plugins, AI integrations, AI for business, AI for developers, AI for creators, AI for marketers, AI for designers, AI for writers, AI for entrepreneurs, AI startups, AI innovation, AI technology trends, AI research tools, AI development platforms, neural network tools, deep learning software, natural language processing, computer vision AI, AI frameworks, TensorFlow tools, PyTorch applications, Hugging Face models, AI cloud services, AWS AI tools, Google AI platform, Microsoft AI services, Adobe AI features, Canva AI tools, Notion AI, Jasper AI, Copy.ai alternatives, AI tool catalog, AI tool database, AI tool collection, AI tool marketplace, AI resources, AI guides, AI tutorials, AI best practices, AI use cases, AI implementation, AI adoption, AI transformation"
        canonicalUrl="/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "AiToolCraft",
          "url": "https://aitoolcraft.com",
          "description": "Discover, compare, and master the best AI tools for creators, developers, and innovators.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://aitoolcraft.com/?search={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        }}
      />
      <div className="container mx-auto px-4 py-6">
      <div className={`mb-10 text-center transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-primary-600 to-purple-600 bg-clip-text text-transparent pb-2 mb-4">
          Discover AI Tools
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore and compare the latest AI tools to find the perfect solution for your needs.
        </p>
      </div>
      
      {selectedTools.length > 0 && (
        <div className={`mb-8 modern-card p-5 relative overflow-hidden backdrop-blur-sm border border-gray-100/30 dark:border-white/5 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Background decorations */}
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl"></div>
          
          <div className="flex flex-wrap items-center gap-2 relative">
            <div className="mb-2 sm:mb-0">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 block sm:inline">Selected for comparison:</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-0 sm:ml-1 block sm:inline">{selectedTools.length} tools</span>
            </div>
            
            <div className="flex flex-wrap gap-2 my-2">
              {selectedTools.map(tool => (
                <div 
                  key={tool.id}
                  className="flex items-center bg-primary-50/80 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300 px-3 py-1.5 rounded-full text-sm backdrop-blur-sm border border-primary-100/50 dark:border-primary-800/30"
                >
                  {tool.logo && (
                    <img 
                      src={tool.logo} 
                      alt={`${tool.name} logo`} 
                      className="w-4 h-4 object-contain mr-1.5"
                      onLoad={(e) => e.target.classList.add('loaded')}
                    />
                  )}
                  <span className="font-medium">{tool.name}</span>
                  <button 
                    onClick={() => toggleToolSelection(tool.id)}
                    className="ml-2 text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 transition-colors"
                    aria-label={`Remove ${tool.name} from comparison`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            
            <Link 
              to="/compare" 
              className="btn-modern ml-auto mt-2 sm:mt-0 inline-flex items-center justify-center px-4 py-2 bg-primary-600 hover:bg-primary-700 active:bg-primary-800 text-white rounded-xl transition-all text-sm font-medium shadow-soft-md"
            >
              Compare Now
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>
        </div>
      )}
      
      <div className={`transition-all duration-500 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <SearchFilter 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
        />
      </div>
      
      {filteredTools.length === 0 ? (
        <div className={`text-center p-12 modern-card transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-20 h-20 mx-auto text-gray-300 dark:text-gray-600 mb-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-xl font-light">No AI tools found matching your search criteria.</p>
          <button 
            onClick={() => {setSearchTerm(''); setSelectedCategory('');}}
            className="btn-modern px-6 py-2.5 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-xl hover:bg-primary-200 dark:hover:bg-primary-800/40 transition-colors shadow-soft-sm"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool, index) => (
            <div 
              key={tool.id} 
              className={`transition-all duration-500 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} 
              style={{ transitionDelay: `${200 + index * 50}ms` }}
            >
              <AiCard 
                tool={tool}
                onCompareToggle={toggleToolSelection}
                isSelected={selectedTools.some(t => t.id === tool.id)}
              />
            </div>
          ))}
        </div>
      )}
      
      {/* Floating action button for mobile - only shown when tools are selected */}
      {selectedTools.length > 0 && (
        <Link 
          to="/compare" 
          className="fab md:hidden transform hover:scale-105 active:scale-95"
          aria-label="Compare selected tools"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
          </svg>
        </Link>
      )}
    </div>
    </>
  );
}

export default Home;