import React from "react";
import SectionTitle from "../components/ui/SectionTitle";
import { TbFileTypePdf } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { trackDownload, trackExternalLink } from "../utils/analytics";

function HeroSection() {
  const handleCVDownload = () => {
    trackDownload("Lodney-Santos-Currículo-[2025-Website].pdf", "pdf");
  };

  const handleProjectLink = (projectUrl, projectName) => {
    trackExternalLink(projectUrl, projectName);
  };

  return (
    <section
      id="home"
      className="overflow-hidden"
      aria-labelledby="hero-title"
      tabIndex={-1}
    >
      <div
        className="2xl:hidden absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-[#3d55cc]/20 to-[#3d55cc]/20 rounded-full blur-[80px] z-10"
        aria-hidden="true"
      ></div>

      <SectionTitle id="hero-title" />

      <div className="flex flex-row items-center justify-center w-full gap-4 mt-6 px-4 z-10">
        <motion.button
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          className="bg-primario font-semibold text-white py-3 px-4 rounded-full shadow-md hover:shadow-lg text-sm w-full sm:w-fit max-w-xs hover:bg-secundario whitespace-nowrap hover:ring-2 hover:ring-secundario hover:scale-105 hover:ring-inset flex items-center justify-center gap-1"
          aria-label="Explorar projetos"
        >
          <a
            href="#projetos"
            className="flex items-center justify-center gap-1"
          >
            <FaLaptopCode className="text-green-400" /> Ver projetos
          </a>
        </motion.button>

        <motion.a
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          href="/Lodney-Santos-Currículo-[2025-Website].pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleCVDownload}
          className="bg-white border-2 border-secundario text-secundario py-2 px-3 rounded-full shadow-sm text-sm font-medium w-full sm:w-fit max-w-xs ring-1 ring-inset ring-transparent hover:ring-secundario hover:scale-105 flex items-center justify-center gap-1"
          aria-label="Falar comigo"
        >
          <TbFileTypePdf className="text-[#F40F02]" /> Currículo
        </motion.a>
      </div>

      <div className="relative w-full flex justify-center items-center mt-10">
        {/* Caixa fundo central */}
        <div
          className="bg-gradient-to-b from-terciario via-primario to-white max-w-[950px] h-[320px] border-none w-full flex rounded-t-2xl lg:rounded-t-3xl z-0"
          aria-hidden="true"
        ></div>

        <div className="flex">
          {/* Left Card */}
          <div
            className="hidden lg:block absolute w-80 mt-4 md:mt-6 xl:mt-8 h-60 left-2/4 transform -translate-x-full -translate-y-36 -rotate-6 scale-90 z-0 transition-all duration-500 hover:scale-[1.03]"
            aria-hidden="true"
          >
            <a
              href="https://www.gestosamaveis.pt/sobre-nos"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={0}
              aria-label="Visite o site Gestos Amáveis (abre em nova aba)"
              onClick={() => handleProjectLink("https://www.gestosamaveis.pt/sobre-nos", "Gestos Amáveis - Sobre Nós")}
            >
              <motion.img
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView="show"
                src="images/herosection/cards/8.svg"
                alt=""
                className="rounded-xl shadow-lg"
                tabIndex={-1}
              />
            </a>
          </div>

          {/* Center Card */}
          <div className="hidden lg:block absolute z-50 w-64 h-60 mt-4 md:mt-6 xl:mt-8 left-2/4 -translate-x-28 -translate-y-36 transform rotate-0 scale-100 hover:scale-[1.03] shadow-2xl hover:shadow-3xl transition-all duration-500">
            <a
              href="https://www.gestosamaveis.pt/"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={0}
              aria-label="Visite o site Gestos Amáveis (abre em nova aba)"
              className="rounded-xl shadow-2xl"
              onClick={() => handleProjectLink("https://www.gestosamaveis.pt/", "Gestos Amáveis - Homepage")}
            >
              <motion.img
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                src="images/herosection/cards/9.svg"
                alt="Projeto Gestos Amáveis"
                className="rounded-xl shadow-2xl"
              />
            </a>
          </div>

          {/* Mobile Image & CTA */}
          <div className="lg:hidden absolute z-50 w-96 md:w-[500px] h-60 left-1/2 top-1/2 -translate-x-[199px] -translate-y-20 sm:-translate-x-1/2 sm:-translate-y-28 transform rotate-0 scale-100 hover:scale-[1.03] transition-all duration-500 flex items-center justify-center">
            <img
              src="images/herosection/banners/mockup-cliente-1.svg"
              alt="Projeto Gestos Amáveis"
            />
          </div>

          {/* Right Card */}
          <div
            className="hidden lg:block absolute w-80 h-60 mt-4 md:mt-6 xl:mt-8 right-2/4 -translate-y-36 transform translate-x-[365px] rotate-6 scale-90 z-0 hover:scale-[1.03] transition-all duration-500"
            aria-hidden="true"
          >
            <a
              href="https://www.gestosamaveis.pt/servicos-avulso"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={0}
              aria-label="Visite o site Gestos Amáveis (abre em nova aba)"
              onClick={() => handleProjectLink("https://www.gestosamaveis.pt/servicos-avulso", "Gestos Amáveis - Serviços")}
            >
              <motion.img
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView="show"
                src="images/herosection/cards/7.svg"
                alt=""
                className="rounded-xl shadow-lg"
                tabIndex={-1}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
