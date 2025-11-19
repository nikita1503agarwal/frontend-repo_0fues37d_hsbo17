function ProjectCard({ title, desc, tags, image }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-orange-500/20 bg-slate-900/60 p-5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10">
      <div className="aspect-[16/10] overflow-hidden rounded-xl mb-4 bg-gradient-to-br from-slate-800 to-slate-900">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        ) : (
          <div className="h-full w-full grid place-items-center text-orange-200/40 text-sm">preview</div>
        )}
      </div>
      <h3 className="text-white font-semibold text-lg">{title}</h3>
      <p className="mt-1 text-sm text-orange-100/70">{desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags?.map((t) => (
          <span key={t} className="rounded-full border border-orange-500/30 px-2 py-0.5 text-[11px] text-orange-100/80">{t}</span>
        ))}
      </div>
    </div>
  )
}

function Projects() {
  const items = [
    {
      title: 'Payload Portfolio',
      desc: 'Scroll-triggered showcase with animated sections and a 3D hero.',
      tags: ['React', 'Framer Motion', 'Spline'],
      image: '/images/payload.jpg',
    },
    {
      title: 'Control Point Case Study',
      desc: 'Deep dive into design decisions with rich visuals.',
      tags: ['UX', 'Case Study'],
      image: '/images/control.jpg',
    },
    {
      title: 'Mann Co. Brand Pack',
      desc: 'Logo experiments and playful brand system in warm tones.',
      tags: ['Branding', 'Design'],
      image: '/images/brand.jpg',
    },
  ]

  return (
    <section id="projects" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-orange-500/5" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Featured Projects</h2>
          <p className="mt-2 text-orange-100/80">Selected works that combine playful energy with modern craft.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
