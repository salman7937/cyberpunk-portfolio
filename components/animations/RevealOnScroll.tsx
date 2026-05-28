'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { fadeInUp } from './variants'
import type { Variants } from 'framer-motion'

interface RevealOnScrollProps {
  children: React.ReactNode
  delay?: number
  variants?: Variants
  className?: string
}

export default function RevealOnScroll({
  children,
  delay = 0,
  variants = fadeInUp,
  className,
}: RevealOnScrollProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
