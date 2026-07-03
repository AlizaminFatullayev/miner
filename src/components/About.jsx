import { ArrowRight, CircleCheck, HardHat } from 'lucide-react'
import Reveal from './Reveal'

const PROOF_POINTS = [
  'Full-cycle delivery — exploration to closure under one contract',
  '400+ owned heavy machines, zero rental dependency',
  'Safety record four times better than industry average',
  'ISO 9001 · 14001 · 45001 certified processes',
]

/**
 * Stylised mine cross-section: surface headframe, shaft, strata
 * boundaries, a fault line and a glowing ore body at depth.
 */
function CrossSection() {
  return (
    <svg viewBox="0 0 480 540" className="block h-auto w-full" role="img" aria-label="Cross-section diagram of a mine shaft descending through rock strata to an ore body">
      <defs>
        <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#232a35" />
          <stop offset="1" stopColor="#10141a" />
        </linearGradient>
      </defs>

      {/* sky + ground mass */}
      <rect width="480" height="540" fill="#0e1116" />
      <rect y="112" width="480" height="428" fill="url(#ground)" />

      {/* surface line */}
      <path d="M0 112 H480" stroke="#4c5565" strokeWidth="1.5" />

      {/* headframe over the shaft */}
      <g stroke="#939cab" strokeWidth="2" fill="none" strokeLinejoin="round">
        <path d="M150 112 L172 40 L194 112" />
        <path d="M160 84 H184" strokeWidth="1.2" />
        <circle cx="172" cy="34" r="7" />
      </g>

      {/* strata boundaries */}
      <g fill="none" stroke="#4c5565" strokeWidth="1" opacity="0.45">
        <path d="M0 190 C 110 180, 250 202, 480 186" />
        <path d="M0 282 C 140 294, 300 268, 480 284" />
        <path d="M0 384 C 120 372, 280 396, 480 378" />
        <path d="M0 468 C 150 478, 320 456, 480 470" />
      </g>

      {/* fault line */}
      <path d="M356 112 L 300 540" stroke="#4c5565" strokeWidth="1" strokeDasharray="6 8" opacity="0.4" />

      {/* shaft + cable + cage */}
      <path d="M172 41 V 430" stroke="#e8a33d" strokeWidth="1.2" strokeDasharray="3 6" opacity="0.75" />
      <rect x="164" y="300" width="16" height="22" fill="none" stroke="#e8a33d" strokeWidth="1.4" opacity="0.9" />

      {/* ore body at depth */}
      <g className="animate-ember-pulse">
        <ellipse cx="172" cy="452" rx="46" ry="20" fill="#e8a33d" opacity="0.16" />
        <ellipse cx="172" cy="452" rx="26" ry="11" fill="#e8a33d" opacity="0.3" />
        <circle cx="160" cy="450" r="3.5" fill="#f0b55e" />
        <circle cx="178" cy="456" r="2.5" fill="#f0b55e" opacity="0.85" />
        <circle cx="188" cy="448" r="2" fill="#f0b55e" opacity="0.7" />
      </g>
      <path d="M172 430 L172 446" stroke="#e8a33d" strokeWidth="1.2" opacity="0.6" />

      {/* depth scale */}
      <g fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#6f788a">
        <g stroke="#4c5565" strokeWidth="1" opacity="0.6">
          <path d="M432 112 h10" />
          <path d="M432 282 h10" />
          <path d="M432 452 h10" />
        </g>
        <text x="404" y="106">0 m</text>
        <text x="386" y="276">−260 m</text>
        <text x="386" y="446">−410 m</text>
      </g>
    </svg>
  )
}

export default function About() {
  return (
    <section id="about" className="border-y border-steel-600/20 bg-coal-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.1fr]">
          {/* diagram panel */}
          <Reveal className="relative">
            <div className="relative border border-steel-600/30 bg-coal-950 p-3 sm:p-4">
              {/* blueprint corner marks */}
              <span aria-hidden="true" className="absolute -top-px -left-px h-5 w-5 border-t-2 border-l-2 border-ember-500/80" />
              <span aria-hidden="true" className="absolute -top-px -right-px h-5 w-5 border-t-2 border-r-2 border-ember-500/80" />
              <span aria-hidden="true" className="absolute -bottom-px -left-px h-5 w-5 border-b-2 border-l-2 border-ember-500/80" />
              <span aria-hidden="true" className="absolute -right-px -bottom-px h-5 w-5 border-r-2 border-b-2 border-ember-500/80" />

              <CrossSection />

              <span className="absolute top-7 right-7 border border-steel-600/50 bg-coal-900/90 px-3 py-1.5 font-mono text-[10px] tracking-[0.25em] text-steel-300 uppercase">
                Fig. 01 — Section A-A
              </span>
            </div>

            {/* floating badge */}
            <div className="absolute -bottom-8 left-5 flex items-center gap-4 border border-steel-600/40 bg-coal-800 p-5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9)] sm:left-8">
              <span className="grid h-12 w-12 shrink-0 place-items-center bg-ember-500 text-coal-950">
                <HardHat className="h-6 w-6" aria-hidden="true" />
              </span>
              <p className="pr-2">
                <span className="font-display block text-3xl leading-none font-bold text-ash-50">31 years</span>
                <span className="mt-1 block font-mono text-[10px] tracking-[0.22em] text-steel-300 uppercase">
                  of continuous operation
                </span>
              </p>
            </div>
          </Reveal>

          {/* copy */}
          <div className="mt-10 lg:mt-0">
            <Reveal>
              <p className="flex items-center gap-3 font-mono text-xs tracking-[0.3em] text-ember-400 uppercase">
                <span aria-hidden="true" className="h-px w-8 bg-ember-500/70" />
                Who we are
              </p>
              <h2 className="font-display mt-4 text-4xl font-semibold tracking-wide text-ash-50 uppercase sm:text-5xl">
                Built underground.
                <br />
                Proven worldwide.
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-6 text-lg leading-relaxed text-steel-200">
                Miner began in 1994 as a two-rig drilling crew in the Pilbara. Today we
                run fourteen sites across Australia, South America and West Africa —
                still privately held, still led by engineers, still measured by what we
                bring out of the ground.
              </p>
              <p className="mt-4 leading-relaxed text-steel-300">
                Clients keep us on site because we treat their pit like our own balance
                sheet: every tonne accounted for, every hour of downtime attacked, every
                hectare handed back better than we found it.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <ul className="mt-8 space-y-3.5">
                {PROOF_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-steel-200">
                    <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-ember-400" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={320}>
              <a
                href="#contact"
                className="group mt-9 inline-flex items-center gap-2.5 font-semibold tracking-widest text-ember-400 uppercase transition-colors hover:text-ember-300"
              >
                Talk to our engineers
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
