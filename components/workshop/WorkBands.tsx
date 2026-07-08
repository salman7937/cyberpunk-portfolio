import { projects, type Artifact } from '@/lib/data'
import RevealBand from './RevealBand'
import CaslDiagram from './CaslDiagram'

function ArtifactView({ artifact }: { artifact: Artifact }) {
  if (artifact.kind === 'diagram') {
    return (
      <figure>
        <CaslDiagram />
        <figcaption className="font-machine mt-2 text-graphite">
          {artifact.title}
        </figcaption>
      </figure>
    )
  }

  if (artifact.kind === 'code') {
    return (
      <figure>
        <pre className="overflow-x-auto border border-process/40 bg-terminal px-4 py-4 font-mono text-[12px] leading-relaxed text-terminal-fg">
          <code>{artifact.code}</code>
        </pre>
        <figcaption className="font-machine mt-2 text-graphite">
          {artifact.title}
        </figcaption>
      </figure>
    )
  }

  return (
    <figure>
      <pre className="overflow-x-auto border border-process/40 bg-terminal px-4 py-4 font-mono text-[12px] leading-relaxed text-terminal-fg">
        <code>{artifact.lines.join('\n')}</code>
      </pre>
      <figcaption className="font-machine mt-2 text-graphite">
        {artifact.title}
      </figcaption>
    </figure>
  )
}

export default function WorkBands() {
  return (
    <section aria-label="Selected work" className="mx-auto max-w-5xl px-6 md:px-10">
      <h2 className="font-display mb-10 text-2xl md:text-3xl">Work</h2>
      <div className="flex flex-col">
        {projects.map((p) => (
          <RevealBand key={p.name}>
            <article className="flex flex-col-reverse gap-8 py-12 md:flex-row md:gap-12 md:py-16">
              <div className="md:w-2/5">
                <h3 className="font-display text-xl md:text-2xl">{p.name}</h3>
                <p className="mt-4 text-pretty leading-relaxed">{p.description}</p>
                <p className="font-machine mt-5 text-graphite normal-case tracking-[0.08em]">
                  {p.stack}
                </p>
              </div>
              <div className="md:w-3/5">
                <ArtifactView artifact={p.artifact} />
              </div>
            </article>
            <p className="font-machine pb-2 text-graphite">{p.meta}</p>
          </RevealBand>
        ))}
      </div>
    </section>
  )
}
