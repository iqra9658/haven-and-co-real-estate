import { ArrowLeft, ArrowRight, Bath, BedDouble, Check, House, MapPin, Maximize2, Phone } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import PropertyCard from '../components/PropertyCard'
import SectionHeading from '../components/SectionHeading'
import { useProperties } from '../context/useProperties'
import NotFound from './NotFound'

const formatPrice = (price) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(price)

export default function PropertyDetails() {
  const { id } = useParams()
  const { properties } = useProperties()
  const property = properties.find((item) => item.id === id)

  if (!property && properties.length > 0) return <NotFound />
  if (!property) return <div className="mx-auto max-w-7xl px-5 py-24 text-center text-[#666666]">Loading property…</div>

  const galleryImages = (property.images?.length ? property.images : [property.image]).filter(Boolean).slice(0, 3)
  const similarProperties = properties.filter((item) => item.id !== property.id && item.type === property.type).slice(0, 3)
  const agent = property.agent

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-7 sm:px-8 sm:py-9 lg:py-12">
        <Link to="/properties" className="inline-flex items-center gap-2 text-sm font-semibold text-[#666666] transition hover:text-[#A58A65]">
          <ArrowLeft size={16} /> Back to Properties
        </Link>

        <header className="mt-7 flex flex-col gap-5 border-b border-[#e9e5df] pb-7 sm:mt-9 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-[#f3f0eb] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#A58A65]">{property.type}</span>
              {property.status && <span className="border border-[#e9e5df] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#666666]">{property.status}</span>}
            </div>
            <h1 className="mt-4 font-['Playfair_Display'] text-3xl font-semibold leading-tight text-[#222222] sm:text-4xl lg:text-5xl">
              {property.title}
            </h1>
            <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[#666666]">
              <MapPin size={16} className="text-[#A58A65]" />
              <span>{property.location}</span>
              {property.city && <><span aria-hidden="true">·</span><span>{property.city}</span></>}
            </p>
          </div>
          <div className="sm:text-right">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#777777]">Asking Price</p>
            <p className="mt-1 font-['Playfair_Display'] text-3xl font-semibold text-[#A58A65] sm:text-4xl">{formatPrice(property.price)}</p>
          </div>
        </header>

        {galleryImages.length > 0 && (
          <div className={`mt-7 grid gap-3 ${galleryImages.length > 1 ? 'md:grid-cols-2' : 'grid-cols-1'}`} aria-label="Property photo gallery">
            {galleryImages.map((image, index) => (
              <div
                key={`${property.id}-image-${index}`}
                className={`group overflow-hidden bg-[#F7F6F3] ${galleryImages.length === 1 ? 'h-[300px] sm:h-[440px] lg:h-[580px]' : index === 0 ? 'h-[300px] md:row-span-2 md:h-full md:min-h-[500px]' : 'h-[240px] sm:h-[280px] md:h-[244px]'}`}
              >
                <img
                  src={image}
                  alt={`${property.title}${index === 0 ? '' : `, view ${index + 1}`}`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                />
              </div>
            ))}
          </div>
        )}

        <div className="mt-9 grid gap-10 lg:grid-cols-[minmax(0,1fr)_350px] lg:gap-14">
          <main>
            <section aria-labelledby="property-overview">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A58A65]">At a glance</p>
              <h2 id="property-overview" className="mt-2 font-['Playfair_Display'] text-2xl font-semibold text-[#222222]">Property Overview</h2>
              <dl className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="border border-[#e9e5df] bg-white p-4 sm:p-5">
                  <BedDouble size={20} className="text-[#A58A65]" strokeWidth={1.7} />
                  <dt className="mt-4 text-xs text-[#777777]">Bedrooms</dt>
                  <dd className="mt-1 text-sm font-semibold text-[#333333]">{property.bedrooms}</dd>
                </div>
                <div className="border border-[#e9e5df] bg-white p-4 sm:p-5">
                  <Bath size={20} className="text-[#A58A65]" strokeWidth={1.7} />
                  <dt className="mt-4 text-xs text-[#777777]">Bathrooms</dt>
                  <dd className="mt-1 text-sm font-semibold text-[#333333]">{property.bathrooms}</dd>
                </div>
                <div className="border border-[#e9e5df] bg-white p-4 sm:p-5">
                  <Maximize2 size={19} className="text-[#A58A65]" strokeWidth={1.7} />
                  <dt className="mt-4 text-xs text-[#777777]">Interior area</dt>
                  <dd className="mt-1 text-sm font-semibold text-[#333333]">{property.area.toLocaleString()} sq ft</dd>
                </div>
                <div className="border border-[#e9e5df] bg-white p-4 sm:p-5">
                  <House size={20} className="text-[#A58A65]" strokeWidth={1.7} />
                  <dt className="mt-4 text-xs text-[#777777]">Property type</dt>
                  <dd className="mt-1 text-sm font-semibold text-[#333333]">{property.type}</dd>
                </div>
              </dl>
            </section>

            <section className="mt-10 border-t border-[#e9e5df] pt-8" aria-labelledby="about-property">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A58A65]">A closer look</p>
              <h2 id="about-property" className="mt-2 font-['Playfair_Display'] text-2xl font-semibold text-[#222222]">About This Home</h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#666666] sm:text-base">{property.description}</p>
            </section>

            {property.amenities?.length > 0 && (
              <section className="mt-10 border-t border-[#e9e5df] pt-8" aria-labelledby="property-amenities">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A58A65]">Thoughtful details</p>
                <h2 id="property-amenities" className="mt-2 font-['Playfair_Display'] text-2xl font-semibold text-[#222222]">Amenities</h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {property.amenities.map((amenity) => (
                    <li key={amenity} className="flex items-center gap-3 border-b border-[#eeeae5] py-3 text-sm text-[#555555]">
                      <span className="grid h-7 w-7 shrink-0 place-items-center bg-[#f3f0eb] text-[#A58A65]"><Check size={15} /></span>
                      {amenity}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </main>

          <aside className="h-fit border border-[#e9e5df] bg-[#F7F6F3] p-5 sm:p-7 lg:sticky lg:top-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A58A65]">Your local contact</p>
            <h2 className="mt-2 font-['Playfair_Display'] text-2xl font-semibold text-[#222222]">Speak with an Agent</h2>
            {agent && (
              <div className="mt-6 flex items-center gap-4 border-y border-[#e2ddd5] py-5">
                {agent.image && <img src={agent.image} alt={agent.name} className="h-14 w-14 rounded-full object-cover" loading="lazy" />}
                <div>
                  <p className="text-sm font-semibold text-[#222222]">{agent.name}</p>
                  {agent.role && <p className="mt-1 text-xs text-[#777777]">{agent.role}</p>}
                </div>
              </div>
            )}
            <p className="mt-5 text-sm leading-6 text-[#666666]">Interested in this property? Contact our team to learn more or arrange a viewing.</p>
            <Link
              to={`/contact?property=${encodeURIComponent(property.title)}`}
              className="mt-6 flex items-center justify-center gap-2 bg-[#A58A65] px-5 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#222222]"
            >
              Contact Agent <ArrowRight size={16} />
            </Link>
            {agent?.phone && (
              <a
                href={`tel:${agent.phone.replace(/[^\d+]/g, '')}`}
                className="mt-3 flex items-center justify-center gap-2 border border-[#ded8ce] bg-white px-5 py-3 text-sm font-semibold text-[#444444] transition hover:border-[#A58A65] hover:text-[#A58A65]"
              >
                <Phone size={15} /> {agent.phone}
              </a>
            )}
          </aside>
        </div>
      </section>

      {similarProperties.length > 0 && (
        <section className="bg-[#F7F6F3] py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <SectionHeading eyebrow="Keep looking" title="Similar Homes You May Love." />
              <Link to="/properties" className="inline-flex items-center gap-2 text-sm font-semibold text-[#A58A65] transition hover:gap-3">
                All Properties <ArrowRight size={16} />
              </Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {similarProperties.map((item) => <PropertyCard key={item.id} property={item} />)}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
