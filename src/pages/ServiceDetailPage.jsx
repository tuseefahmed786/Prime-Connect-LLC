import { ArrowLeft, ArrowRight } from 'lucide-react'
import { services } from '../data/services.js'

function ServiceDetailPage({ slug, onNavigate }) {
  const service = services.find((item) => item.slug === slug) || services[0]
  const Icon = service.icon

  return (
    <div className="space-y-10 pb-8">
      <section className="rounded-[2rem] border border-slate-800 bg-slate-900/75 p-8 md:p-10">
        <button
          type="button"
          onClick={() => onNavigate('services')}
          className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/60 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400/60 hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to services
        </button>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="flex h-full items-center justify-center rounded-[1.8rem] border border-slate-800 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-indigo-500/10 p-8">
            <div className="flex h-28 w-28 items-center justify-center rounded-[2rem] bg-cyan-500/10 text-cyan-300">
              <Icon size={52} />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Service</p>
            <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">{service.title}</h1>
            <p className="mt-5 text-lg text-slate-300">{service.longDescription}</p>
            <div className="mt-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4 text-cyan-100">
              {service.highlight}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[2rem] border border-slate-800 bg-slate-900/75 p-8">
          <h2 className="text-2xl font-black text-white">What this service includes</h2>
          <ul className="mt-6 space-y-4">
            {service.bullets.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <span className="mt-0.5 text-cyan-300">✓</span>
                <span className="text-slate-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[2rem] border border-slate-800 bg-slate-900/75 p-8">
          <h2 className="text-2xl font-black text-white">Why it matters</h2>
          <p className="mt-5 text-slate-300 leading-7">
            Choosing the right service for your business helps improve efficiency, strengthen your customer experience, and create a more resilient foundation for future growth. We focus on solutions that are practical, scalable, and aligned with the goals of your team.
          </p>

          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
            <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Best fit for</p>
            <p className="mt-3 text-lg text-white">Businesses that want stronger systems, smoother customer journeys, and smarter long-term operations.</p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
          >
            Book a consultation
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  )
}

export default ServiceDetailPage
