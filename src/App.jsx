import { useEffect, useState } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import './App.css'
import HomePage from './pages/HomePage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import ServiceDetailPage from './pages/ServiceDetailPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

const navItems = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'services', label: 'Services', path: '/services' },
  { id: 'about', label: 'About Us', path: '/about' },
  { id: 'contact', label: 'Contact', path: '/contact' },
]

function getRouteFromLocation() {
  const pathname = window.location.pathname
  const parts = pathname.split('/').filter(Boolean)

  if (parts[0] === 'services' && parts[1]) {
    return { page: 'service', slug: parts[1] }
  }

  if (parts[0] === 'services') {
    return { page: 'services' }
  }

  if (parts[0] === 'about') {
    return { page: 'about' }
  }

  if (parts[0] === 'contact') {
    return { page: 'contact' }
  }

  return { page: 'home' }
}

function App() {
  const [route, setRoute] = useState(getRouteFromLocation)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigate = (nextPage, slug = null) => {
    let path = '/'

    if (nextPage === 'services') path = '/services'
    if (nextPage === 'about') path = '/about'
    if (nextPage === 'contact') path = '/contact'
    if (nextPage === 'service' && slug) path = `/services/${slug}`

    window.history.pushState({}, '', path)
    setRoute(nextPage === 'service' ? { page: 'service', slug } : { page: nextPage })
    setMobileMenuOpen(false)
  }

  useEffect(() => {
    const onPopState = () => setRoute(getRouteFromLocation())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const renderPage = () => {
    switch (route.page) {
      case 'services':
        return <ServicesPage onNavigate={navigate} />
      case 'about':
        return <AboutPage />
      case 'contact':
        return <ContactPage />
      case 'service':
        return <ServiceDetailPage slug={route.slug} onNavigate={navigate} />
      case 'home':
      default:
        return <HomePage onNavigate={navigate} />
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <div className="glass-panel flex items-center justify-between rounded-full px-5 py-3 shadow-2xl shadow-cyan-200/30">
          <button type="button" onClick={() => navigate('home')} className="flex items-center gap-3 text-left">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 text-sm font-black text-white shadow-lg shadow-cyan-500/40">
              PC
            </div>
            <div>
              <p className="text-lg font-bold tracking-tight text-white">Prime Connect LLC</p>
            </div>
          </button>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => navigate(item.id === 'home' ? 'home' : item.id)}
                className={`transition ${route.page === item.id ? 'text-white' : 'hover:text-white'}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="tel:+13463796826"
              className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center md:hidden"
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mt-3 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-lg md:hidden">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => navigate(item.id === 'home' ? 'home' : item.id)}
                  className={`rounded-lg px-4 py-2 text-left text-sm font-medium transition ${
                    route.page === item.id
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="tel:+13463796826"
                className="mt-2 flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-sm font-semibold !text-white transition hover:bg-neutral-800"
              >
                <Phone size={16} className="!text-white" />
                Call Now
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">{renderPage()}</main>

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
