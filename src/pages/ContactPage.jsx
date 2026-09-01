import { Mail, MapPinned, Phone } from 'lucide-react'

const contactDetails = [
  { label: 'Phone', value: '(346) 379-6826', href: 'tel:+13463796826', icon: Phone },
  { label: 'Email', value: 'primeconnect456@gmail.com', href: 'mailto:primeconnect456@gmail.com', icon: Mail },
  { label: 'Address', value: '1705 Meadow Ct, Gwynn Oak, MD 21207', href: 'https://maps.google.com/?q=1705+Meadow+Ct+Gwynn+Oak+MD+21207', icon: MapPinned },
]

function ContactPage() {
  return (
    <div className="space-y-10 pb-8">
      <section className="rounded-[2rem] border border-slate-800 bg-slate-900/75 p-8 md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Contact us</p>
        <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">Let’s discuss your next project.</h1>
        <p className="mt-5 max-w-2xl text-lg text-slate-300">
          Whether you need a website, a mobile app, a custom platform, or a smarter tech strategy, Prime Connect is ready to help.
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
        <div className="rounded-[2rem] border border-slate-800 bg-slate-900/75 p-8">
          <h2 className="text-2xl font-black text-white">Send a message</h2>
          <form className="mt-6 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">Full name</label>
              <input type="text" placeholder="Your name" className="w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">Email address</label>
              <input type="email" placeholder="you@example.com" className="w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">Project details</label>
              <textarea rows="5" placeholder="Tell us about your goals and timeline..." className="w-full resize-none rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none" />
            </div>
            <button type="button" className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110">
              Send inquiry
            </button>
          </form>
        </div>

        <div className="space-y-4">
          {contactDetails.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={label === 'Address' ? '_blank' : undefined}
              rel={label === 'Address' ? 'noreferrer' : undefined}
              className="flex items-start gap-4 rounded-[1.75rem] border border-slate-800 bg-slate-900/75 p-5 transition hover:border-cyan-400/60"
            >
              <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                <Icon size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{label}</p>
                <p className="mt-2 text-lg font-semibold text-white">{value}</p>
              </div>
            </a>
          ))}

          <div className="rounded-[1.75rem] border border-slate-800 bg-slate-900/75 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Business hours</p>
            <p className="mt-3 text-lg text-white">Monday – Friday</p>
            <p className="text-slate-300">9:00 AM – 6:00 PM</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
