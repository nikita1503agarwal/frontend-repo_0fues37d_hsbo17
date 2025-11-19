function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-orange-500/20 bg-slate-900/60 p-8 sm:p-10">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-extrabold tracking-tight text-white">About the Team</h2>
              <p className="mt-3 text-orange-100/80 leading-relaxed">
                We blend the chaotic charm of classic arena shooters with clean, modern web craft. Our goal is to make portfolios that feel alive: interactive, fast, and memorable.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-orange-100/80">
                <li className="rounded-xl border border-orange-500/20 bg-black/20 px-3 py-2">Performance-focused animations</li>
                <li className="rounded-xl border border-orange-500/20 bg-black/20 px-3 py-2">Accessible, responsive layouts</li>
                <li className="rounded-xl border border-orange-500/20 bg-black/20 px-3 py-2">3D integration with Spline</li>
                <li className="rounded-xl border border-orange-500/20 bg-black/20 px-3 py-2">Friendly, playful tone</li>
              </ul>
            </div>
            <div className="h-full rounded-2xl border border-orange-500/20 bg-gradient-to-br from-slate-800 to-slate-900 p-6">
              <p className="text-sm text-orange-100/70">Toolkit</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {['React','Tailwind','Framer Motion','Spline','FastAPI'].map((t) => (
                  <span key={t} className="rounded-full border border-orange-500/30 px-2 py-0.5 text-[11px] text-orange-100/80">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
