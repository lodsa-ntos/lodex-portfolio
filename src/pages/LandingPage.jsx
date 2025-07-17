import React from "react";
import Hero from "../components/HeroSection";
import SectionContainer from "../utils/SectionContainer";
import ExpertiseSection from "../components/ExpertiseSection";
import GlobalContainer from "../utils/GlobalContainer";
import AboutSection from "../components/AboutSection";

function LandingPage() {
  return (
    <>
      <SectionContainer>
        <Hero />
      </SectionContainer>

      <GlobalContainer>
        <ExpertiseSection />
      </GlobalContainer>
      
      <AboutSection />
    </>
  );
}

export default LandingPage;
