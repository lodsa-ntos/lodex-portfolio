import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

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
      <motion.h2
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        id="section-title-heading"
        className="text-2xl sm:text-5xl w-full mx-auto font-[800] uppercase leading-tight sm:text-terciario text-[#111827] focus-visible:ring-secundario font-Satoshi"
        tabIndex={0}
      >
        Design leve
        <span className="text-secundario">.</span> <br /> Código limpo. <br />
        <span className="relative">Resultados visíveis</span>
        <span className="text-secundario">.</span>
      </motion.h2>

      <motion.p
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
        className="mt-6 md:text-lg font-medium text-[#4b5563] lg:text-gray-500 text-base whitespace-nowrap"
      >
        Não prometo tudo. Mas o que prometo,
        <strong className="text-secundario">
          {" "}
          <br className="md:hidden" />
          eu entrego
        </strong>
        .
      </motion.p>
    </section>
  );
}

export default SectionTitle;
