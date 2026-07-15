'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import GlitchText from '@/components/ui/GlitchText'
import CyberButton from '@/components/ui/CyberButton'
import { fadeInUp, staggerContainer } from '@/components/animations/variants'

const EYEBROW = '// FULL-STACK DEVELOPER'

export default function Hero() {
  const [typed, setTyped]   = useState('')
  const [done,  setDone]    = useState(false)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setTyped(EYEBROW.slice(0, i + 1))
      i++
      if (i >= EYEBROW.length) { clearInterval(interval); setDone(true) }
    }, 60)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-svh flex flex-col items-center justify-center overflow-hidden bg-cyber-black">

      {/* Animated Grid */}
      <div className="hero-grid absolute inset-0" />

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto"
      >
        {/* Status Badge */}
        <motion.div variants={fadeInUp} className="mb-8">
          <div className="status-badge">
            <span className="status-dot" />
            AVAILABLE FOR WORK
          </div>
        </motion.div>

        {/* Eyebrow Typing */}
        <motion.div variants={fadeInUp} className="mb-6 h-6">
          <span className="font-mono text-sm md:text-base text-cyber-muted tracking-widest">
            {typed}
            {!done && <span className="animate-blink text-cyber-accent">|</span>}
          </span>
        </motion.div>

        {/* Hero Name */}
        <motion.div variants={fadeInUp} className="mb-8">
          <GlitchText
            as="h1"
            className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-cyber-text leading-none tracking-tight uppercase"
          >
            SALMAN.
          </GlitchText>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeInUp}
          className="font-body text-base md:text-lg text-cyber-muted max-w-xl mb-10 leading-relaxed"
        >
          Building digital experiences that live at the intersection of code and design.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center">
          <CyberButton href="#projects" variant="primary">
            VIEW WORK →
          </CyberButton>
          <CyberButton href="/cv.pdf" variant="outline">
            DOWNLOAD CV
          </CyberButton>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-cyber-dim uppercase tracking-[0.3em]">SCROLL</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="text-cyber-accent"
        >
          ↓
        </motion.div>
      </motion.div>

      {/* Bottom left — vertical scroll text */}
      <div className="hidden md:flex absolute bottom-10 left-8 items-center gap-3">
        <div
          className="font-mono text-[10px] text-cyber-dim uppercase tracking-[0.3em]"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          SCROLL
        </div>
        <div className="w-px h-12 bg-[rgba(0,245,255,0.2)]" />
      </div>

      {/* Bottom right — section counter */}
      <div className="hidden md:block absolute bottom-10 right-8 font-mono text-[10px] text-cyber-dim tracking-widest">
        001 / 005
      </div>
    </section>
  )
}
