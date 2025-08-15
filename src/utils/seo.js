// SEO utilities for dynamic meta tags and structured data
export const updatePageSEO = (seoData) => {
  if (typeof document === 'undefined') return;

  // Update title
  if (seoData.title) {
    document.title = seoData.title;
    
    // Update OG title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = seoData.title;
    
    // Update Twitter title
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.content = seoData.title;
  }

  // Update description
  if (seoData.description) {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.content = seoData.description;
    
    // Update OG description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.content = seoData.description;
    
    // Update Twitter description
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.content = seoData.description;
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
    
    // Update Twitter URL
    const twitterUrl = document.querySelector('meta[name="twitter:url"]');
    if (twitterUrl) twitterUrl.content = seoData.canonical;
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
    
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) twitterImage.content = seoData.image;
  }
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
    inLanguage: 'pt-PT',
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
    inLanguage: 'pt-PT'
  };
};

// SEO page data templates
export const SEO_TEMPLATES = {
  homepage: {
    title: 'LodeX Studio | Frontend Developer & UI Designer Portugal | Lodney Santos',
    description: 'Lodney Santos - Frontend Developer & UI Designer especializado em websites modernos, landing pages e soluções digitais escaláveis em Portugal. React.js, JavaScript, UI/UX Design.',
    keywords: 'frontend developer portugal, ui designer portugal, lodney santos, lodex studio, react developer, javascript developer, landing pages portugal, website design portugal',
    canonical: 'https://lodexstudio.com'
  },
  
  portfolio: {
    title: 'Portfólio | LodeX Studio - Projetos de Desenvolvimento Web Portugal',
    description: 'Veja os projetos desenvolvidos pela LodeX Studio. Websites modernos, landing pages e aplicações web criadas com React.js, JavaScript e UI/UX design em Portugal.',
    keywords: 'portfolio desenvolvedor web, projetos web portugal, websites modernos portugal, react projetos, ui design portfolio',
    canonical: 'https://lodexstudio.com/portfolio'
  },
  
  services: {
    title: 'Serviços | LodeX Studio - Desenvolvimento Web & UI Design Portugal',
    description: 'Serviços de desenvolvimento web, UI/UX design e criação de websites modernos pela LodeX Studio em Portugal. Landing pages, portfólios e soluções digitais escaláveis.',
    keywords: 'serviços desenvolvimento web portugal, ui design portugal, criação websites portugal, landing pages portugal, frontend developer services',
    canonical: 'https://lodexstudio.com/servicos'
  },
  
  about: {
    title: 'Sobre Mim | Lodney Santos - Frontend Developer & UI Designer Portugal',
    description: 'Conheça Lodney Santos, Frontend Developer & UI Designer da LodeX Studio. Especializado em React.js, JavaScript e criação de websites modernos e escaláveis em Portugal.',
    keywords: 'lodney santos, frontend developer portugal, ui designer lisboa, desenvolvedor react portugal, javascript developer',
    canonical: 'https://lodexstudio.com/sobremim'
  },
  
  contact: {
    title: 'Contacto | LodeX Studio - Iniciar Projeto de Website Portugal',
    description: 'Entre em contacto com a LodeX Studio para desenvolver o seu website, landing page ou aplicação web. Orçamento gratuito para projetos de desenvolvimento web em Portugal.',
    keywords: 'contacto desenvolvedor web portugal, orçamento website portugal, criar website portugal, desenvolvedor freelancer lisboa',
    canonical: 'https://lodexstudio.com/conversar'
  },
  
  blog: {
    title: 'Blog | LodeX Studio - Artigos sobre Desenvolvimento Web & UI Design',
    description: 'Artigos e tutoriais sobre desenvolvimento web, React.js, JavaScript, UI/UX design e tecnologias modernas. Dicas e insights de um Frontend Developer em Portugal.',
    keywords: 'blog desenvolvimento web, artigos react portugal, tutoriais javascript, ui design tips, frontend development blog portugal',
    canonical: 'https://lodexstudio.com/blog'
  }
};

export default {
  updatePageSEO,
  generateProjectStructuredData,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  generateServiceStructuredData,
  generateArticleStructuredData,
  insertStructuredData,
  SEO_TEMPLATES
};
