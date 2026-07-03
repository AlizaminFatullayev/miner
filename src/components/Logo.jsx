/**
 * Brand mark — a cut gem / open pit outline over strata lines.
 */
export default function Logo({ className = 'h-9 w-9' }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M16 4.5 27.5 16 16 27.5 4.5 16Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M10 12.5h12M7 16h18M10 19.5h12"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.65"
      />
    </svg>
  )
}
