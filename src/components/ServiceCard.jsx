// src/components/ServiceCard.jsx
const serviceIcons = {
  registration: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
    />
  ),
  turnkey: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
    />
  ),
  marketing: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
    />
  ),
  pharmacovigilance: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
    />
  ),
  support: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 18.72a9.09 9.09 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
    />
  ),
  strategy: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.518l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.94"
    />
  ),
};

function ServiceIcon({ id }) {
  const path = serviceIcons[id];
  if (!path) return null;
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
      {path}
    </svg>
  );
}

function ServiceCard({ service, onNavigate, learnMoreLabel, index = 0 }) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <article
      className="service-card-pro animate-on-scroll group flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white p-6 shadow-[0_1px_0_rgba(15,23,42,0.04),0_12px_32px_rgba(15,23,42,0.06)] transition-[box-shadow,border-color,transform] duration-300 hover:-translate-y-1 hover:border-slate-300/90 hover:shadow-[0_1px_0_rgba(15,23,42,0.06),0_20px_48px_rgba(37,99,235,0.09)]"
      style={{ transitionDelay: `${index * 45}ms` }}
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex min-w-0 flex-1 items-start gap-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 text-blue-700 ring-1 ring-slate-200/80 transition group-hover:from-blue-50 group-hover:to-indigo-50 group-hover:ring-blue-200/60">
            <ServiceIcon id={service.id} />
          </div>
          <div className="min-w-0 pt-0.5">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">{num}</p>
            <h3 className="text-lg font-semibold leading-snug tracking-tight text-slate-900 md:text-xl">{service.title}</h3>
          </div>
        </div>
      </div>

      <p className="mb-5 text-sm leading-relaxed text-slate-600 md:text-[15px]">{service.shortDescription}</p>

      <div className="mb-6 flex-1 rounded-xl bg-slate-50/80 px-4 py-3 ring-1 ring-slate-100">
        <p className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-slate-500">{service.backTitle}</p>
        <ul className="space-y-2">
          {service.items.map((item) => (
            <li key={item} className="flex gap-2.5 text-sm leading-snug text-slate-700">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-500/80" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        onClick={() => onNavigate(service.id)}
        className="group/btn mt-auto inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-blue-200 hover:bg-blue-50/80 hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        <span>{learnMoreLabel}</span>
        <svg
          className="h-4 w-4 transition group-hover/btn:translate-x-0.5"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </button>
    </article>
  );
}

export default ServiceCard;
