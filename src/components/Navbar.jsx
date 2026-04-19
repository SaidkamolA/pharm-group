// src/components/Navbar.jsx
import { useState } from "react";

const languages = ["en", "ru", "uz"];

const LOGO_DEFAULT = "/images/logo.png";
const LOGO_RU_UZ = "/images/logo-rus.png";

function Navbar({ t, language, onLanguageChange, onNavigate, activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoSrc = language === "ru" || language === "uz" ? LOGO_RU_UZ : LOGO_DEFAULT;

  const handleNavigate = (sectionId) => {
    onNavigate(sectionId);
    setIsMenuOpen(false);
  };

  const handleLanguageSwitch = () => {
    const currentIndex = languages.indexOf(language);
    const nextLanguage = languages[(currentIndex + 1) % languages.length];
    onLanguageChange(nextLanguage);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="container-custom">
        <nav className="flex items-center justify-between py-3 md:py-4">
          <button type="button" className="logo transition hover:opacity-90" onClick={() => handleNavigate("home")} aria-label="Pharm Group">
            <img
              src={logoSrc}
              alt={t.meta.logoAlt}
              className="h-[44px] w-auto sm:h-[50px] md:h-[68px]"
              loading="eager"
            />
          </button>

          <ul className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 p-2 md:flex">
            {t.nav.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleNavigate(item.id)}
                  aria-current={activeSection === item.id ? "page" : undefined}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    activeSection === item.id
                      ? "bg-blue-600 text-white shadow-[0_10px_25px_rgba(37,99,235,0.4)]"
                      : "text-slate-700 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={handleLanguageSwitch}
              className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-blue-700 transition hover:bg-blue-100 md:px-3.5 md:py-2"
              aria-label={`Switch language from ${language}`}
            >
              {language}
            </button>
            <button
              className="grid h-9 w-9 place-items-center rounded-full border border-slate-300 text-slate-700 transition hover:bg-slate-100 md:hidden"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="relative block h-[2px] w-5 bg-current before:absolute before:left-0 before:top-[-6px] before:h-[2px] before:w-5 before:bg-current after:absolute after:left-0 after:top-[6px] after:h-[2px] after:w-5 after:bg-current" />
            </button>
          </div>
        </nav>

        {isMenuOpen ? (
          <div className="pb-3 md:hidden">
            <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_10px_30px_rgba(2,6,23,0.08)]">
              {t.nav.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavigate(item.id)}
                  aria-current={activeSection === item.id ? "page" : undefined}
                  className={`mb-1 w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition last:mb-0 ${
                    activeSection === item.id ? "bg-blue-600 text-white" : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

export default Navbar;