import React from "react";
import GlobalContainer from "../../utils/GlobalContainer";
import { Helmet } from "react-helmet";
import CardBlog from "../../utils/CardBlog";

const HERO_DEFAULTS = {
  overline: "Insights",
  title: "Tutoriais e ideias para acelerar o seu código.",
  description:
    "Dicas práticas, guias passo a passo e exemplos reais para ajudar programadores e designers a criarem projetos mais rápidos, bonitos e eficientes. Conteúdo focado em React, TailwindCSS, UI/UX e ferramentas modernas para web.",
  imageSrc: "/images/blog/blog-banner-hero.jpg",
  imageAlt: "Abstração tecnológica representando ideias e código"
};

function HeroBanner({
  overline = HERO_DEFAULTS.overline,
  title = HERO_DEFAULTS.title,
  description = HERO_DEFAULTS.description,
  imageSrc = HERO_DEFAULTS.imageSrc,
  imageAlt = HERO_DEFAULTS.imageAlt
}) {
  return (
    <section
      id="blog-hero"
      role="banner"
      aria-labelledby="blog-hero-heading"
      className="relative isolate overflow-hidden w-full min-h-[55vh] lg:min-h-[70vh] flex items-end pt-20 border-b shadow-md"
    >
      {/* Background media */}
      <picture
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <img
            src={imageSrc}
            alt={imageAlt}
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-center"
            fetchpriority="high"
          />
      </picture>

      {/* Overlays for contrast */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/80 via-black/55 to-black/80" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_65%)]" />

      <GlobalContainer>
        <div className="text-white max-w-4xl pb-10 md:pb-14">
          {overline && (
            <p className="mb-3 text-sm md:text-base font-medium uppercase tracking-wide text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
              {overline}
            </p>
          )}
          <h1
            id="blog-hero-heading"
            className="text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
          >
            {title}
          </h1>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-gray-100/90">
              {description}
            </p>
        </div>
      </GlobalContainer>

      {/* Reduced motion: soft fade-in */}
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          #blog-hero picture img {
            opacity: 0;
            transform: scale(1.04);
            animation: heroFade 1.2s ease forwards;
          }
          @keyframes heroFade {
            to { opacity: 1; transform: scale(1); }
          }
        }
      `}</style>
    </section>
  );
}

function RecentArticles() {
  return (
    <section className="pt-8 md:pt-10 pb-20 border-b shadow-md transition-all duration-500">
      <GlobalContainer>
        <div>
          <h1 className="font-bold">Artigos Recentes</h1>
          <CardBlog />
        </div>
      </GlobalContainer>
    </section>
  );
}

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
      <HeroBanner />
      <RecentArticles />
    </>
  );
}

export default Blog;
