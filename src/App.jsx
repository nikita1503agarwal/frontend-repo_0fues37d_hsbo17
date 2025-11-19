import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Decorative background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_0%,#fb923c0f,transparent),radial-gradient(800px_400px_at_90%_10%,#f973160f,transparent)]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-orange-100/60">© {new Date().getFullYear()} Team Fotrees 2 — All rights reserved.</p>
          <div className="text-xs text-orange-100/60">Built with React, Tailwind, and a playful spirit.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
