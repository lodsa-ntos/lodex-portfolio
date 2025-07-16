import React from "react";
import SectionContainer from "../utils/SectionContainer";
import SectionTitle from "../components/ui/SectionTitle";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function HeroSection() {
  return (
    <section className="bg-white overflow-hidden">
      {/* Título centralizado, por cima da caixa */}
      <SectionTitle
        subtitle={
          "Transformo ideias em experiências digitais claras, intuitivas e escaláveis."
        }
      />

      {/* CTA Buttons */}
      <div className="flex flex-row items-center justify-center w-full gap-4 mt-6 px-4 z-10">
        <button className="bg-primario font-semibold text-white py-3 rounded-full shadow-sm text-sm w-full max-w-xs hover:bg-secundario transition-all duration-500 whitespace-nowrap">
          📂 Explorar projetos
        </button>
        <button className="bg-white border border-secundario text-secundario py-3 rounded-full shadow-sm text-sm w-full max-w-xs hover:bg-gray-100 transition-all duration-500">
          💬 Falar comigo
        </button>
      </div>

      <div className="relative w-full flex justify-center items-center mt-10">
        {/* Caixa fundo central */}
        <div className="bg-gray-100 max-w-[950px] h-[320px] w-full flex rounded-sm z-0"></div>

        <div className="flex">
          {/* Left Card */}
          <div className="hidden lg:block absolute w-80 mt-4 md:mt-6 xl:mt-8 h-60 left-2/4 transform -translate-x-full -translate-y-36 -rotate-6 scale-90 z-0 opacity-30 blur-sm transition-all duration-500">
            <img
              src="images/herosection/cards/8.svg"
              alt=""
              className="rounded-xl shadow-lg"
              aria-hidden="true"
              tabIndex={-1}
            />
          </div>

          {/* Center Card */}
          <div className="hidden lg:block absolute z-50 w-64 h-60 mt-4 md:mt-6 xl:mt-8 left-2/4 -translate-x-28 -translate-y-36 transform rotate-0 scale-100 hover:scale-[1.03] shadow-2xl hover:shadow-3xl transition-all duration-500">
            <a
              href="https://www.gestosamaveis.pt/"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={0}
              aria-label="Visite o site Gestos Amáveis (abre em nova aba)"
              className="focus:outline-none focus:ring-2 focus:ring-secundario rounded-xl"
            >
              <img
                src="images/herosection/cards/9.svg"
                alt="Projeto Gestos Amáveis"
                className="rounded-xl shadow-2xl"
              />
            </a>
          </div>

          {/* Mobile Image & CTA */}
          <div className="lg:hidden absolute z-50 w-80 h-60  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rotate-0 scale-100 hover:scale-[1.03] transition-all duration-500 flex items-center justify-center">
            <img
              src="images/herosection/banners/mockup-cliente-1.svg"
              alt="Projeto Gestos Amáveis"
              className="mb-4"
            />
          </div>

          {/* Right Card */}
          <div className="hidden lg:block absolute w-80 h-60 mt-4 md:mt-6 xl:mt-8 right-2/4 -translate-y-36 transform translate-x-[365px] rotate-6 scale-90 z-0 opacity-30 blur-sm transition-all duration-500">
            <img
              src="images/herosection/cards/7.svg"
              alt=""
              className="rounded-xl shadow-lg"
              aria-hidden="true"
              tabIndex={-1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
