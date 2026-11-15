import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AboutSection({ eyebrow, heading, description, image, imageAlt, statistics }) {
  return (
    <section className="bg-[#F7F6F3] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 md:grid-cols-2 lg:gap-20">
        <div className="relative">
          <img
            src={image}
            alt={imageAlt}
            className="h-[360px] w-full object-cover sm:h-[480px] lg:h-[540px]"
            loading="lazy"
          />
          <div className="absolute -bottom-4 right-0 h-20 w-20 border-b border-r border-[#A58A65] sm:-bottom-5 sm:-right-5 sm:h-28 sm:w-28" aria-hidden="true" />
        </div>

        <div className="md:py-4">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#A58A65]">{eyebrow}</p>
          <h2 className="max-w-xl font-['Playfair_Display'] text-3xl font-medium leading-tight tracking-tight text-[#222222] sm:text-4xl lg:text-5xl">
            {heading}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#666666]">{description}</p>

          <dl className="mt-9 grid grid-cols-3 gap-3 border-t border-[#ded9d1] pt-6 sm:gap-5">
            {statistics.map(({ value, label }) => (
              <div key={label}>
                <dt className="font-['Playfair_Display'] text-2xl font-medium text-[#A58A65] sm:text-3xl">{value}</dt>
                <dd className="mt-2 text-xs leading-5 text-[#666666] sm:text-sm">{label}</dd>
              </div>
            ))}
          </dl>

          <Link
            to="/about"
            className="mt-9 inline-flex items-center gap-3 bg-[#A58A65] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#222222]"
          >
            Learn More <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
