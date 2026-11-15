import { ArrowUpRight, Menu, Search, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Properties', to: '/properties' },
  { label: 'Contact', to: '/contact' },
]

const navClass = ({ isActive }) => `text-sm transition hover:text-[#A58A65] ${isActive ? 'font-semibold text-[#A58A65]' : 'text-[#444444]'}`

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  function goToSearch() {
    setMenuOpen(false)
    navigate('/properties')
  }

  return (
    <header className="relative z-30 border-b border-[#eeeae5] bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:py-5" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-2 text-lg font-bold tracking-[0.15em]" onClick={() => setMenuOpen(false)}>
          <span className="grid h-9 w-9 place-items-center bg-[#A58A65] font-['Playfair_Display'] text-xl font-medium text-white">H</span>
          <span>HAVEN<span className="font-normal text-[#A58A65]">& CO.</span></span>
        </Link>
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => <NavLink key={item.to} to={item.to} end={item.to === '/'} className={navClass}>{item.label}</NavLink>)}
        </div>
        <div className="hidden items-center gap-5 lg:flex">
          <button type="button" onClick={goToSearch} className="text-[#555555] transition hover:text-[#A58A65]" aria-label="Search properties"><Search size={19} /></button>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#A58A65] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#222222]">Get in touch <ArrowUpRight size={15} /></Link>
        </div>
        <div className="flex items-center gap-4 lg:hidden">
          <button type="button" onClick={goToSearch} aria-label="Search properties" className="text-[#444444]"><Search size={19} /></button>
          <button type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} className="text-[#222222]">
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </nav>
      {menuOpen && <div className="absolute left-0 right-0 top-full border-t border-[#eeeae5] bg-white px-5 py-5 shadow-lg lg:hidden">
        <div className="mx-auto flex max-w-7xl flex-col gap-1">
          {navItems.map((item) => <NavLink key={item.to} to={item.to} end={item.to === '/'} className={`${navClass} rounded px-3 py-3`} onClick={() => setMenuOpen(false)}>{item.label}</NavLink>)}
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="mt-2 flex items-center justify-center gap-2 bg-[#A58A65] px-5 py-3 text-sm font-semibold text-white">Get in touch <ArrowUpRight size={15} /></Link>
        </div>
      </div>}
    </header>
  )
}