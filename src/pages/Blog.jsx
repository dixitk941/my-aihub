import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { SidebarAd, InContentAd } from '../components/GoogleAd';
import { ADSENSE_CONFIG, shouldShowAds as _shouldShowAds } from '../config/adsense';
import { blogPosts } from '../data/blogPosts';

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Reviews', 'Tutorials', 'Industry News', 'AI Trends'];
  
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <SEO 
        title="AI Tools Blog - AiToolCraft"
        description="Stay updated with the latest AI tools, reviews, tutorials, and industry insights. Expert analysis and guides for AI enthusiasts and professionals."
        keywords="AI tools blog, AI reviews, AI tutorials, artificial intelligence news, AI trends, machine learning guides, AI insights, AI industry news, AI tool reviews, AI software reviews, AI technology blog, AI innovation blog, AI research blog, AI development blog, AI business blog, AI startup blog, AI trends 2025, AI future predictions, AI case studies, AI success stories, AI best practices, AI implementation guides, AI strategy guides, AI adoption stories, AI transformation case studies, AI ROI analysis, AI cost benefit analysis, AI market analysis, AI competitive analysis, AI vendor reviews, AI product reviews, AI service reviews, AI platform reviews, AI API reviews, AI model reviews, AI algorithm analysis, AI performance benchmarks, AI accuracy tests, AI speed tests, AI scalability analysis, AI security analysis, AI compliance guides, AI ethics discussions, AI safety guidelines, AI governance frameworks, AI regulation updates, AI policy changes, AI legal implications, AI intellectual property, AI data privacy, AI transparency, AI explainability, AI bias detection, AI fairness, AI accountability, AI responsible AI, AI sustainable AI, AI green AI, AI energy efficiency, AI carbon footprint, AI environmental impact, AI social impact, AI economic impact, AI job market impact, AI skills development, AI education, AI training, AI certification, AI career guidance, AI job opportunities, AI freelancing, AI consulting, AI entrepreneurship, OpenAI news, GPT updates, ChatGPT tutorials, Claude AI guides, Midjourney tips, DALL-E tutorials, Stable Diffusion guides, Runway ML tutorials, AI art creation, AI content creation, AI writing assistance, AI code generation, AI design automation, AI marketing automation, AI sales automation, AI customer service, AI analytics, AI data science, AI machine learning, AI deep learning, AI neural networks, AI natural language processing, AI computer vision, AI robotics, AI autonomous systems, AI IoT, AI edge computing, AI cloud computing, AI hardware, AI software, AI frameworks, AI libraries, AI tools comparison, AI alternatives, AI recommendations"
        canonicalUrl="/blog"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "AiToolCraft Blog",
          "description": "Latest insights on AI tools, reviews, and industry trends",
          "url": "https://aitoolcraft.com/blog",
          "publisher": {
            "@type": "Organization",
            "name": "AiToolCraft"
          }
        }}
      />
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            AiToolCraft Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Insights, reviews, and the latest trends in artificial intelligence and creative tools.
          </p>
        </div>

        {/* Blog header ad */}
        {_shouldShowAds() && (
          <div className="mb-8">
            <InContentAd 
              adClient={ADSENSE_CONFIG.publisherId} 
              adSlot={ADSENSE_CONFIG.adSlots.inContent} 
            />
          </div>
        )}

        {/* Category Filter */}
        <div className="mb-8 flex justify-center">
          <div className="modern-card backdrop-blur-oneui p-2 inline-flex">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white shadow-soft-md'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-700/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map(post => (
            <article key={post.id} className="modern-card backdrop-blur-oneui overflow-hidden group hover:scale-[1.02] transition-all duration-300">
              {/* Featured Image */}
              {post.featuredImage && (
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img 
                    src={post.featuredImage} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              
              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="mb-3">
                  <span className="badge-modern bg-primary-100/80 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 border border-primary-200/30 dark:border-primary-800/30 text-xs">
                    {post.category}
                  </span>
                </div>
                
                {/* Title */}
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {post.title}
                </h2>
                
                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                
                {/* Meta Information */}
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center text-white font-medium mr-2">
                      {post.author.charAt(0)}
                    </div>
                    <span>{post.author}</span>
                  </div>
                  <span>{formatDate(post.publishDate)}</span>
                </div>
                
                {/* Read More Button */}
                <Link 
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors text-sm font-medium"
                >
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="modern-card backdrop-blur-oneui p-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto text-gray-400 mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-4.5B4.875 8.25 1.5 11.625 1.5 15v2.625c0 .621.504 1.125 1.125 1.125h11.25c.621 0 1.125-.504 1.125-1.125Z" />
              </svg>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                No blog posts found in this category.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Blog;
