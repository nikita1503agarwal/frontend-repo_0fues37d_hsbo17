import { motion } from 'framer-motion'

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 -z-10 opacity-40 bg-[radial-gradient(600px_200px_at_10%_10%,#fb923c20,transparent),radial-gradient(800px_300px_at_90%_20%,#f9731620,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-white/5 px-3 py-1 text-xs text-orange-200/80 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
              Interactive TF2-inspired portfolio
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
              Team Fotrees 2
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500"> Creative Portfolio</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-orange-100/80 max-w-xl">
              A playful, modern showcase for your classes, loadouts, and highlight reels. Built with smooth motion, warm gradients, and an interactive 3D centerpiece.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#projects" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-rose-600 px-5 py-3 text-white font-semibold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-shadow">View Projects</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-orange-500/30 px-5 py-3 text-orange-100/90 hover:bg-white/5">Contact</a>
            </div>
          </div>

          {/* Spline 3D embed */}
          <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-2xl border border-orange-500/20 bg-black/20 overflow-hidden">
            <iframe
              src="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              className="w-full h-full"
              title="Interactive 3D"
              frameBorder="0"
              loading="lazy"
              allow="autoplay; fullscreen"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
