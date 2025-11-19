import { Mail, Send } from 'lucide-react'
import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    // No backend yet; simulate send
    await new Promise((r) => setTimeout(r, 600))
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-orange-500/20 bg-slate-900/60 p-8 sm:p-10">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-orange-300" />
            <h2 className="text-3xl font-extrabold tracking-tight text-white">Get in touch</h2>
          </div>
          <p className="mt-2 text-orange-100/80">Have a project in mind? Let’s make it memorable.</p>

          <form onSubmit={submit} className="mt-8 grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input required value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} placeholder="Name" className="w-full rounded-xl border border-orange-500/20 bg-black/20 px-4 py-3 text-orange-100 placeholder:text-orange-100/40 focus:outline-none focus:ring-2 focus:ring-orange-500/40" />
              <input required type="email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} placeholder="Email" className="w-full rounded-xl border border-orange-500/20 bg-black/20 px-4 py-3 text-orange-100 placeholder:text-orange-100/40 focus:outline-none focus:ring-2 focus:ring-orange-500/40" />
            </div>
            <textarea required rows="5" value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})} placeholder="Tell us about your idea" className="w-full rounded-xl border border-orange-500/20 bg-black/20 px-4 py-3 text-orange-100 placeholder:text-orange-100/40 focus:outline-none focus:ring-2 focus:ring-orange-500/40" />
            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-rose-600 px-5 py-3 text-white font-semibold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition">
              <Send className="h-4 w-4" />
              Send Message
            </button>
            {sent && <p className="text-sm text-green-300">Message sent! We’ll reply soon.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
