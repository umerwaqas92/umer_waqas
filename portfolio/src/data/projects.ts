import type { Project } from '../types'

export const projects: Project[] = [
  {
    title: 'AI Influencer Generator',
    description: 'Design unique, lifelike AI avatars, turn prompts into viral videos, and generate unlimited social content on demand. Available as a full web platform, iOS App, and Android App.',
    longDescription: 'A cutting-edge AI application that lets creators, marketers, and brands build photorealistic digital avatars and viral video content without camera crews or actors. Features prompt-to-video, avatar studio, custom voiceovers, and instant multi-platform export.',
    features: [
      'Photorealistic AI Avatar Studio with customizable features',
      'One-tap Text-to-Video generation powered by advanced AI models',
      'Cross-platform availability: Web, iOS App Store, and Google Play',
      'Automated social media formatting for TikTok, Reels, and Shorts',
    ],
    tags: ['Flutter', 'Next.js', 'Python AI', 'iOS', 'Android', 'AI Avatars'],
    category: 'mobile ai web',
    url: 'https://aiinfluencergenerator.app/',
    appStoreUrl: 'https://apps.apple.com/us/app/ai-influencer-generator/id6759487099',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.nichetraffickit.ai_influencer_app.ai_influencer_app',
    featured: true,
    images: [
      { src: 'ai-influencer-appstore.png', alt: 'AI Influencer Generator iOS App Store' },
      { src: 'ai-influencer-playstore.png', alt: 'AI Influencer Generator Google Play Store' },
      { src: 'project-aiinfluencer.jpg', alt: 'AI Influencer Generator Web Studio' },
    ],
  },
  {
    title: 'nichetraffickit.com',
    description: 'Traffic solution platform built with Next.js, TypeScript, AI-assisted development, and Go. Full-stack development with modern architecture.',
    longDescription: 'High-performance web architecture designed for traffic intelligence, lead generation analytics, and AI content pipeline automation.',
    features: [
      'Lightning-fast SSR with Next.js & TypeScript',
      'Microservice backend built in Go for high throughput',
      'AI content generation pipeline integration',
    ],
    tags: ['Next.js', 'TypeScript', 'AI-Assisted Development', 'Go'],
    category: 'web',
    url: 'https://nichetraffickit.com',
    images: [{ src: 'project-niche.jpg', alt: 'nichetraffickit.com' }],
  },
  {
    title: 'OnePDF: Everything PDF',
    description: 'iOS utility app for scanning, converting, merging, splitting, compressing, and signing PDFs. Seamless mobile PDF workflow with simple settings and secure document processing.',
    longDescription: 'Comprehensive PDF scanner and editor built natively for iOS with swift document processing, OCR scanning, and PDF signing capabilities.',
    features: [
      'Document scanner with smart edge detection & auto-cropping',
      'Merge, split, compress, and convert images to PDF',
      'Digital signature and form filling capabilities',
    ],
    tags: ['iOS App', 'PDF Utilities', 'Scan & Convert', 'App Store'],
    category: 'mobile',
    url: 'https://apps.apple.com/us/app/onepdf-everything-pdf/id6783776629',
    appStoreUrl: 'https://apps.apple.com/us/app/onepdf-everything-pdf/id6783776629',
    images: [{ src: 'project-onepdf.png', alt: 'OnePDF: Everything PDF' }],
  },
  {
    title: 'Askly — AI Database Agent',
    description: 'Mac desktop app that connects to your database and lets you chat about your data using natural language. Full SaaS with Go backend, React/Electron frontend, and Firebase auth.',
    longDescription: 'Conversational BI & AI agent for engineering and product teams. Connect PostgreSQL, MySQL, or MongoDB and query your data using natural language prompts.',
    features: [
      'Natural language to SQL conversion with safety guardrails',
      'Multi-database support (PostgreSQL, MySQL, SQLite, Mongo)',
      'Native Electron desktop application with dark modern UI',
    ],
    tags: ['Go', 'React', 'Electron', 'Firebase', 'AI Agent'],
    category: 'desktop ai',
    images: [
      { src: 'askly-ss1.png', alt: 'Askly Screenshot 1' },
      { src: 'askly-ss2.png', alt: 'Askly Screenshot 2' },
      { src: 'askly.png', alt: 'Askly Logo' },
    ],
  },
  {
    title: 'Microphone Amplifier',
    description: 'Android audio utility application for live microphone amplification, sound boosting, noise reduction, and low-latency audio monitoring.',
    longDescription: 'High performance real-time audio booster built for Android with DSP noise filtering and low latency output.',
    features: [
      'Low latency audio amplification engine',
      'Equalizer & background noise reduction filters',
      'Over 500k+ downloads on Google Play',
    ],
    tags: ['Android App', 'Audio Utility', 'Mic Booster', 'Google Play'],
    category: 'mobile',
    images: [
      { src: 'project-mic-amp.png', alt: 'Microphone Amplifier Feature' },
      { src: 'mic-amp-ss1.png', alt: 'Microphone Amplifier Screenshot 1' },
      { src: 'mic-amp-ss2.png', alt: 'Microphone Amplifier Screenshot 2' },
    ],
  },
  {
    title: 'TrendSnap Trading Tips FX',
    description: 'Financial market insights & Forex trading tips app providing real-time trend analysis, technical market signals, and trading analytics.',
    longDescription: 'Real-time Forex and crypto market signal provider with technical indicator charts and price alert notifications.',
    features: [
      'Live technical indicator calculations & trend alerts',
      'Interactive financial charting UI',
      'Push notifications for high probability trade setups',
    ],
    tags: ['Android App', 'Forex & Trading', 'Financial Analytics', 'Google Play'],
    category: 'mobile',
    images: [
      { src: 'project-trendsnap.png', alt: 'TrendSnap Trading Tips FX Feature' },
      { src: 'trendsnap-ss1.png', alt: 'TrendSnap Screenshot 1' },
      { src: 'trendsnap-ss2.png', alt: 'TrendSnap Screenshot 2' },
    ],
  },
]

export const projectFilters = [
  { value: 'all', label: 'All Projects' },
  { value: 'ai', label: 'AI & Automation' },
  { value: 'mobile', label: 'Mobile Apps' },
  { value: 'web', label: 'Web Platforms' },
  { value: 'desktop', label: 'Desktop SaaS' },
] as const
