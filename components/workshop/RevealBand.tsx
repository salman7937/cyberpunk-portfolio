'use client'

import { motion, useReducedMotion } from 'framer-motion'

/**
 * The entire scroll-animation budget for the page:
 * the rule draws itself left-to-right over 600ms,
 * then the content fades up 12px.
 */
export default function RevealBand({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion()

  if (reduced) {
    return (
      <div>
        <div className="rule w-full" />
        {children}
      </div>
    )
  }

  return (
    <div>
      <motion.div
        className="rule origin-left"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </div>
  )
}
