import type { SkillCategory } from '../types'

export const skillCategories: SkillCategory[] = [
  {
    icon: 'fa-code',
    title: 'Frontend',
    skills: ['React / Next.js', 'TypeScript / JavaScript', 'HTML5 / CSS3 / Tailwind', 'Flutter / Dart (iOS & Android)'],
  },
  {
    icon: 'fa-server',
    title: 'Backend',
    skills: ['Node.js / Express', 'Python / FastAPI', 'RESTful APIs / GraphQL', 'PostgreSQL / MongoDB'],
  },
  {
    icon: 'fa-brain',
    title: 'AI & ML',
    skills: ['OpenAI / Claude API', 'LangChain / LlamaIndex', 'Vector Databases', 'RAG Systems'],
  },
  {
    icon: 'fa-cloud',
    title: 'Cloud & DevOps',
    skills: ['AWS / GCP / Cloudflare', 'Docker / Kubernetes', 'CI/CD Pipelines', 'Serverless Architecture'],
  },
  {
    icon: 'fa-bolt',
    title: 'AI-Assisted Development',
    skills: ['Claude Code / Cursor AI', 'AI Pair Programming', 'Rapid Prototyping', '10x Shipping Speed'],
  },
]
