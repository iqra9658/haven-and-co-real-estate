import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ServiceCard({ title, description, icon: Icon, link }) {
  return (
    <article className="group flex h-full flex-col border border-[#e9e5df] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#A58A65] hover:shadow-[0_16px_40px_rgba(27,25,21,.07)] sm:p-8">
      <div className="grid h-12 w-12 place-items-center bg-[#f7f6f3] text-[#A58A65] transition duration-300 group-hover:bg-[#A58A65] group-hover:text-white"><Icon size={22} strokeWidth={1.7} /></div>
      <h3 className="mt-7 font-['Playfair_Display'] text-lg font-semibold uppercase tracking-[0.08em] sm:text-xl">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#666666]">{description}</p>
      <Link to={link} className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-[#A58A65] transition duration-300 hover:gap-3">
        Learn more <ArrowUpRight size={16} />
      </Link>
    </article>
  )
}