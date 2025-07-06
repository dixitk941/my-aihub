// AdSense Configuration
// Replace these with your actual Google AdSense details

export const ADSENSE_CONFIG = {
  // Your Google AdSense publisher ID (replace with your actual ID)
  publisherId: "ca-pub-2206627570123724", // Your actual Publisher ID
  
  // Ad slot IDs for different placements (create these in your AdSense account)
  adSlots: {
    header: "XXXXXXXXXX", // Header leaderboard ad
    sidebar: "XXXXXXXXXX", // Sidebar rectangle ad  
    mobile: "XXXXXXXXXX", // Mobile banner ad
    inContent: "XXXXXXXXXX", // In-content ad
    bottom: "XXXXXXXXXX", // Bottom banner ad
    blogPost: "XXXXXXXXXX", // Blog post content ad
    toolDetail: "XXXXXXXXXX", // Tool detail page ad
    comparison: "XXXXXXXXXX", // Comparison page ad
  },
  
  // Ad settings
  settings: {
    autoAds: true, // Enable auto ads
    responsiveAds: true, // Enable responsive ads
    testMode: true, // Enable ads in development for testing
  }
};

// Helper function to check if ads should be displayed
export const shouldShowAds = () => {
  // Show ads in development for testing and always in production
  // Add any other conditions where ads shouldn't be shown here
  return true;
};

// Helper function to load AdSense script
export const loadAdSenseScript = () => {
  return new Promise((resolve, reject) => {
    if (window.adsbygoogle) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CONFIG.publisherId}`;
    script.crossOrigin = "anonymous";
    
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load AdSense script'));
    
    document.head.appendChild(script);
  });
};
