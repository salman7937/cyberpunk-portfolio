'use client'

import { useRef } from 'react'
import clsx from 'clsx'

interface CyberButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'outline'
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
  target?: string
  download?: boolean | string
}

export default function CyberButton({
  children,
  variant = 'outline',
  href,
  onClick,
  className,
  type = 'button',
  target,
  download,
}: CyberButtonProps) {
  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null)

  const onMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.3
    const dy = (e.clientY - (rect.top  + rect.height / 2)) * 0.3
    ref.current.style.transform = `translate(${dx}px, ${dy}px)`
  }
  const onMouseLeave = () => {
    if (!ref.current) return
    ref.current.style.transform = 'translate(0, 0)'
  }

  const base = clsx(
    'inline-flex items-center gap-2 h-11 px-7',
    'font-mono text-xs font-bold uppercase tracking-widest',
    'transition-all duration-200',
    '[clip-path:polygon(8px_0,100%_0,calc(100%-8px)_100%,0_100%)]',
    className
  )

  const variants = {
    primary: clsx(
      base,
      'bg-cyber-magenta text-cyber-black',
      'hover:shadow-[0_0_20px_rgba(255,0,170,0.6),0_0_40px_rgba(255,0,170,0.3)]',
      'hover:scale-105'
    ),
    outline: clsx(
      base,
      'bg-transparent border border-cyber-accent text-cyber-accent',
      'hover:bg-[rgba(0,245,255,0.08)]',
      'hover:shadow-[0_0_20px_rgba(0,245,255,0.4)]'
    ),
  }

  const props = {
    ref,
    onMouseMove,
    onMouseLeave,
    className: variants[variant],
    'data-cursor': 'hover',
  }

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        download={download}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
