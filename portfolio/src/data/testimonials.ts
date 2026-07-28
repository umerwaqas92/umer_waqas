import type { Testimonial } from '../types'

export const speedStats = [
  {
    icon: 'fa-bolt',
    title: '< 4 Hour Response',
    description: 'Average response time — I don\'t keep you waiting.',
  },
  {
    icon: 'fa-rocket',
    title: 'Same-Day Delivery',
    description: 'MVP in days, not weeks. I ship fast with AI-assisted development.',
  },
  {
    icon: 'fa-sync-alt',
    title: 'Rapid Iteration',
    description: 'Quick updates, fast revisions, no delays.',
  },
  {
    icon: 'fa-clock',
    title: '30+ Hrs/Week',
    description: 'Full-time availability. Always online, always shipping.',
  },
]

export const testimonials: Testimonial[] = [
  {
    stars: 5,
    quote: '"wonderful resource, very helpful and self starter. needed minimal instructions to understand and outperformed my requirements. highly recommended"',
    tags: [
      { label: 'Solution Oriented', color: 'green' },
      { label: 'Committed to Quality', color: 'green' },
      { label: 'Clear Communicator', color: 'green' },
    ],
    job: 'Vector DB / Google Vertex AI — Oct 2023',
    featured: true,
  },
  {
    stars: 5,
    quote: '"It is always a pleasure to work with him because he delivers on projects very fast."',
    tags: [{ label: 'Collaborative', color: 'blue' }],
    job: 'App UI Design — Nov 2022',
  },
  {
    stars: 5,
    quote: '"Umer was excellent to work with and extremely diligent."',
    tags: [
      { label: 'Collaborative', color: 'blue' },
      { label: 'Detail Oriented', color: 'blue' },
    ],
    job: 'Full-Stack Developer — Aug 2023',
  },
  {
    stars: 5,
    quote: '"Umer simply put just gets it. I highly recommend him."',
    tags: [{ label: 'Clear Communicator', color: 'green' }],
    job: 'Zapier & ChatGPT Integration — Jul 2023',
  },
  {
    stars: 5,
    quote: '"Very professional developer and is always available for meetings and over-delivers on tasks. Handles work in a timely manner."',
    tags: [
      { label: 'Professional', color: 'purple' },
      { label: 'Collaborative', color: 'blue' },
      { label: 'Committed to Quality', color: 'green' },
    ],
    job: 'Flutter App — Nov 2022',
  },
  {
    stars: 5,
    quote: '"Second successful job - will work together again"',
    tags: [],
    job: 'AI SaaS MVP — Oct-Nov 2024 · $599',
  },
  {
    stars: 5,
    quote: '"Happy with the service, will offer 2 more"',
    tags: [],
    job: 'AI SaaS MVP — Oct 2024 · $599',
  },
  {
    stars: 5,
    quote: '"He did the good work on our project, Thank you!"',
    tags: [],
    job: 'AI ChatBot / OpenAI — Mar-Aug 2023 · $1,150',
  },
  {
    stars: 5,
    quote: '"Excellent developer and cooperative. I hire him again. Thanks"',
    tags: [{ label: 'Committed to Quality', color: 'green' }],
    job: 'Website Developer — Jan 2023',
  },
  {
    stars: 5,
    quote: '"Umer is a master developer when it comes to app development. Possibly the best in the world!!!"',
    tags: [{ label: 'Committed to Quality', color: 'green' }],
    job: 'Multi-Language Translation App — Apr 2022',
  },
  {
    stars: 5,
    quote: '"I highly recommend him. I will definitely hire him again"',
    tags: [],
    job: 'Mobile App UI/UX (Flutter) — Jan-Mar 2022 · $600',
  },
  {
    stars: 5,
    quote: '"Umer is very professional in his Field"',
    tags: [],
    job: 'Food Delivery App — Sep 2021',
    clientName: 'Abdul Moiz',
    isOld: true,
  },
]
