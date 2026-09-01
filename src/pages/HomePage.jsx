import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Code2,
  Globe,
  MonitorSmartphone,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
} from 'lucide-react'
import { services } from '../data/services.js'

const featureCards = [
  {
    icon: Code2,
    title: 'Custom-built systems',
    description: 'Technology that fits your workflow, your team, and your growth goals.',
  },
  {
    icon: ShieldCheck,
    title: 'Security-first delivery',
    description: 'We design resilient infrastructure and digital experiences with protection in mind.',
  },
  {
    icon: TrendingUp,
    title: 'Growth-focused strategy',
    description: 'Every project is built to improve efficiency, visibility, and revenue opportunities.',
  },
]

const stats = [
  { value: '250+', label: 'Projects launched' },
  { value: '99%', label: 'Client satisfaction' },
  { value: '24/7', label: 'Support mindset' },
]

const processSteps = [
  { title: 'Discover', text: 'We learn your goals, challenges, and market opportunities.' },
  { title: 'Design', text: 'We turn strategy into polished experiences and user journeys.' },
  { title: 'Build', text: 'We launch secure, scalable products with measurable impact.' },
  { title: 'Grow', text: 'We optimize performance, automation, and customer engagement.' },
]

const serviceHighlights = [
  { slug: 'web-development', icon: Globe, title: 'Web experiences', copy: 'Modern websites, portals, and marketing platforms that impress and convert.' },
  { slug: 'mobile-app-development', icon: MonitorSmartphone, title: 'Mobile strategy', copy: 'Mobile-first apps built for usability, retention, and momentum.' },
  { slug: 'cloud-devops', icon: Cloud, title: 'Cloud operations', copy: 'Reliable infrastructure and automation that keep teams moving.' },
  { slug: 'software-development', icon: Code2, title: 'Software systems', copy: 'Tailored digital tools that simplify operations and improve business performance.' },
  { slug: 'ui-ux-design', icon: Sparkles, title: 'UX/UI design', copy: 'Elegant user experiences and interfaces designed to increase trust and conversions.' },
  { slug: 'cybersecurity', icon: ShieldCheck, title: 'Cybersecurity', copy: 'Secure systems, monitoring, and protection strategies built for long-term peace of mind.' },
]

const testimonials = [
  {
    quote: 'Prime Connect helped us modernize our digital presence and gave us a stronger foundation to grow from.',
    author: 'Operations Lead',
  },
  {
    quote: 'Their team mixed business thinking with technical execution, and the result felt polished from day one.',
    author: 'Founder',
  },
]

function HomePage({ onNavigate }) {
  return (
    <>
      <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/70 px-6 py-8 shadow-[0_30px_80px_rgba(14,116,144,0.15)] md:px-10 md:py-12 lg:px-12 lg:py-16">
        <div className="soft-grid absolute inset-0 opacity-40" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-8 h-52 w-52 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-cyan-200">
              <Sparkles size={14} />
              Business-first technology partner
            </div>

            <h1 className="max-w-xl text-balance text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Comprehensive technology solutions to help your business thrive.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-300">
              Prime Connect LLC builds digital products, secure systems, and growth strategies that help companies move faster and perform better.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:brightness-110"
              >
                Explore Services
                <ArrowRight size={18} />
              </button>
              <a
                href="tel:+13463796826"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-400/50 hover:text-cyan-200"
              >
                <Phone size={18} />
                (346) 379-6826
              </a>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {[
                ['Rapid Delivery', 'Launch-ready execution'],
                ['Secure Systems', 'Built with protection in mind'],
                ['Tailored Strategy', 'Aligned to your goals'],
              ].map(([title, copy]) => (
                <div key={title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="mt-1 text-xs text-slate-400">{copy}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass-panel relative overflow-hidden rounded-[2rem] p-5 shadow-2xl shadow-cyan-950/30">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Business Overview</p>
                  <p className="text-2xl font-bold text-white">Growth Engine</p>
                </div>
                <div className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-semibold text-emerald-300">
                  Active
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-slate-900 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">Strategy & Build</span>
                    <Star className="text-cyan-300" size={18} fill="currentColor" />
                  </div>
                  <p className="mt-3 text-3xl font-black text-white">Full-stack digital solutions</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { label: 'Web', icon: Globe },
                    { label: 'Mobile', icon: MonitorSmartphone },
                    { label: 'Cloud', icon: Cloud },
                    { label: 'Security', icon: ShieldCheck },
                  ].map(({ label, icon: Icon }) => (
                    <div key={label} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                      <Icon className="mb-3 text-cyan-300" size={22} />
                      <p className="text-lg font-semibold text-white">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="grid gap-5 md:grid-cols-3">
          {stats.map(({ value, label }) => (
            <div key={label} className="rounded-[1.5rem] border border-slate-800 bg-slate-900/80 p-6 text-center">
              <p className="text-3xl font-black text-white">{value}</p>
              <p className="mt-2 text-sm text-slate-300">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Why clients choose us</p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Technology partners built for execution and growth.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featureCards.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-[1.75rem] border border-slate-800 bg-slate-900/70 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">What we deliver</p>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Focused services that move your business forward.</h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/60 hover:text-cyan-200"
          >
            View all services
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {serviceHighlights.map(({ slug, icon: Icon, title, copy }) => (
            <button
              key={title}
              type="button"
              onClick={() => onNavigate('service', slug)}
              className="rounded-[1.75rem] border border-slate-800 bg-slate-900/70 p-6 text-left transition hover:border-cyan-400/60 hover:shadow-[0_10px_35px_rgba(15,23,42,0.08)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-300">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{copy}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Our process</p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">A practical roadmap from idea to impact.</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step.title} className="rounded-[1.5rem] border border-slate-800 bg-slate-900/80 p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 text-sm font-bold text-cyan-300">
                0{index + 1}
              </div>
              <h3 className="text-xl font-bold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Client feedback</p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Trusted by businesses that value clarity and momentum.</h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {testimonials.map(({ quote, author }) => (
            <blockquote key={author} className="rounded-[1.7rem] border border-slate-800 bg-slate-900/80 p-6">
              <div className="mb-4 flex items-center gap-1 text-cyan-300">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-lg leading-8 text-slate-200">“{quote}”</p>
              <footer className="mt-5 text-sm font-medium text-slate-400">— {author}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-[2rem] border border-stone-300 bg-white p-6 md:p-8 lg:p-10 shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Ready to begin?</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">Let’s build a smarter digital foundation for your business.</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
            >
              Contact us
            </button>
            <a
              href="tel:+13463796826"
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-stone-400"
            >
              <Phone size={17} />
              Call now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
