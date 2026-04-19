import { useEffect } from "react";

function setMetaName(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setMetaProperty(property, content) {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href) {
  if (!href) return;
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useDocumentSeo(meta) {
  useEffect(() => {
    if (!meta?.pageTitle) return;

    document.documentElement.lang = meta.htmlLang || "en";
    document.title = meta.pageTitle;

    setCanonical(meta.canonicalUrl);
    setMetaName("description", meta.pageDescription);
<<<<<<< HEAD
    if (meta.keywords) {
      setMetaName("keywords", meta.keywords);
    }
=======
>>>>>>> a7e0216743e7ff0029e1c04002c658bac61faf80

    setMetaProperty("og:type", "website");
    setMetaProperty("og:title", meta.pageTitle);
    setMetaProperty("og:description", meta.pageDescription);
    setMetaProperty("og:url", meta.ogUrl);
    setMetaProperty("og:image", meta.ogImage);
    setMetaProperty("og:locale", meta.htmlLang === "ru" ? "ru_RU" : meta.htmlLang === "uz" ? "uz_UZ" : "en_US");
    if (meta.ogSiteName) {
      setMetaProperty("og:site_name", meta.ogSiteName);
    }

    setMetaName("twitter:card", "summary_large_image");
    setMetaName("twitter:title", meta.pageTitle);
    setMetaName("twitter:description", meta.pageDescription);
    setMetaName("twitter:image", meta.ogImage);
  }, [meta]);
}
