import React from "react";
import SectionContainer from "../utils/SectionContainer";
import SectionTitle from "../components/ui/SectionTitle";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function HeroSection() {
  return (
    <section className="relative w-full p-32 pb-80 bg-white overflow-hidden">
      
      {/* Título centralizado, por cima da caixa */}
      <SectionTitle />

      {/* Caixa de fundo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[950px] h-[200px] sm:h-[351px] bg-gray-200 rounded-sm z-0"></div>

      {/* conteúdo central */}
    </section>
  );
}

export default HeroSection;
