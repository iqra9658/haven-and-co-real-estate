import { ArrowUpRight, BriefcaseBusiness, Camera, Mail, MapPin, Phone, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Properties', to: '/properties' },
  { label: 'Contact', to: '/contact' },
]

const socialLinks = [
  { Icon: Camera, label: 'Instagram', href: 'https://www.instagram.com/' },
  { Icon: UsersRound, label: 'Facebook', href: 'https://www.facebook.com/' },
  { Icon: BriefcaseBusiness, label: 'LinkedIn', href: 'https://www.linkedin.com/' },
]

export default function Footer() {
  return (
    <footer className="bg-[#222222] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.4fr_.8fr_1fr] lg:py-20">
        <div>
          <Link to="/" className="inline-flex items-center gap-2 text-xl font-bold tracking-[0.16em]">HAVEN<span className="text-[#c7aa7f]">&</span>CO.</Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">A thoughtful real estate partner for wherever life takes you next. Good homes, good people, and guidance you can trust.</p>
          <div className="mt-6 flex gap-3">
            {socialLinks.map(({ Icon, label, href }) => <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center border border-white/20 text-white/70 transition hover:border-[#A58A65] hover:bg-[#A58A65] hover:text-white"><Icon size={17} /></a>)}
          </div>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c7aa7f]">Explore</h2>
          <ul className="mt-5 space-y-3">{links.map((link) => <li key={link.to}><Link className="text-sm text-white/65 transition hover:text-white" to={link.to}>{link.label}</Link></li>)}</ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c7aa7f]">Get in touch</h2>
          <ul className="mt-5 space-y-4 text-sm text-white/65">
            <li className="flex items-start gap-3"><MapPin size={17} className="mt-0.5 shrink-0 text-[#c7aa7f]" />2450 Sunset Boulevard, Los Angeles, CA</li>
            <li><a href="tel:+13105550184" className="flex items-center gap-3 transition hover:text-white"><Phone size={16} className="text-[#c7aa7f]" />+1 (310) 555-0184</a></li>
            <li><a href="mailto:hello@havenandco.example" className="flex items-center gap-3 transition hover:text-white"><Mail size={16} className="text-[#c7aa7f]" />hello@havenandco.example</a></li>
          </ul>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#c7aa7f] hover:text-white">Plan a conversation <ArrowUpRight size={16} /></Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Haven & Co. Real estate, made personal.</p>
          <p>Made for finding your place.</p>
        </div>
      </div>
    </footer>
  )
}