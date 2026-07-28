import type { Project } from '../types'

export const projects: Project[] = [
  {
    title: 'nichetraffickit.com',
    description: 'Traffic solution platform built with Next.js, TypeScript, AI-assisted development, and Go. Full-stack development with modern architecture.',
    tags: ['Next.js', 'TypeScript', 'AI-Assisted Development', 'Go'],
    category: 'web',
    images: [{ src: 'project-niche.jpg', alt: 'nichetraffickit.com' }],
  },
  {
    title: 'AI Influencer Generator',
    description: 'AI-powered cross-platform mobile app built with Flutter & Dart. Generates viral influencer content using cutting-edge AI models for iOS and Android.',
    tags: ['Flutter', 'Dart', 'AI/ML', 'iOS & Android'],
    category: 'mobile ai',
    images: [{ src: 'project-aiinfluencer.jpg', alt: 'AI Influencer Generator' }],
  },
  {
    title: 'OnePDF: Everything PDF',
    description: 'iOS utility app for scanning, converting, merging, splitting, compressing, and signing PDFs. Seamless mobile PDF workflow with simple settings and secure document processing.',
    tags: ['iOS App', 'PDF Utilities', 'Scan & Convert', 'App Store'],
    category: 'mobile',
    images: [{ src: 'project-onepdf.png', alt: 'OnePDF: Everything PDF' }],
  },
  {
    title: 'Askly — AI Database Agent',
    description: 'Mac desktop app that connects to your database and lets you chat about your data using natural language. Full SaaS with Go backend, React/Electron frontend, and Firebase auth. AI agent with 4 rules engine, workspace management, and multi-DB support.',
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
  { value: 'all', label: 'All' },
  { value: 'web', label: 'Web Apps' },
  { value: 'mobile', label: 'Mobile Apps' },
  { value: 'ai', label: 'AI / ML' },
  { value: 'desktop', label: 'Desktop' },
] as const
