#!/usr/bin/env node

/**
 * Build script to generate sitemap before deployment
 * Usage: node scripts/generate-sitemap.js
 */

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { writeFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// Simple sitemap generation without imports to avoid module issues
const currentDate = new Date().toISOString().split('T')[0];
const baseUrl = 'https://aitoolcraft.com';

// Manually define the sitemap structure for build script
let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
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
  
  <!-- Blog Posts -->
  <url>
    <loc>${baseUrl}/blog/top-10-ai-tools-creators-2025</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <image:image>
      <image:loc>${baseUrl}/blog-images/top-10-ai-tools-2025.svg</image:loc>
      <image:title>Top 10 AI Tools for Creators in 2025</image:title>
    </image:image>
  </url>
  
  <!-- AI Tool Detail Pages (IDs 1-50) -->`;

// Add AI tool pages dynamically
for (let i = 1; i <= 50; i++) {
  sitemapContent += `
  <url>
    <loc>${baseUrl}/tool/${i}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
}

const finalSitemapContent = sitemapContent + `
  
</urlset>`;

// Write to public directory
const outputPath = join(rootDir, 'public', 'sitemap.xml');
writeFileSync(outputPath, finalSitemapContent, 'utf8');

console.log('✅ Sitemap generated successfully!');
console.log(`📍 Location: ${outputPath}`);
console.log(`🌐 Base URL: ${baseUrl}`);

// Count URLs
const urlCount = (finalSitemapContent.match(/<url>/g) || []).length;
console.log(`📊 Total URLs: ${urlCount}`);
