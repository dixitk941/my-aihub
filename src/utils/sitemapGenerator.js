import { aiTools } from '../data/aiTools.js';
import { blogPosts } from '../data/blogPosts.js';

/**
 * Generates a sitemap.xml file content dynamically based on current data
 * @param {string} baseUrl - The base URL of the website
 * @returns {string} XML sitemap content
 */
export function generateSitemap(baseUrl = 'https://aitoolcraft.com') {
  const currentDate = new Date().toISOString().split('T')[0];
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  
  <!-- Main Pages -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/compare</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Blog Posts -->`;

  // Add blog posts dynamically
  blogPosts.forEach(post => {
    sitemap += `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.publishDate || currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>`;
    
    if (post.featuredImage) {
      sitemap += `
    <image:image>
      <image:loc>${baseUrl}${post.featuredImage}</image:loc>
      <image:title>${post.title}</image:title>
    </image:image>`;
    }
    
    sitemap += `
  </url>`;
  });

  sitemap += `
  
  <!-- AI Tool Detail Pages -->`;

  // Add AI tools dynamically
  aiTools.forEach(tool => {
    sitemap += `
  <url>
    <loc>${baseUrl}/tool/${tool.id}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
  });

  sitemap += `
  
</urlset>`;

  return sitemap;
}

/**
 * Saves the generated sitemap to a file (for build processes)
 * @param {string} outputPath - Path where to save the sitemap
 * @param {string} baseUrl - The base URL of the website
 */
export async function saveSitemap(outputPath = './public/sitemap.xml', baseUrl = 'https://aitoolcraft.com') {
  const fs = await import('fs');
  const path = await import('path');
  
  const sitemapContent = generateSitemap(baseUrl);
  const fullPath = path.resolve(outputPath);
  
  fs.writeFileSync(fullPath, sitemapContent, 'utf8');
  console.log(`Sitemap generated and saved to: ${fullPath}`);
}

/**
 * Gets sitemap statistics
 * @returns {object} Statistics about the sitemap
 */
export function getSitemapStats() {
  return {
    totalUrls: 3 + blogPosts.length + aiTools.length, // 3 main pages + dynamic content
    blogPosts: blogPosts.length,
    aiTools: aiTools.length,
    mainPages: 3
  };
}

// Export for use in build scripts
export default generateSitemap;
