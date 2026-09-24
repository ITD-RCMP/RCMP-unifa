import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  article?: {
    publishedTime: string;
    author: string;
    section: string;
  };
}

const SEO = ({ title, description, image, article }: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = `${title} | Noir`;

    // Update or create meta tags
    const updateMetaTag = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.querySelector(`meta[name="${property}"]`) as HTMLMetaElement;
      }
      if (!element) {
        element = document.createElement("meta");
        if (property.startsWith("og:") || property.startsWith("twitter:")) {
          element.setAttribute("property", property);
        } else {
          element.setAttribute("name", property);
        }
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Update basic meta tags
    updateMetaTag("description", description);
    updateMetaTag("og:title", title);
    updateMetaTag("og:description", description);
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);

    if (image) {
      updateMetaTag("og:image", image);
      updateMetaTag("twitter:image", image);
    }

    // Update article-specific meta tags
    if (article) {
      updateMetaTag("og:type", "article");
      updateMetaTag("article:published_time", article.publishedTime);
      updateMetaTag("article:author", article.author);
      updateMetaTag("article:section", article.section);
    } else {
      updateMetaTag("og:type", "website");
    }

    // Add canonical URL
    const canonicalUrl = window.location.href.split("?")[0];
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);
  }, [title, description, image, article]);

  return null;
};

export default SEO;
