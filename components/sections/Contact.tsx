'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import CyberButton from '@/components/ui/CyberButton'
import RevealOnScroll from '@/components/animations/RevealOnScroll'
import { fadeInLeft, fadeInRight } from '@/components/animations/variants'

type Status = 'idle' | 'loading' | 'success' | 'error'

const SUCCESS_LINES = [
  '> message.send()',
  '> STATUS: 200 OK',
  '> "Message delivered. I\'ll respond within 24h."',
  '> [_]',
]

export default function Contact() {
  const [form,   setForm]   = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [successLines, setSuccessLines] = useState<string[]>([])

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(v => ({ ...v, [e.target.name]: e.target.value }))
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    await new Promise(r => setTimeout(r, 1000))
    setStatus('success')

    let i = 0
    const addLine = () => {
      if (i >= SUCCESS_LINES.length) return
      setSuccessLines(v => [...v, SUCCESS_LINES[i]])
      i++
      setTimeout(addLine, 400)
    }
    addLine()
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-cyber-black relative overflow-hidden">
      {/* Gradient mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_50%,rgba(124,58,237,0.06),transparent)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Left — Info */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:w-2/5"
          >
            <SectionHeading number="05" title="CONTACT" />

            <h3 className="font-display font-black text-4xl md:text-5xl text-cyber-text uppercase leading-tight mb-6">
              LET&apos;S BUILD<br />
              <span className="text-cyber-accent">SOMETHING.</span>
            </h3>

            <p className="font-body text-base text-cyber-muted mb-10 leading-relaxed">
              Open to freelance projects, full-time opportunities, and interesting collaborations.
            </p>

            <ul className="space-y-4">
              {[
                { icon: '✉', label: 'salmanahmed7937@gmail.com',       href: 'mailto:salmanahmed7937@gmail.com' },
                { icon: '🔗', label: 'linkedin.com/in/salman',   href: '#' },
                { icon: '🐙', label: 'https://github.com/salman7937',        href: '#' },
                { icon: '📍', label: 'Pakistan',                 href: '#' },
              ].map(item => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    data-cursor="hover"
                    className="flex items-center gap-3 font-body text-sm text-cyber-muted hover:text-cyber-accent transition-colors duration-200 group"
                  >
                    <span className="text-cyber-accent w-5">{item.icon}</span>
                    <span className="group-hover:underline underline-offset-2">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex-1"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-[rgba(0,245,255,0.02)] border border-[rgba(0,245,255,0.1)] p-8 font-mono text-sm min-h-64"
                >
                  {successLines.map((line, i) => (
                    <div key={i} className={`mb-2 ${line.startsWith('>') ? 'text-cyber-accent' : 'text-cyber-text'}`}>
                      {line}
                    </div>
                  ))}
                  {successLines.length < SUCCESS_LINES.length && (
                    <span className="animate-blink text-cyber-accent">|</span>
                  )}
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={onSubmit}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      required
                      placeholder="YOUR NAME"
                      className="cyber-input"
                    />
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={onChange}
                      required
                      placeholder="EMAIL"
                      className="cyber-input"
                    />
                  </div>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={onChange}
                    required
                    placeholder="SUBJECT"
                    className="cyber-input"
                  />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    required
                    rows={6}
                    placeholder="MESSAGE"
                    className="cyber-input resize-none"
                  />
                  <div className="pt-2">
                    <CyberButton type="submit" variant="primary" className="w-full justify-center">
                      {status === 'loading' ? 'SENDING...' : 'SEND MESSAGE →'}
                    </CyberButton>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
