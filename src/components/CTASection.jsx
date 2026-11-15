import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CTASection({
  eyebrow,
  heading,
  description,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#222222] px-5 py-20 text-center text-white sm:px-8 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(165,138,101,0.2),_transparent_60%)]" aria-hidden="true" />
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c7aa7f]">{eyebrow}</p>
        <h2 className="mt-4 font-['Playfair_Display'] text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          {heading}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
          {description}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to={primaryTo}
            className="inline-flex items-center justify-center gap-2 bg-[#A58A65] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-white hover:text-[#222222]"
          >
            {primaryLabel} <ArrowRight size={16} />
          </Link>
          <Link
            to={secondaryTo}
            className="inline-flex items-center justify-center gap-2 border border-white/35 px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:border-[#A58A65] hover:bg-[#A58A65]"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
