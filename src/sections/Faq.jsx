import { useState } from "react";

function renderAnswer(item, footerParagraphs) {
  let main = null;
  if (Array.isArray(item.paragraphs) && item.paragraphs.length) {
    main = item.paragraphs.map((p, i) => (
      <p key={i} className="mb-3 last:mb-0 whitespace-pre-wrap text-slate-700">
        {p}
      </p>
    ));
  } else if (typeof item.answer === "string" && item.answer.trim()) {
    main = item.answer.split(/\n\n+/).map((block, i) => (
      <p key={i} className="mb-3 last:mb-0 whitespace-pre-wrap text-slate-700">
        {block}
      </p>
    ));
  }

  const footer =
    Array.isArray(footerParagraphs) && footerParagraphs.length ? (
      <div className="mt-5 border-t border-slate-200 pt-4">
        {footerParagraphs.map((p, i) => (
          <p key={`footer-${i}`} className="mb-3 last:mb-0 whitespace-pre-wrap text-slate-600">
            {p}
          </p>
        ))}
      </div>
    ) : null;

  if (!main && !footer) return null;
  return (
    <>
      {main}
      {footer}
    </>
  );
}

/** Language of accordion body text: match FAQ content locale (ru / uz / en). */
function faqItemsLang(htmlLang) {
  if (htmlLang === "uz") return "uz";
  return htmlLang || "en";
}

function Faq({ t, onInView }) {
  const [openKey, setOpenKey] = useState(`${t.faq.groups[0]?.id}-0`);

  return (
    <section
      id="faq"
      className="bg-slate-50 py-24"
      lang={t.meta.htmlLang}
      onMouseEnter={() => onInView("faq")}
    >
      <div className="container-custom">
        <div className="animate-on-scroll mb-12 text-center">
          <h2 className="mb-3 text-3xl font-semibold text-slate-900 md:text-4xl">{t.faq.title}</h2>
          <p className="mx-auto max-w-3xl text-slate-600">{t.faq.subtitle}</p>
        </div>

        <div className="space-y-8">
          {t.faq.groups.map((group) => (
            <div
              key={group.id}
              className="animate-on-scroll rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_14px_35px_rgba(2,6,23,0.06)] md:p-8"
            >
              <h3 className="mb-5 text-xl font-semibold text-slate-900 md:text-2xl">{group.title}</h3>
              <div className="space-y-3" lang={faqItemsLang(t.meta.htmlLang)}>
                {group.items.map((item, index) => {
                  const key = `${group.id}-${index}`;
                  const isOpen = openKey === key;
                  return (
                    <div key={key} className="overflow-hidden rounded-2xl border border-slate-200">
                      <button
                        type="button"
                        onClick={() => setOpenKey((prev) => (prev === key ? "" : key))}
                        className="flex w-full items-center justify-between gap-4 bg-white px-5 py-4 text-left transition hover:bg-slate-50"
                        aria-expanded={isOpen}
                      >
                        <span className="text-sm font-semibold text-slate-800 md:text-base">{item.question}</span>
                        <span
                          className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-slate-300 text-slate-600 transition ${
                            isOpen ? "rotate-45 bg-blue-50 text-blue-700" : ""
                          }`}
                          aria-hidden
                        >
                          +
                        </span>
                      </button>
                      {isOpen ? (
                        <div className="border-t border-slate-200 bg-slate-50 px-5 py-4 text-sm leading-7 md:text-base">
                          {renderAnswer(item, t.faq.answerFooter)}
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
