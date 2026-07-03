import useReveal from '../hooks/useReveal'
import useCountUp from '../hooks/useCountUp'
import SectionHeader from './SectionHeader'

const STATS = [
  { value: 128, suffix: 'M', label: 'Tonnes of ore extracted' },
  { value: 342, suffix: '', label: 'Projects delivered' },
  { value: 31, suffix: '', label: 'Years in operation' },
  { value: 2400, suffix: '+', label: 'Specialists on our crews' },
]

function Stat({ value, suffix, label, start }) {
  const display = useCountUp(value, start)

  return (
    <div className="border-l-2 border-ember-500/60 pl-6">
      <p className="font-display text-6xl font-bold tracking-wide text-ash-50 sm:text-7xl">
        {display}
        {suffix && <span className="text-ember-400">{suffix}</span>}
      </p>
      <p className="mt-2.5 font-mono text-xs tracking-[0.22em] text-steel-300 uppercase">
        {label}
      </p>
    </div>
  )
}

export default function Stats() {
  const [ref, visible] = useReveal(0.35)

  return (
    <section id="results" className="bg-hatch relative bg-coal-950 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Track record"
          title="The numbers under the surface"
        />

        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4`}
        >
          {STATS.map((stat) => (
            <Stat key={stat.label} {...stat} start={visible} />
          ))}
        </div>
      </div>
    </section>
  )
}
