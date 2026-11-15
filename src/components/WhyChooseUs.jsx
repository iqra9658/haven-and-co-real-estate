export default function WhyChooseUs({ eyebrow, heading, description, benefits }) {
  return (
    <section className="bg-[#F7F6F3] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A58A65]">{eyebrow}</p>
          <h2 className="mt-4 font-['Playfair_Display'] text-3xl font-semibold leading-tight tracking-tight text-[#222222] sm:text-4xl lg:text-5xl">
            {heading}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#666666]">{description}</p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {benefits.map(({ title, description: benefitDescription, icon: Icon }) => (
            <article
              key={title}
              className="group border border-[#e9e5df] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#A58A65] hover:shadow-[0_16px_40px_rgba(27,25,21,.07)] sm:p-7"
            >
              <span className="grid h-12 w-12 place-items-center bg-[#f7f6f3] text-[#A58A65] transition duration-300 group-hover:bg-[#A58A65] group-hover:text-white">
                <Icon size={22} strokeWidth={1.7} />
              </span>
              <h3 className="mt-6 font-['Playfair_Display'] text-lg font-semibold text-[#222222]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#666666]">{benefitDescription}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
