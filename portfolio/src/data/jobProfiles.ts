export interface JobProfile {
  id: string
  slug: string
  title: string
  headline: string
  highlight: string
  summary: string
  focus: string
  skillFilter: string
  skillOrder: string[]
}

export const jobProfiles: JobProfile[] = [
  {
    id: '1', slug: 'full-stack', title: 'Full Stack Developer',
    headline: 'Full Stack', highlight: 'Software Developer.',
    summary: 'Full Stack Software Engineer with 6+ years of experience building web platforms, APIs, and production applications with React, Next.js, TypeScript, Node.js, and Python. Experienced in cloud deployment, database integration, and delivering products for international clients.',
    focus: 'React / Next.js / Node.js / Python', skillFilter: 'all',
    skillOrder: ['Frontend', 'Backend', 'Cloud & DevOps', 'Mobile apps', 'AI / ML', 'AI workflows'],
  },
  {
    id: '2', slug: 'ai', title: 'AI Software Engineer',
    headline: 'Applied AI', highlight: 'Software Engineer.',
    summary: 'Software Engineer building AI-powered applications with Python, LLM APIs, RAG, vector databases, and intelligent automation. Combines 6+ years of software development experience with full-stack delivery to bring AI integrations into production products.',
    focus: 'Python / LLM integration / RAG / Automation', skillFilter: 'ai',
    skillOrder: ['AI / ML', 'Backend', 'AI workflows', 'Cloud & DevOps', 'Frontend', 'Mobile apps'],
  },
  {
    id: '3', slug: 'flutter', title: 'Flutter Developer',
    headline: 'Flutter', highlight: 'Mobile Developer.',
    summary: 'Software Engineer focused on cross-platform mobile applications with Flutter and Dart. Brings 6+ years of software development experience across mobile, web, and backend systems, including API integration, subscriptions, and App Store and Google Play delivery.',
    focus: 'Flutter / Dart / iOS / Android', skillFilter: 'mobile',
    skillOrder: ['Mobile apps', 'Frontend', 'Backend', 'Cloud & DevOps', 'AI / ML', 'AI workflows'],
  },
]

// Only known presets are accepted; arbitrary query text never becomes page content.
export function resolveJobProfile(search: string): JobProfile | undefined {
  const value = new URLSearchParams(search).get('resume')?.trim().toLowerCase()
  return jobProfiles.find(profile => profile.id === value || profile.slug === value)
}
