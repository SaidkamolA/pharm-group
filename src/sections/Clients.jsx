// src/sections/Clients.jsx
import ClientLogo from "../components/ClientLogo";
import { clients } from "../data/clients";

function Clients({ t }) {
  const logos = [...clients, ...clients];

  return (
    <section id="clients" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="animate-on-scroll mb-12 text-center">
          <h2 className="mb-3 text-3xl font-semibold text-slate-900">{t.clients.title}</h2>
          <p className="text-slate-600">{t.clients.subtitle}</p>
        </div>

        <div className="animate-on-scroll relative mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.08)] [transition-delay:100ms]">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-slate-50 to-transparent" />
          <div className="clients-track flex w-max gap-10">
            {logos.map((logo, index) => (
              <ClientLogo key={`${logo.src}-${index}`} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;