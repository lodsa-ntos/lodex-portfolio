import React from "react";
import Hero from "../components/HeroSection";
import SectionContainer from "../utils/SectionContainer";
import ExpertiseSection from "../components/ExpertiseSection";
import GlobalContainer from "../utils/GlobalContainer";
import AboutSection from "../components/AboutSection";
import WorksSection from "../components/WorksSection";
import { Helmet } from "react-helmet";

function LandingPage() {
  return (
    <>
      <Helmet>
        <title>LodeX Studio | Desenvolvimento Web e UI/UX</title>
        <meta
          name="description"
          content="Portfólio da Lodex Studio. Projetos e serviços de frontend com foco em clareza, estrutura e experiências digitais escaláveis."
        ></meta>
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
