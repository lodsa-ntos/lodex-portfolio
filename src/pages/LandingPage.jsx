import React from "react";
import Hero from "../components/HeroSection";
import SectionContainer from "../utils/SectionContainer";
import ExpertiseSection from "../components/ExpertiseSection";

function LandingPage() {
  return (
    <>
      <SectionContainer>
        <Hero />
      </SectionContainer>
      
      <SectionContainer>
        <ExpertiseSection />
      </SectionContainer>
    </>
  );
}

export default LandingPage;
