// components/SEO.tsx
import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: string;
  jsonLd?: Record<string, unknown>;
}

export function SEO({
  title,
  description,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage,
  twitterCard = "summary_large_image",
  jsonLd,
}: SEOProps) {
  useEffect(() => {
    // Title
    document.title = title;

    // Meta description
    let metaDescription = document.querySelector("meta[name='description']");
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Canonical
    let linkCanonical = document.querySelector("link[rel='canonical']");
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", canonicalUrl);

    // Open Graph
    const setMeta = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property='${property}']`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    if (ogTitle) setMeta("og:title", ogTitle);
    if (ogDescription) setMeta("og:description", ogDescription);
    if (ogImage) setMeta("og:image", ogImage);

    // Twitter
    const setTwitter = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name='${name}']`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    setTwitter("twitter:card", twitterCard);
    if (ogTitle) setTwitter("twitter:title", ogTitle);
    if (ogDescription) setTwitter("twitter:description", ogDescription || "");
    if (ogImage) setTwitter("twitter:image", ogImage || "");

    // JSON-LD
    if (jsonLd) {
      let script = document.querySelector(`script[type="application/ld+json"]`);
      if (!script) {
        script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        document.head.appendChild(script);
      }
      script.innerHTML = JSON.stringify(jsonLd);
    }
  }, [
    title,
    description,
    canonicalUrl,
    ogTitle,
    ogDescription,
    ogImage,
    twitterCard,
    jsonLd,
  ]);

  return null;
}
