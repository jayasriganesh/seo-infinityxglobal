import { useEffect } from 'react';

const DEFAULT_SITE_URL = 'https://www.infinityxglobal.com';
const DEFAULT_IMAGE_PATH = '/images/home_page_final.jpeg';

const joinUrl = (base, path = '/') => {
  if (!path) {
    return base;
  }

  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const normalizedBase = base.replace(/\/+$/, '');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  return `${normalizedBase}${normalizedPath}`;
};

const upsertMeta = (selector, attribute, key, content) => {
  if (!content) {
    return;
  }

  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
};

const upsertLink = (selector, rel, href) => {
  if (!href) {
    return;
  }

  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
};

export const useSEO = ({
  title,
  description,
  keywords,
  path = '/',
  image = DEFAULT_IMAGE_PATH,
  type = 'website',
  robots = 'index,follow',
  structuredData,
}) => {
  const schemaEntries = Array.isArray(structuredData)
    ? structuredData.filter(Boolean)
    : structuredData
      ? [structuredData]
      : [];
  const schemaKey = JSON.stringify(schemaEntries);

  useEffect(() => {
    const siteUrl = (import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/+$/, '');
    const canonicalUrl = joinUrl(siteUrl, path);
    const imageUrl = joinUrl(siteUrl, image);
    const parsedSchemaEntries = schemaKey ? JSON.parse(schemaKey) : [];

    if (title) {
      document.title = title;
    }

    upsertMeta('meta[name="description"]', 'name', 'description', description);
    upsertMeta('meta[name="keywords"]', 'name', 'keywords', keywords);
    upsertMeta('meta[name="robots"]', 'name', 'robots', robots);
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', title);
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', description);
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', type);
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', imageUrl);
    upsertMeta('meta[property="og:site_name"]', 'property', 'og:site_name', 'InfinityX');
    upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', imageUrl);
    upsertLink('link[rel="canonical"]', 'canonical', canonicalUrl);

    document
      .querySelectorAll('script[data-managed-seo-schema="true"]')
      .forEach((node) => node.remove());

    parsedSchemaEntries.forEach((entry) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.managedSeoSchema = 'true';
      script.textContent = JSON.stringify(entry);
      document.head.appendChild(script);
    });
  }, [description, image, keywords, path, robots, schemaKey, title, type]);
};
