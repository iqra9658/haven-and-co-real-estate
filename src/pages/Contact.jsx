import { useEffect, useState } from 'react'
import { CheckCircle2, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'

const emptyForm = { name: '', email: '', phone: '', subject: '', message: '' }

export default function Contact() {
  const [searchParams] = useSearchParams()
  const [form, setForm] = useState(() => {
    const property = searchParams.get('property')
    return property ? { ...emptyForm, subject: `I'm interested in ${property}` } : emptyForm
  })
  const [submitted, setSubmitted] = useState(false)
  const [submissionError, setSubmissionError] = useState('')

  useEffect(() => {
    if (!submitted) return undefined
    const timeoutId = window.setTimeout(() => setSubmitted(false), 6000)
    return () => window.clearTimeout(timeoutId)
  }, [submitted])

  function handleChange(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
    setSubmitted(false)
    setSubmissionError('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    try {
      const savedSubmissions = JSON.parse(localStorage.getItem('haven-contact-submissions') || '[]')
      if (!Array.isArray(savedSubmissions)) throw new Error('Stored submissions are not a list.')
      localStorage.setItem('haven-contact-submissions', JSON.stringify([...savedSubmissions, { ...form, submittedAt: new Date().toISOString() }]))
      setSubmitted(true)
      setForm(emptyForm)
    } catch {
      setSubmissionError('We could not save this demo message in this browser. Please try again or contact us by phone.')
    }
  }

  const fieldClass = 'mt-2 w-full border border-[#e5e1dc] bg-white px-4 py-3 text-sm text-[#333333] outline-none transition placeholder:text-[#aaa39a] focus:border-[#A58A65]'
  return (
    <>
      <PageHero title="A good conversation can start here." image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85" />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20 lg:py-24">
        <div>
          <SectionHeading eyebrow="Get in touch" title="Let’s talk about your next move." description="Tell us what you have in mind. A real person from our local team will be in touch to help you take the next step." />
          <div className="mt-9 space-y-6">
            <a href="tel:+13105550184" className="flex items-start gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center bg-[#f3f0eb] text-[#A58A65]"><Phone size={19} /></span><span><span className="block text-xs font-semibold uppercase tracking-wider text-[#777777]">Call us</span><span className="mt-1 block text-sm font-semibold text-[#333333]">+1 (310) 555-0184</span></span></a>
            <a href="mailto:hello@havenandco.example" className="flex items-start gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center bg-[#f3f0eb] text-[#A58A65]"><Mail size={19} /></span><span><span className="block text-xs font-semibold uppercase tracking-wider text-[#777777]">Email</span><span className="mt-1 block text-sm font-semibold text-[#333333]">hello@havenandco.example</span></span></a>
            <div className="flex items-start gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center bg-[#f3f0eb] text-[#A58A65]"><MapPin size={19} /></span><span><span className="block text-xs font-semibold uppercase tracking-wider text-[#777777]">Visit us</span><span className="mt-1 block text-sm font-semibold text-[#333333]">2450 Sunset Boulevard<br />Los Angeles, CA 90026</span></span></div>
          </div>
          <div className="mt-9 border-l-2 border-[#A58A65] bg-[#F7F6F3] p-5 text-sm leading-6 text-[#666666]">We’re available Monday to Saturday, 9am–6pm. If you reach us after hours, leave a note and we’ll get back to you soon.</div>
        </div>
        <div className="border border-[#e9e5df] p-5 sm:p-8">
          <h2 className="font-['Playfair_Display'] text-2xl font-semibold">Send us a note</h2>
          <p className="mt-2 text-sm text-[#666666]">Share a few details and we’ll take it from there.</p>
          {submitted && <div role="status" className="mt-5 flex items-start gap-3 border border-green-200 bg-green-50 p-4 text-sm text-green-800"><CheckCircle2 size={19} className="mt-0.5 shrink-0" /><span><strong>Thanks for reaching out.</strong> Your message has been saved in this browser for the demo. No email was sent.</span></div>}
          {submissionError && <p role="alert" className="mt-5 border border-red-200 bg-red-50 p-4 text-sm text-red-800">{submissionError}</p>}
          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-xs font-semibold text-[#555555]">Full name<input required minLength="2" autoComplete="name" name="name" value={form.name} onChange={handleChange} className={fieldClass} placeholder="Your name" /></label>
              <label className="text-xs font-semibold text-[#555555]">Email address<input required type="email" autoComplete="email" name="email" value={form.email} onChange={handleChange} className={fieldClass} placeholder="you@example.com" /></label>
              <label className="text-xs font-semibold text-[#555555]">Phone number<input type="tel" autoComplete="tel" name="phone" value={form.phone} onChange={handleChange} className={fieldClass} placeholder="+1 (555) 000-0000" /></label>
              <label className="text-xs font-semibold text-[#555555]">Subject<input required name="subject" value={form.subject} onChange={handleChange} className={fieldClass} placeholder="How can we help?" /></label>
            </div>
            <label className="block text-xs font-semibold text-[#555555]">Your message<textarea required minLength="10" rows="5" name="message" value={form.message} onChange={handleChange} className={`${fieldClass} resize-y`} placeholder="Tell us a little about what you’re looking for..." /></label>
            <button type="submit" className="inline-flex items-center gap-2 bg-[#A58A65] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#222222]">Send message <Send size={15} /></button>
          </form>
        </div>
      </section>
    </>
  )
}