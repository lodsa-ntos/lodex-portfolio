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
  image: person.image || 'https://lodexstudio.com/pictures-lodneysantos/536240586_1105419774507110_6089065836688110588_n.jpeg',
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
  encodingFormat: img.encodingFormat || 'image/jpeg',
  width: img.width,
  height: img.height,
  license: img.license || 'https://lodexstudio.com/terms'
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
  url: 'https://lodexstudio.com/about'
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
  title: 'Lodney Santos (LodeX Studio) — Personal Portfolio & Frontend Experiments',
  description: 'Personal portfolio of Lodney Santos (LodeX Studio): frontend development, UI/UX experiments, and hobby projects built with React & TailwindCSS.',
  keywords: 'lodney santos, lodex studio, personal portfolio, hobby projects, frontend developer, react, tailwindcss, ui ux, web developer portugal',
  canonical: 'https://lodexstudio.com',
  image: 'https://lodexstudio.com/pictures-lodneysantos/536240586_1105419774507110_6089065836688110588_n.jpeg'
  },
  
  portfolio: {
    title: 'Projects | Personal portfolio — React & UI/UX experiments',
    description: 'Selected personal and academic projects by Lodney Santos. Frontend experiments, UI/UX prototypes, and small case studies.',
    keywords: 'personal projects, portfolio, ui ux experiments, react demos, case studies',
  canonical: 'https://lodexstudio.com/case-studies'
  },
  
  services: {
    title: 'What I build | Side projects, experiments, and learning',
    description: 'A personal list of what I enjoy building: small web apps, UI/UX prototypes, and experiments with React & Tailwind.',
    keywords: 'side projects, experiments, learning, react components, ui prototypes',
  canonical: 'https://lodexstudio.com/about'
  },
  
  about: {
    title: 'About | Lodney Santos — Frontend Developer & UI Designer',
    description: 'I share personal projects, UI/UX experiments, and thoughts on frontend. React + Tailwind. Based in Portugal.',
    keywords: 'lodney santos, frontend developer, ui designer, personal portfolio',
  canonical: 'https://lodexstudio.com/about'
  },
  
  contact: {
    title: 'Contact | Say hi to Lodney',
    description: 'Want to chat about frontend, UI/UX, or a project idea? Reach out — happy to connect.',
    keywords: 'contact lodney santos, contact lodex studio, say hi',
  canonical: 'https://lodexstudio.com/conversar'
  },
  
  blog: {
    title: 'Blog | Frontend notes & UI/UX experiments',
    description: 'Short notes on frontend development, UI/UX details, and small case studies from my personal projects.',
    keywords: 'frontend notes, ui ux, experiments, case studies',
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
