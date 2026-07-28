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
  tags: string[];
  category: string;
  images: ProjectImage[];
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
