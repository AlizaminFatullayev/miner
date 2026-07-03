import { useEffect, useRef, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Animates a number from 0 to `target` once `start` becomes true.
 * Jumps straight to the final value for reduced-motion users.
 */
export default function useCountUp(target, start, { duration = 1800, decimals = 0 } = {}) {
  const [value, setValue] = useState(0)
  const frame = useRef(0)

  useEffect(() => {
    if (!start) return undefined

    if (prefersReducedMotion()) {
      setValue(target)
      return undefined
    }

    const began = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - began) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(target * eased)
      if (progress < 1) frame.current = requestAnimationFrame(tick)
    }

    frame.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame.current)
  }, [start, target, duration])

  return decimals > 0
    ? value.toFixed(decimals)
    : Math.round(value).toLocaleString('en-US')
}
