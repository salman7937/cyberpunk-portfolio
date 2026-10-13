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
    githubUrl: 'https://github.com/salman7937/e-commerce',
    featured: true,
  },
  {
    id: 2,
    title: 'Secure Banking System',
    description: 'NestJS + MongoDB banking API with JWT access and refresh tokens in HttpOnly cookies, TOTP two-factor login, account lockout after repeated failed attempts, and customer / admin role guards. Fund transfers run in MongoDB ACID transactions, so the debit, credit and transaction record either all commit or all roll back. The Next.js 14 frontend uses React Query, Zustand and React Hook Form + Zod, while the API is hardened with Helmet, throttling and Swagger docs, and tested with Vitest and Playwright.',
    tags: ['Next.js 14', 'TypeScript', 'NestJS', 'MongoDB', 'Redis', 'Bull', 'React Query', 'Zustand', 'Vitest', 'Playwright', 'Docker'],
    category: 'web-app',
    image: '/images/projects/project-2.jpg',
    githubUrl: 'https://github.com/salman7937/banking',
  },
  {
    id: 3,
    title: 'Movie Booking Platform',
    description: 'A seat reservation system where seats are held with short-lived Redis locks (Redlock) that expire if checkout is abandoned, so two users can never book the same seat; live seat availability is pushed to all viewers with Server-Sent Events. NestJS API on PostgreSQL via Prisma with booking writes in transactions; JWT, Google OAuth and TOTP two-factor login. Includes Stripe payments, QR-code PDF tickets and email notifications through Bull queues, with PostgreSQL and Redis running in Docker Compose.',
    tags: ['NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'Redis', 'Bull', 'Stripe', 'SSE', 'Docker', 'Turborepo'],
    category: 'web-app',
    image: '/images/projects/project-3.jpg',
    githubUrl: 'https://github.com/salman7937/reserve-seats',
  },
  {
    id: 4,
    title: 'SnapCart',
    description: 'A next-generation quick-commerce grocery delivery application built for instant gratification. Delivers essential groceries within minutes using real-time inventory sync and smart logistics. Key features include dynamic pricing based on availability, AI-powered product recommendations based on purchase history, one-click reordering of favorites, live delivery tracking with driver location, and support for scheduled deliveries. Built with real-time WebSocket communication for seamless updates and optimized for mobile-first experience.',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    category: 'web-app',
    image: '/images/projects/project-4.jpg',
    githubUrl: 'https://github.com/salman7937/snapcart',
    liveUrl: '#',
  },
  {
    id: 5,
    title: 'Plant Care',
    description: 'A cross-platform React Native + Expo app for tracking plants and their watering and care schedules. Single codebase for Android and iOS, built and released as an installable Android APK through Expo.',
    tags: ['React Native', 'Expo'],
    category: 'mobile',
    image: '/images/projects/project-5.jpg',
    githubUrl: 'https://github.com/salman7937/plant-care',
  },
  {
    id: 6,
    title: 'UAF Navigation App',
    description: 'A comprehensive campus navigation mobile application developed for University of Agriculture Faisalabad students and visitors. Provides detailed indoor and outdoor maps with 3D building models, advanced building search with category filters, turn-by-turn route guidance with estimated walking time, and real-time location tracking. Includes interactive facility information, event location marking, and offline map support. Designed with user research to address campus navigation pain points, featuring an intuitive interface optimized for mobile screens and accessibility features.',
    tags: ['React Native', 'Maps API', 'TypeScript'],
    category: 'mobile',
    image: '/images/projects/project-6.jpg',
    githubUrl: 'https://github.com/salman7937/university-map',
  },
  {
    id: 7,
    title: 'SilentTalk',
    description: 'Urdu sign language recognition that translates signs from webcam or video into text, using MediaPipe hand landmarks per frame. A dense model classifies static signs, and an LSTM over 30-frame sequences recognises movement-based words. Real-time inference sends a sliding 30-frame buffer to a Flask API every second, with a confidence threshold to cut false positives.',
    tags: ['Python', 'Flask', 'TensorFlow/Keras', 'MediaPipe', 'OpenCV', 'React'],
    category: 'web-app',
    image: '/images/projects/project-7.jpg',
    githubUrl: 'https://github.com/salman7937/silenttalkk',
  },
  {
    id: 8,
    title: 'Cyberpunk Portfolio',
    description: 'A bold, visually striking personal developer portfolio showcasing cyberpunk aesthetic merged with modern web design principles. Features smooth Framer Motion animations, interactive custom cursor that responds to hover states, glitch text effects, and a fully responsive dark theme optimized for all devices. Sections include projects showcase with category filtering, comprehensive skills display, testimonials carousel, and a contact form with real-time validation. Built with Next.js 13+ App Router for optimal performance, TypeScript for type safety, and Tailwind CSS for rapid styling. Demonstrates proficiency in animation libraries, responsive design, and performance optimization.',
    tags: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    category: 'ui-ux',
    image: '/images/projects/project-8.jpg',
    githubUrl: 'https://github.com/salman7937/cyberpunk-portfolio',
    liveUrl: 'https://cyberpunk-portfolio-lemon.vercel.app/',
  },
  {
    id: 9,
    title: 'GrandStay — Hotel Management System',
    description: 'Room inventory, reservations, payments and an admin dashboard, with availability checks that reject overlapping bookings for the same room. Express + TypeScript API on MongoDB with Zod validation, JWT cookie auth, Helmet and rate limiting; Cloudinary image uploads, Stripe payments and email confirmations. Next.js frontend with Redux Toolkit; API performance checked with k6 load tests.',
    tags: ['Next.js', 'Redux Toolkit', 'Express', 'TypeScript', 'MongoDB', 'Zod', 'Stripe', 'Cloudinary', 'k6', 'Docker'],
    category: 'web-app',
    image: '/images/projects/project-9.jpg',
    githubUrl: 'https://github.com/salman7937/hotel-management',
    liveUrl: 'https://hotel-management-8lu1-theta.vercel.app/',
  },
  {
    id: 10,
    title: 'FitCheck — AI CV Match & ATS Optimizer',
    description: 'Scores a CV against a job description on keyword match, experience, ATS safety and overall fit, then rewrites it in one click. PDF / DOCX uploads are parsed into a strict Zod-typed schema, and a no-fabrication layer rejects AI rewrites that invent companies, dates or skills. Claude and Gemini APIs with Upstash Redis rate limiting on AI endpoints; Firebase storage and ATS-friendly PDF export.',
    tags: ['Next.js', 'TypeScript', 'Claude & Gemini APIs', 'Zod', 'Firebase', 'Upstash Redis', 'Vitest'],
    category: 'web-app',
    image: '/images/projects/project-10.jpg',
    githubUrl: 'https://github.com/salman7937/fitcheck',
    liveUrl: 'https://fitcheck-orcin-ten.vercel.app/',
  },
  {
    id: 11,
    title: 'Snappy — Real-Time Chat App',
    description: 'Real-time messaging over Socket.io with sent / delivered / read ticks, typing indicators, online status, reactions, image sharing and voice notes; users find each other by username instead of seeing every registered user. Block / unblock is enforced in both the REST API and every Socket.io handler, so a blocked user cannot bypass it over the socket. Presence uses targeted emits sent only to the user’s contacts instead of a global broadcast, keeping the WhatsApp-style privacy intact.',
    tags: ['React', 'styled-components', 'Node.js', 'Express', 'Socket.io', 'MongoDB'],
    category: 'web-app',
    image: '/images/projects/project-11.jpg',
    githubUrl: 'https://github.com/salman7937/chat-app-react-nodejs',
    liveUrl: 'https://chat-app-react-nodejs-pi.vercel.app/',
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
