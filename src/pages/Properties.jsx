import { Search, SlidersHorizontal, X } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import PropertyCard from '../components/PropertyCard'
import { useProperties } from '../context/useProperties'

const inputClass = 'mt-2 w-full border border-[#e5e1dc] bg-white px-3 py-3 text-sm text-[#333333] outline-none transition placeholder:text-[#999999] focus:border-[#A58A65] focus:ring-1 focus:ring-[#A58A65]'

export default function Properties() {
  const { properties } = useProperties()
  const [searchParams, setSearchParams] = useSearchParams()
  const propertyTypes = [...new Set(properties.map((property) => property.type))]
  const bedroomOptions = [...new Set(properties.map((property) => property.bedrooms))].sort((a, b) => a - b)
  const filters = {
    location: searchParams.get('location') ?? '',
    type: searchParams.get('type') ?? '',
    min: searchParams.get('min') ?? '',
    max: searchParams.get('max') ?? '',
    beds: searchParams.get('beds') ?? '',
  }

  const filteredProperties = properties.filter((property) => {
    const searchText = `${property.title} ${property.location} ${property.city}`.toLowerCase()
    const searchMatch = searchText.includes(filters.location.trim().toLowerCase())
    const minPriceMatch = !filters.min || (Number.isFinite(Number(filters.min)) && property.price >= Number(filters.min))
    const maxPriceMatch = !filters.max || (Number.isFinite(Number(filters.max)) && property.price <= Number(filters.max))
    return searchMatch && (!filters.type || property.type === filters.type)
      && minPriceMatch
      && maxPriceMatch
      && (!filters.beds || property.bedrooms >= Number(filters.beds))
  })

  function updateFilter(event) {
    const params = new URLSearchParams(searchParams)
    if (event.target.value) params.set(event.target.name, event.target.value)
    else params.delete(event.target.name)
    setSearchParams(params, { replace: true })
  }

  function clearFilters() {
    setSearchParams({}, { replace: true })
  }

  return (
    <>
      <PageHero
        eyebrow="OUR PROPERTY COLLECTION"
        title="Find a Place to Call Home."
        description="Explore thoughtfully selected homes designed around the way you want to live."
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85"
      />
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center bg-[#f3f0eb] text-[#A58A65]"><SlidersHorizontal size={19} /></span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A58A65]">Find your place</p>
            <h2 className="mt-1 font-['Playfair_Display'] text-2xl font-semibold sm:text-3xl">Homes worth coming home to.</h2>
          </div>
        </div>
        <div className="mt-8 border border-[#e9e5df] bg-[#F7F6F3] p-4 sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            <label className="text-xs font-semibold text-[#666666] lg:col-span-2">
              Search by property or location
              <span className="relative block">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A58A65]" aria-hidden="true" />
                <input
                  name="location"
                  value={filters.location}
                  onChange={updateFilter}
                  placeholder="Try a home, city, or neighborhood"
                  className={`${inputClass} pl-10`}
                />
              </span>
            </label>
            <label className="text-xs font-semibold text-[#666666]">
              Property type
              <select name="type" value={filters.type} onChange={updateFilter} className={inputClass}>
                <option value="">Any type</option>
                {propertyTypes.map((type) => <option key={type} value={type}>{type}</option>)}
              </select>
            </label>
            <label className="text-xs font-semibold text-[#666666]">
              Minimum price
              <input name="min" type="number" min="0" value={filters.min} onChange={updateFilter} placeholder="No minimum" className={inputClass} />
            </label>
            <label className="text-xs font-semibold text-[#666666]">
              Maximum price
              <input name="max" type="number" min="0" value={filters.max} onChange={updateFilter} placeholder="No maximum" className={inputClass} />
            </label>
            <label className="text-xs font-semibold text-[#666666]">
              Bedrooms
              <select name="beds" value={filters.beds} onChange={updateFilter} className={inputClass}>
                <option value="">Any</option>
                {bedroomOptions.map((bedrooms) => <option key={bedrooms} value={bedrooms}>{bedrooms}+ bedrooms</option>)}
              </select>
            </label>
          </div>
          <div className="mt-5 flex flex-col gap-3 border-t border-[#e5e1dc] pt-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-[#777777]">Refine your search to find a home that feels right.</p>
            <button type="button" onClick={clearFilters} className="inline-flex items-center justify-center gap-2 self-start text-sm font-semibold text-[#666666] transition hover:text-[#A58A65] sm:self-auto">
              <X size={15} /> Clear Filters
            </button>
          </div>
        </div>

        <div className="mt-9 flex flex-col justify-between gap-2 border-b border-[#e9e5df] pb-4 sm:flex-row sm:items-end">
          <h2 className="font-['Playfair_Display'] text-2xl font-semibold">Available properties</h2>
          <p className="text-sm text-[#666666]" aria-live="polite">
            Showing {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'}
          </p>
        </div>
        {filteredProperties.length > 0 ? (
          <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((property) => <PropertyCard key={property.id} property={property} />)}
          </div>
        ) : (
          <div className="mt-7 border border-dashed border-[#d8d1c7] bg-[#F7F6F3] px-5 py-16 text-center">
            <h3 className="font-['Playfair_Display'] text-2xl font-semibold">No homes found just yet.</h3>
            <p className="mt-3 text-sm text-[#666666]">Try a different search or adjust your filters to see more homes.</p>
            <button type="button" onClick={clearFilters} className="mt-6 inline-flex items-center gap-2 bg-[#A58A65] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#222222]">
              Clear Filters <X size={15} />
            </button>
          </div>
        )}
      </section>
    </>
  )
}