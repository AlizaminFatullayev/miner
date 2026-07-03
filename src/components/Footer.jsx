import { ArrowUp } from 'lucide-react'
import Logo from './Logo'

const SERVICE_LINKS = [
  'Exploration & geology',
  'Drilling & extraction',
  'Processing & refinement',
  'Rehabilitation & closure',
]

const COMPANY_LINKS = [
  { href: '#about', label: 'About us' },
  { href: '#results', label: 'Track record' },
  { href: '#testimonials', label: 'Client stories' },
  { href: '#contact', label: 'Contact' },
]

/* lucide dropped brand icons, so these are drawn in-house */
const SOCIALS = [
  {
    label: 'LinkedIn',
    path: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21H9V9Z',
  },
  {
    label: 'X',
    path: 'M18.9 2H22l-6.77 7.74L23.2 22h-6.23l-4.88-6.38L6.5 22H3.36l7.24-8.28L2.8 2h6.39l4.41 5.83L18.9 2Zm-1.1 18.1h1.72L7.98 3.8H6.13l11.67 16.3Z',
  },
  {
    label: 'YouTube',
    path: 'M23.5 7.2a3 3 0 0 0-2.1-2.1C19.5 4.5 12 4.5 12 4.5s-7.5 0-9.4.6A3 3 0 0 0 .5 7.2 31.2 31.2 0 0 0 0 12c0 1.6.17 3.2.5 4.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.33-1.6.5-3.2.5-4.8s-.17-3.2-.5-4.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z',
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-steel-600/30 bg-coal-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
          {/* brand */}
          <div>
            <a href="#top" className="flex items-center gap-3" aria-label="Miner — back to top">
              <Logo className="h-9 w-9 text-ember-500" />
              <span className="flex flex-col">
                <span className="font-display text-2xl leading-none font-bold tracking-[0.18em] text-ash-50">
                  MINER
                </span>
                <span className="font-mono text-[9px] tracking-[0.34em] text-steel-300 uppercase">
                  Resource Group
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-xs leading-relaxed text-steel-300">
              Full-cycle mining operations across Australia, South America and
              West Africa since 1994.
            </p>
            <ul className="mt-6 flex gap-3">
              {SOCIALS.map(({ label, path }) => (
                <li key={label}>
                  <a
                    href="#top"
                    aria-label={`Miner on ${label}`}
                    className="grid h-10 w-10 place-items-center border border-steel-600/50 text-steel-300 transition-colors duration-200 hover:border-ember-400 hover:text-ember-400"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5" aria-hidden="true">
                      <path d={path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* services */}
          <nav aria-label="Services">
            <h3 className="font-mono text-xs tracking-[0.25em] text-steel-400 uppercase">
              Services
            </h3>
            <ul className="mt-5 space-y-2.5">
              {SERVICE_LINKS.map((label) => (
                <li key={label}>
                  <a
                    href="#services"
                    className="text-[15px] text-steel-300 transition-colors duration-200 hover:text-ember-400"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* company */}
          <nav aria-label="Company">
            <h3 className="font-mono text-xs tracking-[0.25em] text-steel-400 uppercase">
              Company
            </h3>
            <ul className="mt-5 space-y-2.5">
              {COMPANY_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-[15px] text-steel-300 transition-colors duration-200 hover:text-ember-400"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* head office */}
          <div>
            <h3 className="font-mono text-xs tracking-[0.25em] text-steel-400 uppercase">
              Head office
            </h3>
            <address className="mt-5 space-y-2.5 text-[15px] leading-relaxed text-steel-300 not-italic">
              <p>
                44 Foundry Road
                <br />
                Perth WA 6000, Australia
              </p>
              <p>
                <a href="tel:+61892004410" className="transition-colors hover:text-ember-400">
                  +61 8 9200 4410
                </a>
              </p>
              <p>
                <a
                  href="mailto:projects@minergroup.com"
                  className="transition-colors hover:text-ember-400"
                >
                  projects@minergroup.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* bottom bar */}
        <div className="flex flex-col items-center justify-between gap-5 border-t border-steel-600/30 py-7 sm:flex-row">
          <p className="text-sm text-steel-400">
            © 2026 Miner Resource Group Pty Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-sm text-steel-500">Privacy</span>
            <span className="text-sm text-steel-500">Terms</span>
            <a
              href="#top"
              aria-label="Back to top"
              className="grid h-10 w-10 place-items-center border border-steel-600/50 text-steel-300 transition-colors duration-200 hover:border-ember-400 hover:text-ember-400"
            >
              <ArrowUp className="h-4.5 w-4.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
