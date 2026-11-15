export default function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#A58A65]">
          {eyebrow}
        </p>
      )}
      <h2 className="font-['Playfair_Display'] text-3xl font-semibold leading-tight tracking-tight text-[#222222] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-5 leading-7 text-[#666666]">{description}</p>}
    </div>
  )
}
