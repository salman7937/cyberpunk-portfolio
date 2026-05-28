'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'

const links = [
  { label: 'Work',    href: '#projects'     },
  { label: 'About',   href: '#about'        },
  { label: 'Contact', href: '#contact'      },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [active,    setActive]    = useState('')
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = ['projects', 'about', 'contact']
    const observers: IntersectionObserver[] = []

    sections.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(`#${id}`) },
        { threshold: 0.3 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 md:px-12 transition-all duration-300',
          scrolled
            ? 'bg-[rgba(5,5,8,0.85)] backdrop-blur-md border-b border-[rgba(0,245,255,0.08)]'
            : 'bg-transparent'
        )}
      >
        {/* Logo */}
        <a
          href="#"
          className="font-display font-bold text-lg text-cyber-accent tracking-widest hover:text-white transition-colors"
          data-cursor="hover"
        >
          SALMAN<span className="text-cyber-muted">.DEV</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <li key={link.href} className="relative flex items-center gap-2">
              {active === link.href && (
                <motion.span
                  layoutId="nav-dot"
                  className="w-1.5 h-1.5 rounded-full bg-cyber-accent"
                />
              )}
              <a
                href={link.href}
                data-cursor="hover"
                className={clsx(
                  'font-mono text-xs uppercase tracking-widest transition-colors duration-200',
                  active === link.href ? 'text-cyber-accent' : 'text-cyber-muted hover:text-cyber-text'
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(v => !v)}
          data-cursor="hover"
          aria-label="Toggle menu"
        >
          <span className={clsx('w-6 h-px bg-cyber-accent transition-all duration-300', menuOpen && 'rotate-45 translate-y-2')} />
          <span className={clsx('w-6 h-px bg-cyber-accent transition-all duration-300', menuOpen && 'opacity-0')} />
          <span className={clsx('w-6 h-px bg-cyber-accent transition-all duration-300', menuOpen && '-rotate-45 -translate-y-2')} />
        </button>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-40 bg-cyber-dark flex flex-col items-center justify-center gap-10"
          >
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display font-bold text-3xl text-cyber-text hover:text-cyber-accent transition-colors uppercase tracking-widest"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
