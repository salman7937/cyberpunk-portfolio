export type Category = 'all' | 'web-app' | 'mobile' | 'ui-ux' | 'backend'

export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  category: Category
  image: string
  liveUrl?: string
  caseStudyUrl?: string
  featured?: boolean
}

export interface Testimonial {
  id: number
  quote: string
  name: string
  role: string
  avatar: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description: 'A full-stack inventory management system with real-time analytics, order tracking, and automated reporting.',
    tags: ['React', 'Next.js', 'PostgreSQL', 'Prisma'],
    category: 'web-app',
    image: '/images/projects/project-1.jpg',
    liveUrl: '#',
    caseStudyUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'FinTech Mobile App',
    description: 'Cross-platform mobile banking app with biometric auth, spending analytics, and instant transfers.',
    tags: ['React Native', 'TypeScript', 'Node.js'],
    category: 'mobile',
    image: '/images/projects/project-2.jpg',
    liveUrl: '#',
    caseStudyUrl: '#',
  },
  {
    id: 3,
    title: 'SaaS Design System',
    description: 'Complete design system with 50+ components, dark/light themes, and full Figma-to-code pipeline.',
    tags: ['Figma', 'Storybook', 'Tailwind'],
    category: 'ui-ux',
    image: '/images/projects/project-3.jpg',
    liveUrl: '#',
    caseStudyUrl: '#',
  },
  {
    id: 4,
    title: 'Real-time Chat API',
    description: 'Scalable WebSocket-based chat backend with rooms, file uploads, and message encryption.',
    tags: ['Node.js', 'Socket.io', 'Redis', 'Docker'],
    category: 'backend',
    image: '/images/projects/project-4.jpg',
    caseStudyUrl: '#',
  },
  {
    id: 5,
    title: 'Portfolio CMS',
    description: 'Headless CMS for managing portfolio content with drag-and-drop interface and live preview.',
    tags: ['Next.js', 'Sanity', 'TypeScript'],
    category: 'web-app',
    image: '/images/projects/project-5.jpg',
    liveUrl: '#',
    caseStudyUrl: '#',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Salman delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and clean code made the project a massive success.",
    name: 'Ahmed Khan',
    role: 'CTO at TechVentures',
    avatar: '/images/avatars/avatar-1.jpg',
  },
  {
    id: 2,
    quote: "Working with Salman was an absolute pleasure. He transformed our complex requirements into an elegant, user-friendly application within the deadline.",
    name: 'Sarah Williams',
    role: 'Product Manager at FinScale',
    avatar: '/images/avatars/avatar-2.jpg',
  },
  {
    id: 3,
    quote: "Salman's expertise in both frontend and backend allowed us to ship faster. The real-time features he built have become our core differentiator.",
    name: 'Omar Farooq',
    role: 'Founder at StartupPK',
    avatar: '/images/avatars/avatar-3.jpg',
  },
  {
    id: 4,
    quote: "Incredibly skilled developer who takes ownership. The design system Salman built reduced our UI development time by 60%.",
    name: 'Lisa Chen',
    role: 'Head of Design at Designify',
    avatar: '/images/avatars/avatar-4.jpg',
  },
]
