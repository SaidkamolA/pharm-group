import { useEffect } from "react";
import { buildStructuredDataGraph } from "../utils/faqStructuredData";

const SCRIPT_ID = "structured-data-jsonld";

/**
 * Injects JSON-LD (Organization, WebSite; FAQPage on /faq) for search engines.
 */
export function useStructuredData({ pathname, meta, faq }) {
  useEffect(() => {
    if (!meta?.pageDescription) return undefined;

    const origin = (meta.ogUrl || "").replace(/\/$/, "") || "https://pharm.ubi.uz";
    const payload = buildStructuredDataGraph({
      origin,
      pathname,
      meta,
      faq: pathname === "/faq" ? faq : null,
    });

    let el = document.getElementById(SCRIPT_ID);
    if (!el) {
      el = document.createElement("script");
      el.id = SCRIPT_ID;
      el.type = "application/ld+json";
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(payload);

    return () => {
      const node = document.getElementById(SCRIPT_ID);
      if (node) node.remove();
    };
  }, [pathname, meta?.pageDescription, meta?.htmlLang, meta?.ogUrl, meta?.ogSiteName, meta?.pageTitle, faq]);
}
