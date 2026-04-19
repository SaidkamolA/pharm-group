// src/sections/Hero.jsx
import { useEffect } from "react";
import Button from "../components/Button";

function Hero({ t, onNavigate, onInView }) {
  useEffect(() => {
    onInView("home");
  }, [onInView]);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[linear-gradient(115deg,rgba(8,47,73,0.85),rgba(30,41,59,0.82)),url('/images/cover.png')] bg-cover bg-center pb-[84px] pt-[96px] text-white sm:pb-[110px] sm:pt-[120px] md:pt-[150px]"
    >
      <div className="hero-overlay absolute inset-0 z-0" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/25 blur-3xl" />
      <div className="container-custom relative z-10">
        <div className="animate-on-scroll is-visible max-w-3xl">
          <span className="mb-5 inline-block rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-blue-100">
            Pharm Group
          </span>
          <h1 className="mb-4 text-[43px] font-bold leading-tight sm:mb-5 sm:text-4xl md:text-[50px]">{t.hero.title}</h1>
          <h2 className="mb-4 text-lg font-semibold text-slate-100 sm:mb-5 sm:text-xl md:text-2xl">{t.hero.subtitle}</h2>
          <p className="mb-8 max-w-[720px] text-[15px] leading-7 text-blue-100 sm:mb-10 sm:text-base sm:leading-8 md:text-lg">{t.hero.description}</p>
        </div>
        <div className="animate-on-scroll flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 [transition-delay:120ms]">
          <Button onClick={() => onNavigate("contact")} className="w-full sm:w-auto">
            {t.hero.primaryButton}
          </Button>
          <Button variant="outline" onClick={() => onNavigate("services")} className="w-full sm:w-auto">
            {t.hero.secondaryButton}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;