import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

/**
 * Geological cross-section lines that drift slowly behind the hero.
 * Every path starts and ends on the same Y so the two copies tile
 * into a seamless horizontal loop.
 */
function Strata({ opacity = 1 }) {
  return (
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
      className="h-full w-1/2 shrink-0"
      style={{ opacity }}
      aria-hidden="true"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.1">
        <path d="M0 120 C 240 96, 420 152, 660 128 C 900 104, 1140 150, 1440 120" opacity="0.5" />
        <path d="M0 250 C 200 274, 460 218, 720 248 C 980 278, 1220 226, 1440 250" opacity="0.38" />
        <path d="M0 385 C 260 360, 480 415, 740 388 C 1000 361, 1200 412, 1440 385" opacity="0.5" />
        <path d="M0 520 C 220 546, 500 492, 760 520 C 1020 548, 1240 498, 1440 520" opacity="0.34" />
        <path d="M0 655 C 260 630, 460 682, 720 656 C 980 630, 1220 680, 1440 655" opacity="0.46" />
        <path d="M0 790 C 240 812, 480 764, 740 790 C 1000 816, 1220 768, 1440 790" opacity="0.3" />
        {/* fault lines */}
        <path d="M410 150 L 330 850" strokeDasharray="7 9" opacity="0.22" />
        <path d="M1080 60 L 1180 860" strokeDasharray="7 9" opacity="0.22" />
      </g>
      {/* ore pockets along the deeper seams */}
      <g fill="#e8a33d">
        <circle cx="352" cy="662" r="4" opacity="0.35" />
        <circle cx="378" cy="690" r="2.5" opacity="0.28" />
        <circle cx="330" cy="700" r="2" opacity="0.22" />
        <circle cx="1148" cy="540" r="4" opacity="0.35" />
        <circle cx="1120" cy="568" r="2.5" opacity="0.26" />
        <circle cx="1172" cy="580" r="2" opacity="0.2" />
      </g>
    </svg>
  )
}

/* Deterministic dust field — left %, top %, size px, delay s, duration s, opacity */
const DUST = [
  [5, 82, 3, 0, 14, 0.45],
  [12, 68, 2, 3.5, 11, 0.3],
  [21, 88, 2, 7, 16, 0.4],
  [28, 74, 4, 1.5, 18, 0.25],
  [36, 92, 2, 9, 12, 0.35],
  [44, 70, 3, 5, 15, 0.45],
  [53, 85, 2, 2, 11, 0.3],
  [60, 78, 3, 10.5, 17, 0.4],
  [68, 90, 2, 4, 13, 0.28],
  [75, 72, 4, 8, 19, 0.3],
  [82, 86, 2, 0.8, 12, 0.42],
  [89, 76, 3, 6, 15, 0.35],
  [94, 90, 2, 11, 14, 0.3],
  [16, 94, 3, 12.5, 16, 0.38],
]

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-svh items-center overflow-hidden">
      {/* --- animated backdrop -------------------------------------------- */}
      <div aria-hidden="true" className="absolute inset-0">
        {/* base gradient: steel dawn fading into coal */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1a2029_0%,#12151b_38%,#0b0d11_100%)]" />

        {/* drifting strata layers, far one slower + dimmer */}
        <div className="absolute inset-0 overflow-hidden text-steel-500">
          <div className="animate-strata-slow flex h-full w-[200%]">
            <Strata opacity={0.5} />
            <Strata opacity={0.5} />
          </div>
        </div>
        <div className="absolute inset-0 overflow-hidden text-steel-400">
          <div className="animate-strata-fast flex h-full w-[200%] scale-y-110">
            <Strata opacity={0.28} />
            <Strata opacity={0.28} />
          </div>
        </div>

        {/* rising dust motes */}
        <div className="absolute inset-0">
          {DUST.map(([left, top, size, delay, duration, opacity], index) => (
            <span
              key={index}
              className="animate-dust absolute rounded-full bg-ember-300"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: size,
                height: size,
                '--dust-delay': `${delay}s`,
                '--dust-duration': `${duration}s`,
                '--dust-opacity': opacity,
              }}
            />
          ))}
        </div>

        {/* molten glow rising from the pit floor */}
        <div className="animate-ember-pulse absolute -bottom-44 left-1/2 h-[34rem] w-[60rem] max-w-none -translate-x-1/2 rounded-full bg-ember-500/10 blur-3xl" />

        {/* film grain + readability overlay + fade into next section */}
        <div className="bg-noise absolute inset-0 opacity-[0.05]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(11,13,17,0.55)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent to-coal-950" />
      </div>

      {/* --- content ------------------------------------------------------- */}
      <div className="relative mx-auto w-full max-w-7xl px-5 pt-36 pb-28 sm:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-xs tracking-[0.32em] text-ember-400 uppercase sm:text-sm">
              <span aria-hidden="true" className="h-px w-10 bg-ember-500/70" />
              Est. 1994 · Miner Resource Group
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="font-display mt-6 text-[clamp(3.4rem,10vw,7rem)] leading-[0.92] font-bold tracking-wide text-ash-50 uppercase">
              We move
              <br />
              mountains.
              <span className="mt-2 block bg-gradient-to-r from-ember-400 to-ember-600 bg-clip-text text-[clamp(1.9rem,5vw,3.6rem)] leading-tight text-transparent">
                Precisely. Safely. At scale.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-steel-200 sm:text-xl">
              Miner is a full-cycle mining partner — exploration, extraction,
              processing and rehabilitation. Three decades, three continents and
              340+ projects delivered without compromise.
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2.5 bg-ember-500 px-8 py-4 font-semibold tracking-widest text-coal-950 uppercase transition-colors duration-200 hover:bg-ember-400"
              >
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center border border-steel-500 px-8 py-4 font-semibold tracking-widest text-ash-100 uppercase transition-colors duration-200 hover:border-ember-400 hover:text-ember-300"
              >
                View capabilities
              </a>
            </div>
          </Reveal>
        </div>

        {/* trust strip */}
        <Reveal delay={480}>
          <dl className="mt-20 grid gap-4 border-t border-steel-600/30 pt-6 font-mono text-[11px] tracking-[0.22em] text-steel-300 uppercase sm:grid-cols-3">
            <div className="flex items-center gap-2.5">
              <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-ember-500" />
              <dt className="sr-only">Certification</dt>
              <dd>ISO 45001 certified operations</dd>
            </div>
            <div className="flex items-center gap-2.5">
              <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-ember-500" />
              <dt className="sr-only">Footprint</dt>
              <dd>14 active sites · 3 continents</dd>
            </div>
            <div className="flex items-center gap-2.5">
              <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-ember-500" />
              <dt className="sr-only">Safety</dt>
              <dd>LTIFR 0.12 — industry leading</dd>
            </div>
          </dl>
        </Reveal>
      </div>

      {/* scroll cue */}
      <a
        href="#services"
        aria-label="Scroll to services"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-steel-400 transition-colors hover:text-ember-400 sm:flex"
      >
        <span className="font-mono text-[10px] tracking-[0.42em] uppercase">Scroll</span>
        <span aria-hidden="true" className="relative h-12 w-px overflow-hidden bg-steel-600/40">
          <span className="animate-cue absolute top-0 left-0 h-1/3 w-px bg-ember-400" />
        </span>
      </a>
    </section>
  )
}
