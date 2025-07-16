import React from "react";

function SectionTitle({ subtitle, align = "center" }) {
  const alignment = {
    center: "text-center",
    left: "text-left",
    right: "text-right",
  };

  return (
    <div className={`relative z-10 space-y-2  px-4 ${alignment[align]}`}>
      <h2 className="text-3xl w-5/5 mx-auto font-semibold uppercase leading-tight text-terciario transition-all duration-500">
        Design leve<span className="text-secundario">.</span> <br /> Código
        limpo. <br />
        <span className="relative z-10">Resultados visíveis</span>
        <span className="text-secundario">.</span>
      </h2>
      {subtitle && <p className="mt-6 sm:text-xl text-gray-500 text-lg">{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;
