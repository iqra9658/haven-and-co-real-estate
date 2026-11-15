import { ArrowRight, Play } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative flex min-h-[610px] items-center bg-cover bg-center bg-no-repeat px-5 py-20 text-white sm:min-h-[690px] sm:px-8 lg:min-h-[740px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(18,19,17,.76) 0%, rgba(18,19,17,.48) 48%, rgba(18,19,17,.08) 100%), url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=90')" }}>
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-white/75">A more personal way home</p>
          <h1 className="font-['Playfair_Display'] text-5xl font-medium leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Find the perfect property for your lifestyle.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
            Thoughtful guidance, exceptional homes, and a smoother journey from the first search to the day you move in.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/properties" className="inline-flex items-center justify-center gap-3 bg-[#A58A65] px-7 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-[#222222]">
              Explore properties <ArrowRight size={17} />
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-3 border border-white/60 px-7 py-4 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-[#222222]">
              <Play size={15} fill="currentColor" /> Get to know us
            </Link>
          </div>
        </div>
        <div className="mt-16 hidden gap-12 border-t border-white/30 pt-6 sm:flex">
          <p><span className="font-['Playfair_Display'] text-3xl">12+</span><span className="ml-3 text-sm text-white/75">years of experience</span></p>
          <p><span className="font-['Playfair_Display'] text-3xl">480+</span><span className="ml-3 text-sm text-white/75">happy homeowners</span></p>
          <p><span className="font-['Playfair_Display'] text-3xl">24</span><span className="ml-3 text-sm text-white/75">local neighborhoods</span></p>
        </div>
      </div>
      <div className="absolute bottom-8 right-8 hidden text-xs uppercase tracking-[0.2em] text-white/65 lg:block">Homes with a story to tell</div>
    </section>
  )
}