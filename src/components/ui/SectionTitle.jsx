import React from "react";

function SectionTitle({ title, subtitle, align = "center" }) {
  const alignment = {
    center: "text-center",
    left: "text-left",
    right: "text-right",
  };

  return (
    <div className={`space-y-2 ${alignment[align]}`}>
      <h2 className="text-7xl w-3/5 mx-auto font-semibold uppercase text-terciario">
        {title}
        <span className="text-secundario">.</span>
      </h2>
      {subtitle && <p className="text-gray-600 text-lg">{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;
