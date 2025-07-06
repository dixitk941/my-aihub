# Quick AdSense Setup for Publisher ID: ca-pub-2206627570123724

## ✅ Completed:
- Publisher ID configured in all files
- AdSense script added to index.html
- Ad components integrated on all pages

## 🔄 Next Steps:

### 1. Create Ad Units in Google AdSense Dashboard

Go to your [Google AdSense dashboard](https://www.google.com/adsense/) and create these ad units:

#### Required Ad Units:
1. **Header Ad** (728x90 Leaderboard)
   - Name: "AiToolCraft Header"
   - Size: 728x90 or Responsive
   - Copy the Ad Slot ID

2. **Mobile Ad** (320x50 Banner)
   - Name: "AiToolCraft Mobile"
   - Size: 320x50 or Responsive
   - Copy the Ad Slot ID

3. **In-Content Ad** (Responsive)
   - Name: "AiToolCraft Content"
   - Size: Responsive
   - Copy the Ad Slot ID

4. **Blog Post Ad** (Article)
   - Name: "AiToolCraft Blog"
   - Size: Responsive/Article
   - Copy the Ad Slot ID

5. **Tool Detail Ad** (300x250 Rectangle)
   - Name: "AiToolCraft Tool"
   - Size: 300x250 or Responsive
   - Copy the Ad Slot ID

6. **Comparison Ad** (Responsive)
   - Name: "AiToolCraft Compare"
   - Size: Responsive
   - Copy the Ad Slot ID

7. **Sidebar Ad** (300x250 Rectangle)
   - Name: "AiToolCraft Sidebar"
   - Size: 300x250
   - Copy the Ad Slot ID

### 2. Update Ad Slot IDs

After creating ad units, edit `src/config/adsense.js` and replace the slot IDs:

```javascript
adSlots: {
  header: "YOUR_HEADER_SLOT_ID",        // Replace with actual slot ID
  sidebar: "YOUR_SIDEBAR_SLOT_ID",      // Replace with actual slot ID  
  mobile: "YOUR_MOBILE_SLOT_ID",        // Replace with actual slot ID
  inContent: "YOUR_IN_CONTENT_SLOT_ID", // Replace with actual slot ID
  blogPost: "YOUR_BLOG_POST_SLOT_ID",   // Replace with actual slot ID
  toolDetail: "YOUR_TOOL_DETAIL_SLOT_ID", // Replace with actual slot ID
  comparison: "YOUR_COMPARISON_SLOT_ID", // Replace with actual slot ID
}
```

### 3. Test Your Setup

1. Start your development server: `npm run dev`
2. Visit your site at `http://localhost:5173`
3. Check browser console for AdSense loading
4. Look for placeholder ad spaces

### 4. Deploy & Submit for Review

1. Build your site: `npm run build`
2. Deploy to your production domain
3. Submit your site for AdSense review
4. Wait for approval (typically 1-4 weeks)

## 📊 Expected Revenue Zones:

- **High Traffic Pages**: Home, Popular Tools
- **High Engagement**: Tool Comparison, Blog Posts  
- **Best Performing Ads**: Above-the-fold, In-content
- **Mobile Optimization**: Responsive ads adapt automatically

## 🔍 Current Ad Placements:

- **Home Page**: Header + in-content every 6 tools
- **Compare Page**: Header ad after title
- **Blog Pages**: Header ad + in-post ads
- **Tool Details**: In-content after tool info
- **All Pages**: Mobile-optimized versions

## ⚠️ Important Notes:

- Never click your own ads
- Ensure high-quality, original content
- Maintain good user experience
- Monitor AdSense policies
- Check analytics regularly

Your site is ready for monetization! 🚀
