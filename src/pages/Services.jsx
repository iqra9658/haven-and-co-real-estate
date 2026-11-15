import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'

const benefits = ['Personal advice from a local expert', 'Clear updates, from start to finish', 'A plan tailored to your priorities', 'Support that continues after the move']

export default function Services() {
  return (
    <>
      <PageHero title="Thoughtful guidance for every next step." image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85" />
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <SectionHeading eyebrow="Our services" title="Here for the whole journey." description="No two moves are the same. We take the time to understand yours, then bring the right people and expertise to help you get there." centered />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{services.map((service) => <ServiceCard key={service.title} title={service.title} description={service.description} icon={service.icon} link={service.link} />)}</div>
      </section>
      <section className="bg-[#F7F6F3] py-20 lg:py-24"><div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 md:grid-cols-2 md:items-center lg:gap-20">
        <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85" alt="Interior of a light-filled home" className="h-[360px] w-full object-cover sm:h-[460px]" loading="lazy" />
        <div><SectionHeading eyebrow="Your partner in the process" title="Personal service. Practical expertise." description="Good service is about more than a checklist. It’s about knowing what matters to you and being ready with the right answer when you need it." />
          <ul className="mt-7 space-y-4">{benefits.map((benefit) => <li key={benefit} className="flex items-start gap-3 text-sm text-[#555555]"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center bg-[#e9e1d5] text-[#A58A65]"><Check size={13} /></span>{benefit}</li>)}</ul>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-[#A58A65] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#222222]">Talk with an advisor <ArrowRight size={16} /></Link>
        </div>
      </div></section>
      <section className="bg-[#222222] px-5 py-16 text-white sm:px-8 lg:py-20"><div className="mx-auto flex max-w-7xl flex-col gap-7 md:flex-row md:items-center md:justify-between">
        <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c7aa7f]">A conversation is a good start</p><h2 className="mt-3 font-['Playfair_Display'] text-3xl sm:text-4xl">Tell us where you’d like to go next.</h2></div>
        <Link to="/contact" className="inline-flex items-center gap-3 self-start bg-[#A58A65] px-7 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-[#222222]">Get in touch <ArrowRight size={16} /></Link>
      </div></section>
    </>
  )
}