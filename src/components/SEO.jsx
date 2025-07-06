import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "AiToolCraft - Master AI Tools for Creative Excellence",
  description = "Discover, compare, and master the best AI tools for creators, developers, and innovators. Comprehensive reviews, comparisons, and insights for 2025.",
  keywords = "AI tools, artificial intelligence, AI software, machine learning tools, AI applications, best AI tools 2025, AI tools for business, AI productivity tools, AI writing tools, AI image generators, AI video tools, AI chatbots, AI automation tools, deep learning software, neural networks, natural language processing, computer vision tools, AI development platforms, AI APIs, AI frameworks, creative AI tools, AI for content creation, AI marketing tools, AI analytics, AI data analysis, AI code generators, AI design tools, AI music generators, AI voice tools, AI translation tools, AI research tools, enterprise AI solutions, AI comparison, AI reviews, AI directory, AI marketplace, generative AI, conversational AI, AI assistants, OpenAI, GPT, ChatGPT, Claude, Midjourney, DALL-E, Stable Diffusion, Runway ML, Jasper AI, Copy.ai, Notion AI, Canva AI, Adobe AI, Google AI, Microsoft AI, AWS AI, IBM Watson, Anthropic, Hugging Face, TensorFlow, PyTorch, AI SaaS, AI cloud services, AI models, AI algorithms, AI datasets, AI training, AI deployment, AI monitoring, AI ethics, AI safety, AI governance, AI compliance, AI adoption, AI transformation, AI strategy, AI implementation, AI consulting, AI development, AI engineering, AI architecture, AI infrastructure, AI scalability, AI performance, AI accuracy, AI efficiency, AI cost optimization, AI ROI, AI business value, AI competitive advantage, AI innovation, AI research and development, free AI tools, paid AI tools, AI tool reviews, AI tool comparison, AI tool directory, AI tool marketplace, AI tool catalog, AI tool database, AI tool collection",
  canonicalUrl,
  ogImage = "/aitoolcraft-logo.svg",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData,
  noIndex = false
}) => {
  const siteUrl = "https://aitoolcraft.com"; // Replace with your actual domain
  const fullUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AiToolCraft",
    "description": description,
    "url": siteUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${siteUrl}/aitoolcraft-logo.svg`,
      "width": 240,
      "height": 240
    },
    "sameAs": [
      "https://twitter.com/aitoolcraft",
      "https://linkedin.com/company/aitoolcraft"
    ],
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="AiToolCraft Team" />
      <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow"} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:alt" content="AiToolCraft Logo" />
      <meta property="og:site_name" content="AiToolCraft" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content="AiToolCraft Logo" />
      <meta name="twitter:site" content="@aitoolcraft" />
      <meta name="twitter:creator" content="@aitoolcraft" />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#4f46e5" />
      <meta name="msapplication-TileColor" content="#4f46e5" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="AiToolCraft" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>

      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
};

export default SEO;





