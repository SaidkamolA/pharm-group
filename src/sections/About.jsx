// src/sections/About.jsx
function About({ t, onInView }) {
  return (
    <section id="about" className="bg-white py-[110px]" onMouseEnter={() => onInView("about")}>
      <div className="container-custom">
        <div className="mb-14 grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="animate-on-scroll max-w-[560px]">
            <h2 className="mb-4 text-4xl font-semibold text-slate-900">{t.about.title}</h2>
            <p className="mb-6 font-semibold text-blue-700">{t.about.lead}</p>
            {t.about.paragraphs.map((paragraph, index) => (
              <p key={`about-p-${index}`} className="mb-4 leading-8 text-slate-600">
                {paragraph}
              </p>
            ))}
            <div className="mt-6 flex flex-wrap gap-2 font-medium text-blue-700">
              {t.about.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="w-fit rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm shadow-[0_8px_18px_rgba(37,99,235,0.12)]"
                >
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          <div className="animate-on-scroll [transition-delay:150ms]">
            <img
              src="/images/about.png"
              alt={t.about.imageAlt}
              loading="lazy"
              className="h-[420px] w-full rounded-3xl object-cover shadow-[0_24px_70px_rgba(15,23,42,0.2)]"
            />
          </div>
        </div>

        <div className="grid gap-6 text-center md:grid-cols-3">
          {t.about.stats.map((stat) => (
            <div
              key={stat.label}
              className="animate-on-scroll rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_18px_45px_rgba(2,6,23,0.06)]"
            >
              <h3 className="mb-2 text-3xl font-bold text-blue-700">{stat.value}</h3>
              <p className="text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;