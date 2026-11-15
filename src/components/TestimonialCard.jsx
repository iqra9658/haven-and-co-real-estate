import { Quote, Star } from 'lucide-react'

export default function TestimonialCard({ testimonial }) {
  return (
    <article className="group flex h-full flex-col border border-[#e9e5df] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#A58A65] hover:shadow-[0_16px_40px_rgba(27,25,21,.07)] sm:p-8">
      <div className="flex items-start justify-between">
        <div className="flex gap-1 text-[#A58A65]" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
          {Array.from({ length: 5 }, (_, index) => <Star key={index} size={15} fill="currentColor" />)}
        </div>
        <Quote size={22} strokeWidth={1.5} className="text-[#A58A65]/50 transition group-hover:text-[#A58A65]" aria-hidden="true" />
      </div>

      <p className="mt-6 flex-1 text-sm leading-7 text-[#555555]">“{testimonial.text}”</p>

      <div className="mt-7 flex items-center gap-3 border-t border-[#eeeae5] pt-5">
        {testimonial.image ? (
          <img src={testimonial.image} alt={`${testimonial.name}`} className="h-11 w-11 rounded-full object-cover" loading="lazy" />
        ) : (
          <span className="grid h-11 w-11 place-items-center rounded-full bg-[#f3f0eb] font-semibold text-[#A58A65]" aria-hidden="true">
            {testimonial.name.split(' ').map((part) => part[0]).slice(0, 2).join('')}
          </span>
        )}
        <div>
          <p className="text-sm font-semibold">{testimonial.name}</p>
          <p className="mt-1 text-xs text-[#777777]">{testimonial.role} · {testimonial.location}</p>
        </div>
      </div>
    </article>
  )
}
