// SEO utilities for dynamic meta tags and structured data
export const updatePageSEO = (seoData) => {
  if (typeof document === 'undefined') return;

  // Update title
  if (seoData.title) {
    document.title = seoData.title;
    
    // Update OG title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = seoData.title;
  }

  // Update description
  if (seoData.description) {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.content = seoData.description;
    
    // Update OG description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.content = seoData.description;
  }

  // Update canonical URL
  if (seoData.canonical) {
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = seoData.canonical;
    
    // Update OG URL
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.content = seoData.canonical;
  }

  // Update keywords
  if (seoData.keywords) {
    const keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (keywordsMeta) keywordsMeta.content = seoData.keywords;
  }

  // Update image
  if (seoData.image) {
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.content = seoData.image;
  }
};

// Generate Person structured data
export const generatePersonStructuredData = (person) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name || 'Lodney Santos',
    alternateName: person.alternateName || 'Lod',
    jobTitle: person.jobTitle || 'Frontend Developer & UI Designer',
    url: person.url || 'https://lodexstudio.com',
    image: person.image || 'https://lodexstudio.com/lodney-santos-developer.jpg',
    sameAs: person.sameAs || [
      'https://www.instagram.com/lodneysantos/',
      'https://www.linkedin.com/in/lodney-santos/',
      'https://github.com/lodsa-ntos'
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'LodeX Studio',
      url: 'https://lodexstudio.com'
    }
  };
};

// Generate ImageObject structured data (array)
export const generateImageObjectsStructuredData = (images) => {
  return images.map((img) => ({
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: img.url,
    url: img.url,
    name: img.name,
    caption: img.caption,
    creator: {
      '@type': 'Person',
      name: 'Lodney Santos'
    },
    creditText: img.creditText || 'LodeX Studio',
    license: img.license || 'https://creativecommons.org/licenses/by-nc/4.0/'
  }));
};

// Generate structured data for projects
export const generateProjectStructuredData = (project) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.description,
    creator: {
      '@type': 'Person',
      name: 'Lodney Santos',
      jobTitle: 'Frontend Developer & UI Designer',
      worksFor: {
        '@type': 'Organization',
        name: 'LodeX Studio'
      }
    },
    dateCreated: project.dateCreated,
    url: project.url,
    image: project.image,
    genre: project.category,
    keywords: project.keywords,
  inLanguage: project.inLanguage || 'en',
    copyrightHolder: {
      '@type': 'Organization',
      name: 'LodeX Studio'
    },
    license: project.license || 'All rights reserved'
  };
};

// Generate breadcrumb structured data
export const generateBreadcrumbStructuredData = (breadcrumbs) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  };
};

// Generate FAQ structured data
export const generateFAQStructuredData = (faqs) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
};

// Generate service structured data
export const generateServiceStructuredData = (service) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'LodeX Studio',
      founder: {
        '@type': 'Person',
        name: 'Lodney Santos'
      }
    },
    areaServed: {
      '@type': 'Country',
      name: 'Portugal'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web Development Services',
      itemListElement: service.features?.map(feature => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: feature.name,
          description: feature.description
        }
      })) || []
    }
  };
};

// Insert structured data into page
export const insertStructuredData = (structuredData, id) => {
  if (typeof document === 'undefined') return;

  // Remove existing script if it exists
  const existingScript = document.getElementById(id);
  if (existingScript) {
    existingScript.remove();
  }

  // Create and insert new script
  const script = document.createElement('script');
  script.id = id;
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(structuredData, null, 2);
  document.head.appendChild(script);
};

// Generate rich snippets for articles/blog posts
export const generateArticleStructuredData = (article) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: 'Lodney Santos',
      url: 'https://lodexstudio.com/sobremim'
    },
    publisher: {
      '@type': 'Organization',
      name: 'LodeX Studio',
      logo: {
        '@type': 'ImageObject',
        url: 'https://lodexstudio.com/lodexstudio-logo.svg'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url
    },
    articleSection: article.category,
    keywords: article.keywords,
    wordCount: article.wordCount,
    inLanguage: article.inLanguage || 'en'
  };
};

// SEO page data templates
export const SEO_TEMPLATES = {
  homepage: {
  title: 'LodeX Studio | Websites that turn freelancers & entrepreneurs from invisible to unforgettable',
  description: 'Conversion-focused personal brand and portfolio websites for freelancers & entrepreneurs. Fast by default. Clear positioning. Clean UI/UX that gets clients.',
  keywords: 'freelancer website, entrepreneur website, personal brand website, portfolio website, conversion-focused websites, landing pages, react developer, tailwind developer, ui ux designer',
  canonical: 'https://lodexstudio.com',
  image: 'https://lodexstudio.com/lodney-santos-developer.jpg'
  },
  
  portfolio: {
    title: 'Portfolio | LodeX Studio — Personal brands, portfolios and landing pages',
    description: 'Selected work: conversion-focused websites for freelancers & entrepreneurs. Before • Solution • Impact.',
    keywords: 'portfolio websites, personal brand portfolio, freelancer sites, landing pages, case studies',
    canonical: 'https://lodexstudio.com/portfolio'
  },
  
  services: {
    title: 'Services | Websites for freelancers & entrepreneurs that convert',
    description: 'Personal brand websites, portfolios, and landing pages built with React + Tailwind. Clear positioning, clean UI/UX, and speed that ranks and converts.',
    keywords: 'freelancer website services, entrepreneur website services, personal brand website, landing page design, react developer services',
    canonical: 'https://lodexstudio.com/servicos'
  },
  
  about: {
    title: 'About | Lodney Santos — Frontend Developer & UI Designer',
    description: 'I build conversion-focused personal brands and portfolio websites for freelancers & entrepreneurs. React + Tailwind. Clear, fast, and client-winning.',
    keywords: 'lodney santos, frontend developer, ui designer, freelancer websites, portfolio websites',
    canonical: 'https://lodexstudio.com/sobremim'
  },
  
  contact: {
    title: 'Contact | Book a 15‑minute call — LodeX Studio',
    description: 'Let’s plan a website that makes you unforgettable. Book a quick call to map goals, scope, and the fastest path to live.',
    keywords: 'contact lodex studio, book a call, freelancer website quote, portfolio website quote',
    canonical: 'https://lodexstudio.com/conversar'
  },
  
  blog: {
    title: 'Blog | LodeX Studio — Websites, positioning, and conversion',
    description: 'Practical articles on websites that convert: positioning, UX details, case studies, and simple automation.',
    keywords: 'website conversion, positioning, ux details, case studies, simple automation',
    canonical: 'https://lodexstudio.com/blog'
  }
};

export default {
  updatePageSEO,
  generatePersonStructuredData,
  generateProjectStructuredData,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  generateServiceStructuredData,
  generateArticleStructuredData,
  generateImageObjectsStructuredData,
  insertStructuredData,
  SEO_TEMPLATES
};
