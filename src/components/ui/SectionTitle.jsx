import React from "react";

function SectionTitle({ align = "center" }) {
  const alignment = {
    center: "text-center",
    left: "text-left",
    right: "text-right",
  };

  return (
    <section
      className={`relative z-10 space-y-2 px-4 ${alignment[align]}`}
      aria-labelledby="section-title-heading"
      tabIndex={-1}
    >
      <h2
        id="section-title-heading"
        className="text-2xl sm:text-4xl w-full mx-auto font-semibold uppercase leading-tight sm:text-terciario text-gray-900 transition-all duration-500  focus-visible:ring-secundario"
        tabIndex={0}
      >
        Design leve
        <span className="text-secundario">.</span> <br /> Código limpo. <br />
        <span className="relative">Resultados visíveis</span>
        <span className="text-secundario">.</span>
      </h2>
      <p className="mt-6 sm:text-lg font-medium text-gray-700 lg:text-gray-500 text-base whitespace-nowrap">
        Aqui, o design não se explica.{" "}
        <strong className="text-secundario focus:outline-none focus-visible:ring-2 focus-visible:ring-secundario" tabIndex={0}>
          Explora
        </strong>{" "}
        e{" "}
        <strong className="text-secundario focus:outline-none focus-visible:ring-2 focus-visible:ring-secundario" tabIndex={0}>
          vê por ti
        </strong>
        .
      </p>
    </section>
  );
}

export default SectionTitle;
