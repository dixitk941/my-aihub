export const aiTools = [
  // Text Generation / Chatbots
  {
    id: 1,
    name: "ChatGPT",
    description: "A conversational AI by OpenAI that can generate human-like text responses and assist with various tasks.",
    category: "Text Generation",
    link: "https://chat.openai.com",
    api: true,
    free: true,
    creator: "OpenAI",
    logo: "https://static.vecteezy.com/system/resources/previews/021/495/996/original/chatgpt-openai-logo-icon-free-png.png",
    releaseDate: "November 2022",
    features: [
      "Generates human-like text responses",
      "Answers follow-up questions",
      "Admits mistakes and challenges incorrect premises",
      "Available in web interface and mobile app",
      "Supports various plugins and extensions"
    ],
    pricing: [
      {
        plan: "Free",
        cost: "$0",
        description: "Basic access with GPT-3.5"
      },
      {
        plan: "ChatGPT Plus",
        cost: "$20/month",
        description: "Priority access, faster response times, and access to GPT-4"
      }
    ],
    useCases: [
      "Content creation and brainstorming",
      "Answering questions and research assistance",
      "Language translation and summarization",
      "Code explanation and generation",
      "Learning and tutoring"
    ]
  },
  {
    id: 2,
    name: "Claude",
    description: "An AI assistant designed to be helpful, harmless, and honest with a focus on safety and human values.",
    category: "Text Generation",
    link: "https://claude.ai",
    api: true,
    free: true,
    creator: "Anthropic",
    logo: "https://static.vecteezy.com/system/resources/previews/024/555/389/non_2x/anthropic-claude-icon-logo-symbol-free-vector.jpg",
    releaseDate: "March 2023",
    features: [
      "Long context window (up to 200K tokens)",
      "High accuracy in responses",
      "File upload and analysis",
      "Constitutional AI approach for safety",
      "Follows instructions with nuance"
    ],
    pricing: [
      {
        plan: "Free",
        cost: "$0",
        description: "Limited access to Claude 2.1"
      },
      {
        plan: "Claude Pro",
        cost: "$20/month",
        description: "Priority access, 5x more usage, and larger file uploads"
      }
    ],
    useCases: [
      "Document analysis and summarization",
      "Content creation and editing",
      "Research assistance",
      "Customer support",
      "Educational assistance"
    ]
  },
  {
    id: 3,
    name: "Gemini",
    description: "Google's multimodal AI system that can understand and combine different types of information including text, code, audio, images, and video.",
    category: "Text Generation",
    link: "https://gemini.google.com",
    api: true,
    free: true,
    creator: "Google",
    logo: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Build_with_gemini_1.width-1000.format-webp.webp",
    releaseDate: "December 2023",
    features: [
      "Multimodal capabilities (text, images, audio)",
      "Integration with Google services",
      "Code understanding and generation",
      "Real-time information access"
    ],
    pricing: [
      {
        plan: "Free",
        cost: "$0",
        description: "Basic access to Gemini"
      },
      {
        plan: "Gemini Advanced",
        cost: "$19.99/month",
        description: "Access to Gemini Ultra model with advanced capabilities"
      }
    ],
    useCases: [
      "Personal assistance",
      "Programming and coding help",
      "Creative content generation",
      "Research and information gathering",
      "Education and learning"
    ]
  },
  {
    id: 4,
    name: "Bing Chat",
    description: "Microsoft's AI-powered chat tool integrated with Bing search engine, powered by GPT-4.",
    category: "Text Generation",
    link: "https://www.bing.com/chat",
    api: false,
    free: true,
    creator: "Microsoft",
    logo: "https://www.bing.com/rp/i7SjNT_NxZhYvgc21N-YZUvHFzI.png",
    releaseDate: "February 2023",
    features: [
      "Real-time internet access for up-to-date information",
      "Image generation capabilities",
      "Integration with Microsoft Edge browser",
      "Citation of sources"
    ],
    useCases: [
      "Web searches with conversational interface",
      "Research with real-time information",
      "Trip planning and recommendations",
      "Quick fact-checking"
    ]
  },
  {
    id: 5,
    name: "Perplexity AI",
    description: "An AI-powered answer engine that provides information with cited sources from around the web.",
    category: "Text Generation",
    link: "https://www.perplexity.ai",
    api: true,
    free: true,
    creator: "Perplexity AI",
    logo: "https://cdn-1.webcatalog.io/catalog/perplexity-ai/perplexity-ai-icon-filled-256.png?v=1687864535229",
    releaseDate: "August 2022",
    features: [
      "Real-time web search",
      "Comprehensive answers with citations",
      "Follows conversation context",
      "Multimodal capabilities"
    ],
    pricing: [
      {
        plan: "Free",
        cost: "$0",
        description: "Basic access with limited queries per day"
      },
      {
        plan: "Pro",
        cost: "$20/month",
        description: "Unlimited queries, premium models, and advanced features"
      }
    ],
    useCases: [
      "Academic research",
      "Fact checking with sources",
      "Learning about complex topics",
      "Staying up-to-date with current events"
    ]
  },
  {
    id: 6,
    name: "Jasper",
    description: "AI content generator that creates marketing copy, emails, and social media posts optimized for engagement.",
    category: "Text Generation",
    link: "https://www.jasper.ai",
    api: true,
    free: false,
    creator: "Jasper",
    logo: "https://www.jasper.ai/hubfs/jasper-2023/brand/jasper-favicon.svg",
    releaseDate: "2021",
    features: [
      "Marketing-focused content generation",
      "Templates for different content types",
      "SEO optimization features",
      "Brand voice customization",
      "Team collaboration tools"
    ],
    pricing: [
      {
        plan: "Creator",
        cost: "$39/month",
        description: "Basic content generation for individuals"
      },
      {
        plan: "Teams",
        cost: "$99/month",
        description: "Advanced features for marketing teams"
      }
    ],
    useCases: [
      "Social media content creation",
      "Blog and article writing",
      "Email marketing campaigns",
      "Ad copy generation",
      "Product descriptions"
    ]
  },
  {
    id: 7,
    name: "Copy.ai",
    description: "AI-powered copywriting tool designed to generate marketing copy, social media content, and more.",
    category: "Text Generation",
    link: "https://www.copy.ai",
    api: true,
    free: true,
    creator: "Copy.ai",
    logo: "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_8a31c5048379dd7ec4b1f74e913b0233/copy-ai.png",
    features: [
      "Multiple content templates",
      "Blog idea generation",
      "Email sequence generation",
      "Supports multiple languages"
    ],
    pricing: [
      {
        plan: "Free",
        cost: "$0",
        description: "Limited access with 2,000 words per month"
      },
      {
        plan: "Pro",
        cost: "$36/month",
        description: "Unlimited words and priority features"
      }
    ],
    useCases: [
      "Marketing copy for websites",
      "Social media posts",
      "Email newsletters",
      "Product descriptions"
    ]
  },
  
  // Image Generation
  {
    id: 8,
    name: "DALL-E",
    description: "An AI system that creates detailed and realistic images from textual descriptions.",
    category: "Image Generation",
    link: "https://openai.com/dall-e-3",
    api: true,
    free: false,
    creator: "OpenAI",
    logo: "https://cdn.icon-icons.com/icons2/3913/PNG/512/dalle_logo_icon_248578.png",
    releaseDate: "January 2021 (DALL-E), April 2022 (DALL-E 2), October 2023 (DALL-E 3)",
    features: [
      "Creates images from text descriptions",
      "Generates variations of existing images",
      "Edits specific parts of images based on instructions",
      "Higher resolution output with DALL-E 3",
      "Better text understanding and rendering"
    ],
    pricing: [
      {
        plan: "Pay-as-you-go",
        cost: "Starting at $0.040 per image (1024×1024)",
        description: "Credits system with volume discounts"
      }
    ],
    useCases: [
      "Marketing and advertising visuals",
      "Product concept visualization",
      "Creative inspiration for artists",
      "Educational illustrations",
      "Custom artwork generation"
    ]
  },
  {
    id: 9,
    name: "Midjourney",
    description: "An AI art generator that creates highly detailed and artistic images from natural language descriptions.",
    category: "Image Generation",
    link: "https://www.midjourney.com",
    api: true,
    free: false,
    creator: "Midjourney",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlLfLMD_bkCN7GgjDKSoDXBvKCvVF_kc0WYLP_RKYzEA&s",
    releaseDate: "March 2022",
    features: [
      "High artistic quality output",
      "Detailed style control",
      "Community-based Discord interface",
      "Support for variations and iterations",
      "Custom aspect ratios"
    ],
    pricing: [
      {
        plan: "Basic",
        cost: "$10/month",
        description: "Basic plan with limited usage"
      },
      {
        plan: "Standard",
        cost: "$30/month",
        description: "Standard tier with more GPU time"
      },
      {
        plan: "Pro",
        cost: "$60/month",
        description: "Professional tier with maximum GPU time"
      }
    ],
    useCases: [
      "Concept art for games and film",
      "Illustration for books and media",
      "Marketing visuals",
      "Creative art exploration",
      "Product visualization"
    ]
  },
  {
    id: 10,
    name: "Stable Diffusion",
    description: "An open-source AI image generation model that creates detailed images from text descriptions.",
    category: "Image Generation",
    link: "https://stability.ai",
    api: true,
    free: true,
    creator: "Stability AI",
    logo: "https://upscayl.github.io/src/assets/images/stable-diffusion.png",
    releaseDate: "August 2022",
    features: [
      "Open-source and self-hostable",
      "Text-to-image generation",
      "Image-to-image editing",
      "Fine-tuning capabilities",
      "Community extensions and plugins"
    ],
    pricing: [
      {
        plan: "Self-hosted",
        cost: "Free",
        description: "Run locally with your own hardware"
      },
      {
        plan: "API",
        cost: "Varies",
        description: "Commercial API access through Stability AI"
      }
    ],
    useCases: [
      "Creative artwork",
      "Design prototyping",
      "Concept visualization",
      "Custom model training",
      "Research and experimentation"
    ]
  },
  {
    id: 11,
    name: "Adobe Firefly",
    description: "Adobe's family of creative generative AI models for image, text, vector, and video generation.",
    category: "Image Generation",
    link: "https://www.adobe.com/products/firefly.html",
    api: true,
    free: true,
    creator: "Adobe",
    logo: "https://www.adobe.com/content/dam/cc/icons/firefly.svg",
    releaseDate: "March 2023",
    features: [
      "Integration with Adobe Creative Cloud",
      "Commercial usage rights",
      "Text-to-image generation",
      "Style transfer",
      "Generative fill and expand"
    ],
    pricing: [
      {
        plan: "Free tier",
        cost: "$0",
        description: "Limited generations and features"
      },
      {
        plan: "Firefly Add-on",
        cost: "$4.99/month",
        description: "More generations and premium features"
      },
      {
        plan: "Creative Cloud Bundle",
        cost: "Varies",
        description: "Included with certain Creative Cloud plans"
      }
    ],
    useCases: [
      "Commercial design work",
      "Professional photo editing",
      "Marketing materials creation",
      "Creative asset generation",
      "Design prototyping"
    ]
  },
  {
    id: 12,
    name: "Leonardo.AI",
    description: "AI-powered platform for generating high-quality images, textures, and assets for creative professionals and game developers.",
    category: "Image Generation",
    link: "https://leonardo.ai",
    api: true,
    free: true,
    creator: "Leonardo.AI",
    logo: "https://leonardo.ai/favicon/favicon-32x32.png",
    features: [
      "Game-focused asset generation",
      "3D texture creation",
      "Character design tools",
      "Canvas for advanced editing",
      "Community sharing features"
    ],
    pricing: [
      {
        plan: "Free",
        cost: "$0",
        description: "Limited generations with watermark"
      },
      {
        plan: "Unlimited",
        cost: "$10/month",
        description: "More daily generations and features"
      },
      {
        plan: "Professional",
        cost: "$24/month",
        description: "Priority access and advanced features"
      }
    ],
    useCases: [
      "Game asset creation",
      "Character design",
      "Environmental art",
      "Concept art",
      "Digital art production"
    ]
  },
  
  // Video Generation
  {
    id: 13,
    name: "Synthesia",
    description: "AI video generation platform that creates videos with virtual avatars speaking from text input.",
    category: "Video Generation",
    link: "https://www.synthesia.io",
    api: true,
    free: false,
    creator: "Synthesia",
    logo: "https://www.synthesia.io/favicon.ico",
    releaseDate: "2019",
    features: [
      "100+ AI avatars in multiple languages",
      "Custom AI avatar creation",
      "Simple text-to-video interface",
      "Built-in templates and scenes",
      "Screen recording integration"
    ],
    pricing: [
      {
        plan: "Personal",
        cost: "$30/month",
        description: "10 minutes of video per month, 50+ avatars"
      },
      {
        plan: "Enterprise",
        cost: "Custom pricing",
        description: "Advanced features, custom avatars, API access"
      }
    ],
    useCases: [
      "Corporate training videos",
      "Product demonstrations",
      "Multilingual marketing",
      "Educational content",
      "Internal communications"
    ]
  },
  {
    id: 14,
    name: "Runway",
    description: "Creative suite powered by AI for video editing, generation, and visual effects.",
    category: "Video Generation",
    link: "https://runwayml.com",
    api: true,
    free: false,
    creator: "Runway AI",
    logo: "https://runwayml.com/favicon.ico",
    releaseDate: "2018",
    features: [
      "Gen-2 text-to-video model",
      "AI video editing tools",
      "Green screen and background removal",
      "Motion tracking and generation",
      "Text-to-image integration"
    ],
    pricing: [
      {
        plan: "Free",
        cost: "$0",
        description: "Limited access with watermark"
      },
      {
        plan: "Standard",
        cost: "$15/month",
        description: "Basic features for beginners"
      },
      {
        plan: "Pro",
        cost: "$35/month",
        description: "Advanced features for professionals"
      }
    ],
    useCases: [
      "Film and video production",
      "Special effects creation",
      "Marketing and advertising",
      "Social media content",
      "Creative projects"
    ]
  },
  {
    id: 15,
    name: "Pika Labs",
    description: "AI video generation platform that turns text or images into high-quality videos.",
    category: "Video Generation",
    link: "https://pika.art",
    api: true,
    free: true,
    creator: "Pika Labs",
    logo: "https://pika.art/logo.png",
    releaseDate: "2023",
    features: [
      "Text-to-video generation",
      "Image-to-video animation",
      "Video styling and editing",
      "Character and scene generation",
      "Visual effects application"
    ],
    pricing: [
      {
        plan: "Free",
        cost: "$0",
        description: "Limited generations and resolution"
      },
      {
        plan: "Pika Pro",
        cost: "$8/month",
        description: "More generations and higher quality"
      }
    ],
    useCases: [
      "Short-form social media content",
      "Creative storytelling",
      "Marketing videos",
      "Visual effects",
      "Animating still images"
    ]
  },
  {
    id: 16,
    name: "Descript",
    description: "All-in-one audio and video editing software with AI-powered tools for transcription, editing, and generation.",
    category: "Video Generation",
    link: "https://www.descript.com",
    api: false,
    free: true,
    creator: "Descript",
    logo: "https://assets-global.website-files.com/6421f58b0ed9c87b997f3006/6421fef6ce42ed147d50d876_Frame%20410157454.svg",
    releaseDate: "2017",
    features: [
      "Text-based video editing",
      "Automatic transcription",
      "AI voice cloning (Overdub)",
      "Screen recording",
      "Collaborative editing"
    ],
    pricing: [
      {
        plan: "Free",
        cost: "$0",
        description: "Basic features, limited recording time"
      },
      {
        plan: "Creator",
        cost: "$15/month",
        description: "More recording time and features"
      },
      {
        plan: "Pro",
        cost: "$30/month",
        description: "Full access to all features"
      },
      {
        plan: "Enterprise",
        cost: "Custom",
        description: "Team features and dedicated support"
      }
    ],
    useCases: [
      "Podcast production",
      "Video content creation",
      "Webinar editing",
      "Interview transcription",
      "Tutorial creation"
    ]
  },
  {
    id: 17,
    name: "ElevenLabs",
    description: "AI voice technology platform offering ultra-realistic text-to-speech and voice cloning capabilities.",
    category: "Voice Generation",
    link: "https://elevenlabs.io",
    api: true,
    free: true,
    creator: "ElevenLabs",
    logo: "https://images.prismic.io/elevenlabs-web/30bcaa55-e2ad-4299-92fd-f341bae08b51_eleven-labs-logo.svg?auto=compress,format",
    releaseDate: "January 2023",
    features: [
      "Ultra-realistic text-to-speech",
      "Voice cloning technology",
      "Emotion and tone control",
      "Support for 29+ languages",
      "Voice design tools"
    ],
    pricing: [
      {
        plan: "Free",
        cost: "$0",
        description: "10,000 characters per month"
      },
      {
        plan: "Starter",
        cost: "$5/month",
        description: "30,000 characters per month"
      },
      {
        plan: "Creator",
        cost: "$22/month",
        description: "100,000 characters per month and voice cloning"
      },
      {
        plan: "Pro",
        cost: "$99/month",
        description: "500,000 characters per month and advanced features"
      }
    ],
    useCases: [
      "Audiobook narration",
      "Character voices for games",
      "Video narration and dubbing",
      "Podcast production",
      "Accessibility tools"
    ]
  },
  {
    id: 18,
    name: "Suno",
    description: "AI music generation platform that creates full songs with vocals from text prompts.",
    category: "Voice Generation",
    link: "https://suno.ai",
    api: true,
    free: true,
    creator: "Suno",
    logo: "https://suno.com/favicon.ico",
    features: [
      "Complete song generation with lyrics",
      "Multiple musical styles and genres",
      "Vocal synthesis technology",
      "Instrumental tracks",
      "Creative prompt customization"
    ],
    pricing: [
      {
        plan: "Free",
        cost: "$0",
        description: "Limited generations per day"
      },
      {
        plan: "Plus",
        cost: "$10/month",
        description: "More generations and HD export"
      }
    ],
    useCases: [
      "Original music creation",
      "Podcast intros and outros",
      "Video background music",
      "Marketing jingles",
      "Creative music exploration"
    ]
  },
  {
    id: 19,
    name: "Play.ht",
    description: "AI voice generator that turns text into natural-sounding speech with over 900+ voices in 142 languages.",
    category: "Voice Generation",
    link: "https://play.ht",
    api: true,
    free: true,
    creator: "Play.ht",
    logo: "https://play.ht/apple-touch-icon.png",
    features: [
      "900+ AI voices across 142 languages",
      "Voice cloning technology",
      "SSML support for advanced customization",
      "Voice design tools",
      "Long-form content optimization"
    ],
    pricing: [
      {
        plan: "Free",
        cost: "$0",
        description: "Limited usage with watermark"
      },
      {
        plan: "Creator",
        cost: "$19/month",
        description: "200,000 characters per month"
      },
      {
        plan: "Pro",
        cost: "$39/month",
        description: "Advanced features and more characters"
      }
    ],
    useCases: [
      "Voiceovers for videos",
      "Audiobook production",
      "E-learning content",
      "Podcast creation",
      "Interactive voice experiences"
    ]
  },
  {
    id: 20,
    name: "Murf",
    description: "AI voice generator with studio-quality voices for videos, presentations, and more.",
    category: "Voice Generation",
    link: "https://murf.ai",
    api: true,
    free: true,
    creator: "Murf AI",
    logo: "https://murf.ai/static/images/favicon.svg",
    features: [
      "120+ natural-sounding AI voices",
      "Voice customization options",
      "Background music and sound effects",
      "Collaborative tools",
      "Commercial usage rights"
    ],
    pricing: [
      {
        plan: "Free",
        cost: "$0",
        description: "Limited to 10 minutes per month"
      },
      {
        plan: "Basic",
        cost: "$29/month",
        description: "2 hours of voice generation per month"
      },
      {
        plan: "Pro",
        cost: "$39/month",
        description: "4 hours of voice generation per month"
      },
      {
        plan: "Enterprise",
        cost: "$99/month",
        description: "10 hours of voice generation per month"
      }
    ],
    useCases: [
      "Training and e-learning",
      "Explainer videos",
      "IVR and customer service",
      "Presentations and demos",
      "Marketing content"
    ]
  },
  
  // Code Generation
  {
    id: 21,
    name: "GitHub Copilot",
    description: "AI pair programmer that suggests code completions and entire functions in real-time, directly in your editor.",
    category: "Code Generation",
    link: "https://github.com/features/copilot",
    api: false,
    free: false,
    creator: "GitHub & OpenAI",
    logo: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
    releaseDate: "June 2021",
    features: [
      "Real-time code suggestions",
      "Whole function generation",
      "Comment-to-code conversion",
      "Multiple programming language support",
      "IDE integration"
    ],
    pricing: [
      {
        plan: "Individual",
        cost: "$10/month",
        description: "For individual developers"
      },
      {
        plan: "Business",
        cost: "$19/user/month",
        description: "For teams and organizations"
      }
    ],
    useCases: [
      "Accelerating software development",
      "Learning new programming languages",
      "Reducing boilerplate code",
      "Exploring implementation alternatives",
      "Documentation generation"
    ]
  },
  {
    id: 22,
    name: "Amazon CodeWhisperer",
    description: "AI coding assistant that provides code recommendations based on your comments and existing code.",
    category: "Code Generation",
    link: "https://aws.amazon.com/codewhisperer",
    api: false,
    free: true,
    creator: "Amazon Web Services",
    logo: "https://d2908q01vomqb2.cloudfront.net/7b52009b64fd0a2a49e6d8a939753077792b0554/2023/02/07/Amazon-CodeWhisperer.png",
    releaseDate: "April 2022",
    features: [
      "Real-time code suggestions",
      "Security scan for vulnerabilities",
      "Reference tracking for open source code",
      "AWS service integration",
      "Multiple IDE support"
    ],
    pricing: [
      {
        plan: "Individual",
        cost: "$0",
        description: "Free for individual developers"
      },
      {
        plan: "Professional",
        cost: "$19/user/month",
        description: "For professional and enterprise use"
      }
    ],
    useCases: [
      "Building AWS applications",
      "Secure code generation",
      "Learning cloud development",
      "Accelerating development workflows",
      "Enterprise software development"
    ]
  },
  {
    id: 23,
    name: "Tabnine",
    description: "AI code completion assistant that helps developers write code faster with whole-line and full-function code completions.",
    category: "Code Generation",
    link: "https://www.tabnine.com",
    api: false,
    free: true,
    creator: "Tabnine",
    logo: "https://www.tabnine.com/favicon.ico",
    features: [
      "Whole-line code completions",
      "Full-function code completions",
      "Team learning capabilities",
      "Self-hosting option for enterprises",
      "Multiple IDE support"
    ],
    pricing: [
      {
        plan: "Starter",
        cost: "$0",
        description: "Basic completions for individuals"
      },
      {
        plan: "Pro",
        cost: "$12/month",
        description: "Advanced completions and features"
      },
      {
        plan: "Enterprise",
        cost: "Custom",
        description: "Team learning and self-hosting options"
      }
    ],
    useCases: [
      "Daily coding assistance",
      "Learning new frameworks",
      "Reducing repetitive coding",
      "Team productivity improvement",
      "Standardizing code practices"
    ]
  },
  {
    id: 24,
    name: "Replit Ghostwriter",
    description: "AI coding assistant integrated into Replit that helps with code completion, generation, transformation, and explanation.",
    category: "Code Generation",
    link: "https://replit.com/ghostwriter",
    api: false,
    free: true,
    creator: "Replit",
    logo: "https://replit.com/public/icons/favicon-196.png",
    features: [
      "Complete code generation from comments",
      "Chat interface for coding assistance",
      "Code explanation capabilities",
      "Integrated debugging help",
      "Built into Replit environment"
    ],
    pricing: [
      {
        plan: "Free",
        cost: "$0",
        description: "Limited access with Replit Free"
      },
      {
        plan: "Pro",
        cost: "$20/month",
        description: "Full access with Replit Pro"
      }
    ],
    useCases: [
      "Learning to code",
      "Building projects quickly",
      "Understanding complex code",
      "Debugging assistance",
      "Educational programming"
    ]
  },
  
  // Research & Knowledge
  {
    id: 25,
    name: "Elicit",
    description: "AI research assistant that helps researchers find, understand, and summarize relevant papers.",
    category: "Research & Knowledge",
    link: "https://elicit.org",
    api: false,
    free: true,
    creator: "Ought",
    logo: "https://elicit.org/logo.png",
    features: [
      "Literature search and discovery",
      "Research question answering",
      "Paper summarization",
      "Data extraction from papers",
      "Research brainstorming"
    ],
    pricing: [
      {
        plan: "Free",
        cost: "$0",
        description: "Free for researchers and students"
      }
    ],
    useCases: [
      "Academic research",
      "Literature reviews",
      "Understanding research landscapes",
      "Finding evidence for hypotheses",
      "Research planning"
    ]
  },
  {
    id: 26,
    name: "Scholarcy",
    description: "AI-powered tool that reads research papers and creates summaries with key findings and insights.",
    category: "Research & Knowledge",
    link: "https://www.scholarcy.com",
    api: true,
    free: true,
    creator: "Scholarcy",
    logo: "https://www.scholarcy.com/wp-content/uploads/2021/08/scholarcy_favicon.png",
    features: [
      "Research paper summarization",
      "Flashcard generation",
      "Citation extraction",
      "Reference list summarization",
      "Literature review automation"
    ],
    pricing: [
      {
        plan: "Free",
        cost: "$0",
        description: "Limited papers per month"
      },
      {
        plan: "Premium",
        cost: "$9.99/month",
        description: "Unlimited papers and advanced features"
      }
    ],
    useCases: [
      "Literature reviews",
      "Research paper understanding",
      "Academic writing",
      "Study aid creation",
      "Quick knowledge acquisition"
    ]
  },
  
  // Productivity
  {
    id: 27,
    name: "Notion AI",
    description: "AI writing assistant integrated into Notion workspace that helps with writing, summarizing, and editing content.",
    category: "Productivity",
    link: "https://www.notion.so/product/ai",
    api: false,
    free: false,
    creator: "Notion",
    logo: "https://www.notion.so/front-static/favicon.ico",
    features: [
      "Content generation assistance",
      "Text summarization",
      "Translation capabilities",
      "Editing and proofreading",
      "Brainstorming support"
    ],
    pricing: [
      {
        plan: "AI Add-on",
        cost: "$10/month",
        description: "Available with any Notion plan"
      }
    ],
    useCases: [
      "Content creation",
      "Meeting notes summarization",
      "Project documentation",
      "Knowledge management",
      "Team collaboration"
    ]
  },
  {
    id: 28,
    name: "Mem",
    description: "AI-powered workspace that organizes information and surfaces relevant content when you need it.",
    category: "Productivity",
    link: "https://mem.ai",
    api: false,
    free: true,
    creator: "Mem",
    logo: "https://mem.ai/favicon.png",
    features: [
      "AI-powered note organization",
      "Smart knowledge retrieval",
      "Automated connections between notes",
      "Command-driven AI writing",
      "Calendar integration"
    ],
    pricing: [
      {
        plan: "Personal",
        cost: "$0",
        description: "Basic features for individuals"
      },
      {
        plan: "Pro",
        cost: "$10/month",
        description: "Advanced features and unlimited storage"
      },
      {
        plan: "Enterprise",
        cost: "Custom",
        description: "Team features and admin controls"
      }
    ],
    useCases: [
      "Personal knowledge management",
      "Project notes and documentation",
      "Meeting summaries",
      "Research organization",
      "Idea development"
    ]
  },
  {
    id: 29,
    name: "Otter.ai",
    description: "AI meeting assistant that records, transcribes, and summarizes meetings in real-time.",
    category: "Productivity",
    link: "https://otter.ai",
    api: true,
    free: true,
    creator: "Otter.ai",
    logo: "https://otter.ai/favicon.ico",
    features: [
      "Real-time transcription",
      "Automated meeting summaries",
      "Speaker identification",
      "Meeting insights and highlights",
      "Searchable conversation library"
    ],
    pricing: [
      {
        plan: "Basic",
        cost: "$0",
        description: "Limited minutes per month"
      },
      {
        plan: "Pro",
        cost: "$16.99/month",
        description: "1,200 minutes per month and advanced features"
      },
      {
        plan: "Business",
        cost: "$30/month",
        description: "6,000 minutes per month and team features"
      }
    ],
    useCases: [
      "Meeting documentation",
      "Interview transcription",
      "Lecture notes",
      "Podcast transcription",
      "Research interviews"
    ]
  },
  {
    id: 30,
    name: "Krisp",
    description: "AI-powered noise cancellation app that removes background noise and echo from calls.",
    category: "Productivity",
    link: "https://krisp.ai",
    api: false,
    free: true,
    creator: "Krisp",
    logo: "https://krisp.ai/wp-content/uploads/2022/09/favicon.ico",
    features: [
      "Background noise cancellation",
      "Voice cancellation for privacy",
      "Echo removal",
      "HD voice quality",
      "Meeting insights and analytics"
    ],
    pricing: [
      {
        plan: "Free",
        cost: "$0",
        description: "Limited weekly usage"
      },
      {
        plan: "Pro",
        cost: "$8/month",
        description: "Unlimited noise cancellation"
      },
      {
        plan: "Business",
        cost: "$12/user/month",
        description: "Team features and admin controls"
      }
    ],
    useCases: [
      "Professional video calls",
      "Remote work communication",
      "Call center operations",
      "Podcast recording",
      "Virtual meetings in noisy environments"
    ]
  },

  {
    id: 2,
    name: "Claude",
    description: "An AI assistant designed to be helpful, harmless, and honest with a focus on safety and human values.",
    category: "Text Generation",
    link: "https://claude.ai",
    api: true,
    free: true,
    creator: "Anthropic",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Anthropic_logo.svg",
    releaseDate: "March 2023",
    features: [
      "Long context window (up to 200K tokens)",
      "High accuracy in responses",
      "File upload and analysis",
      "Constitutional AI approach for safety",
      "Follows instructions with nuance"
    ],
    pricing: [
      {
        plan: "Free",
        cost: "$0",
        description: "Limited access to Claude 2.1"
      },
      {
        plan: "Claude Pro",
        cost: "$20/month",
        description: "Priority access, 5x more usage, and larger file uploads"
      }
    ],
    useCases: [
      "Document analysis and summarization",
      "Content creation and editing",
      "Research assistance",
      "Customer support",
      "Educational assistance"
    ]
  },
  {
    id: 3,
    name: "Gemini",
    description: "Google's multimodal AI system that can understand and combine different types of information including text, code, audio, images, and video.",
    category: "Text Generation",
    link: "https://gemini.google.com",
    api: true,
    free: true,
    creator: "Google",
    logo: "https://lh3.googleusercontent.com/X3GdRyWtYzilXwx_lXGQ9KCqKFbZu0y-e5TQQn5QeQEFnlcXYKHbTNuYzPAMPbXHiWGXGg=e14-rj-sc0xffffff-h120-w120",
    releaseDate: "December 2023",
    features: [
      "Multimodal capabilities (text, images, audio)",
      "Integration with Google services",
      "Code understanding and generation",
      "Real-time information access"
    ],
    pricing: [
      {
        plan: "Free",
        cost: "$0",
        description: "Basic access to Gemini"
      },
      {
        plan: "Gemini Advanced",
        cost: "$19.99/month",
        description: "Access to Gemini Ultra model with advanced capabilities"
      }
    ],
    useCases: [
      "Personal assistance",
      "Programming and coding help",
      "Creative content generation",
      "Research and information gathering",
      "Education and learning"
    ]
  },
  {
    id: 4,
    name: "Bing Chat",
    description: "Microsoft's AI-powered chat tool integrated with Bing search engine, powered by GPT-4.",
    category: "Text Generation",
    link: "https://www.bing.com/chat",
    api: false,
    free: true,
    creator: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Bing_Fluent_Logo.svg",
    releaseDate: "February 2023",
    features: [
      "Real-time internet access for up-to-date information",
      "Image generation capabilities",
      "Integration with Microsoft Edge browser",
      "Citation of sources"
    ],
    useCases: [
      "Web searches with conversational interface",
      "Research with real-time information",
      "Trip planning and recommendations",
      "Quick fact-checking"
    ]
  },
  {
    id: 5,
    name: "Perplexity AI",
    description: "An AI-powered answer engine that provides information with cited sources from around the web.",
    category: "Text Generation",
    link: "https://www.perplexity.ai",
    api: true,
    free: true,
    creator: "Perplexity AI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/Perplexity_AI_logo.svg",
    releaseDate: "August 2022",
    features: [
      "Real-time web search",
      "Comprehensive answers with citations",
      "Follows conversation context",
      "Multimodal capabilities"
    ],
    pricing: [
      {
        plan: "Free",
        cost: "$0",
        description: "Basic access with limited queries per day"
      },
      {
        plan: "Pro",
        cost: "$20/month",
        description: "Unlimited queries, premium models, and advanced features"
      }
    ],
    useCases: [
      "Academic research",
      "Fact checking with sources",
      "Learning about complex topics",
      "Staying up-to-date with current events"
    ]
  },
  {
    id: 6,
    name: "Jasper",
    description: "AI content generator that creates marketing copy, emails, and social media posts optimized for engagement.",
    category: "Text Generation",
    link: "https://www.jasper.ai",
    api: true,
    free: false,
    creator: "Jasper",
    logo: "https://assets-global.website-files.com/60e5f2de011b86acebc30db7/6229737bc431fb3226c0b7ba_A%20(2).svg",
    releaseDate: "2021",
    features: [
      "Marketing-focused content generation",
      "Templates for different content types",
      "SEO optimization features",
      "Brand voice customization",
      "Team collaboration tools"
    ],
    pricing: [
      {
        plan: "Creator",
        cost: "$39/month",
        description: "Basic content generation for individuals"
      },
      {
        plan: "Teams",
        cost: "$99/month",
        description: "Advanced features for marketing teams"
      }
    ],
    useCases: [
      "Social media content creation",
      "Blog and article writing",
      "Email marketing campaigns",
      "Ad copy generation",
      "Product descriptions"
    ]
  },
  {
    id: 7,
    name: "Copy.ai",
    description: "AI-powered copywriting tool designed to generate marketing copy, social media content, and more.",
    category: "Text Generation",
    link: "https://www.copy.ai",
    api: true,
    free: true,
    creator: "Copy.ai",
    logo: "https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/62a8bf4d2deb31408c21c3df_Symbol%20-%20BrandCrowd%404x-p-500.webp",
    features: [
      "Multiple content templates",
      "Blog idea generation",
      "Email sequence generation",
      "Supports multiple languages"
    ],
    pricing: [
      {
        plan: "Free",
        cost: "$0",
        description: "Limited access with 2,000 words per month"
      },
      {
        plan: "Pro",
        cost: "$36/month",
        description: "Unlimited words and priority features"
      }
    ],
    useCases: [
      "Marketing copy for websites",
      "Social media posts",
      "Email newsletters",
      "Product descriptions"
    ]
  },
  
  // Image Generation
  {
    id: 8,
    name: "DALL-E",
    description: "An AI system that creates detailed and realistic images from textual descriptions.",
    category: "Image Generation",
    link: "https://openai.com/dall-e-3",
    api: true,
    free: false,
    creator: "OpenAI",
    logo: "https://seeklogo.com/images/D/dall-e-logo-0B8EAAE2E0-seeklogo.com.png",
    releaseDate: "January 2021 (DALL-E), April 2022 (DALL-E 2), October 2023 (DALL-E 3)",
    features: [
      "Creates images from text descriptions",
      "Generates variations of existing images",
      "Edits specific parts of images based on instructions",
      "Higher resolution output with DALL-E 3",
      "Better text understanding and rendering"
    ],
    pricing: [
      {
        plan: "Pay-as-you-go",
        cost: "Starting at $0.040 per image (1024×1024)",
        description: "Credits system with volume discounts"
      }
    ],
    useCases: [
      "Marketing and advertising visuals",
      "Product concept visualization",
      "Creative inspiration for artists",
      "Educational illustrations",
      "Custom artwork generation"
    ]
  },
  {
    id: 9,
    name: "Midjourney",
    description: "An AI art generator that creates highly detailed and artistic images from natural language descriptions.",
    category: "Image Generation",
    link: "https://www.midjourney.com",
    api: true,
    free: false,
    creator: "Midjourney",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png",
    releaseDate: "March 2022",
    features: [
      "High artistic quality output",
      "Detailed style control",
      "Community-based Discord interface",
      "Support for variations and iterations",
      "Custom aspect ratios"
    ],
    pricing: [
      {
        plan: "Basic",
        cost: "$10/month",
        description: "200 minutes of GPU time"
      },
      {
        plan: "Standard",
        cost: "$30/month",
        description: "Unlimited relaxed mode generations"
      },
      {
        plan: "Pro",
        cost: "$60/month",
        description: "Faster generation and private visibility"
      }
    ],
    useCases: [
      "Concept art for games and films",
      "Book covers and illustrations",
      "Fashion design visualization",
      "Interior design concepts",
      "Album artwork and posters"
    ]
  },
  {
    id: 10,
    name: "Stable Diffusion",
    description: "Open-source text-to-image model that generates detailed images from text descriptions with local hosting options.",
    category: "Image Generation",
    link: "https://stability.ai",
    api: true,
    free: true,
    creator: "Stability AI",
    logo: "https://stability.ai/assets/images/stability-ai-logo-black.svg",
    releaseDate: "August 2022",
    features: [
      "Open-source model can be run locally",
      "Community-driven development",
      "Multiple model versions with different strengths",
      "Extensive customization options",
      "Web UI interfaces available"
    ],
    pricing: [
      {
        plan: "Free (Self-hosted)",
        cost: "$0",
        description: "Run locally on your own hardware"
      },
      {
        plan: "DreamStudio",
        cost: "Pay-as-you-go, starting at $10",
        description: "Cloud-based interface by Stability AI"
      }
    ],
    useCases: [
      "Personalized art creation",
      "Product visualization",
      "Game asset creation",
      "Photo editing and enhancement",
      "Architecture and interior design visualization"
    ]
  },
  {
    id: 11,
    name: "Adobe Firefly",
    description: "Adobe's family of creative generative AI models designed for image and text effects generation with commercial usage rights.",
    category: "Image Generation",
    link: "https://firefly.adobe.com",
    api: true,
    free: true,
    creator: "Adobe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Adobe_Corporate_logo.svg",
    releaseDate: "March 2023",
    features: [
      "Commercial rights for generated content",
      "Trained on licensed content and public domain",
      "Integration with Adobe Creative Cloud",
      "Text-to-image, text effects, and generative fill",
      "Content credentials for transparency"
    ],
    pricing: [
      {
        plan: "Free",
        cost: "$0",
        description: "Limited generations per month"
      },
      {
        plan: "Firefly Premium",
        cost: "$9.99/month",
        description: "More generations and premium features"
      },
      {
        plan: "Creative Cloud Integration",
        cost: "Varies",
        description: "Included with various Creative Cloud plans"
      }
    ],
    useCases: [
      "Commercial design work",
      "Professional photo editing",
      "Marketing materials creation",
      "Creative asset generation",
      "Design prototyping"
    ]
  },
  {
    id: 12,
    name: "Leonardo.AI",
    description: "AI-powered platform for generating high-quality images, textures, and assets for creative professionals and game developers.",
    category: "Image Generation",
    link: "https://leonardo.ai",
    api: true,
    free: true,
    creator: "Leonardo.AI",
    logo: "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/08/Leonardo-Logo-Symbol-WhiteBG.jpg",
    features: [
      "Game-focused asset generation",
      "3D texture creation",
      "Character design tools",
      "Canvas for advanced editing",
      "Community sharing features"
    ],
    pricing: [
      {
        plan: "Free",
        cost: "$0",
        description: "Limited generations with watermark"
      },
      {
        plan: "Unlimited",
        cost: "$10/month",
        description: "More daily generations and features"
      },
      {
        plan: "Professional",
        cost: "$24/month",
        description: "Priority access and advanced features"
      }
    ],
    useCases: [
      "Game asset creation",
      "Character design",
      "Environmental art",
      "Concept art",
      "Digital art production"
    ]
  },
  
  // Video Generation
  {
    id: 13,
    name: "Synthesia",
    description: "AI video generation platform that creates videos with virtual avatars speaking from text input.",
    category: "Video Generation",
    link: "https://www.synthesia.io",
    api: true,
    free: false,
    creator: "Synthesia",
    logo: "https://framerusercontent.com/images/tgELERQ3MxgIqJZi6Rw1sHakfQ.png",
    releaseDate: "2019",
    features: [
      "100+ AI avatars in multiple languages",
      "Custom AI avatar creation",
      "Simple text-to-video interface",
      "Built-in templates and scenes",
      "Screen recording integration"
    ],
    pricing: [
      {
        plan: "Personal",
        cost: "$30/month",
        description: "10 minutes of video per month, 50+ avatars"
      },
      {
        plan: "Enterprise",
        cost: "Custom pricing",
        description: "Advanced features, custom avatars, API access"
      }
    ],
    useCases: [
      "Corporate training videos",
      "Product demonstrations",
      "Multilingual marketing",
      "Educational content",
      "Internal communications"
    ]
  },
  {
    id: 14,
    name: "Runway",
    description: "Creative suite powered by AI for video editing, generation, and visual effects.",
    category: "Video Generation",
    link: "https://runwayml.com",
    api: true,
    free: false,
    creator: "Runway AI",
    logo: "https://assets-global.website-files.com/616a7a3f1780a0f8e516c23f/622f5ad12787048501cc3a12_RUNWAYML.jpeg",
    releaseDate: "2018",
    features: [
      "Gen-2 text-to-video model",
      "Video inpainting and outpainting",
      "Green screen removal without a green screen",
      "Motion tracking and transfer",
      "Advanced video editing tools"
    ],
    pricing: [
      {
        plan: "Free",
        cost: "$0",
        description: "Limited access to tools and models"
      },
      {
        plan: "Standard",
        cost: "$15/month",
        description: "Basic access to Gen-2 with limitations"
      },
      {
        plan: "Pro",
        cost: "$35/month",
        description: "More generations and advanced features"
      }
    ],
    useCases: [
      "Film and video production",
      "Visual effects creation",
      "Music videos",
      "Advertising content",
      "Digital art projects"
    ]
  },
  {
    id: 15,
    name: "Pika",
    description: "Text-to-video generation platform with control over style, camera movement, and characters.",
    category: "Video Generation",
    link: "https://pika.art",
    api: true,
    free: true,
    creator: "Pika Labs",
    logo: "https://static.wixstatic.com/media/d7aae5_ac97de36fd1b4fd6a4b8eaeeb37fad02~mv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/d7aae5_ac97de36fd1b4fd6a4b8eaeeb37fad02~mv2.png",
    features: [
      "Text-to-video generation",
      "Image-to-video transformation",
      "Style control and templates",
      "Motion control options",
      "Length and resolution settings"
    ],
    pricing: [
      {
        plan: "Free",
        cost: "$0",
        description: "Limited daily generations"
      },
      {
        plan: "Pika Pro",
        cost: "$20/month",
        description: "More generations and priority processing"
      }
    ],
    useCases: [
      "Short marketing videos",
      "Social media content",
      "Animated scenes",
      "Character animations",
      "Creative video concepts"
    ]
  },
  {
    id: 16,
    name: "HeyGen",
    description: "AI video generation platform specialized in creating talking-head videos in multiple languages.",
    category: "Video Generation",
    link: "https://www.heygen.com",
    api: true,
    free: true,
    creator: "HeyGen",
    logo: "https://assets-global.website-files.com/63f580d78284f139a17a1676/646b62a24975c91e3d25723a_heygen-logo-yellow.webp",
    features: [
      "AI avatars in multiple languages",
      "Voice cloning technology",
      "Script editing with AI assistance",
      "High-quality video rendering",
      "Background customization"
    ],
    pricing: [
      {
        plan: "Free",
        cost: "$0",
        description: "Limited minutes and features"
      },
      {
        plan: "Creator",
        cost: "$29/month",
        description: "10 minutes of video monthly"
      },
      {
        plan: "Pro",
        cost: "$69/month",
        description: "30 minutes of video monthly and advanced features"
      }
    ],
    useCases: [
      "Product demonstrations",
      "Sales and marketing videos",
      "Training materials",
      "Localized content creation",
      "Digital avatars for businesses"
    ]
  },
  
  // Audio Generation
  {
    id: 17,
    name: "ElevenLabs",
    description: "AI voice technology platform offering ultra-realistic text-to-speech and voice cloning capabilities.",
    category: "Voice Generation",
    link: "https://elevenlabs.io",
    api: true,
    free: true,
    creator: "ElevenLabs",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/ElevenLabs_Logo.svg",
    releaseDate: "January 2023",
    features: [
      "Ultra-realistic text-to-speech",
      "Voice cloning technology",
      "Emotion and tone control",
      "Support for 29+ languages",
      "Voice design tools"
    ],
    pricing: [
      {
        plan: "Free",
        cost: "$0",
        description: "10,000 characters per month"
      },
      {
        plan: "Starter",
        cost: "$5/month",
        description: "30,000 characters per month"
      },
      {
        plan: "Creator",
        cost: "$22/month",
        description: "100,000 characters per month and voice cloning"
      },
      {
        plan: "Pro",
        cost: "$99/month",
        description: "500,000 characters per month and advanced features"
      }
    ],
    useCases: [
      "Audiobook narration",
      "Character voices for games",
      "Video narration and dubbing",
      "Podcast production",
      "Accessibility tools"
    ]
  },
  {
    id: 18,
    name: "Suno",
    description: "AI music generation platform that creates full songs with vocals from text prompts.",
    category: "Voice Generation",
    link: "https://suno.ai",
    api: true,
    free: true,
    creator: "Suno",
    logo: "https://assets-global.website-files.com/649e633895f429bbb9e6ed30/64c48c513ce6d988dde3a1db_Icon-180.png",
    features: [
      "Complete song generation with lyrics",
      "Multiple musical styles and genres",
      "Vocal synthesis technology",
      "Instrumental tracks",
      "Creative prompt customization"
    ],
    pricing: [
      {
        plan: "Free",
        cost: "$0",
        description: "Limited generations per day"
      },
      {
        plan: "Plus",
        cost: "$10/month",
        description: "More generations and HD export"
      }
    ],
    useCases: [
      "Original music creation",
      "Podcast intros and outros",
      "Video background music",
      "Marketing jingles",
      "Creative music exploration"
    ]
  },
  {
    id: 19,
    name: "Play.ht",
    description: "AI voice generator that converts text to natural-sounding speech with voice cloning capabilities.",
    category: "Voice Generation",
    link: "https://play.ht",
    api: true,
    free: true,
    creator: "Play.ht",
    logo: "https://avatars.githubusercontent.com/u/68892152?s=280&v=4",
    features: [
      "600+ voices in 140+ languages",
      "Voice cloning technology",
      "SSML support for fine-tuning",
      "Emotion and emphasis control",
      "Team collaboration features"
    ],
    pricing: [
      {
        plan: "Free",
        cost: "$0",
        description: "2,500 words per month"
      },
      {
        plan: "Creator",
        cost: "$19/month",
        description: "25,000 words per month"
      },
      {
        plan: "Pro",
        cost: "$49/month",
        description: "100,000 words per month and voice cloning"
      }
    ],
    useCases: [
      "Video narration",
      "Podcast production",
      "E-learning content",
      "Audiobooks creation",
      "IVR systems and voice assistants"
    ]
  },
  
  // Code Generation
  {
    id: 20,
    name: "GitHub Copilot",
    description: "AI pair programmer that suggests code completions and helps developers write code faster.",
    category: "Code Generation",
    link: "https://github.com/features/copilot",
    api: false,
    free: false,
    creator: "GitHub & OpenAI",
    logo: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
    releaseDate: "June 2021",
    features: [
      "Real-time code suggestions",
      "Multiple programming language support",
      "Integration with popular IDEs",
      "Comment-to-code generation",
      "Function documentation generation"
    ],
    pricing: [
      {
        plan: "Individual",
        cost: "$10/month",
        description: "For individual developers"
      },
      {
        plan: "Business",
        cost: "$19/user/month",
        description: "For organizations with enterprise features"
      }
    ],
    useCases: [
      "Faster code development",
      "Learning new programming languages",
      "Boilerplate code generation",
      "Test code generation",
      "API usage assistance"
    ]
  },
  {
    id: 21,
    name: "Amazon CodeWhisperer",
    description: "AI coding companion that provides code suggestions and generates code based on comments and existing code.",
    category: "Code Generation",
    link: "https://aws.amazon.com/codewhisperer",
    api: false,
    free: true,
    creator: "Amazon Web Services",
    logo: "https://d1.awsstatic.com/logos/aws-logo-lockups/AWS-Logo_Full-Color_250x75.jpg",
    features: [
      "Real-time code suggestions",
      "Security scans for vulnerabilities",
      "AWS service integration",
      "Support for multiple IDEs",
      "Multiple programming language support"
    ],
    pricing: [
      {
        plan: "Individual",
        cost: "$0",
        description: "Free for individual use"
      },
      {
        plan: "Professional",
        cost: "$19/user/month",
        description: "For professional teams with advanced features"
      }
    ],
    useCases: [
      "Accelerating code development",
      "Security vulnerability detection",
      "AWS service integration",
      "Learning programming best practices",
      "Code documentation generation"
    ]
  },
  {
    id: 22,
    name: "Replit Ghostwriter",
    description: "AI code assistant integrated with Replit that helps with code completion, generation, and explanation.",
    category: "Code Generation",
    link: "https://replit.com/ghostwriter",
    api: false,
    free: false,
    creator: "Replit",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Repl.it_logo.svg",
    features: [
      "Code completion and generation",
      "Bug fixing assistance",
      "Code explanation",
      "Integrated development environment",
      "Collaborative coding features"
    ],
    pricing: [
      {
        plan: "Pro",
        cost: "$10/month",
        description: "Basic Ghostwriter features"
      },
      {
        plan: "Teams Pro",
        cost: "$20/month",
        description: "Advanced features for teams"
      }
    ],
    useCases: [
      "Learning to code",
      "Educational coding projects",
      "Rapid prototyping",
      "Collaborative development",
      "Code debugging assistance"
    ]
  },
  
  // AI Platforms
  {
    id: 23,
    name: "Hugging Face",
    description: "Platform for AI models and datasets with thousands of pre-trained models and community collaboration.",
    category: "AI Platform",
    link: "https://huggingface.co",
    api: true,
    free: true,
    creator: "Hugging Face",
    logo: "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg",
    releaseDate: "2016",
    features: [
      "Thousands of pre-trained models",
      "Model hosting and deployment",
      "Datasets repository",
      "Spaces for model demos",
      "Community collaboration tools"
    ],
    pricing: [
      {
        plan: "Free",
        cost: "$0",
        description: "Community access and limited resources"
      },
      {
        plan: "Pro",
        cost: "$9/month",
        description: "More compute and storage for individuals"
      },
      {
        plan: "Enterprise",
        cost: "Custom pricing",
        description: "Enterprise-grade security and support"
      }
    ],
    useCases: [
      "Model discovery and sharing",
      "AI research and experimentation",
      "Model fine-tuning and transfer learning",
      "AI application development",
      "Dataset sharing and discovery"
    ]
  },
  {
    id: 24,
    name: "Replicate",
    description: "Platform to run open-source machine learning models with a cloud API.",
    category: "AI Platform",
    link: "https://replicate.com",
    api: true,
    free: true,
    creator: "Replicate",
    logo: "https://replicate.delivery/pbxt/QNlkPAwO5rGi76RLhQnETDxS1aYSbNmODXvYCv0WgBV775LE/out.png",
    features: [
      "Run models with API calls",
      "Host and share your models",
      "Collaborative model development",
      "Usage-based pricing",
      "Versioning for models"
    ],
    pricing: [
      {
        plan: "Pay-as-you-go",
        cost: "Varies by model",
        description: "Only pay for what you use"
      }
    ],
    useCases: [
      "AI product development",
      "Research and experimentation",
      "Image and video generation",
      "Text processing applications",
      "Custom model hosting"
    ]
  },
  
  // Other Categories
  {
    id: 25,
    name: "Grammarly",
    description: "AI-powered writing assistant that checks grammar, clarity, tone, and provides suggestions for improvement.",
    category: "Writing Assistant",
    link: "https://www.grammarly.com",
    api: true,
    free: true,
    creator: "Grammarly",
    logo: "https://static.grammarly.com/assets/files/d2e658571ea7e7b9c83aab0b83de00c5/grammarly_logo.svg",
    releaseDate: "2009",
    features: [
      "Grammar and spelling checks",
      "Style and tone suggestions",
      "Clarity and readability improvements",
      "Plagiarism detection",
      "Integration with multiple platforms"
    ],
    pricing: [
      {
        plan: "Free",
        cost: "$0",
        description: "Basic writing suggestions"
      },
      {
        plan: "Premium",
        cost: "$12/month",
        description: "Advanced suggestions and features"
      },
      {
        plan: "Business",
        cost: "$15/user/month",
        description: "Team features and admin controls"
      }
    ],
    useCases: [
      "Academic writing",
      "Professional emails and reports",
      "Content creation",
      "Resume and application writing",
      "English language learning"
    ]
  },
  {
    id: 26,
    name: "LangChain",
    description: "Framework for developing applications powered by language models through composability.",
    category: "AI Development",
    link: "https://www.langchain.com",
    api: true,
    free: true,
    creator: "LangChain",
    logo: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4",
    features: [
      "LLM integration and chaining",
      "Document loading and processing",
      "Vector stores for retrieval",
      "Agent frameworks",
      "Memory for conversation context"
    ],
    pricing: [
      {
        plan: "Open Source",
        cost: "$0",
        description: "Free framework for development"
      },
      {
        plan: "Cloud",
        cost: "Pay-as-you-go",
        description: "Managed deployment platform"
      }
    ],
    useCases: [
      "Building chatbots",
      "Creating retrieval-augmented systems",
      "Document analysis applications",
      "Custom AI agents",
      "LLM-powered workflow automation"
    ]
  },
  {
    id: 27,
    name: "Pinecone",
    description: "Vector database for storing and searching vector embeddings for AI applications.",
    category: "AI Infrastructure",
    link: "https://www.pinecone.io",
    api: true,
    free: true,
    creator: "Pinecone",
    logo: "https://avatars.githubusercontent.com/u/70762926?s=200&v=4",
    features: [
      "Vector similarity search",
      "Real-time updates",
      "Scalable infrastructure",
      "Low-latency queries",
      "Hybrid search capabilities"
    ],
    pricing: [
      {
        plan: "Starter",
        cost: "$0",
        description: "Limited storage and operations"
      },
      {
        plan: "Standard",
        cost: "Starting at $70/month",
        description: "Production-ready with increased limits"
      }
    ],
    useCases: [
      "Semantic search applications",
      "Recommendation systems",
      "Retrieval-augmented generation",
      "Similarity matching",
      "AI-powered search engines"
    ]
  },
  {
    id: 28,
    name: "Notion AI",
    description: "AI writing assistant integrated with Notion that helps create, edit, and summarize content.",
    category: "Writing Assistant",
    link: "https://www.notion.so/product/ai",
    api: false,
    free: false,
    creator: "Notion",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
    features: [
      "Writing assistance and brainstorming",
      "Summarizing long text",
      "Translation capabilities",
      "Content improvement suggestions",
      "Integration with Notion workspace"
    ],
    pricing: [
      {
        plan: "AI Add-on",
        cost: "$10/month",
        description: "Added to any Notion plan"
      }
    ],
    useCases: [
      "Content creation for blogs",
      "Meeting note summarization",
      "Draft improvement",
      "Brainstorming ideas",
      "Project documentation"
    ]
  },
  {
    id: 29,
    name: "Character.AI",
    description: "Platform for creating and talking to AI characters with different personalities and expertise.",
    category: "Chatbot",
    link: "https://character.ai",
    api: false,
    free: true,
    creator: "Character.AI",
    logo: "https://static.wikia.nocookie.net/logopedia/images/5/52/Character.ai_Icon.svg",
    features: [
      "Create custom AI characters",
      "Conversation with predefined characters",
      "Role-playing capabilities",
      "Memory of previous conversations",
      "Multi-participant chats"
    ],
    pricing: [
      {
        plan: "Free",
        cost: "$0",
        description: "Basic access with limitations"
      },
      {
        plan: "C+ Subscription",
        cost: "$9.99/month",
        description: "Priority access and advanced features"
      }
    ],
    useCases: [
      "Entertainment and role-playing",
      "Language practice and learning",
      "Creative writing assistance",
      "Companion chatbots",
      "Educational characters"
    ]
  },
  {
    id: 30,
    name: "Luma AI",
    description: "Platform for creating 3D objects, scenes, and videos from images or text.",
    category: "3D Generation",
    link: "https://lumalabs.ai",
    api: true,
    free: true,
    creator: "Luma AI",
    logo: "https://assets-global.website-files.com/627a5ae7932a0cf5254a8a3d/656bad2f7fe77bc0c6dfd8f6_Frame.svg",
    features: [
      "3D model generation from text",
      "Dreamscape video creation",
      "Genie for 3D object creation",
      "Capture app for 3D scanning",
      "Studio for asset creation"
    ],
    pricing: [
      {
        plan: "Free",
        cost: "$0",
        description: "Limited generations"
      },
      {
        plan: "Pro",
        cost: "$20/month",
        description: "More generations and premium features"
      }
    ],
    useCases: [
      "3D asset creation for games",
      "AR/VR content development",
      "Product visualization",
      "Architecture visualization",
      "Creative 3D art"
    ]
  }
];

export const categories = [...new Set(aiTools.map(tool => tool.category))];
