import { motion } from 'framer-motion'
import { ExternalLink, Sparkles } from 'lucide-react'

const projects = [
  {
    title: 'Playful Dashboard',
    desc: 'A whimsical yet robust analytics suite with micro-animations and delightful interactions.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: '3D Landing Page',
    desc: 'A 3D-powered hero using Spline, blending art direction with performance best practices.',
    tags: ['Spline', 'Vite', 'Performance'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'E-commerce Glow',
    desc: 'A conversion-focused storefront with tasteful glow effects and motion system.',
    tags: ['Next.js', 'UI/UX', 'Stripe'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1400&auto=format&fit=crop',
  },
]

function Work() {
  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected work</h2>
            <p className="mt-2 text-blue-100/80 max-w-2xl">A taste of the projects we love: playful, polished, and engineered for speed.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-white ring-1 ring-inset ring-white/15 hover:bg-white/20">
            <Sparkles className="h-4 w-4" /> Start your project
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a key={p.title} href={p.link} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-inset ring-white/10">
              <img src={p.image} alt={p.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="p-5">
                <h3 className="text-white font-semibold">{p.title}</h3>
                <p className="text-blue-200/80 text-sm mt-1">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="rounded-md bg-blue-500/10 px-2 py-1 text-xs text-blue-200 ring-1 ring-inset ring-blue-400/20">{t}</span>
                  ))}
                </div>
                <div className="mt-4 inline-flex items-center gap-1 text-blue-200/80 group-hover:text-white">
                  View case <ExternalLink className="h-4 w-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
