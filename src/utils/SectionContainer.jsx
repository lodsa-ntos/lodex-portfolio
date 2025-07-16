import React from "react";
import GlobalContainer from "./GlobalContainer";

function SectionContainer({ children }) {
  return (
    <div className="min-h-screen mt-2">
      <GlobalContainer>{children}</GlobalContainer>
    </div>
  );
}

export default SectionContainer;
