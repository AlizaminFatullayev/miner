import useReveal from '../hooks/useReveal'

/**
 * Wrapper that fades + slides its children in the first time they
 * scroll into view. `delay` (ms) staggers items inside a group.
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children }) {
  const [ref, visible] = useReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
