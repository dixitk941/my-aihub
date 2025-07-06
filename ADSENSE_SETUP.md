# Google AdSense Integration Guide

This guide explains how to set up Google AdSense on your AiToolCraft website to start earning revenue from ads.

## Setup Instructions

### 1. Create Google AdSense Account

1. Go to [Google AdSense](https://www.google.com/adsense/)
2. Sign up with your Google account
3. Add your website URL (`https://aitoolcraft.com`)
4. Complete the verification process

### 2. Get Your Publisher ID

1. In your AdSense dashboard, find your Publisher ID
2. It looks like `ca-pub-1234567890123456`
3. Copy this ID

### 3. Configure Your Site

1. Open `src/config/adsense.js`
2. Replace `ca-pub-XXXXXXXXXXXXXXXXX` with your actual Publisher ID
3. Update the ad slot IDs (see step 4)

### 4. Create Ad Units

In your AdSense dashboard, create the following ad units:

#### Required Ad Units:
- **Header Ad**: 728x90 leaderboard for desktop header
- **Mobile Ad**: 320x50 banner for mobile header  
- **Sidebar Ad**: 300x250 rectangle for sidebar
- **In-Content Ad**: Responsive display ad for content
- **Blog Post Ad**: Article content ad
- **Tool Detail Ad**: Tool page content ad
- **Comparison Ad**: Comparison page ad

#### For each ad unit:
1. Click "Ad units" in AdSense
2. Click "Create ad unit"
3. Choose "Display ads"
4. Set the size (responsive recommended)
5. Copy the Ad Slot ID
6. Update `src/config/adsense.js` with the slot ID

### 5. Update Configuration

Edit `src/config/adsense.js`:

```javascript
export const ADSENSE_CONFIG = {
  publisherId: "ca-pub-YOUR-ACTUAL-ID-HERE",
  adSlots: {
    header: "YOUR-HEADER-SLOT-ID",
    sidebar: "YOUR-SIDEBAR-SLOT-ID", 
    mobile: "YOUR-MOBILE-SLOT-ID",
    inContent: "YOUR-IN-CONTENT-SLOT-ID",
    blogPost: "YOUR-BLOG-POST-SLOT-ID",
    toolDetail: "YOUR-TOOL-DETAIL-SLOT-ID",
    comparison: "YOUR-COMPARISON-SLOT-ID",
  }
};
```

### 6. Update HTML

Edit `index.html` and replace the AdSense script URL:

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR-ACTUAL-ID-HERE" crossorigin="anonymous"></script>
```

### 7. AdSense Approval

1. Deploy your site with ads integrated
2. Submit your site for AdSense review
3. Wait for approval (can take a few days to weeks)
4. Once approved, ads will start showing

## Ad Placements

### Home Page
- Header leaderboard ad (desktop)
- Mobile banner ad
- In-content ads between tool cards (every 6 tools)

### Compare Page  
- In-content ad after header

### Blog Page
- In-content ad after header

### Blog Post Page
- In-content ad after post meta information

### Tool Detail Page
- In-content ad after tool basic info

## Revenue Optimization Tips

### 1. Ad Placement
- Above the fold ads perform better
- In-content ads have higher engagement
- Don't oversaturate with ads

### 2. Ad Sizes
- Responsive ads adapt to all devices
- 728x90 and 300x250 are high-performing sizes
- Mobile-optimized ads for mobile traffic

### 3. Content Quality
- High-quality content attracts better ads
- Regular updates improve ad relevance
- Good user experience = better ad performance

### 4. Traffic Sources
- Organic search traffic converts well
- Social media traffic can vary
- Direct traffic often has good engagement

## Testing & Development

### Development Mode
- Ads are disabled in development by default
- Change `testMode` in config to enable test ads
- Never click your own ads in production

### A/B Testing
- Test different ad placements
- Monitor performance in AdSense dashboard
- Adjust based on revenue and user experience

## Compliance

### Privacy Policy
- Update your privacy policy to mention ads and cookies
- Include information about data collection
- Comply with GDPR/CCPA if applicable

### Content Guidelines
- Ensure content meets AdSense policies
- Avoid prohibited content
- Maintain family-friendly content for better ad rates

## Monitoring Performance

### AdSense Dashboard
- Monitor daily earnings
- Check click-through rates (CTR)
- Analyze top-performing content

### Google Analytics
- Track ad performance
- Monitor user behavior with ads
- Identify optimization opportunities

## Troubleshooting

### Ads Not Showing
1. Check if AdSense account is approved
2. Verify Publisher ID is correct
3. Ensure ad slot IDs are valid
4. Check browser ad blockers
5. Verify site is indexed by Google

### Low Revenue
1. Improve content quality
2. Increase website traffic
3. Optimize ad placements
4. Check for policy violations
5. Consider different ad formats

## Important Notes

- Never click your own ads
- Don't encourage users to click ads
- Maintain good user experience
- Monitor for policy violations
- Keep content fresh and relevant

## Support

For issues:
1. Check AdSense Help Center
2. Use AdSense Community forums
3. Contact AdSense support if needed

Remember: AdSense approval can take time, and earnings depend on traffic quality, content relevance, and user engagement.
