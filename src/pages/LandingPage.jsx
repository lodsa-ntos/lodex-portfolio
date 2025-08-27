import React, { useEffect } from "react";
import Hero from "../components/HeroSection";
import SectionContainer from "../utils/SectionContainer";
import ExpertiseSection from "../components/ExpertiseSection";
import GlobalContainer from "../utils/GlobalContainer";
import AboutSection from "../components/AboutSection";
import WorksSection from "../components/WorksSection";
import { Helmet } from "react-helmet";
import {
  updatePageSEO,
  SEO_TEMPLATES,
  insertStructuredData,
} from "../utils/seo";

function LandingPage() {
  useEffect(() => {
    // Update SEO for homepage
    updatePageSEO(SEO_TEMPLATES.homepage);

    // Add homepage structured data
    const homepageStructuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "LodeX Studio - Frontend Developer & UI Designer Portugal",
      description:
        "Lodney Santos - Frontend Developer & UI Designer especializado em websites modernos, landing pages e soluções digitais escaláveis em Portugal.",
      url: "https://lodexstudio.com",
      mainEntity: {
        "@type": "Organization",
        name: "LodeX Studio",
        founder: {
          "@type": "Person",
          name: "Lodney Santos",
          jobTitle: "Frontend Developer & UI Designer",
        },
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://lodexstudio.com",
          },
        ],
      },
    };

    insertStructuredData(homepageStructuredData, "homepage-structured-data");
  }, []);

  return (
    <>
      <Helmet>
        <title>
          LodeX Studio | Frontend Developer & UI Designer Portugal | Lodney
          Santos
        </title>
        <meta
          name="description"
          content="Lodney Santos - Frontend Developer & UI Designer especializado em websites modernos, landing pages e soluções digitais escaláveis em Portugal. React.js, JavaScript, UI/UX Design."
        />
        <meta
          name="keywords"
          content="frontend developer portugal, ui designer portugal, lodney santos, lodex studio, react developer, javascript developer, landing pages portugal, website design portugal, ui ux design, desenvolvedor frontend, designer ui portugal, sites modernos"
        />
        <link rel="canonical" href="https://lodexstudio.com" />

        <meta
          property="og:title"
          content="LodeX Studio | Frontend Developer & UI Designer Portugal | Lodney Santos"
        />
        <meta
          property="og:description"
          content="Lodney Santos - Frontend Developer & UI Designer especializado em websites modernos, landing pages e soluções digitais escaláveis em Portugal."
        />
        <meta property="og:url" content="https://lodexstudio.com" />
        <meta property="og:type" content="website" />

        <meta
          name="twitter:title"
          content="LodeX Studio | Frontend Developer & UI Designer Portugal | Lodney Santos"
        />
        <meta
          name="twitter:description"
          content="Lodney Santos - Frontend Developer & UI Designer especializado em websites modernos, landing pages e soluções digitais escaláveis em Portugal."
        />
      </Helmet>

      <div className="shadow bg-gradient-to-b from-[#f4f8ff] via-white to-white">
        <SectionContainer>
          <Hero />
        </SectionContainer>
      </div>

      <WorksSection />

      <div className="shadow-lg border-b bg-gray-100">
        <GlobalContainer>
          <ExpertiseSection />
        </GlobalContainer>
      </div>
    </>
  );
}

export default LandingPage;
