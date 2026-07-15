'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { testimonials } from '@/lib/data'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [paused,  setPaused]  = useState(false)

  const next = useCallback(() => setCurrent(v => (v + 1) % testimonials.length), [])
  const prev = useCallback(() => setCurrent(v => (v - 1 + testimonials.length) % testimonials.length), [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [paused, next])

  const t = testimonials[current]

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-cyber-dark relative overflow-hidden">
      {/* Giant quote decoration */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 font-display text-[200px] leading-none text-[rgba(0,245,255,0.03)] select-none pointer-events-none"
      >
        &ldquo;
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-12 relative">
        <SectionHeading
          number="04"
          title="TESTIMONIALS"
          subtitle="What clients and colleagues say."
        />

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="bg-[rgba(13,13,20,0.8)] border border-[rgba(0,245,255,0.1)] border-l-[3px] border-l-cyber-accent p-8 mb-8"
            >
              <p className="font-body text-lg italic text-cyber-text leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="w-20 h-px bg-[rgba(0,245,255,0.2)] mb-6" />
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cyber-card border border-[rgba(0,245,255,0.2)] flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-bold text-cyber-accent text-sm">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-display font-semibold text-sm text-cyber-text tracking-wide">
                    {t.name}
                  </div>
                  <div className="font-mono text-xs text-cyber-muted mt-0.5">
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={prev}
              data-cursor="hover"
              className="w-10 h-10 border border-[rgba(0,245,255,0.3)] text-cyber-accent hover:bg-[rgba(0,245,255,0.08)] hover:border-cyber-accent transition-all duration-200 flex items-center justify-center font-mono"
            >
              ←
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  data-cursor="hover"
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-cyber-accent scale-125' : 'bg-cyber-dim'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              data-cursor="hover"
              className="w-10 h-10 border border-[rgba(0,245,255,0.3)] text-cyber-accent hover:bg-[rgba(0,245,255,0.08)] hover:border-cyber-accent transition-all duration-200 flex items-center justify-center font-mono"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
