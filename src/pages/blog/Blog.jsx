import React from "react";
import GlobalContainer from "../../utils/GlobalContainer";
import { Helmet } from "react-helmet";
import CardBlog from "../../utils/CardBlog";

function Blog() {
  return (
    <>
      <Helmet>
        <title>LodeX Studio — Blog</title>
        <meta
          name="description"
          content="Reflexões autorais e soluções práticas sobre criação digital, frontend e design. Conteúdo direto, com propósito."
        />
      </Helmet>
      
      <section
        id="sobremim"
        className="relative min-h-[45vh] md:min-h-[10vh] lg:min-h-[95vh] pt-20 border-b shadow-md overflow-hidden bg-[url(images/blog/blog-banner-hero.jpg)] w-full h-[250px] bg-cover bg-center bg-no-repeat mb-8 md:h-[350px]"
      >
        <div className="absolute inset-0 bg-gradient-to-t to-gray-100/40 via-gray-600/20 from-transparent"></div>

        <div className="absolute inset-0 bg-gradient-to-b to-gray-900/40 via-gray-900/20 from-transparent"></div>

        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-transparent backdrop-blur-[2px] text-white py-5 space-y-2 text-left">
          <GlobalContainer>
            <h1 className="mb-1 lg:text-3xl">Insights</h1>
            <h3
              id="card1-title"
              className="text-base sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-3 leading-relaxed"
            >
              Tutoriais e ideias para <br />
              acelerar o seu código.
            </h3>
            <p className="text-base max-w-3xl leading-relaxed">
              Dicas práticas, guias passo a passo e exemplos reais para ajudar
              programadores e designers a criarem projetos mais rápidos, bonitos
              e eficientes. Conteúdo focado em React, TailwindCSS, UI/UX e
              ferramentas modernas para web.
            </p>
          </GlobalContainer>
        </div>
      </section>

      <section className="pt-8 md:pt-10 pb-20 border-b shadow-md transition-all duration-500">
        <GlobalContainer>
          <div>
            <h1 className="font-bold">Artigos Recentes</h1>
            <CardBlog />
          </div>
        </GlobalContainer>
      </section>
    </>
  );
}

export default Blog;
