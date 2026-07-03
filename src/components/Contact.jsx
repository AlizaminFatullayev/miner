import { useState } from 'react'
import { CircleCheck, Clock, Mail, MapPin, Phone, Send } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const CONTACT_DETAILS = [
  { icon: MapPin, label: 'Head office', value: '44 Foundry Road, Perth WA 6000, Australia' },
  { icon: Phone, label: 'Project desk', value: '+61 8 9200 4410' },
  { icon: Mail, label: 'Email', value: 'projects@minergroup.com', href: 'mailto:projects@minergroup.com' },
  { icon: Clock, label: 'Hours', value: 'Mon–Fri · 07:00–18:00 AWST' },
]

const PROJECT_TYPES = [
  'Exploration & geology',
  'Drilling & extraction',
  'Processing & refinement',
  'Rehabilitation & closure',
  'Full-cycle partnership',
  'Other',
]

const FIELD_CLASSES =
  'w-full border border-steel-600/50 bg-coal-950 px-4 py-3 text-ash-100 placeholder:text-steel-500 transition-colors duration-200 focus:border-ember-500 focus:outline-none'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="border-t border-steel-600/20 bg-coal-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Get in touch"
          title="Let's talk about your site"
          intro="Tell us about the deposit, the timeline and the constraints. An engineer — not a salesperson — will come back to you within one business day."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* contact details panel */}
          <Reveal className="h-full">
            <div className="flex h-full flex-col border border-steel-600/40 bg-coal-950 p-8 sm:p-10">
              <h3 className="font-display text-2xl font-semibold tracking-wide text-ash-50 uppercase">
                Project desk
              </h3>

              <ul className="mt-8 space-y-6">
                {CONTACT_DETAILS.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center border border-steel-600/50 bg-coal-800 text-ember-400">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <p>
                      <span className="block font-mono text-[10px] tracking-[0.24em] text-steel-400 uppercase">
                        {label}
                      </span>
                      {href ? (
                        <a
                          href={href}
                          className="mt-1 block text-steel-200 transition-colors hover:text-ember-400"
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="mt-1 block text-steel-200">{value}</span>
                      )}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-10">
                <div className="border border-ember-500/30 bg-ember-500/5 p-5">
                  <p className="font-mono text-[10px] tracking-[0.24em] text-ember-400 uppercase">
                    Site emergency · 24/7
                  </p>
                  <p className="font-display mt-1.5 text-2xl font-semibold tracking-wider text-ash-50">
                    +61 8 9200 4999
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* form */}
          <Reveal delay={140} className="h-full">
            <div aria-live="polite" className="h-full">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center border border-steel-600/40 bg-coal-950 p-10 text-center">
                  <CircleCheck className="h-14 w-14 text-ember-400" aria-hidden="true" />
                  <h3 className="font-display mt-6 text-3xl font-semibold tracking-wide text-ash-50 uppercase">
                    Message received
                  </h3>
                  <p className="mt-3 max-w-sm text-steel-300">
                    Thanks for the detail. Our project desk will reply within one
                    business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 border border-steel-500 px-6 py-3 text-sm font-semibold tracking-widest text-ash-100 uppercase transition-colors hover:border-ember-400 hover:text-ember-300"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="grid gap-5 border border-steel-600/40 bg-coal-950 p-8 sm:grid-cols-2 sm:p-10"
                >
                  <div>
                    <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-steel-200">
                      Full name <span className="text-ember-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Dana Kovach"
                      className={FIELD_CLASSES}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-steel-200">
                      Work email <span className="text-ember-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="dana@company.com"
                      className={FIELD_CLASSES}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-company" className="mb-2 block text-sm font-medium text-steel-200">
                      Company
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Company Pty Ltd"
                      className={FIELD_CLASSES}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-type" className="mb-2 block text-sm font-medium text-steel-200">
                      Project type
                    </label>
                    <select id="contact-type" name="type" className={FIELD_CLASSES} defaultValue="">
                      <option value="" disabled>
                        Select a service line
                      </option>
                      {PROJECT_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-steel-200">
                      Project details <span className="text-ember-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Location, commodity, expected tonnage, current stage…"
                      className={`${FIELD_CLASSES} resize-y`}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-2.5 bg-ember-500 px-8 py-4 font-semibold tracking-widest text-coal-950 uppercase transition-colors duration-200 hover:bg-ember-400"
                    >
                      Send enquiry
                      <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
