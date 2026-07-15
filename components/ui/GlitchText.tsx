import clsx from 'clsx'

type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'

interface GlitchTextProps {
  as?: Tag
  children: string
  className?: string
}

export default function GlitchText({ as: Tag = 'span', children, className }: GlitchTextProps) {
  return (
    <Tag
      className={clsx('glitch-text', className)}
      data-text={children}
    >
      {children}
    </Tag>
  )
}
