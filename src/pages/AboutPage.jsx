import { CheckCircle2, Compass, HeartHandshake, ShieldCheck, Target, Users } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Purpose-driven work',
    description: 'We align every solution with clear business goals, user needs, and measurable impact.',
  },
  {
    icon: Users,
    title: 'People-first partnerships',
    description: 'We listen closely and collaborate with teams to create solutions they can confidently use.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable execution',
    description: 'From planning to launch, we focus on secure, dependable systems that support lasting growth.',
  },
  {
    icon: HeartHandshake,
    title: 'Transparent communication',
    description: 'Clear updates, straightforward recommendations, and honest guidance every step of the way.',
  },
]

const highlights = [
  'Creative problem solving for modern business challenges',
  'Strategy paired with technical execution and support',
  'Systems designed to scale with your operations and goals',
]

function AboutPage() {
  return (
    <div className="space-y-12 pb-8">
      <section className="rounded-[2rem] border border-slate-800 bg-slate-900/75 p-8 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">About Prime Connect</p>
            <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">Helping businesses grow with smarter digital solutions.</h1>
            <p className="mt-5 max-w-xl text-lg text-slate-300">
              Prime Connect LLC partners with businesses that want modern tools, better customer experiences, and a more efficient way to scale. We blend strategy, design, and technology to create digital experiences that work in the real world.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-slate-800 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 p-6">
            <div className="flex items-center gap-3 text-cyan-300">
              <Compass size={24} />
              <p className="text-lg font-semibold text-white">Our mission</p>
            </div>
            <p className="mt-4 text-slate-200 leading-7">
              To help organizations simplify operations, strengthen their technology foundations, and unlock sustainable growth through practical, scalable digital transformation.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">What guides us</p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Principles that shape every project.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {values.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-[1.7rem] border border-slate-800 bg-slate-900/75 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-800 bg-slate-900/75 p-8 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Why it matters</p>
            <h2 className="mt-3 text-3xl font-black text-white">Digital growth is more than just attractive design.</h2>
          </div>

          <div className="space-y-4">
            {highlights.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <CheckCircle2 className="mt-0.5 text-cyan-300" size={20} />
                <span className="text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
