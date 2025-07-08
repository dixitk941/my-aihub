// AdSense Configuration
// Replace these with your actual Google AdSense details

export const ADSENSE_CONFIG = {
  // Your Google AdSense publisher ID (replace with your actual ID)
  publisherId: "ca-pub-2206627570123724", // Your actual Publisher ID
  
  // Ad slot IDs for different placements (create these in your AdSense account)
  adSlots: {
    header: "8616546385", // Header leaderboard ad
    sidebar: "1427462053", // Sidebar rectangle ad  
    mobile: "2714345388", // Mobile banner ad
    inContent: "9785304706", // In-content ad
    bottom: "5779787358", // Bottom banner ad
    blogPost: "1840662010", // Blog post content ad
    toolDetail: "7427470016", // Tool detail page ad
    comparison: "4801304675", // Comparison page ad
    display: "3488421337", // Display ad slot
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
