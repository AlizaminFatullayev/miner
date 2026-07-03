import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#results', label: 'Results' },
  { href: '#testimonials', label: 'Clients' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? 'border-b border-steel-600/30 bg-coal-950/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#top" className="group flex items-center gap-3" aria-label="Miner — back to top">
          <Logo className="h-9 w-9 text-ember-500 transition-transform duration-300 group-hover:rotate-90" />
          <span className="flex flex-col">
            <span className="font-display text-2xl leading-none font-bold tracking-[0.18em] text-ash-50">
              MINER
            </span>
            <span className="font-mono text-[9px] tracking-[0.34em] text-steel-300 uppercase">
              Resource Group
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="after:bg-ember-400 relative text-sm font-medium tracking-wide text-steel-200 uppercase transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:transition-[width] after:duration-300 hover:text-ash-50 hover:after:w-full"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden items-center border border-ember-500/60 px-5 py-2.5 text-sm font-semibold tracking-widest text-ember-400 uppercase transition-colors duration-200 hover:bg-ember-500 hover:text-coal-950 lg:inline-flex"
        >
          Start a project
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="p-2 text-ash-100 transition-colors hover:text-ember-400 lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div
          id="mobile-nav"
          className="border-b border-steel-600/30 bg-coal-950/95 backdrop-blur-md lg:hidden"
        >
          <ul className="flex flex-col px-5 pt-2 pb-4 sm:px-8">
            {LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-steel-600/20 py-3.5 font-display text-xl tracking-widest text-ash-100 uppercase transition-colors hover:text-ember-400"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 mb-2 inline-flex border border-ember-500/60 px-5 py-2.5 text-sm font-semibold tracking-widest text-ember-400 uppercase transition-colors hover:bg-ember-500 hover:text-coal-950"
              >
                Start a project
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
