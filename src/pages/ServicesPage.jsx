import { ArrowRight } from 'lucide-react'
import { services } from '../data/services.js'

function ServicesPage({ onNavigate }) {
  return (
    <div className="space-y-12 pb-8">
      <section className="rounded-[2rem] border border-slate-800 bg-slate-900/75 p-8 md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Services</p>
        <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">Digital solutions tailored to your business goals.</h1>
        <p className="mt-5 max-w-2xl text-lg text-slate-300">
          We design and deliver practical, scalable solutions for business growth — from websites and apps to cloud systems and digital strategy.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon

          return (
            <div key={service.slug} className="rounded-[1.75rem] border border-slate-800 bg-slate-900/70 p-6">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                <Icon size={26} />
              </div>
              <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{service.description}</p>

              <button
                type="button"
                onClick={() => onNavigate('service', service.slug)}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/60 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-400/60 hover:text-cyan-200"
              >
                Learn more
                <ArrowRight size={16} />
              </button>
            </div>
          )
        })}
      </section>

      <section className="rounded-[2rem] border border-slate-800 bg-slate-900/75 p-8 md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Industries we support</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {['Professional services', 'Healthcare', 'Retail & ecommerce', 'Education', 'Real estate', 'Startups'].map((industry) => (
            <div key={industry} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-center text-white font-medium">
              {industry}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
