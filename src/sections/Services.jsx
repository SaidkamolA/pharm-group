// src/sections/Services.jsx
import ServiceCard from "../components/ServiceCard";

function Services({ t, services, onNavigate, onInView }) {
  const localizedServices = services.map((service) => ({
    ...service,
    title: t.serviceCards[service.id].title,
    shortDescription: t.serviceCards[service.id].shortDescription,
    backTitle: t.serviceCards[service.id].backTitle,
    items: t.serviceCards[service.id].items,
  }));

  return (
    <section
      id="services"
      className="section-padding relative overflow-hidden bg-slate-50"
      onMouseEnter={() => onInView("services")}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(248,250,252,0)_0%,rgba(241,245,249,0.9)_45%,rgba(248,250,252,0)_100%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2394a3b8' fill-opacity='0.18'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-custom relative">
        <div className="animate-on-scroll mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Pharm Group</p>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">{t.services.title}</h2>
          <p className="text-base leading-relaxed text-slate-600 md:text-lg">{t.services.subtitle}</p>
          <div className="mx-auto mt-8 h-px max-w-xs bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 xl:gap-7">
          {localizedServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              onNavigate={onNavigate}
              learnMoreLabel={t.ui.learnMore}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
