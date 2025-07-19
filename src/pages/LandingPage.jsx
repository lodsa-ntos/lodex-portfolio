import React from "react";
import Hero from "../components/HeroSection";
import SectionContainer from "../utils/SectionContainer";
import ExpertiseSection from "../components/ExpertiseSection";
import GlobalContainer from "../utils/GlobalContainer";
import AboutSection from "../components/AboutSection";
import WorksSection from "../components/WorksSection";

function LandingPage() {
  return (
    <>

    <div className="shadow bg-gradient-to-b from-[#f4f8ff] via-white to-white">
      <SectionContainer>
        <Hero />
      </SectionContainer>
    </div>
      

      <div className="shadow bg-gradient-to-t from-gray-50 via-white to-white">
        <GlobalContainer>
        <ExpertiseSection />
      </GlobalContainer>
      </div>

      <WorksSection />
    </>
  );
}

export default LandingPage;
