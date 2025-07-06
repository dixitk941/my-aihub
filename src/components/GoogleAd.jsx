import { useEffect } from 'react';

const GoogleAd = ({ 
  adClient = "ca-pub-XXXXXXXXXXXXXXXXX", // Replace with your AdSense publisher ID
  adSlot,
  adFormat = "auto",
  fullWidthResponsive = true,
  style = { display: 'block' },
  className = ""
}) => {
  useEffect(() => {
    // Load AdSense script if not already loaded
    if (!window.adsbygoogle) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClient}`;
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
    }

    // Push ad to AdSense queue
    try {
      if (window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, [adClient]);

  return (
    <div className={`adsense-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive}
      ></ins>
    </div>
  );
};

// Predefined ad components for common placements
export const HeaderAd = ({ adClient, adSlot }) => (
  <GoogleAd
    adClient={adClient}
    adSlot={adSlot}
    adFormat="leaderboard"
    style={{ display: 'block', width: '728px', height: '90px' }}
    className="mx-auto my-4 hidden md:block"
  />
);

export const SidebarAd = ({ adClient, adSlot }) => (
  <GoogleAd
    adClient={adClient}
    adSlot={adSlot}
    adFormat="rectangle"
    style={{ display: 'block', width: '300px', height: '250px' }}
    className="mx-auto my-4"
  />
);

export const MobileAd = ({ adClient, adSlot }) => (
  <GoogleAd
    adClient={adClient}
    adSlot={adSlot}
    adFormat="banner"
    style={{ display: 'block', width: '320px', height: '50px' }}
    className="mx-auto my-4 md:hidden"
  />
);

export const InContentAd = ({ adClient, adSlot }) => (
  <GoogleAd
    adClient={adClient}
    adSlot={adSlot}
    adFormat="fluid"
    style={{ display: 'block' }}
    className="my-6 mx-auto max-w-full"
  />
);

export const BottomAd = ({ adClient, adSlot }) => (
  <GoogleAd
    adClient={adClient}
    adSlot={adSlot}
    adFormat="banner"
    style={{ display: 'block', width: '728px', height: '90px' }}
    className="mx-auto my-4"
  />
);

export default GoogleAd;
