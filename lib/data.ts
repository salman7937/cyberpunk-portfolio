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
  githubUrl?: string
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
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution designed to streamline online retail operations. Features include comprehensive product management with inventory tracking, a responsive shopping cart with real-time updates, secure checkout powered by Stripe, order history and tracking, and a powerful admin dashboard. Built with modern tech stack ensuring scalability, security, and optimal performance. Implemented JWT authentication, role-based access control, and optimized database queries for fast loading times.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma'],
    category: 'web-app',
    image: '/images/projects/project-1.jpg',
    githubUrl: '#',
    liveUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Banking App',
    description: 'A secure, user-centric digital banking interface that brings traditional banking services to the digital realm. Provides comprehensive account management, detailed transaction history with filtering options, instant fund transfers between accounts, real-time balance updates, and secure login with two-factor authentication. Implements bank-grade security protocols, encrypted data transmission, and compliance with financial regulations. Features a clean, intuitive UI that makes complex banking operations simple for end-users.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API'],
    category: 'web-app',
    image: '/images/projects/project-2.jpg',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 3,
    title: 'Movie Booking System',
    description: 'A comprehensive cinema ticket booking platform that eliminates the need for physical queues. Users can browse available showtimes, select preferred seats with a visual seat map, make secure payments via Stripe, and receive instant booking confirmations via email with QR codes. Admin features include theater management, showtime scheduling, and real-time occupancy monitoring. Integrated with automated reminder emails and support for group bookings with special pricing.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    category: 'web-app',
    image: '/images/projects/project-3.jpg',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 4,
    title: 'SnapCart',
    description: 'A next-generation quick-commerce grocery delivery application built for instant gratification. Delivers essential groceries within minutes using real-time inventory sync and smart logistics. Key features include dynamic pricing based on availability, AI-powered product recommendations based on purchase history, one-click reordering of favorites, live delivery tracking with driver location, and support for scheduled deliveries. Built with real-time WebSocket communication for seamless updates and optimized for mobile-first experience.',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    category: 'web-app',
    image: '/images/projects/project-4.jpg',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 5,
    title: 'Plant Monitoring System',
    description: 'An intelligent IoT solution for plant enthusiasts and agricultural professionals. Monitors critical soil parameters including moisture level, ambient temperature, and humidity in real-time. Features include automated watering alerts via push notifications, historical data visualization with interactive charts, predictive analysis for optimal watering schedules, and multi-device support. The dashboard displays data from multiple sensors simultaneously with customizable thresholds. Integrates MQTT protocol for reliable sensor communication and uses Chart.js for comprehensive data analytics and visualization.',
    tags: ['React', 'Node.js', 'MQTT', 'Chart.js'],
    category: 'backend',
    image: '/images/projects/project-5.jpg',
    githubUrl: '#',
  },
  {
    id: 6,
    title: 'UAF Navigation App',
    description: 'A comprehensive campus navigation mobile application developed for University of Agriculture Faisalabad students and visitors. Provides detailed indoor and outdoor maps with 3D building models, advanced building search with category filters, turn-by-turn route guidance with estimated walking time, and real-time location tracking. Includes interactive facility information, event location marking, and offline map support. Designed with user research to address campus navigation pain points, featuring an intuitive interface optimized for mobile screens and accessibility features.',
    tags: ['React Native', 'Maps API', 'TypeScript'],
    category: 'mobile',
    image: '/images/projects/project-6.jpg',
    githubUrl: '#',
  },
  {
    id: 7,
    title: 'Silent Talk',
    description: 'A privacy-focused anonymous chat application built on the principle of zero data retention and end-to-end encryption. Users can create or join temporary chat rooms without registration, ensuring complete anonymity while maintaining conversation security through military-grade encryption. Features include auto-expiring messages, typing indicators, and the ability to leave chat rooms with all personal data permanently deleted. Real-time communication powered by Socket.io ensures instant message delivery with minimal latency. Perfect for sensitive discussions, confidential consultations, or casual anonymous conversations.',
    tags: ['React', 'Node.js', 'Socket.io', 'TypeScript'],
    category: 'web-app',
    image: '/images/projects/project-7.jpg',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 8,
    title: 'Cyberpunk Portfolio',
    description: 'A bold, visually striking personal developer portfolio showcasing cyberpunk aesthetic merged with modern web design principles. Features smooth Framer Motion animations, interactive custom cursor that responds to hover states, glitch text effects, and a fully responsive dark theme optimized for all devices. Sections include projects showcase with category filtering, comprehensive skills display, testimonials carousel, and a contact form with real-time validation. Built with Next.js 13+ App Router for optimal performance, TypeScript for type safety, and Tailwind CSS for rapid styling. Demonstrates proficiency in animation libraries, responsive design, and performance optimization.',
    tags: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    category: 'ui-ux',
    image: '/images/projects/project-8.jpg',
    githubUrl: '#',
    liveUrl: '#',
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
