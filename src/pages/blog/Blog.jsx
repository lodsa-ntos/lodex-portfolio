import React from "react";
import GlobalContainer from "../../utils/GlobalContainer";

function Blog() {
  return (
    <section
      id="sobremim"
      className="min-h-[95vh] pt-20 border-b shadow-md flex items-center justify-center text-center"
    >
      <GlobalContainer>
        <div className="flex flex-col items-center justify-center text-center">
          <p>Blog</p>
          <h1 className="text-5xl font-bold -tracking-wide">EM BREVE</h1>
        </div>
      </GlobalContainer>
    </section>
  );
}

export default Blog;
