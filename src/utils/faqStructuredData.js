/**
 * Plain-text answer for schema.org, aligned with Faq.jsx (without shared answerFooter).
 */
export function faqItemAnswerText(item) {
  if (Array.isArray(item.paragraphs) && item.paragraphs.length) {
    return item.paragraphs
      .map((p) => String(p).replace(/\s+/g, " ").trim())
      .filter(Boolean)
      .join("\n\n");
  }
  if (typeof item.answer === "string" && item.answer.trim()) {
    return item.answer
      .split(/\n\n+/)
      .map((block) => block.replace(/\s+/g, " ").trim())
      .filter(Boolean)
      .join("\n\n");
  }
  return "";
}

export function buildFaqMainEntities(faq) {
  if (!faq?.groups) return [];
  const out = [];
  for (const group of faq.groups) {
    for (const item of group.items || []) {
      const name = typeof item.question === "string" ? item.question.trim() : "";
      const text = faqItemAnswerText(item);
      if (!name || !text) continue;
      out.push({
        "@type": "Question",
        name,
        acceptedAnswer: {
          "@type": "Answer",
          text,
        },
      });
    }
  }
  return out;
}

export function buildStructuredDataGraph({ origin, pathname, meta, faq }) {
  const base = (origin || "https://pharm.ubi.uz").replace(/\/$/, "");
  const org = {
    "@type": "Organization",
    "@id": `${base}/#organization`,
    name: "Pharm Group",
    alternateName: ["Pharm Group Uzbekistan", "Pharm Group — UBI Consulting LLC"],
    url: base,
    logo: `${base}/images/logo.png`,
    description: meta.pageDescription,
  };

  const website = {
    "@type": "WebSite",
    "@id": `${base}/#website`,
    name: meta.ogSiteName || "Pharm Group",
    url: base,
    publisher: { "@id": `${base}/#organization` },
    inLanguage: meta.htmlLang || "en",
  };

  const graph = [org, website];

  if (pathname === "/faq" && faq) {
    const mainEntity = buildFaqMainEntities(faq);
    if (mainEntity.length) {
      graph.push({
        "@type": "FAQPage",
        "@id": `${base}/faq#webpage`,
        url: `${base}/faq`,
        name: faq.title,
        description: faq.pageDescription || faq.subtitle,
        isPartOf: { "@id": `${base}/#website` },
        mainEntity,
      });
    }
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
