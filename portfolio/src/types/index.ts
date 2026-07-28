export interface NavLink {
  href: string;
  label: string;
}

export interface TestimonialTag {
  label: string;
  color: 'green' | 'blue' | 'purple';
}

export interface Testimonial {
  stars: number;
  quote: string;
  tags?: TestimonialTag[];
  job: string;
  clientName?: string;
  featured?: boolean;
  isOld?: boolean;
}

export interface SkillCategory {
  icon: string;
  title: string;
  skills: string[];
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  tags: string[];
  category: string;
  images: ProjectImage[];
  url?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  date: string;
  description: string;
}

export interface SocialLink {
  url: string;
  icon: string;
  title?: string;
  label: string;
}

export interface ContactMethod {
  icon: string;
  iconType?: 'whatsapp' | 'upwork';
  title: string;
  detail: string;
  href: string;
  action: string;
  isModal?: boolean;
}

export interface SpeedStat {
  icon: string;
  title: string;
  description: string;
}

export interface UpworkStat {
  icon: string;
  title: string;
  description: string;
}
