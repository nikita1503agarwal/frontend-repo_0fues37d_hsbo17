import { Menu, X, Github, Mail } from 'lucide-react'
import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-orange-500/20 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#home" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-orange-500 to-rose-600 shadow-lg shadow-orange-500/30" />
              <span className="font-extrabold tracking-tight text-white text-xl">TF2 Portfolio</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm font-medium text-orange-100/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <div className="hidden sm:flex items-center gap-3">
                <a href="mailto:scout@tf2.dev" className="inline-flex items-center gap-2 text-orange-100/80 hover:text-white">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">Email</span>
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-orange-100/80 hover:text-white">
                  <Github className="h-4 w-4" />
                  <span className="text-sm">GitHub</span>
                </a>
              </div>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-orange-500/30 text-orange-100/90">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4 sm:px-6">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm text-orange-100/90 hover:bg-white/5"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="mt-2 flex items-center gap-3">
                  <a href="mailto:scout@tf2.dev" className="inline-flex items-center gap-2 text-orange-100/90">
                    <Mail className="h-4 w-4" />
                    <span className="text-sm">Email</span>
                  </a>
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-orange-100/90">
                    <Github className="h-4 w-4" />
                    <span className="text-sm">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
