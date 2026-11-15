import { Search } from 'lucide-react'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const fieldClass = 'mt-2 w-full border-0 bg-transparent text-sm text-[#222222] outline-none'

export default function SearchBar({ compact = false }) {
  const [filters, setFilters] = useState({ location: '', type: '', min: '', max: '' })
  const locationRef = useRef(null)
  const navigate = useNavigate()

  function updateField(event) {
    setFilters((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const params = new URLSearchParams()
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.set(key, value)
    })
    navigate(`/properties${params.size ? `?${params.toString()}` : ''}`)
  }

  return (
    <form onSubmit={handleSubmit} className={`grid gap-4 bg-white p-5 shadow-[0_16px_55px_rgba(27,25,21,0.12)] sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr_auto] lg:items-end lg:gap-0 lg:p-3 ${compact ? '' : 'rounded-sm'}`}>
      <label className="border-b border-[#e5e1dc] px-2 py-2 lg:border-b-0 lg:border-r lg:px-5">
        <span className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#777777]">Location<button type="button" onClick={() => locationRef.current?.focus()} aria-label="Focus location search" className="text-[#A58A65]"><Search size={14} /></button></span>
        <input ref={locationRef} name="location" value={filters.location} onChange={updateField} placeholder="Where do you want to live?" className={fieldClass} />
      </label>
      <label className="border-b border-[#e5e1dc] px-2 py-2 lg:border-b-0 lg:border-r lg:px-5">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#777777]">Property type</span>
        <select name="type" value={filters.type} onChange={updateField} className={fieldClass}>
          <option value="">All types</option><option>House</option><option>Apartment</option><option>Townhouse</option>
        </select>
      </label>
      <label className="border-b border-[#e5e1dc] px-2 py-2 lg:border-b-0 lg:border-r lg:px-5">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#777777]">Min. price</span>
        <select name="min" value={filters.min} onChange={updateField} className={fieldClass}>
          <option value="">No minimum</option><option value="500000">$500,000</option><option value="1000000">$1,000,000</option><option value="1500000">$1,500,000</option><option value="2000000">$2,000,000</option>
        </select>
      </label>
      <label className="px-2 py-2 lg:px-5">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#777777]">Max. price</span>
        <select name="max" value={filters.max} onChange={updateField} className={fieldClass}>
          <option value="">No maximum</option><option value="1000000">$1,000,000</option><option value="2000000">$2,000,000</option><option value="3000000">$3,000,000</option><option value="5000000">$5,000,000</option>
        </select>
      </label>
      <button type="submit" className="flex items-center justify-center gap-2 bg-[#A58A65] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#222222]">
        <Search size={17} /> Search
      </button>
    </form>
  )
}
