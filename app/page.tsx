import Navbar from '@/components/layout/Navbar'
import NoiseOverlay from '@/components/layout/NoiseOverlay'
import CustomCursor from '@/components/layout/CustomCursor'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      {/* Global overlays */}
      <CustomCursor />
      <NoiseOverlay />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-[rgba(0,245,255,0.06)] bg-cyber-black">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display font-bold text-sm text-cyber-accent tracking-widest">
            SALMAN<span className="text-cyber-dim">.DEV</span>
          </span>
          <span className="font-mono text-xs text-cyber-dim tracking-wider">
            © {new Date().getFullYear()} — BUILT WITH NEXT.JS + FRAMER MOTION
          </span>
        </div>
      </footer>
    </>
  )
}
