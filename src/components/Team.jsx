import { motion } from 'framer-motion'
import { User, Crown, Code2, Palette } from 'lucide-react'

const members = [
  { name: 'Ari', role: 'Creative Director', icon: Crown },
  { name: 'Bea', role: 'Lead Designer', icon: Palette },
  { name: 'Kai', role: 'Frontend Engineer', icon: Code2 },
  { name: 'Ren', role: 'Product Engineer', icon: User },
]

function Team() {
  return (
    <section id="team" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Meet the team</h2>
          <p className="mt-2 text-blue-100/80 max-w-2xl">Small, nimble, and obsessed with craft. We blend design and engineering to ship work that feels alive.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m, i) => (
            <motion.div key={m.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
              <div className="flex items-center gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 ring-1 ring-inset ring-blue-400/30">
                  <m.icon className="h-6 w-6 text-blue-300" />
                </span>
                <div>
                  <h3 className="text-white font-semibold">{m.name}</h3>
                  <p className="text-blue-200/80 text-sm">{m.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
