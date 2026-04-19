// src/App.jsx
import { useCallback, useEffect, useMemo, useState } from "react";
import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import MobileContactBar from "./components/MobileContactBar";
import { useDocumentSeo } from "./hooks/useDocumentSeo";
import { useStructuredData } from "./hooks/useStructuredData";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Clients from "./sections/Clients";
import Services from "./sections/Services";
import ServiceDetail from "./sections/ServiceDetail";
import Faq from "./sections/Faq";
import Contact from "./sections/Contact";
import { services } from "./data/services";
import { translations } from "./data/translations";

const sectionOrder = ["home", "about", "services", "contact"];

function HomePage({ t, language, smoothScrollTo, handleSectionInView }) {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollTarget = location.state?.scrollTo;

  useEffect(() => {
    if (!scrollTarget) return undefined;
    const frame = requestAnimationFrame(() => {
      smoothScrollTo(scrollTarget);
      navigate("/", { replace: true, state: {} });
    });
    return () => cancelAnimationFrame(frame);
  }, [location.key, scrollTarget, navigate, smoothScrollTo]);

  return (
    <main className="pb-24 md:pb-0">
      <Hero t={t} onNavigate={smoothScrollTo} onInView={handleSectionInView} />
      <About t={t} onInView={handleSectionInView} />
      <Clients t={t} />
      <Services t={t} services={services} onNavigate={smoothScrollTo} onInView={handleSectionInView} />
      {services.map((service) => (
        <ServiceDetail key={service.id} service={service} t={t} />
      ))}
      <Contact key={language} t={t} onInView={handleSectionInView} />
    </main>
  );
}

function FaqPage({ t, language }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <main className="pb-24 md:pb-0">
      <Faq key={language} t={t} onInView={() => {}} />
    </main>
  );
}

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [language, setLanguage] = useState("en");
  const [activeSection, setActiveSection] = useState("home");

  const t = useMemo(() => translations[language], [language]);

  const seoMeta = useMemo(() => {
    const base = t.meta;
    const origin = (base.ogUrl || "").replace(/\/$/, "");
    const path = location.pathname === "/" ? "" : location.pathname;
    const canonicalUrl = origin ? `${origin}${path}` : undefined;

    if (location.pathname !== "/faq" || !t.faq?.pageTitle) {
      return { ...base, canonicalUrl };
    }
    return {
      ...base,
      pageTitle: t.faq.pageTitle,
      pageDescription: t.faq.pageDescription ?? base.pageDescription,
      canonicalUrl,
    };
  }, [t, location.pathname]);

  useDocumentSeo(seoMeta);
  useStructuredData({ pathname: location.pathname, meta: seoMeta, faq: t.faq });

  const getHeaderOffset = () => {
    const header = document.querySelector("header");
    return header ? header.getBoundingClientRect().height : 0;
  };

  const smoothScrollTo = useCallback((id) => {
    const target = document.getElementById(id);
    if (target) {
      const headerOffset = getHeaderOffset();
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset - 8;
      window.scrollTo({
        top: Math.max(top, 0),
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  }, []);

  const handleSectionInView = (sectionId) => {
    if (sectionOrder.includes(sectionId)) {
      setActiveSection(sectionId);
    }
  };

  const handleNavigate = useCallback(
    (sectionId) => {
      if (sectionId === "faq") {
        navigate("/faq");
        return;
      }
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: sectionId } });
      } else {
        smoothScrollTo(sectionId);
      }
    },
    [location.pathname, navigate, smoothScrollTo]
  );

  const activeSectionForNav = location.pathname === "/faq" ? "faq" : activeSection;

  useEffect(() => {
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    if (!animatedElements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -40px 0px" }
    );

    animatedElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [language, location.pathname]);

  useEffect(() => {
    if (location.pathname !== "/") {
      return undefined;
    }

    const updateActiveFromScroll = () => {
      const headerOffset = getHeaderOffset();
      const scrollLine = window.scrollY + headerOffset + 12;

      let active = sectionOrder[0];
      for (const id of sectionOrder) {
        const el = document.getElementById(id);
        if (!el) continue;
        const sectionTop = el.getBoundingClientRect().top + window.scrollY;
        if (sectionTop <= scrollLine) {
          active = id;
        }
      }
      setActiveSection(active);
    };

    updateActiveFromScroll();
    window.addEventListener("scroll", updateActiveFromScroll, { passive: true });
    window.addEventListener("resize", updateActiveFromScroll);

    return () => {
      window.removeEventListener("scroll", updateActiveFromScroll);
      window.removeEventListener("resize", updateActiveFromScroll);
    };
  }, [language, location.pathname]);

  const handleBackToTop = () => {
    if (location.pathname === "/") {
      smoothScrollTo("home");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleMobileContact = () => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: "contact" } });
    } else {
      smoothScrollTo("contact");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-700">
      <Navbar
        t={t}
        language={language}
        onLanguageChange={setLanguage}
        onNavigate={handleNavigate}
        activeSection={activeSectionForNav}
      />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage t={t} language={language} smoothScrollTo={handleNavigate} handleSectionInView={handleSectionInView} />
          }
        />
        <Route path="/faq" element={<FaqPage t={t} language={language} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer t={t} />

      <ScrollToTop label={t.ui.backToTop} onNavigateHome={handleBackToTop} />
      <MobileContactBar label={t.ui.mobileContact} onContact={handleMobileContact} />
    </div>
  );
}

export default App;
