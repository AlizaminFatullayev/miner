import { Quote } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const TESTIMONIALS = [
  {
    quote:
      'Miner took our copper concession from first survey to first shipment in nineteen months — a timeline nobody else would even quote us.',
    name: 'Elena Vásquez',
    role: 'COO · Cordillera Copper S.A.',
    initials: 'EV',
  },
  {
    quote:
      'Their rehabilitation work is the reason our licence renewals go through without a fight. Regulators trust what Miner leaves behind.',
    name: 'Daniel Okafor',
    role: 'HSE Director · Westbridge Minerals',
    initials: 'DO',
  },
  {
    quote:
      'Haul-fleet uptime went from 78 to 94 percent within two quarters of Miner taking over site operations. The gain paid for the contract.',
    name: 'Priya Raman',
    role: 'VP Operations · Ironvale Group',
    initials: 'PR',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-steel-600/20 bg-coal-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Client words"
          title="Word from the field"
          intro="Owners, operators and regulators we have worked beside — on record."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map(({ quote, name, role, initials }, index) => (
            <Reveal key={name} delay={index * 110} className="h-full">
              <figure className="flex h-full flex-col border border-steel-600/40 bg-coal-900 p-8 transition-colors duration-300 hover:border-ember-500/40">
                <Quote className="h-8 w-8 -scale-x-100 text-ember-500/50" aria-hidden="true" />
                <blockquote className="mt-5 grow leading-relaxed text-steel-200">
                  “{quote}”
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-4 border-t border-steel-600/30 pt-6">
                  <span
                    aria-hidden="true"
                    className="font-display grid h-11 w-11 shrink-0 place-items-center rounded-full border border-steel-600/50 bg-coal-700 font-semibold text-ember-400"
                  >
                    {initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ash-50">{name}</span>
                    <span className="mt-0.5 block font-mono text-[11px] tracking-[0.14em] text-steel-400 uppercase">
                      {role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
