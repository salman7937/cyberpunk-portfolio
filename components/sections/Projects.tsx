'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/lib/data'
import type { Category } from '@/lib/data'
import { staggerContainer, fadeInUp } from '@/components/animations/variants'

const FILTERS: { label: string; value: Category }[] = [
  { label: 'ALL',     value: 'all'     },
  { label: 'WEB APP', value: 'web-app' },
  { label: 'MOBILE',  value: 'mobile'  },
  { label: 'UI/UX',   value: 'ui-ux'  },
  { label: 'BACKEND', value: 'backend' },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Category>('all')

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  const featured  = filtered.find(p => p.featured)
  const rest      = filtered.filter(p => !p.featured)

  return (
    <section id="projects" className="py-24 md:py-32 bg-cyber-black">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="03"
          title="SELECTED WORK"
          subtitle="A selection of projects I've built — from concept to deployment."
        />

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-12">
          {FILTERS.map(f => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              data-cursor="hover"
              className="relative font-mono text-[11px] uppercase tracking-widest px-4 py-2 transition-all duration-200"
            >
              {activeFilter === f.value ? (
                <motion.span
                  layoutId="filter-bg"
                  className="absolute inset-0 bg-cyber-accent"
                />
              ) : null}
              <span className={`relative z-10 ${activeFilter === f.value ? 'text-cyber-black font-bold' : 'text-cyber-muted hover:text-cyber-text border border-[rgba(0,245,255,0.15)]'}`}>
                {f.label}
              </span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Featured Project */}
            {featured && (
              <motion.div variants={fadeInUp} className="mb-8">
                <div
                  className="flex flex-col md:flex-row bg-cyber-card border border-[rgba(0,245,255,0.08)] hover:border-[rgba(0,245,255,0.4)] hover:shadow-[0_0_30px_rgba(0,245,255,0.1)] transition-all duration-300 overflow-hidden"
                  style={{ clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)' }}
                >
                  {/* Image */}
                  <div className="relative md:w-1/2 h-64 md:h-auto bg-cyber-black flex items-center justify-center">
                    <span className="absolute top-4 left-4 bg-cyber-yellow text-cyber-black font-mono text-[10px] font-bold uppercase tracking-widest px-2 py-1 z-10">
                      FEATURED
                    </span>
                    <div className="text-[rgba(0,245,255,0.05)] font-display text-9xl font-black select-none">
                      01
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex flex-col justify-center p-8 md:w-1/2 gap-4">
                    <div className="flex flex-wrap gap-2">
                      {featured.tags.map(tag => (
                        <span key={tag} className="font-mono text-[10px] text-cyber-accent border border-[rgba(0,245,255,0.15)] bg-[rgba(0,245,255,0.04)] px-2 py-0.5 uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-display font-bold text-2xl text-cyber-text tracking-wide">
                      {featured.title}
                    </h3>
                    <p className="font-body text-sm text-cyber-muted leading-relaxed">
                      {featured.description}
                    </p>
                    <div className="flex gap-3">
                      {featured.caseStudyUrl && (
                        <a href={featured.caseStudyUrl} className="font-mono text-xs text-cyber-accent border border-[rgba(0,245,255,0.3)] px-4 py-2 hover:bg-[rgba(0,245,255,0.08)] transition-colors uppercase tracking-widest">
                          CASE STUDY →
                        </a>
                      )}
                      {featured.liveUrl && (
                        <a href={featured.liveUrl} className="font-mono text-xs text-cyber-accent border border-[rgba(0,245,255,0.3)] px-4 py-2 hover:bg-[rgba(0,245,255,0.08)] transition-colors uppercase tracking-widest">
                          ↗ LIVE
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map(project => (
                <motion.div key={project.id} variants={fadeInUp}>
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
