import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="grid min-h-[55vh] place-items-center px-5 py-20 text-center">
      <div>
        <p className="font-['Playfair_Display'] text-7xl text-[#A58A65]">404</p>
        <h1 className="mt-4 font-['Playfair_Display'] text-3xl font-semibold">This page isn’t at this address.</h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#666666]">The page may have moved, or the link may be out of date. Let’s find your way back.</p>
        <Link to="/" className="mt-7 inline-flex items-center gap-2 bg-[#A58A65] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#222222]"><ArrowLeft size={16} /> Back to home</Link>
      </div>
    </section>
  )
}
