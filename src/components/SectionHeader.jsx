import Reveal from './Reveal'

/**
 * Shared eyebrow + title + intro block used at the top of each section.
 */
export default function SectionHeader({ eyebrow, title, intro, align = 'center' }) {
  const centered = align === 'center'

  return (
    <Reveal className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p
        className={`flex items-center gap-3 font-mono text-xs tracking-[0.3em] text-ember-400 uppercase ${
          centered ? 'justify-center' : ''
        }`}
      >
        <span aria-hidden="true" className="h-px w-8 bg-ember-500/70" />
        {eyebrow}
        {centered && <span aria-hidden="true" className="h-px w-8 bg-ember-500/70" />}
      </p>
      <h2 className="font-display mt-4 text-4xl font-semibold tracking-wide text-ash-50 uppercase sm:text-5xl">
        {title}
      </h2>
      {intro && <p className="mt-5 text-lg leading-relaxed text-steel-300">{intro}</p>}
    </Reveal>
  )
}
