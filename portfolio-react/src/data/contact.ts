import type { ContactMethod } from '../types'

export const contactMethods: ContactMethod[] = [
  {
    icon: 'fas fa-envelope',
    title: 'Email Me',
    detail: 'um.waqas.khan@gmail.com',
    href: 'mailto:um.waqas.khan@gmail.com',
    action: 'Send Email',
  },
  {
    icon: 'fab fa-whatsapp',
    iconType: 'whatsapp',
    title: 'WhatsApp Direct',
    detail: '+92 345 9347900',
    href: '#',
    action: 'Start Chat',
    isModal: true,
  },
  {
    icon: 'fab fa-upwork',
    iconType: 'upwork',
    title: 'Upwork Profile',
    detail: 'Top Rated · 100% Job Success',
    href: 'https://www.upwork.com/freelancers/~010219e25749223694',
    action: 'View Profile',
  },
]
