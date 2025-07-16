import React from "react";
import GlobalContainer from "./GlobalContainer";

function SectionContainer({ children }) {
  return (
    <div className="min-h-screen pt-28">
      <GlobalContainer>{children}</GlobalContainer>
    </div>
  );
}

export default SectionContainer;
