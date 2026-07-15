'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import SectionHeading from '@/components/ui/SectionHeading'
import RevealOnScroll from '@/components/animations/RevealOnScroll'
import { fadeInLeft, fadeInRight, staggerContainer, fadeInUp } from '@/components/animations/variants'

const TERMINAL_LINES = [
  { type: 'prompt', text: '> whoami' },
  { type: 'response', text: 'Salman — Full-Stack Developer & Designer' },
  { type: 'prompt', text: '> location' },
  { type: 'response', text: 'Pakistan 🌐' },
  { type: 'prompt', text: '> status' },
  { type: 'response', text: '✓ Available for freelance & full-time' },
]

const SKILLS = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Figma', 'PostgreSQL', 'Docker', 'Nestjs', 'expressjs']
const SKILL_LEVELS: Record<string, string> = {
  React: '████████░░',
  'Next.js': '█████████░',
  TypeScript: '████████░░',
  'Node.js': '███████░░░',
  Figma: '███████░░░',
  PostgreSQL: '██████░░░░',
  Docker: '█████░░░░░',
  Nestjs: '█████░░░░░',
  expressjs: '█████░░░░░',
}

function TerminalBlock() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  const [visibleLines, setVisibleLines] = useState<number>(0)
  const [typedText, setTypedText] = useState('')
  const [currentLineIdx, setCurrentLineIdx] = useState(0)

  useEffect(() => {
    if (!inView) return

    let lineIdx = 0
    let charIdx = 0

    const next = () => {
      if (lineIdx >= TERMINAL_LINES.length) return
      const line = TERMINAL_LINES[lineIdx]
      charIdx = 0

      const typeChar = () => {
        setTypedText(line.text.slice(0, charIdx + 1))
        charIdx++
        if (charIdx < line.text.length) {
          setTimeout(typeChar, 40)
        } else {
          setVisibleLines(v => v + 1)
          setTypedText('')
          setCurrentLineIdx(v => v + 1)
          lineIdx++
          setTimeout(next, 350)
        }
      }
      typeChar()
    }

    next()
  }, [inView])

  return (
    <div
      ref={ref}
      className="bg-[rgba(0,245,255,0.02)] border border-[rgba(0,245,255,0.1)] p-5 font-mono text-sm mb-6"
    >
      {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
        <div
          key={i}
          className={line.type === 'prompt' ? 'text-cyber-accent' : 'text-cyber-text pl-2 mb-1'}
        >
          {line.text}
        </div>
      ))}
      {currentLineIdx < TERMINAL_LINES.length && (
        <div className={TERMINAL_LINES[currentLineIdx].type === 'prompt' ? 'text-cyber-accent' : 'text-cyber-text pl-2'}>
          {typedText}
          <span className="animate-blink text-cyber-accent">|</span>
        </div>
      )}
    </div>
  )
}

export default function About() {
  const [tooltip, setTooltip] = useState<string | null>(null)

  return (
    <section id="about" className="py-24 md:py-32 bg-cyber-dark relative overflow-hidden">
      {/* Purple gradient bleed */}
      <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-[rgba(124,58,237,0.04)] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-16 items-start">

          {/* Left — Image */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full md:w-5/12 relative flex-shrink-0"
          >
            <div className="relative group">
              {/* Corner decorations */}
              <svg className="absolute -top-3 -left-3 w-8 h-8 text-cyber-accent z-10" viewBox="0 0 32 32" fill="none">
                <path d="M1 31V1H31" stroke="currentColor" strokeWidth="2"
                  strokeDasharray="60" strokeDashoffset="60"
                  style={{ animation: 'draw 1s 0.5s forwards', strokeDashoffset: 60 }}
                />
              </svg>
              <svg className="absolute -bottom-3 -right-3 w-8 h-8 text-cyber-accent z-10" viewBox="0 0 32 32" fill="none">
                <path d="M31 1V31H1" stroke="currentColor" strokeWidth="2"
                  strokeDasharray="60" strokeDashoffset="60"
                  style={{ animation: 'draw 1s 0.8s forwards', strokeDashoffset: 60 }}
                />
              </svg>

              {/* Glitch scan line overlay */}
              <motion.div
                className="absolute inset-0 z-20 pointer-events-none overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyber-accent to-transparent opacity-60"
                  animate={{ top: ['0%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
                />
              </motion.div>

              {/* Neon glow border animation */}
              <motion.div
                className="absolute inset-0 z-10 pointer-events-none border border-cyber-accent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                animate={{ boxShadow: ['0 0 10px rgba(0,245,255,0.2)', '0 0 30px rgba(0,245,255,0.5)', '0 0 10px rgba(0,245,255,0.2)'] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Photo */}
              <motion.div
                className="aspect-[4/5] bg-cyber-card overflow-hidden relative"
                initial={{ scale: 1.1, opacity: 0, filter: 'brightness(0) saturate(0)' }}
                whileInView={{ scale: 1, opacity: 1, filter: 'brightness(1) saturate(1)' }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                <Image
                  src="/images/salman.png"
                  alt="Salman"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Cyberpunk color tint overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,245,255,0.08)] via-transparent to-[rgba(124,58,237,0.06)] pointer-events-none" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex-1"
          >
            <SectionHeading
              number="02"
              title="ABOUT ME"
            />

            <TerminalBlock />

            <RevealOnScroll delay={0.1}>
              <p className="font-body text-base text-cyber-muted leading-relaxed mb-4">
                I&apos;m a full-stack developer passionate about building fast, beautiful, and functional digital products.
                With expertise spanning frontend interfaces to backend systems, I bridge the gap between great design and solid engineering.
              </p>
              <p className="font-body text-base text-cyber-muted leading-relaxed mb-8">
                Currently focused on Next.js applications, API design, and crafting pixel-perfect UIs
                that perform at scale.
              </p>
            </RevealOnScroll>

            {/* Skills */}
            <RevealOnScroll delay={0.2}>
              <div className="flex flex-wrap gap-2 mb-10 relative">
                {SKILLS.map(skill => (
                  <div key={skill} className="relative group">
                    <span
                      className="font-mono text-[11px] text-cyber-accent border border-[rgba(0,245,255,0.15)] bg-[rgba(0,245,255,0.04)] px-3 py-1.5 uppercase tracking-wider cursor-default hover:border-cyber-accent transition-colors duration-200 block"
                      onMouseEnter={() => setTooltip(skill)}
                      onMouseLeave={() => setTooltip(null)}
                    >
                      {skill}
                    </span>
                    {tooltip === skill && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-cyber-card border border-[rgba(0,245,255,0.2)] px-3 py-2 whitespace-nowrap z-10">
                        <span className="font-mono text-[10px] text-cyber-accent">[{SKILL_LEVELS[skill]}]</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </RevealOnScroll>

            {/* Stats */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4 border-t border-[rgba(0,245,255,0.08)] pt-8"
            >
              {[
                { number: '1',  label: 'YEAR' },
                { number: '8+', label: 'PROJECTS' },
                { number: '100%', label: 'REMOTE AND ON-SITE' },
              ].map(stat => (
                <motion.div key={stat.label} variants={fadeInUp} className="text-center">
                  <div className="font-display font-bold text-3xl md:text-4xl text-cyber-accent mb-1">
                    {stat.number}
                  </div>
                  <div className="font-mono text-[10px] text-cyber-dim uppercase tracking-widest">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  )
}
