// Google My Business and Local SEO optimization utilities
export const generateLocalBusinessStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "name": "LodeX Studio",
    "description": "Frontend Developer & UI Designer especializado em desenvolvimento web moderno, criação de websites, landing pages e soluções digitais escaláveis em Portugal.",
    "image": [
      "https://lodexstudio.com/lodney-santos-developer.jpg",
      "https://lodexstudio.com/lodexstudio-logo.svg"
    ],
    "logo": "https://lodexstudio.com/lodexstudio-logo.svg",
    "url": "https://lodexstudio.com",
    "telephone": "+351935895551",
    "email": "lodexstudio@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sacavém",
      "addressLocality": "Sacavém", 
      "addressRegion": "Lisboa",
      "postalCode": "2685",
      "addressCountry": "PT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.795,
      "longitude": -9.094
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Portugal"
      },
      {
        "@type": "State",
        "name": "Lisboa"
      },
      {
        "@type": "City", 
        "name": "Sacavém"
      },
      {
        "@type": "City",
        "name": "Lisboa"
      },
      {
        "@type": "City",
        "name": "Porto"
      },
      {
        "@type": "City",
        "name": "Coimbra"
      }
    ],
    "founder": {
      "@type": "Person",
      "name": "Lodney Santos",
      "jobTitle": "Frontend Developer & UI Designer",
      "image": "https://lodexstudio.com/lodney-santos-developer.jpg",
      "url": "https://lodexstudio.com/sobremim",
      "sameAs": [
        "https://www.linkedin.com/in/lodney-santos/",
        "https://github.com/lodsa-ntos",
        "https://www.instagram.com/lodex.studio/"
      ]
    },
    "paymentAccepted": [
      "Cash", 
      "Credit Card", 
      "Debit Card", 
      "Bank Transfer",
      "PayPal",
      "MBWay"
    ],
    "currenciesAccepted": "EUR",
    "priceRange": "€€",
    "openingHours": "Mo-Fr 09:00-18:00",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 38.795,
        "longitude": -9.094
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Desenvolvimento Web",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Desenvolvimento de Websites",
            "description": "Criação de websites modernos, responsivos e otimizados para SEO usando React.js, JavaScript e tecnologias modernas."
          },
          "priceCurrency": "EUR",
          "availability": "InStock"
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "UI/UX Design",
            "description": "Design de interfaces funcionais com identidade clara, foco no detalhe e experiência do utilizador."
          },
          "priceCurrency": "EUR",
          "availability": "InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Landing Pages",
            "description": "Desenvolvimento de landing pages de alta conversão para campanhas de marketing digital."
          },
          "priceCurrency": "EUR",
          "availability": "InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Manutenção de Websites", 
            "description": "Serviços de manutenção, atualização e otimização de websites existentes."
          },
          "priceCurrency": "EUR",
          "availability": "InStock"
        }
      ]
    },
    "knowsAbout": [
      "Frontend Development",
      "React.js",
      "JavaScript", 
      "UI Design",
      "UX Design",
      "Web Development",
      "Landing Pages",
      "SEO",
      "Tailwind CSS",
      "Vite",
      "Responsive Design",
      "Modern Web Technologies"
    ],
    "sameAs": [
      "https://www.instagram.com/lodex.studio/",
      "https://github.com/lodsa-ntos", 
      "https://www.linkedin.com/in/lodney-santos/"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "ratingCount": "12",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Cliente Satisfeito"
        },
        "reviewRating": {
          "@type": "Rating", 
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Excelente trabalho na criação do nosso website. Design moderno e funcionalidade perfeita. Recomendo!"
      }
    ]
  };
};

// Generate FAQ structured data for common questions
export const generateWebDevelopmentFAQ = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quanto custa desenvolver um website em Portugal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O custo de desenvolvimento de um website varia conforme a complexidade e funcionalidades necessárias. Na LodeX Studio, oferecemos soluções personalizadas desde landing pages simples até websites complexos com CMS. Contacte-nos para um orçamento gratuito."
        }
      },
      {
        "@type": "Question", 
        "name": "Quanto tempo demora a criar um website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O tempo de desenvolvimento depende da complexidade do projeto. Uma landing page simples pode levar 1-2 semanas, enquanto um website completo com funcionalidades avançadas pode demorar 4-8 semanas. Fornecemos sempre um cronograma detalhado no início do projeto."
        }
      },
      {
        "@type": "Question",
        "name": "Que tecnologias utiliza para desenvolver websites?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Utilizamos tecnologias modernas como React.js, JavaScript, Tailwind CSS, Vite e outras ferramentas de desenvolvimento frontend. Todos os websites são responsivos, otimizados para SEO e seguem as melhores práticas de desenvolvimento web."
        }
      },
      {
        "@type": "Question",
        "name": "Oferece serviços de manutenção de websites?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, oferecemos serviços de manutenção contínua, incluindo atualizações de segurança, backup, otimização de performance e atualizações de conteúdo. A manutenção é essencial para manter o website seguro e funcionando perfeitamente."
        }
      },
      {
        "@type": "Question",
        "name": "O website será otimizado para motores de busca (SEO)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutamente! Todos os websites que desenvolvemos incluem otimização SEO básica: estrutura semântica, meta tags, performance otimizada, sitemap XML, robots.txt e estrutura de dados. Isto ajuda o website a aparecer melhor nos resultados do Google."
        }
      },
      {
        "@type": "Question",
        "name": "Trabalha com clientes fora de Lisboa?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Sim, trabalho com clientes em todo o Portugal. Através de videochamadas e ferramentas digitais, consigo gerir projetos remotamente mantendo a mesma qualidade de comunicação e entrega. A localização não é uma limitação para desenvolvermos o seu projeto."
        }
      }
    ]
  };
};

// Generate service area structured data
export const generateServiceAreaStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Desenvolvimento Web Portugal",
    "description": "Serviços de desenvolvimento web, UI/UX design e criação de websites modernos em Portugal",
    "provider": {
      "@type": "LocalBusiness",
      "name": "LodeX Studio"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Lisboa",
        "@id": "https://www.wikidata.org/wiki/Q597"
      },
      {
        "@type": "City", 
        "name": "Porto",
        "@id": "https://www.wikidata.org/wiki/Q36433"
      },
      {
        "@type": "City",
        "name": "Coimbra", 
        "@id": "https://www.wikidata.org/wiki/Q45947"
      },
      {
        "@type": "City",
        "name": "Braga",
        "@id": "https://www.wikidata.org/wiki/Q192032"
      },
      {
        "@type": "City",
        "name": "Aveiro",
        "@id": "https://www.wikidata.org/wiki/Q174688"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Distrito de Lisboa"
      },
      {
        "@type": "AdministrativeArea", 
        "name": "Distrito do Porto"
      },
      {
        "@type": "Country",
        "name": "Portugal",
        "@id": "https://www.wikidata.org/wiki/Q45"
      }
    ],
    "serviceType": "Web Development",
    "offers": {
      "@type": "Offer",
      "availability": "InStock",
      "priceCurrency": "EUR"
    }
  };
};

export default {
  generateLocalBusinessStructuredData,
  generateWebDevelopmentFAQ,
  generateServiceAreaStructuredData
};
