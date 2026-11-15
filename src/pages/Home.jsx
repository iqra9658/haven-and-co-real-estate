import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useProperties } from '../context/useProperties'
import { whyChooseUsBenefits } from '../data/benefits'
import { services } from '../data/services'
import { testimonials } from '../data/testimonials'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import PropertyCard from '../components/PropertyCard'
import SearchBar from '../components/SearchBar'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'
import WhyChooseUs from '../components/WhyChooseUs'
import CTASection from '../components/CTASection'

const aboutStatistics = [
  { value: '12+', label: 'Years of Experience' },
  { value: '480+', label: 'Happy Homeowners' },
  { value: '24', label: 'Local Neighborhoods' },
]

export default function Home() {
  const { properties } = useProperties()
  return (
    <>
      <Hero />
      <section className="relative z-10 mx-auto -mt-2 w-full max-w-7xl px-5 sm:-mt-12 sm:px-8"><SearchBar /></section>
      <AboutSection
        eyebrow="ABOUT HAVEN & CO."
        heading="Helping You Find a Place to Call Home."
        description="We believe finding a home should be an exciting journey. Our experienced team combines local knowledge, personalized service and exceptional properties to help you find the perfect place."
        image="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
        imageAlt="Sunlit luxury living room with refined furnishings"
        statistics={aboutStatistics}
      />
      <section className="bg-[#F7F6F3] py-20 lg:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><SectionHeading eyebrow="WHAT WE DO" title="Our Services" description="From finding your dream home to managing your investment, we're here to make every property decision easier." /><Link to="/services" className="inline-flex shrink-0 items-center gap-2 pb-1 text-sm font-semibold text-[#A58A65]">All services <ArrowRight size={16} /></Link></div>
        <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{services.map((service) => <ServiceCard key={service.title} title={service.title} description={service.description} icon={service.icon} link={service.link} />)}</div>
      </div></section>
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><SectionHeading eyebrow="FEATURED PROPERTIES" title="Explore Our Handpicked Properties" description="Discover exceptional homes selected to match your lifestyle." /><Link to="/properties" className="inline-flex shrink-0 items-center gap-2 pb-1 text-sm font-semibold text-[#A58A65] transition hover:gap-3">View All Properties <ArrowRight size={16} /></Link></div>
        <div className="mt-11 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{properties.map((property) => <PropertyCard key={property.id} property={property} />)}</div>
      </section>
      <WhyChooseUs
        eyebrow="WHY CHOOSE HAVEN & CO."
        heading="A Better Way to Find Your Place."
        description="Buying or selling a home is a big decision. We make every step feel clear, personal, and thoughtfully handled."
        benefits={whyChooseUsBenefits}
      />
      <section className="bg-[#F7F6F3] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="CLIENT STORIES"
            title="Good People. Happy Homeowners."
            description="The best part of what we do is helping people find a place they are proud to call home."
            centered
          />
          <div className="mt-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
      <CTASection
        eyebrow="YOUR NEXT CHAPTER STARTS HERE"
        heading="Ready to Find Your Place?"
        description="Whether you're searching for your dream home or planning your next move, our team is here to help."
        primaryLabel="Get in Touch"
        primaryTo="/contact"
        secondaryLabel="Explore Properties"
        secondaryTo="/properties"
      />
    </>
  )
}