import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { SidebarAd, InContentAd } from '../components/GoogleAd';
import { ADSENSE_CONFIG, shouldShowAds as _shouldShowAds } from '../config/adsense';
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
      <>
        <SEO 
          title="Loading AI Tool Details... - AiToolCraft"
          description="Loading AI tool information..."
          canonicalUrl={`/tool/${id}`}
        />
        <div className="container mx-auto px-4 py-12 flex justify-center">
          <div className="w-12 h-12 rounded-full border-4 border-primary-600 border-t-transparent animate-spin"></div>
        </div>
      </>
    );
  }

  if (!tool) {
    return (
      <>
        <SEO 
          title="AI Tool Not Found - AiToolCraft"
          description="The AI tool you're looking for couldn't be found."
          canonicalUrl={`/tool/${id}`}
        />
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
      </>
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
    <>
      <SEO 
        title={`${tool.name} - AI Tool Review & Details | AiToolCraft`}
        description={tool.description}
        keywords={`${tool.name}, ${tool.category}, AI tool, artificial intelligence, ${tool.features?.join(', ') || ''}, AI software, AI application, AI platform, AI service, AI solution, machine learning tool, deep learning software, neural network, natural language processing, computer vision, automation tool, productivity software, creative AI, business AI, enterprise AI, AI development, AI deployment, AI integration, AI API, AI model, AI algorithm, AI framework, AI cloud service, AI SaaS, generative AI, conversational AI, AI assistant, AI chatbot, AI automation, AI optimization, AI enhancement, AI workflow, AI analysis, AI insights, AI intelligence, AI innovation, AI technology, AI research, AI development platform, AI tool review, AI software review, AI comparison, AI alternative, AI recommendation, AI guide, AI tutorial, AI tips, AI best practices, AI use cases, AI benefits, AI features, AI pricing, AI demo, AI trial, AI free version, AI paid version, AI subscription, AI enterprise, AI business solution, AI productivity tool, AI content creation, AI writing tool, AI image generator, AI video tool, AI audio tool, AI design tool, AI marketing tool, AI analytics tool, AI data tool, AI code generator, AI development tool, AI testing tool, AI monitoring tool, AI security tool, AI compliance tool, AI governance tool, OpenAI, GPT, ChatGPT, Claude, Midjourney, DALL-E, Stable Diffusion, Runway ML, Jasper AI, Copy.ai, Notion AI, Canva AI, Adobe AI, Google AI, Microsoft AI, AWS AI, IBM Watson, Anthropic, Hugging Face, TensorFlow, PyTorch, scikit-learn, Keras, AI startups, AI vendors, AI providers, AI marketplace, AI directory, AI catalog, AI database, AI resources, AI ecosystem, AI landscape, AI trends, AI future, AI adoption, AI transformation, AI strategy, AI implementation, AI consulting, AI training, AI education, AI certification, AI career, AI job opportunities, AI skills, AI expertise, AI knowledge, AI learning, AI research and development`}
        canonicalUrl={`/tool/${tool.id}`}
        image={tool.logo}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": tool.name,
          "description": tool.description,
          "applicationCategory": tool.category,
          "url": tool.website,
          "offers": tool.pricing ? {
            "@type": "Offer",
            "description": tool.pricing
          } : undefined,
          "aggregateRating": tool.rating ? {
            "@type": "AggregateRating", 
            "ratingValue": tool.rating,
            "ratingCount": 1
          } : undefined
        }}
      />
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

            {/* Tool detail page ad */}
            {_shouldShowAds() && (
              <div className="my-8">
                <InContentAd 
                  adClient={ADSENSE_CONFIG.publisherId} 
                  adSlot={ADSENSE_CONFIG.adSlots.toolDetail} 
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default AiDetailPage;
