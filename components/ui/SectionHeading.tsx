interface SectionHeadingProps {
  number: string
  title: string
  subtitle?: string
}

export default function SectionHeading({ number, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-4">
        <span className="font-mono text-xs text-cyber-accent uppercase tracking-[0.2em]">
          [{number}]
        </span>
        <div className="flex-1 h-px bg-[rgba(0,245,255,0.15)]" />
      </div>
      <h2 className="font-display font-bold text-4xl md:text-5xl text-cyber-text tracking-wide uppercase">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 font-body text-base text-cyber-muted">{subtitle}</p>
      )}
    </div>
  )
}
