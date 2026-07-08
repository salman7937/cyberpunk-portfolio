/**
 * Live changelog of the page itself — real build values only.
 * If the values are unavailable, the element is hidden entirely. Never faked.
 */
export default function ChangelogRail() {
  const sha = process.env.VERCEL_GIT_COMMIT_SHA
  if (!sha) return null

  const builtAt = new Date().toISOString().slice(0, 16).replace('T', ' ')

  return (
    <div
      aria-hidden="true"
      className="fixed left-2 top-1/2 z-10 hidden -translate-y-1/2 lg:block"
    >
      <p
        className="font-mono text-[11px] uppercase tracking-[0.12em] text-graphite"
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
      >
        commit {sha.slice(0, 7)} · built {builtAt} utc · under maintenance
      </p>
    </div>
  )
}
