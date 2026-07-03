import { ArrowUpRight, Compass, Factory, Pickaxe, Sprout } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const SERVICES = [
  {
    icon: Compass,
    title: 'Exploration & Geology',
    body: 'Geophysical surveys, core drilling and 3D resource modelling that de-risk capital before the first excavator arrives on site.',
  },
  {
    icon: Pickaxe,
    title: 'Drilling & Extraction',
    body: 'Open-pit and underground operations engineered around tonnage targets, fleet uptime and zero-harm delivery.',
  },
  {
    icon: Factory,
    title: 'Processing & Refinement',
    body: 'On-site crushing, separation and refinement circuits that turn raw ore into consistent, export-grade product.',
  },
  {
    icon: Sprout,
    title: 'Rehabilitation & Closure',
    body: 'Progressive land restoration and closure planning that leaves every site safe, stable and growing again.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-coal-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="What we do"
          title="From first survey to final shipment"
          intro="Four integrated service lines, one accountable partner. We own the entire mining value chain, so our clients never manage the seams between contractors."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, body }, index) => (
            <Reveal key={title} delay={index * 90} className="h-full">
              <article className="group relative flex h-full flex-col border border-steel-600/40 bg-coal-900 p-8 transition-all duration-300 after:absolute after:top-0 after:left-0 after:h-0.5 after:w-0 after:bg-ember-500 after:transition-[width] after:duration-500 hover:-translate-y-1.5 hover:border-steel-500/70 hover:shadow-[0_18px_40px_-18px_rgba(0,0,0,0.8)] hover:after:w-full">
                <span
                  aria-hidden="true"
                  className="absolute top-6 right-7 font-mono text-sm text-steel-500 transition-colors duration-300 group-hover:text-ember-400"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="grid h-13 w-13 place-items-center border border-steel-600/50 bg-coal-800 text-ember-400 transition-colors duration-300 group-hover:bg-ember-500 group-hover:text-coal-950">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>

                <h3 className="font-display mt-6 text-2xl font-semibold tracking-wide text-ash-50 uppercase">
                  {title}
                </h3>
                <p className="mt-3 grow text-[15px] leading-relaxed text-steel-300">{body}</p>

                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.2em] text-steel-400 uppercase transition-colors duration-200 group-hover:text-ember-400"
                >
                  Discuss scope
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
