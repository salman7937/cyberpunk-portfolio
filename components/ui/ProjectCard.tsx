'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import CyberButton from './CyberButton'
import { cardHover } from '@/components/animations/variants'
import type { Project } from '@/lib/data'

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export default function ProjectCard({ project, featured }: ProjectCardProps) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={cardHover}
      className="flex flex-col bg-cyber-card border border-[rgba(0,245,255,0.08)] hover:border-[rgba(0,245,255,0.4)] hover:shadow-[0_0_30px_rgba(0,245,255,0.1)] transition-colors duration-300"
      style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)' }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: '220px' }}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover grayscale-[50%] hover:grayscale-0 transition-all duration-500"
        />
        {/* Hover overlay */}
        <motion.div
          variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
          className="absolute inset-0 bg-[rgba(0,245,255,0.15)] flex items-center justify-center transition-opacity"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00F5FF" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </motion.div>
        {featured && (
          <span className="absolute top-3 left-3 bg-cyber-yellow text-cyber-black font-mono text-[10px] font-bold uppercase tracking-widest px-2 py-1">
            FEATURED
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="font-mono text-[10px] text-cyber-accent border border-[rgba(0,245,255,0.15)] bg-[rgba(0,245,255,0.04)] px-2 py-0.5 uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-display font-semibold text-lg text-cyber-text tracking-wide">
          {project.title}
        </h3>

        <p className="font-body text-sm text-cyber-muted flex-1">
          {project.description}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 mt-2">
          {project.caseStudyUrl && (
            <CyberButton href={project.caseStudyUrl} variant="outline" className="text-[10px]">
              CASE STUDY →
            </CyberButton>
          )}
          {project.liveUrl && (
            <CyberButton href={project.liveUrl} variant="outline" className="text-[10px]">
              ↗ LIVE
            </CyberButton>
          )}
        </div>
      </div>
    </motion.div>
  )
}
