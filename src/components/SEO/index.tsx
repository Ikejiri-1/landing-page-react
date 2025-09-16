// components/SEO.tsx
import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
}

export function SEO({ title, description, canonicalUrl }: SEOProps) {
  useEffect(() => {
    // Atualiza o título da página
    document.title = title;

    // Atualiza a meta description
    let metaDescription = document.querySelector("meta[name='description']");
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Atualiza ou cria a tag canonical
    let linkCanonical = document.querySelector("link[rel='canonical']");
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", canonicalUrl);
  }, [title, description, canonicalUrl]);

  return null; // Não renderiza nada no DOM
}
