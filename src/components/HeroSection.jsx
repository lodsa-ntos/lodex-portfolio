import React from "react";
import SectionContainer from "../utils/SectionContainer";
import SectionTitle from "../components/ui/SectionTitle";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function HeroSection() {
  return (
    <SectionContainer>
      {/* SectionTitle */}
      <div className="relative mt-4 sm:mt-6 md:mt-8 lg:mt-12 z-10">
        <SectionTitle />
      </div>

      {/* Conteúdo */}
      <div className="relative flex items-center justify-center py-36">
        {/* Imagem destaque centro */}
        <div
          className="absolute w-[850px] h-[300px] md:h-[400px] lg:h-[350px] bg-gray-200 rounded-sm shadow-lg flex items-center justify-center"
          aria-hidden="true"
        >
          {/* card a esquerda */}
          <div className="absolute w-80 h-60 left-2/4 transform -translate-x-full -rotate-6 scale-90 z-0 opacity-30 blur-sm transition-all duration-500">
            <img
              src="images/herosection/cards/8.svg"
              alt=""
              className="rounded-xl shadow-lg"
              aria-hidden="true"
              tabIndex={-1}
            />
          </div>

          {/* card ao centro */}
          <div className="z-10 w-96 h-60 left-2/4 transform rotate-0 scale-100 hover:scale-[1.03] transition-all duration-500">
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

          {/* card a direita */}
          <div className="absolute w-80 h-60 right-2/4 transform translate-x-full rotate-6 scale-90 z-0 opacity-30 blur-sm transition-all duration-500">
            <img
              src="images/herosection/cards/7.svg"
              alt=""
              className="rounded-xl shadow-lg"
              aria-hidden="true"
              tabIndex={-1}
            />
          </div>
        </div>

        {/* Icones Redes Sociais a esquerda na vertical */}
        <div className="absolute left-0 top-16 transform -translate-y-1/5 w-64 md:w-80 lg:w-32">
          {/* Subheadline */}
          <p className="text-sm text-gray-600 font-medium mb-2 whitespace-nowrap">
            Criação de <strong className="text-secundario">sites</strong> e{" "}
            <strong className="text-secundario">apps</strong> <br />
            para empresas <br /> com{" "}
            <strong className="text-secundario">
              presença digital
            </strong> <br /> a construir.
          </p>

          {/* CTA Button */}
          <div className="mb-4 mt-6">
            <a
              href="#projetos"
              className="inline-block bg-primario text-white font-medium px-3 py-2 rounded-full shadow-lg hover:bg-secundario transition-all duration-500 hover:shadow-lg hover:scale-105 text-sm whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-secundario"
              tabIndex={0}
              aria-label="Explorar projetos"
            >
              📂 Explorar projetos
            </a>
          </div>

          {/* Social Media Icons */}
          <h3 className="text-[13px] leading-2 flex items-center justify-center text-terciario font-semibold mb-3">
            Conecte-se comigo
          </h3>
          <ul
            className="hidden lg:flex flex-row items-center justify-center gap-2"
            aria-label="Redes sociais"
          >
            <li className="text-gray-700">
              <a
                href="https://www.instagram.com/lodex.studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center relative overflow-hidden rounded-full transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-secundario"
                aria-label="Instagram Lodex Studio (abre em nova aba)"
                tabIndex={0}
              >
                <FaInstagram
                  className="size-6 relative z-10 fill-terciario hover:fill-[#e4405f] transition-all duration-500"
                  aria-hidden="true"
                  focusable="false"
                />
              </a>
            </li>

            <li className="text-gray-700">
              <a
                href="https://github.com/lodsa-ntos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center relative overflow-hidden rounded-full transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-secundario"
                aria-label="GitHub Lodex Studio (abre em nova aba)"
                tabIndex={0}
              >
                <FaGithub
                  className="size-6 relative z-10 fill-terciario hover:fill-gray-950 transition-all duration-500"
                  aria-hidden="true"
                  focusable="false"
                />
              </a>
            </li>

            <li className="text-gray-700">
              <a
                href="https://api.whatsapp.com/send?phone=351935895551&text=Hello%20%F0%9F%91%8B%20I%27m%20interested%20in%20the%20services%20of%20Lodex Studio.%20%0A%0ACould%20you%20give%20me%20more%20details%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center relative overflow-hidden rounded-full transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-secundario"
                aria-label="WhatsApp Lodex Studio (abre em nova aba)"
                tabIndex={0}
              >
                <FaWhatsapp
                  className="size-6 relative z-10 fill-terciario hover:fill-[#25d366] transition-all duration-500"
                  aria-hidden="true"
                  focusable="false"
                />
              </a>
            </li>
          </ul>
        </div>

        {/* Tópicos a direita */}
        <div className="hidden lg:absolute lg:right-0 lg:top-3/4 lg:transform lg:-translate-y-3/4 w-64 md:w-80 lg:w-32 lg:flex lg:flex-col lg:items-center lg:justify-end">
          <h3 className="text-sm text-gray-600 text-end font-medium mb-4 z-[1000000]">
            Especialidades
          </h3>
          <div className="text-sm text-end font-semibold space-y-2 flex flex-col gap-1 items-center justify-end">
            {/* Badges */}
            <small
              className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300 gap-1 inline-flex items-center justify-end"
              tabIndex={0}
            >
              <span
                className="inline-block items-center justify-center w-1.5 h-1.5  rounded-full bg-blue-800"
                aria-hidden="true"
              ></span>
              React.js
            </small>

            <small
              className="bg-cyan-100 text-cyan-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-cyan-900 dark:text-cyan-300 gap-1 inline-flex items-center justify-end"
              tabIndex={0}
            >
              <span
                className="inline-block items-center justify-center w-1.5 h-1.5  rounded-full bg-cyan-800"
                aria-hidden="true"
              ></span>
              Tailwind CSS
            </small>
            <small
              className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300 gap-1 inline-flex items-center justify-end"
              tabIndex={0}
            >
              <span
                className="inline-block items-center justify-center w-1.5 h-1.5  rounded-full bg-purple-800"
                aria-hidden="true"
              ></span>
              UI/UX Design
            </small>

            <small
              className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300 gap-1 inline-flex items-center justify-end"
              tabIndex={0}
            >
              <span
                className="inline-block items-center justify-center w-1.5 h-1.5  rounded-full bg-indigo-800"
                aria-hidden="true"
              ></span>
              Framer Motion
            </small>

            <small
              className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-emepinkrald-900 dark:text-pink-300 gap-1 inline-flex items-center justify-end"
              tabIndex={0}
            >
              <span
                className="inline-block items-center justify-center w-1.5 h-1.5  rounded-full bg-pink-800"
                aria-hidden="true"
              ></span>
              Branding
            </small>

            <small
              className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-amber-900 dark:text-amber-300 gap-1 inline-flex items-center justify-end"
              tabIndex={0}
            >
              <span
                className="inline-block items-center justify-center w-1.5 h-1.5 rounded-full bg-amber-800"
                aria-hidden="true"
              ></span>
              Vite
            </small>
          </div>

          {/* "scroll down" indicator */}
          <div
            className="w-[2.1rem] h-16 border-solid border-2 border-secundario rounded-[30px] relative flex items-center justify-center mt-4 before:content-[''] before:w-[0.4em] before:h-[0.4em] before:rounded-[50%] before:bg-[#99AAB5] before:absolute before:left-2/2 before:top-2/2 before:animate-movingY"
            aria-hidden="true"
            tabIndex={-1}
          ></div>
          <small className=" text-gray-500">scroll para ver mais</small>
        </div>
      </div>
    </SectionContainer>
  );
}

export default HeroSection;
