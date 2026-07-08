'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { EMAIL, NAME } from '@/lib/data'

const BOOT_SCRIPT = [
  '> analyze repo structure',
  '  ├ reading package.json',
  '  ├ 14 dependencies · 3 dev · 0 vulnerabilities',
  '  ├ detected: next@16, tailwind@4, framer-motion',
  '  └ inferring architecture...',
  '> hypothesis: server-first, edge-deployed',
  '> confidence 0.87',
].join('\n')

const SUGGESTIONS = [
  "what's the hardest bug he's fixed?",
  'is he available?',
  'show me the CASL model',
]

const CHAR_MS = 18
const MAX_MESSAGES = 5
const FALLBACK = `> connection lost · here's what I know: ${NAME} is a full-stack and agent engineer, 4 years shipping, based in Pakistan. Email ${EMAIL}.`

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return reduced
}

export default function Terminal() {
  const [output, setOutput] = useState('')
  const [phase, setPhase] = useState<'booting' | 'ready' | 'streaming' | 'limited'>('booting')
  const [input, setInput] = useState('')
  const [sent, setSent] = useState(0)
  const reduced = usePrefersReducedMotion()
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const bootedRef = useRef(false)

  // Boot trace — streams char by char at 18ms, instant when reduced motion
  useEffect(() => {
    if (bootedRef.current) return
    bootedRef.current = true
    if (reduced) {
      setOutput(BOOT_SCRIPT)
      setPhase('ready')
      return
    }
    let i = 0
    const timer = setInterval(() => {
      i += 1
      setOutput(BOOT_SCRIPT.slice(0, i))
      if (i >= BOOT_SCRIPT.length) {
        clearInterval(timer)
        setPhase('ready')
      }
    }, CHAR_MS)
    return () => clearInterval(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [output, phase])

  const ask = useCallback(
    async (question: string) => {
      const q = question.trim()
      if (!q || phase === 'streaming' || phase === 'booting') return
      if (sent >= MAX_MESSAGES) {
        setPhase('limited')
        return
      }
      setSent((n) => n + 1)
      setInput('')
      setPhase('streaming')
      setOutput((o) => `${o}\n\n> ${q}\n`)

      try {
        const res = await fetch('/api/agent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ question: q }),
        })
        if (!res.ok || !res.body) throw new Error('api')

        const reader = res.body.getReader()
        const decoder = new TextDecoder()
        let first = true
        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          const chunk = decoder.decode(value, { stream: true })
          setOutput((o) => (first ? `${o}> ${chunk}` : o + chunk))
          first = false
        }
        if (first) throw new Error('empty')
      } catch {
        setOutput((o) => `${o}> connection lost · reconnecting`)
        await new Promise((r) => setTimeout(r, 2000))
        setOutput((o) => o.replace(/> connection lost · reconnecting$/, FALLBACK))
      } finally {
        setPhase(sent + 1 >= MAX_MESSAGES ? 'limited' : 'ready')
      }
    },
    [phase, sent],
  )

  const interactive = phase === 'ready'

  return (
    <div className="w-full border border-process bg-terminal text-terminal-fg">
      <div className="flex items-center justify-between border-b border-process/40 px-4 py-2">
        <span className="font-machine text-terminal-fg/60">agent · {NAME.toLowerCase()}.dev</span>
        <span className="font-machine text-terminal-fg/60" aria-hidden="true">
          {phase === 'streaming' ? 'thinking' : phase}
        </span>
      </div>

      <div
        ref={scrollRef}
        className="h-64 overflow-y-auto whitespace-pre-wrap px-4 py-3 font-mono text-[13px] leading-relaxed md:h-72"
        role="log"
        aria-live="polite"
        aria-label="Agent terminal output"
      >
        {output}
        {phase === 'streaming' && <Cursor />}
        {phase === 'limited' && `\n\n> session limit reached · email ${EMAIL}`}
      </div>

      {phase !== 'limited' && (
        <form
          className="flex items-center gap-2 border-t border-process/40 px-4 py-3"
          onSubmit={(e) => {
            e.preventDefault()
            ask(input)
          }}
        >
          <span className="font-mono text-[13px]" aria-hidden="true">
            {'>'}
          </span>
          {interactive && !input && <Cursor />}
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (
                e.key === 'Enter' &&
                (e.nativeEvent.isComposing || e.keyCode === 229)
              ) {
                e.preventDefault()
              }
            }}
            disabled={!interactive}
            placeholder={interactive ? `ask me something about ${NAME}'s work` : ''}
            aria-label={`Ask a question about ${NAME}'s work`}
            className="flex-1 bg-transparent font-mono text-[13px] text-terminal-fg placeholder:text-terminal-fg/40 focus:outline-none disabled:opacity-50"
          />
        </form>
      )}

      <div className="flex flex-wrap gap-x-6 gap-y-1 border-t border-process/40 px-4 py-2">
        {SUGGESTIONS.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => ask(s)}
            disabled={!interactive}
            className="font-machine text-terminal-fg/50 transition-colors hover:text-terminal-fg disabled:cursor-default disabled:opacity-40"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  )
}

function Cursor() {
  return (
    <span
      aria-hidden="true"
      className="inline-block h-[15px] w-[7px] translate-y-[2px] animate-[terminal-blink_1060ms_step-end_infinite] bg-pencil"
      style={{ animationDuration: '1060ms' }}
    />
  )
}
