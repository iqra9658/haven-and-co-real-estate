import { ArrowUpRight, Bath, BedDouble, Maximize2, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const formatPrice = (price) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(price)

export default function PropertyCard({ property }) {
  return (
    <article className="group overflow-hidden border border-[#eeeae5] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(27,25,21,.10)]">
      <Link to={`/properties/${property.id}`} className="relative block overflow-hidden" aria-label={`View ${property.title}`}>
        <img src={property.image} alt={property.title} loading="lazy" className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute left-4 top-4 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#222222]">{property.type}</span>
        <span className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center bg-white text-[#222222] transition group-hover:bg-[#A58A65] group-hover:text-white"><ArrowUpRight size={18} /></span>
      </Link>
      <div className="p-5 sm:p-6">
        <p className="flex items-center gap-1.5 text-xs text-[#777777]"><MapPin size={14} className="text-[#A58A65]" />{property.location}</p>
        <Link to={`/properties/${property.id}`} className="mt-3 block font-['Playfair_Display'] text-xl font-semibold text-[#222222] transition hover:text-[#A58A65]">{property.title}</Link>
        <p className="mt-2 text-lg font-semibold text-[#A58A65]">{formatPrice(property.price)}</p>
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-[#eeeae5] pt-4 text-xs text-[#666666]">
          <span className="flex items-center gap-1.5"><BedDouble size={15} />{property.bedrooms} beds</span>
          <span className="flex items-center gap-1.5"><Bath size={15} />{property.bathrooms} baths</span>
          <span className="flex items-center gap-1.5"><Maximize2 size={14} />{property.area.toLocaleString()} sq ft</span>
        </div>
        <Link
          to={`/properties/${property.id}`}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 bg-[#A58A65] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#222222]"
        >
          View Details <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  )
}