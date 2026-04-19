// src/sections/ServiceDetail.jsx
function ServiceDetail({ service, t }) {
  const detail = t.serviceDetails[service.id];

  return (
    <section id={service.id} className="scroll-mt-[85px] border-t border-slate-200 bg-white py-20">
      <div className="container-custom">
        <h2 className="animate-on-scroll mb-5 text-3xl font-semibold text-slate-900">{detail.title}</h2>
        {detail.paragraphs.map((paragraph, index) => (
          <p key={`${service.id}-p-${index}`} className="animate-on-scroll mb-4 max-w-[800px] leading-8 text-slate-600">
            {paragraph}
          </p>
        ))}
        {detail.sections?.map((section) => (
          <div key={section.title} className="animate-on-scroll mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="mb-3 text-2xl font-semibold text-slate-900">{section.title}</h3>
            <ul className="list-disc space-y-2 pl-5 text-slate-600">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceDetail;