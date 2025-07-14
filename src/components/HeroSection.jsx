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
      <div className="relative mt-4 sm:mt-6 md:mt-8 lg:mt-12 z-50">
        <SectionTitle title="Building the future of digital interfaces" />
      </div>

      {/* fundo quadrado no meio para colocar foto */}
      <div className="relative flex items-center justify-center py-36">
        <div className="absolute w-[850px] h-[300px] md:h-[400px] lg:h-[350px] bg-gray-200 rounded-sm shadow-lg flex items-center justify-center">
          {/* image */}
          Imagem, mas qual?
        </div>

        {/* Icones Redes Sociais a esquerda na vertical */}
        <div className="absolute left-0 top-52 transform -translate-y-1/5 w-64 md:w-80 lg:w-32">
          <h3 className="text-sm text-terciario font-medium mb-4">Follow us</h3>
          <ul className="hidden lg:flex flex-row items-start justify-start gap-2">
            <li className="text-gray-700">
              <a
                href="https://www.instagram.com/lodex.studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center relative overflow-hidden rounded-full transition-all duration-500"
              >
                <FaInstagram className="size-6 relative z-10 fill-terciario transition-all duration-500" />
              </a>
            </li>

            <li className="text-gray-700">
              <a
                href="https://twitter.com/lodexstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center relative overflow-hidden rounded-full transition-all duration-500"
              >
                <FaGithub className="size-6 relative z-10 fill-terciario transition-all duration-500" />
              </a>
            </li>

            <li className="text-gray-700">
              <a
                href="https://twitter.com/lodexstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center relative overflow-hidden rounded-full transition-all duration-500"
              >
                <FaWhatsapp className="size-6 relative z-10 fill-terciario transition-all duration-500" />
              </a>
            </li>
          </ul>
        </div>

        {/* Tópicos a direita */}
        <div className="hidden lg:absolute lg:right-0 lg:top-3/4 lg:transform lg:-translate-y-3/4 w-64 md:w-80 lg:w-32 lg:flex lg:flex-col lg:items-end lg:justify-end">
          <h3 className="text-sm text-terciario text-end font-medium mb-4">Our expertise</h3>
          <div className="text-sm text-end font-semibold space-y-2 flex flex-col gap-1 items-end justify-end">
            {/* Badges */}
            <small className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300 gap-1 inline-flex items-center justify-end">
              <span className="inline-block items-center justify-center w-1.5 h-1.5  rounded-full bg-blue-800"></span>
              React.js
            </small>

            <small className="bg-cyan-100 text-cyan-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-cyan-900 dark:text-cyan-300 gap-1 inline-flex items-center justify-end">
              <span className="inline-block items-center justify-center w-1.5 h-1.5  rounded-full bg-cyan-800"></span>
              Tailwind CSS
            </small>
            <small className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300 gap-1 inline-flex items-center justify-end">
              <span className="inline-block items-center justify-center w-1.5 h-1.5  rounded-full bg-purple-800"></span>
              UI/UX Design
            </small>

            <small className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300 gap-1 inline-flex items-center justify-end">
              <span className="inline-block items-center justify-center w-1.5 h-1.5  rounded-full bg-indigo-800"></span>
              Digital Strategy
            </small>

            <small className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-emepinkrald-900 dark:text-pink-300 gap-1 inline-flex items-center justify-end">
              <span className="inline-block items-center justify-center w-1.5 h-1.5  rounded-full bg-pink-800"></span>
              Branding
            </small>

            <small className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-amber-900 dark:text-amber-300 gap-1 inline-flex items-center justify-end">
              <span className="inline-block items-center justify-center w-1.5 h-1.5 rounded-full bg-amber-800"></span>
              SEO Optimization
            </small>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default HeroSection;
