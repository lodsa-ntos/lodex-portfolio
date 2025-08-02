import React from "react";
import GlobalContainer from "../../utils/GlobalContainer";
import { Helmet } from "react-helmet";

function Blog() {
  return (
    <>
      <Helmet>
        <title>Lodex Studio — Blog</title>
        <meta
          name="description"
          content="Reflexões autorais e soluções práticas sobre criação digital, frontend e design. Conteúdo direto, com propósito."
        />
      </Helmet>
      <section
        id="sobremim"
        className="min-h-[95vh] pt-20 border-b shadow-md flex items-center justify-center text-center"
      >
        <GlobalContainer>
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-center text-4xl font-semibold">
              Conteúdo com propósito. <br className="lg:hidden" />
              Em construção.
            </h2>
            <p className="text-sm text-gray-500 -tracking-wide mt-2">
              Aqui vou partilhar ideias, reflexões e soluções práticas sobre
              frontend, design e criação digital.
            </p>
          </div>
        </GlobalContainer>
      </section>
    </>
  );
}

export default Blog;
