import Terminal from '@/components/workshop/Terminal'
import WorkBands from '@/components/workshop/WorkBands'
import ChangelogRail from '@/components/workshop/ChangelogRail'
import LocalClock from '@/components/workshop/LocalClock'
import { EMAIL, NAME } from '@/lib/data'

export default function Home() {
  return (
    <>
      <ChangelogRail />

      <main>
        {/* Hero — a thesis, not a greeting. The terminal is the invitation. */}
        <header className="flex min-h-svh flex-col justify-between px-6 pb-8 pt-20 md:px-10">
          <div className="mx-auto w-full max-w-5xl text-center">
            <h1 className="font-display text-balance text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.05]">
              I build systems that make decisions.
            </h1>
            <p className="mt-6 text-graphite">
              {NAME} — full-stack and agent engineering. Four years, shipped.
            </p>
          </div>
          <div className="mx-auto mt-12 w-full max-w-3xl">
            <Terminal />
          </div>
        </header>

        {/* Work — full-width bands, not cards */}
        <div className="py-16 md:py-24">
          <WorkBands />
        </div>

        {/* About — 120 words max, what I do on a Tuesday */}
        <section
          aria-label="About"
          className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24"
        >
          <h2 className="font-display mb-8 text-2xl md:text-3xl">About</h2>
          <div className="max-w-[62ch]">
            <p className="text-pretty leading-relaxed">
              On a Tuesday I&apos;m usually reading agent traces before I read
              email. I write TypeScript across the whole stack — Next.js in
              front, Postgres behind, and increasingly a model in the middle
              making calls that used to need a person. I work from Pakistan on
              European hours. I test the failure paths first, because that is
              where systems earn trust. When something breaks in production, I
              want the logs to already know why. I ship small, measure, and
              ship again.
            </p>
          </div>
        </section>

        {/* Contact — a single line. No form. */}
        <section
          aria-label="Contact"
          className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24"
        >
          <p className="text-lg">
            <a href={`mailto:${EMAIL}`} className="contact-link">
              {EMAIL}
            </a>
          </p>
        </section>
      </main>

      <footer className="mx-auto max-w-5xl px-6 pb-10 md:px-10">
        <div className="rule mb-4 w-full" />
        <p className="font-machine text-graphite">
          Pakistan · <LocalClock />
        </p>
      </footer>
    </>
  )
}
