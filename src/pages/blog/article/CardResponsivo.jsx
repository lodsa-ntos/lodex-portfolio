import React from "react";
import { Helmet } from "react-helmet";

function CardResponsivo() {
  return (
    <>
      <Helmet>
        <title>
          Card Responsivo com Badges - React + Tailwind | LodeX Studio
        </title>
        <meta
          name="description"
          content="Aprenda a criar um card responsivo com badges usando React e Tailwind. Inclui hover animado, responsividade e design moderno passo a passo."
        />
        <meta
          name="keywords"
          content="React, Tailwind, card responsivo, badges, UI components, web design, frontend"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Card Responsivo com Badges - React + Tailwind"
        />
        <meta
          property="og:description"
          content="Aprenda a criar um card responsivo com badges usando React e Tailwind."
        />
        <meta
          property="og:image"
          content="https://lodexstudio.com/images/blog/card-responsivo-cover.jpg"
        />
        <meta
          property="og:url"
          content="https://lodexstudio.com/images/blog/card-responsivo-lodex-studio"
        />
        <meta property="og:type" content="article" />
      </Helmet>

      <section className="min-h-[95vh] pb-20 border-b shadow-md transition-all duration-500">
        <div>min-h-[95vh]</div>
      </section>
    </>
  );
}

export default CardResponsivo;
