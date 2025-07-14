import React from "react";

function SectionTitle({ subtitle, align = "center" }) {
  const alignment = {
    center: "text-center",
    left: "text-left",
    right: "text-right",
  };

  return (
    <div className={`space-y-2 ${alignment[align]}`}>
      <h2 className="text-7xl w-5/5 mx-auto font-semibold uppercase text-terciario">
        Design leve. <br /> Código limpo. <br /> Resultados visíveis
        <span className="text-secundario">.</span>
      </h2>
      {subtitle && <p className="text-gray-600 text-lg">{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;
