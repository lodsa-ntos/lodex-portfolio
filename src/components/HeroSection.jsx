import React from "react";
import SectionContainer from "../utils/SectionContainer";
import SectionTitle from "../components/ui/SectionTitle";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function HeroSection() {
  return (
    <section
      className="overflow-hidden"
      aria-labelledby="hero-title"
      tabIndex={-1}
    >
      <div
        className="2xl:hidden absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-[#3d55cc]/20 to-[#3d55cc]/20 rounded-full blur-[80px] -z-10"
        aria-hidden="true"
      ></div>

      <SectionTitle id="hero-title" />

      <div className="flex flex-row items-center justify-center w-full gap-4 mt-6 px-4 z-10">
        <button
          className="bg-primario font-semibold text-white py-3 px-3 rounded-full shadow-sm text-sm w-full sm:w-fit max-w-xs hover:bg-secundario transition-all duration-500 whitespace-nowrap hover:ring-2 hover:ring-secundario hover:scale-105 hover:ring-inset"
          aria-label="Explorar projetos"
        >
          📂 Explorar projetos
        </button>

        <button
          className="bg-white border border-secundario text-secundario py-3 px-3 rounded-full shadow-sm text-sm font-medium w-full sm:w-fit max-w-xs ring-1 ring-inset ring-transparent hover:ring-secundario hover:scale-105 transition-all duration-500"
          aria-label="Falar comigo"
        >
          💬 Falar comigo
        </button>
      </div>

      <div className="relative w-full flex justify-center items-center mt-10">
        {/* Caixa fundo central */}
        <div
          className="bg-gradient-to-b from-gray-200 max-w-[950px] h-[320px] w-full flex rounded-sm z-0"
          aria-hidden="true"
        ></div>

        <div className="flex">
          {/* Left Card */}
          <div
            className="hidden lg:block absolute w-80 mt-4 md:mt-6 xl:mt-8 h-60 left-2/4 transform -translate-x-full -translate-y-36 -rotate-6 scale-90 z-0 opacity-70 blur-sm transition-all duration-500"
            aria-hidden="true"
          >
            <img
              src="images/herosection/cards/8.svg"
              alt=""
              className="rounded-xl shadow-lg"
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
              className="rounded-xl shadow-2xl"
            >
              <img
                src="images/herosection/cards/9.svg"
                alt="Projeto Gestos Amáveis"
                className="rounded-xl shadow-2xl"
              />
            </a>
          </div>

          {/* Mobile Image & CTA */}
          <div className="lg:hidden absolute z-50 w-80 h-60 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rotate-0 scale-100 hover:scale-[1.03] transition-all duration-500 flex items-center justify-center">
            <img
              src="images/herosection/banners/mockup-cliente-1.svg"
              alt="Projeto Gestos Amáveis"
              className="mb-4"
            />
          </div>

          {/* Right Card */}
          <div
            className="hidden lg:block absolute w-80 h-60 mt-4 md:mt-6 xl:mt-8 right-2/4 -translate-y-36 transform translate-x-[365px] rotate-6 scale-90 z-0 opacity-70 blur-sm transition-all duration-500"
            aria-hidden="true"
          >
            <img
              src="images/herosection/cards/7.svg"
              alt=""
              className="rounded-xl shadow-lg"
              tabIndex={-1}
            />
          </div>
        </div>

        {/* "scroll down" indicator */}
        <div
          className="
            hidden
            absolute
            w-[2.1rem] h-16 border-solid border-2 border-secundario rounded-[30px]
            lg:flex items-center justify-center
            left-1/2 bottom-1/2
            -translate-x-1/2 translate-y-1/2
            lg:left-4 lg:bottom-7 lg:translate-x-0 lg:-translate-y-10
            z-50
            before:content-[''] before:w-[0.4em] before:h-[0.4em] before:rounded-[50%] before:bg-secundario before:absolute before:left-2/2 before:top-2/2 before:animate-movingY
          "
          aria-hidden="true"
          tabIndex={-1}
        ></div>
        <small
          className="hidden lg:block text-center absolute left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2 lg:left-4 lg:bottom-4 lg:-translate-x-3.5 lg:-translate-y-4 text-secundario text-xs font-semibold"
          aria-live="polite"
        >
          scroll para <br /> ver mais
        </small>
      </div>
    </section>
  );
}

export default HeroSection;
