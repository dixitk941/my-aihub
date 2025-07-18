import React from 'react';

// Logo fallback handler
export const handleLogoError = (e, category) => {
  const defaultCategory = category || 'Other';
  const categoryMap = {
    'Text Generation': '/logos/text-generation.svg',
    'Image Generation': '/logos/image-generation.svg',
    'Voice Generation': '/logos/voice-generation.svg',
    'Video Generation': '/logos/video-generation.svg',
    'Code Generation': '/logos/code-generation.svg',
    'Audio Generation': '/logos/voice-generation.svg',
    'Music Generation': '/logos/voice-generation.svg',
    'Chatbots': '/logos/text-generation.svg',
    'Writing': '/logos/text-generation.svg',
    'Research': '/logos/other.svg',
    'Design': '/logos/image-generation.svg',
    'Productivity': '/logos/other.svg',
    'Other': '/logos/other.svg'
  };
  
  // Set the fallback logo based on category
  e.target.src = categoryMap[defaultCategory] || categoryMap['Other'];
  e.target.classList.add('fallback-logo');
};

// Normalize company name to create consistent logo paths
export const normalizeCompanyName = (name) => {
  return name.toLowerCase().replace(/[^a-z0-9]/g, '');
};
