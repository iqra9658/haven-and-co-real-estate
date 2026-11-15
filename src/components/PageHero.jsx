import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function PageHero({ eyebrow = 'HAVEN & CO.', title, description, image }) {
  return (
    <section
      className="relative flex min-h-[310px] items-center bg-cover bg-center px-5 py-20 text-white sm:min-h-[380px] sm:px-8"
      style={{ backgroundImage: `linear-gradient(90deg, rgba(20,20,20,.72), rgba(20,20,20,.22)), url(${image})` }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-white/80">{eyebrow}</p>
        <h1 className="max-w-3xl font-['Playfair_Display'] text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
        {description && <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">{description}</p>}
        <div className="mt-7 flex items-center gap-2 text-sm text-white/75">
          <Link to="/" className="transition hover:text-white">Home</Link>
          <ArrowRight size={14} />
          <span className="text-white">{title}</span>
        </div>
      </div>
    </section>
  )
}
