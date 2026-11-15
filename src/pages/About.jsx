import { ArrowRight, HeartHandshake, MapPin, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'

const values = [
  { icon: HeartHandshake, title: 'People before property', text: 'We listen carefully, work at your pace, and put your needs ahead of a transaction.' },
  { icon: MapPin, title: 'Rooted in the neighborhood', text: 'We live and work in the communities we serve, and share what makes each one special.' },
  { icon: ShieldCheck, title: 'Advice you can trust', text: 'Clear expectations and honest answers help you make every decision with confidence.' },
]

const team = [
  { name: 'Olivia Bennett', role: 'Founder & Senior Advisor', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=85' },
  { name: 'James Carter', role: 'Property Advisor', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=85' },
  { name: 'Sofia Martinez', role: 'Client Experience Lead', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=85' },
]

export default function About() {
  return (
    <>
      <PageHero title="Good homes. Good people. A better way forward." image="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=85" />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-2 md:items-center lg:gap-20 lg:py-28">
        <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85" alt="Welcoming home interior" className="h-[360px] w-full object-cover sm:h-[480px]" loading="lazy" />
        <div><SectionHeading eyebrow="Our story" title="A real estate company with a little more heart." description="Haven & Co. began with a simple idea: finding a home should feel personal, not transactional." />
          <p className="mt-5 leading-7 text-[#666666]">We’re an independent team of local advisors who believe the best moves start with good conversations. Over the last twelve years, we’ve helped people find their first place, make room for a growing family, and discover a fresh start in a new city.</p>
          <div className="mt-8 grid grid-cols-2 gap-6 border-t border-[#e9e5df] pt-6"><div><p className="font-['Playfair_Display'] text-3xl text-[#A58A65]">480+</p><p className="mt-1 text-sm text-[#666666]">happy homeowners</p></div><div><p className="font-['Playfair_Display'] text-3xl text-[#A58A65]">12 years</p><p className="mt-1 text-sm text-[#666666]">of local experience</p></div></div>
        </div>
      </section>
      <section className="bg-[#F7F6F3] py-20 lg:py-24"><div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-2">
        <div><SectionHeading eyebrow="Our mission" title="Make every move feel like the right move." /><p className="mt-5 leading-7 text-[#666666]">We’re here to make real estate more thoughtful and accessible: attentive service, clear advice, and a steady hand through life’s biggest transitions.</p></div>
        <div><SectionHeading eyebrow="Our vision" title="A more connected place to call home." /><p className="mt-5 leading-7 text-[#666666]">We imagine neighborhoods where people feel they belong, and a property experience that respects the people and places behind every front door.</p></div>
      </div></section>
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <SectionHeading eyebrow="What guides us" title="The way we work matters." description="Our values show up in the small things: how we listen, how we advise, and how we follow through." centered />
        <div className="mt-12 grid gap-7 md:grid-cols-3">{values.map(({ icon: Icon, title, text }) => <article key={title} className="border border-[#e9e5df] p-7"><Icon size={25} className="text-[#A58A65]" /><h3 className="mt-5 font-['Playfair_Display'] text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-[#666666]">{text}</p></article>)}</div>
      </section>
      <section className="bg-[#F7F6F3] py-20 lg:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="The people behind Haven" title="Meet your local team." description="Friendly faces, thoughtful advice, and a real love for the places we call home." centered />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{team.map((member) => <article key={member.name}><img src={member.image} alt={member.name} className="h-80 w-full object-cover object-top" loading="lazy" /><h3 className="mt-5 font-['Playfair_Display'] text-xl font-semibold">{member.name}</h3><p className="mt-1 text-sm text-[#777777]">{member.role}</p></article>)}</div>
      </div></section>
      <section className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-16 sm:px-8 md:flex-row md:items-center md:justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A58A65]">A good place to begin</p><h2 className="mt-2 font-['Playfair_Display'] text-3xl font-semibold">Let’s talk about what home means to you.</h2></div><Link to="/contact" className="inline-flex items-center gap-2 self-start bg-[#A58A65] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#222222]">Meet our team <ArrowRight size={16} /></Link></section>
    </>
  )
}