import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { SidebarAd, InContentAd } from '../components/GoogleAd';
import { ADSENSE_CONFIG, shouldShowAds as _shouldShowAds } from '../config/adsense';
import { blogPosts } from '../data/blogPosts';
import ReactMarkdown from 'react-markdown';

function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundPost = blogPosts.find(p => p.slug === slug);
    setPost(foundPost);
    setLoading(false);
  }, [slug]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <>
        <SEO 
          title="Loading... - AiToolCraft Blog"
          description="Loading blog post content..."
          canonicalUrl={`/blog/${slug}`}
        />
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-4xl mx-auto">
            <div className="modern-card backdrop-blur-oneui p-8 text-center">
              <div className="animate-pulse">
                <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded mb-4"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (!post) {
    return (
      <>
        <SEO 
          title="Blog Post Not Found - AiToolCraft"
          description="The blog post you're looking for doesn't exist or may have been moved."
          canonicalUrl={`/blog/${slug}`}
        />
        <div className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="modern-card backdrop-blur-oneui p-8">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Blog Post Not Found
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              The blog post you're looking for doesn't exist or may have been moved.
            </p>
            <Link 
              to="/blog"
              className="btn-modern inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all shadow-soft-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO 
        title={`${post.title} - AiToolCraft Blog`}
        description={post.excerpt}
        keywords={post.tags ? post.tags.join(', ') : 'AI tools, artificial intelligence'}
        canonicalUrl={`/blog/${post.slug}`}
        image={post.featuredImage}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "image": post.featuredImage,
          "author": {
            "@type": "Person",
            "name": post.author
          },
          "publisher": {
            "@type": "Organization", 
            "name": "AiToolCraft"
          },
          "datePublished": post.publishDate,
          "dateModified": post.publishDate,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://aitoolcraft.com/blog/${post.slug}`
          }
        }}
      />
      <div className="container mx-auto px-4 py-6">
      <div className="max-w-4xl mx-auto">
        {/* Back to Blog Link */}
        <div className="mb-6">
          <Link 
            to="/blog"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <article className="modern-card backdrop-blur-oneui overflow-hidden">
          {/* Featured Image */}
          {post.featuredImage && (
            <div className="aspect-w-16 aspect-h-9 overflow-hidden">
              <img 
                src={post.featuredImage} 
                alt={post.title}
                className="w-full h-64 md:h-80 object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          )}

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Category Badge */}
            <div className="mb-4">
              <span className="badge-modern bg-primary-100/80 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 border border-primary-200/30 dark:border-primary-800/30">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-600 dark:text-gray-400 mb-8 pb-6 border-b border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center mb-2 sm:mb-0">
                <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white font-medium mr-3">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">{post.author}</div>
                  <div className="text-xs">{formatDate(post.publishDate)}</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  {post.readTime}
                </span>
                {post.tags && post.tags.length > 0 && (
                  <div className="hidden sm:flex items-center space-x-1">
                    {post.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="badge-modern bg-gray-100/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Blog post top ad */}
            {_shouldShowAds() && (
              <div className="mb-8">
                <InContentAd 
                  adClient={ADSENSE_CONFIG.publisherId} 
                  adSlot={ADSENSE_CONFIG.adSlots.blogPost} 
                />
              </div>
            )}

            {/* Blog Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="blog-content text-gray-800 dark:text-gray-200 leading-relaxed">
                <ReactMarkdown
                  components={{
                    h1: ({children}) => <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">{children}</h1>,
                    h2: ({children}) => <h2 className="text-2xl font-bold mt-6 mb-3 text-gray-900 dark:text-white">{children}</h2>,
                    h3: ({children}) => <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-900 dark:text-white">{children}</h3>,
                    p: ({children}) => <p className="mb-4 leading-relaxed">{children}</p>,
                    ul: ({children}) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
                    ol: ({children}) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
                    li: ({children}) => <li className="mb-1">{children}</li>,
                    blockquote: ({children}) => (
                      <blockquote className="border-l-4 border-primary-500 pl-4 py-2 my-4 bg-gray-50 dark:bg-gray-800/50 rounded-r-lg">
                        {children}
                      </blockquote>
                    ),
                    code: ({children}) => (
                      <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">
                        {children}
                      </code>
                    ),
                    strong: ({children}) => <strong className="font-semibold text-gray-900 dark:text-white">{children}</strong>
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="badge-modern bg-gray-100/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300">
                      #{tag.toLowerCase().replace(/\s+/g, '')}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>

        {/* Related Posts or Call to Action */}
        <div className="mt-8 modern-card backdrop-blur-oneui p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Enjoyed this article?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Explore more AI tools and insights on our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link 
              to="/blog"
              className="btn-modern inline-flex items-center justify-center px-6 py-3 bg-gray-100/80 dark:bg-gray-700/80 text-gray-800 dark:text-gray-200 rounded-xl hover:bg-gray-200/80 dark:hover:bg-gray-600/80 transition-all shadow-soft-sm"
            >
              More Blog Posts
            </Link>
            <Link 
              to="/"
              className="btn-modern inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all shadow-soft-md"
            >
              Explore AI Tools
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default BlogPost;
