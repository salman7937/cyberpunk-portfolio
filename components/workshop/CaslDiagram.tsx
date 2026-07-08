/**
 * The Migrio CASL permission model, drawn in --process line work.
 * One ability definition, three enforcement points.
 */
export default function CaslDiagram() {
  const stroke = 'var(--process)'
  const text = 'var(--foreground)'
  const dim = 'var(--graphite)'

  return (
    <svg
      viewBox="0 0 560 300"
      className="w-full"
      role="img"
      aria-label="Migrio CASL permission model diagram: three roles feed one ability definition, which is enforced in middleware, UI, and database queries"
    >
      <g
        fontFamily="var(--font-jetbrains), monospace"
        fontSize="11"
        letterSpacing="0.08em"
      >
        {/* Roles */}
        {[
          { x: 20, label: 'ADMIN' },
          { x: 20, label: 'AGENT', y: 120 },
          { x: 20, label: 'APPLICANT', y: 220 },
        ].map((r, i) => {
          const y = r.y ?? 20
          return (
            <g key={r.label}>
              <rect x={20} y={y} width={110} height={44} fill="none" stroke={stroke} />
              <text x={75} y={y + 27} textAnchor="middle" fill={text}>
                {r.label}
              </text>
              {/* line to ability */}
              <line x1={130} y1={y + 22} x2={220} y2={150} stroke={stroke} />
              {i === 0 && null}
            </g>
          )
        })}

        {/* Ability definition */}
        <rect x={220} y={118} width={130} height={64} fill="none" stroke={stroke} strokeWidth="2" />
        <text x={285} y={145} textAnchor="middle" fill={text}>
          defineAbility()
        </text>
        <text x={285} y={165} textAnchor="middle" fill={dim}>
          one definition
        </text>

        {/* Lines to enforcement points */}
        <line x1={350} y1={150} x2={420} y2={42} stroke={stroke} />
        <line x1={350} y1={150} x2={420} y2={150} stroke={stroke} />
        <line x1={350} y1={150} x2={420} y2={258} stroke={stroke} />

        {/* Enforcement points */}
        {[
          { y: 20, l1: 'MIDDLEWARE', l2: 'route guards' },
          { y: 128, l1: '<Can /> UI', l2: 'render gates' },
          { y: 236, l1: 'accessibleBy', l2: 'query filters' },
        ].map((e) => (
          <g key={e.l1}>
            <rect x={420} y={e.y} width={120} height={44} fill="none" stroke={stroke} />
            <text x={480} y={e.y + 19} textAnchor="middle" fill={text}>
              {e.l1}
            </text>
            <text x={480} y={e.y + 35} textAnchor="middle" fill={dim} fontSize="10">
              {e.l2}
            </text>
          </g>
        ))}

        <text x={285} y={292} textAnchor="middle" fill={dim} fontSize="10">
          3 roles · 1 model · 3 enforcement points
        </text>
      </g>
    </svg>
  )
}
