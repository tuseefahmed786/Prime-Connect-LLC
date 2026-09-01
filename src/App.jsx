import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Code2,
  Globe,
  MapPinned,
  Megaphone,
  MonitorSmartphone,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from 'lucide-react'
import './App.css'

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web apps engineered for speed, growth, and seamless user experiences.',
    image: 'https://www.skysatelliteupgrade.net/services/web-development.svg',
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile solutions built to keep your customers engaged anywhere.',
    image: 'https://www.skysatelliteupgrade.net/services/mobile-app-development.svg',
  },
  {
    title: 'Software Development',
    description: 'Business-critical software systems designed to streamline operations and scale with your company.',
    image: 'https://www.skysatelliteupgrade.net/services/software-development.svg',
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful, human-centered designs that turn visitors into loyal customers and brand advocates.',
    image: 'https://www.skysatelliteupgrade.net/services/ui-ux-design.svg',
  },
  {
    title: 'Cloud & DevOps',
    description: 'Modern cloud infrastructure, automation, and deployment workflows for reliable performance.',
    image: 'https://www.skysatelliteupgrade.net/services/cloud-devops.svg',
  },
  {
    title: 'Cybersecurity',
    description: 'Proactive protection, threat monitoring, and secure system design for peace of mind.',
    image: 'https://www.skysatelliteupgrade.net/services/cybersecurity.svg',
  },
  {
    title: 'AI & Data Solutions',
    description: 'Smart automation and data-driven insights that help businesses make faster, smarter decisions.',
    image: 'https://www.skysatelliteupgrade.net/services/ai-data-solutions.svg',
  },
  {
    title: 'Digital Marketing',
    description: 'Data-backed digital campaigns designed to attract traffic, generate leads, and increase revenue.',
    image: 'https://www.skysatelliteupgrade.net/services/digital-marketing.svg',
  },
]

const strengths = [
  {
    icon: Code2,
    title: 'Custom Solutions',
    description: 'Tailored technology that supports your exact business goals and workflows.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Reliable',
    description: 'Built with security-first thinking and dependable systems your team can trust.',
  },
  {
    icon: Cloud,
    title: 'Scalable Infrastructure',
    description: 'Future-proof technology that grows as your business expands and evolves.',
  },
  {
    icon: Megaphone,
    title: 'Growth Focused',
    description: 'Strategy, design, and delivery that align technology with customer growth.',
  },
]

const contactDetails = [
  { label: 'Phone', value: '(346) 379-6826', href: 'tel:+13463796826' },
  { label: 'Email', value: 'primeconnect456@gmail.com', href: 'mailto:primeconnect456@gmail.com' },
  { label: 'Address', value: '1705 Meadow Ct, Gwynn Oak, MD 21207', href: 'https://maps.google.com/?q=1705+Meadow+Ct+Gwynn+Oak+MD+21207' },
]

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <div className="glass-panel flex items-center justify-between rounded-full px-5 py-3 shadow-2xl shadow-cyan-950/20">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 text-sm font-black text-white shadow-lg shadow-cyan-500/40">
              PC
            </div>
            <div>
              <p className="text-lg font-bold tracking-tight text-white">Prime Connect LLC</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#home" className="transition hover:text-white">Home</a>
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#why-us" className="transition hover:text-white">Why Us</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>

          <a
            href="tel:+13463796826"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>
      </header>

      <main id="home" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
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
                Prime Connect LLC delivers digital products, infrastructure, and growth strategies designed to help companies build smarter, move faster, and scale with confidence.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:brightness-110"
                >
                  Explore Services
                  <ArrowRight size={18} />
                </a>
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

        <section id="services" className="mt-20">
          <div className="mb-10 flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Services</p>
              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Technology services built for modern businesses</h2>
            </div>
            <p className="max-w-xl text-slate-300">
              From custom digital experiences to secure infrastructure and growth marketing, we help you transform ideas into measurable results.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="service-card group overflow-hidden rounded-[1.75rem] border border-slate-800 bg-slate-900/80 p-4 transition duration-300 hover:border-cyan-400/40 hover:shadow-[0_20px_50px_rgba(34,211,238,0.12)]"
              >
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="mx-auto h-28 w-full object-contain transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-5">
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="why-us" className="mt-20 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-slate-800 bg-slate-900/70 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Why Prime Connect</p>
            <h2 className="mt-3 text-3xl font-black text-white">A strategic partner for your next digital move</h2>
            <p className="mt-4 text-slate-300">
              We combine technical execution with practical business insight to create solutions that are scalable, user-friendly, and designed to perform.
            </p>

            <div className="mt-8 space-y-4">
              {[
                'Clear communication and business-focused planning',
                'Designs that feel premium and convert attention into action',
                'Reliable delivery from discovery to launch and beyond',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-3">
                  <CheckCircle2 className="mt-0.5 text-cyan-300" size={20} />
                  <span className="text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {strengths.map(({ icon: Icon, title, description }) => (
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

        <section id="contact" className="mt-20 rounded-[2rem] border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 via-slate-900 to-indigo-500/10 p-6 md:p-8 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Let’s build something great</p>
              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Need a smarter digital solution for your business?</h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+13463796826"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                <Phone size={17} />
                Call Me
              </a>
              <a
                href="https://maps.google.com/?q=1705+Meadow+Ct+Gwynn+Oak+MD+21207"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/60 hover:text-cyan-200"
              >
                <MapPinned size={17} />
                Visit Location
              </a>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {contactDetails.map(({ label, value, href }) => (
              <a
                key={label}
                href={href}
                target={label === 'Address' ? '_blank' : undefined}
                rel={label === 'Address' ? 'noreferrer' : undefined}
                className="rounded-2xl border border-slate-700 bg-slate-950/60 p-5 text-left transition hover:border-cyan-400/60"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{label}</p>
                <p className="mt-3 text-lg font-semibold text-white">{value}</p>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Prime Connect LLC</p>
          <p>1705 Meadow Ct, Gwynn Oak, MD 21207</p>
          <div className="flex flex-col gap-1 md:items-end">
            <a href="tel:+13463796826" className="text-cyan-300 transition hover:text-cyan-200">(346) 379-6826</a>
            <a href="mailto:primeconnect456@gmail.com" className="text-cyan-300 transition hover:text-cyan-200">primeconnect456@gmail.com</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
