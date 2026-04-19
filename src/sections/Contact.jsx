// src/sections/Contact.jsx
import { useState } from "react";
import Button from "../components/Button";
import Map from "./Map";

const FORMSPREE_URL = "https://formspree.io/f/mjgpavon";

function Contact({ t, onInView }) {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("loading");

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        const data = await response.json().catch(() => null);
        if (data?.errors) {
          setStatus("error");
        } else {
          setStatus("error");
        }
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-white py-24" onMouseEnter={() => onInView("contact")}>
      <div className="container-custom">
        <div className="animate-on-scroll mb-12 text-center">
          <h2 className="mb-3 text-3xl font-semibold text-slate-900">{t.contact.title}</h2>
          <p className="text-slate-600">{t.contact.subtitle}</p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="animate-on-scroll rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-[0_18px_40px_rgba(2,6,23,0.08)]">
            <div className="mb-7">
              <h3 className="mb-3 text-2xl font-semibold text-slate-900">{t.contact.infoTitle}</h3>
              <p>
                <strong>{t.contact.emailLabel}</strong>{" "}
                <a href="mailto:info@ubi.uz" className="text-blue-700 transition hover:underline">
                  info@ubi.uz
                </a>
              </p>
              <p>
                <strong>{t.contact.phoneLabel}</strong> +998-71-254-00-22, +998-94-926-11-11
              </p>
              <p>
                <strong>{t.contact.addressLabel}</strong> 89 Nukus street, Tashkent 100015, Uzbekistan
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              onFocus={() => {
                if (status === "success" || status === "error") setStatus("idle");
              }}
              className="grid max-w-[500px] gap-4"
            >
              <input type="hidden" name="_subject" value="New message from Pharm Group website" />
              <input
                type="text"
                name="name"
                placeholder={t.contact.form.name}
                required
                disabled={status === "loading"}
                autoComplete="name"
                className="rounded-xl border border-slate-300 bg-white p-3 text-slate-700 transition focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100 disabled:opacity-60"
              />
              <input
                type="email"
                name="email"
                placeholder={t.contact.form.email}
                required
                disabled={status === "loading"}
                autoComplete="email"
                className="rounded-xl border border-slate-300 bg-white p-3 text-slate-700 transition focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100 disabled:opacity-60"
              />
              <textarea
                name="message"
                placeholder={t.contact.form.message}
                required
                disabled={status === "loading"}
                className="min-h-[120px] resize-y rounded-xl border border-slate-300 bg-white p-3 text-slate-700 transition focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100 disabled:opacity-60"
              />
              <Button type="submit" disabled={status === "loading"} className="w-fit">
                {status === "loading" ? t.contact.form.sending : t.contact.form.submit}
              </Button>
              {status === "success" ? (
                <p className="text-sm font-medium text-emerald-700" role="status">
                  {t.contact.form.success}
                </p>
              ) : null}
              {status === "error" ? (
                <p className="text-sm font-medium text-red-600" role="alert">
                  {t.contact.form.error}
                </p>
              ) : null}
            </form>
          </div>

          <div className="animate-on-scroll [transition-delay:120ms]">
            <Map title={t.contact.mapTitle} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
