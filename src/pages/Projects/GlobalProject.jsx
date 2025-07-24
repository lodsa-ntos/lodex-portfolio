import React from "react";
import GlobalContainer from "../../utils/GlobalContainer";
import { RiChatSmileAiFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbContract } from "react-icons/tb";
import { LiaUniversitySolid } from "react-icons/lia";
import { RiFlutterFill } from "react-icons/ri";
import { SiDart } from "react-icons/si";
import { RiFirebaseFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { AiOutlineFileProtect } from "react-icons/ai";
import esc from "../../assets/tech/esc.png";

function GlobalProject() {
  return (
    <section id="sobremim" className="min-h-[95vh] pt-36 border-b shadow-md">
      <GlobalContainer>
        <span className="text-xs sm:text-sm text-gray-600  font-semibold text-start block mb-2 uppercase tracking-wide">
          Projectos
        </span>

        {/* Título, subtítulo e Descrição */}
        <div className="mb-10 sm:mb-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-col items-start justify-center flex-1">
            <h2 className="text-xl sm:text-3xl md:text-4xl text-left font-medium text-gray-900 leading-tight">
              Cada projeto tem
              <br />
              <strong>lógica</strong> e <strong>função</strong>.
            </h2>
            <p className="mt-6 mb-2 text-base max-w-xl lg:text-lg text-left text-slate-500 font-Satoshi leading-relaxed text-balance">
              Para comunicar com clareza. Para guiar decisões. <br />
              Para transformar ideias em experiência digital.
            </p>
          </div>

          <a
            href="https://wa.link/7e3xwn"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secundario px-4 py-2 rounded-full shadow-sm font-semibold w-fit text-white hover:brightness-105 flex items-center justify-center gap-1 transition-all duration-500 hover:ring-secundario hover:text-terciario hover:bg-white ring-inset ring-2 ring-transparent"
            role="button"
            aria-label="Explorar mais no WhatsApp"
          >
            <RiChatSmileAiFill /> Conversar
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-36">
          {/* Primeiro projeto */}
          <div className="w-full h-full bg-[#f6f6f6] rounded-md mx-auto px-3 pt-3 pb-2">
              <div className=" flex items-center justify-center mx-auto bg-gradient-to-t from-white to-gray-100 rounded-md cursor-pointer px-12 pt-12 pb-8 group">
                <img
                  src="images/portfolio/academico/app-mockup2.svg"
                  alt="Gestos Amáveis"
                  className="w-full h-[140px] overflow-hidden object-contain rounded-md transition-opacity duration-500 group-hover:opacity-0"
                />

                <img
                  src="images/portfolio/academico/app-mockup3.svg"
                  alt="Gestos Amáveis"
                  className="w-[350px] overflow-hidden absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />
              </div>
              <div className="flex items-center flex-nowrap justify-between px-3 pt-3 pb-2">
                <div className="flex whitespace-nowrap items-center justify-center gap-2 text-base">
                  App Escolar{" "}
                  <RiFlutterFill title="React.js" className="text-cyan-500" />
                  <SiDart
                    title="Tailwind CSS"
                    className="text-sky-600"
                  />
                  <RiFirebaseFill
                    title="Tailwind CSS"
                    className="text-[#FFA611]"
                  />
                  <img src={esc} alt="" className="w-5" />
                </div>
                <div className="ring-1 ring-inset bg-gray-50 text-gray-600 ring-gray-500 text-xs px-2 py-1 rounded-full flex items-center justify-end text-end gap-1">
                  <LiaUniversitySolid />  Projeto académico
                </div>
              </div>

              <div className="px-3 pb-2">
                <p className="text-[#888888] leading-normal text-xs">
                  Aplicação móvel desenvolvida como projeto final de curso,  com base numa colaboração real com a <strong>Escola Secundária de Camarate</strong>.
                </p>
              </div>

          </div>

          {/* Segundo projeto */}
          <div className="w-full bg-[#f6f6f6] rounded-md mx-auto px-3 pt-3 pb-2">
              <div className="relative flex items-center justify-center mx-auto bg-gradient-to-l from-[#2e9a92] to-orange-200 rounded-md cursor-pointer px-12 pt-12 pb-8 group transition-all duration-500">
                <img
                  src="images/projetos/cliente/gestosamaveis/gestos-home.png"
                  alt="Gestos Amáveis"
                  className="w-[800px] shadow-2xl overflow-hidden object-contain rounded-md border-4 border-[#f3f4f6] transition-all duration-500 group-hover:opacity-0"
                />

                <img
                  src="images/projetos/cliente/gestosamaveis/gestos-pacote.svg"
                  alt="Gestos Amáveis"
                  className="w-[350px] overflow-hidden absolute bottom-0 transition-all duration-500 opacity-0 group-hover:opacity-100"
                />
              </div>
              <div className="flex items-center flex-nowrap justify-between px-3 pt-3 pb-2">
                <div className="flex flex-row items-center justify-center gap-2 text-base">
                  Gestos Amáveis{" "}
                  <FaReact title="React.js" className="text-blue-500" />
                  <RiTailwindCssFill
                    title="Tailwind CSS"
                    className="text-sky-400"
                  />
                  <TbBrandFramerMotion title="Framer Motion"
                    className="text-purple-500" />
                </div>
                <div className="ring-1 ring-inset bg-green-50 text-[#2F9B92] ring-[#2F9B92] text-xs px-2 py-1 rounded-full  flex items-center justify-end text-end gap-1">
                  <TbContract /> Projeto real - Cliente
                </div>
              </div>

              <div className="px-3 pb-2">
                <p className="text-[#888888] leading-normal text-xs">
                  Plataforma web institucional desenvolvida para uma empresa de cuidadores a idosos.
                </p>
              </div>

          </div>

          {/* Primeiro projeto */}
          <div className="w-full bg-[#f6f6f6] rounded-md mx-auto px-3 pt-3 pb-2">
              <div className="relative flex items-center justify-center mx-auto bg-gradient-to-b from-[#6248d6] to-blue-200 rounded-md cursor-pointer px-12 pt-12 pb-8 group">
                <img
                  src="images/projetos/ficticio/conceito-pessoal.png"
                  alt="Gestos Amáveis"
                  className="w-[800px] shadow-2xl overflow-hidden object-contain rounded-md border-2 border-[#6248d6] transition-opacity duration-500 group-hover:opacity-0 group-hover:scale-105"
                />

                <img
                  src="images/projetos/ficticio/conceito-pessoal.svg"
                  alt="Gestos Amáveis"
                  className="w-[300px] h-[200px] rounded object-cover overflow-hidden absolute bottom-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />
              </div>
              <div className="flex items-center flex-nowrap justify-between px-3 pt-3 pb-2">
                <div className="flex flex-row items-center justify-center gap-2 text-base">
                  LaunchPeack{" "}
                  <FaReact title="React.js" className="text-blue-500" />
                  <RiTailwindCssFill
                    title="Tailwind CSS"
                    className="text-sky-400"
                  />
                  <TbBrandFramerMotion title="Framer Motion"
                    className="text-purple-500" />
                </div>
                <div className="ring-1 ring-inset bg-blue-50 text-[#3b82f6] ring-blue-600 text-xs px-2 py-1 rounded-full  flex items-center justify-end text-end gap-1">
                  <AiOutlineFileProtect className="text-blue-600" /> Conceito pessoal
                </div>
              </div>

              <div className="px-3 pb-2">
                <p className="text-[#888888] leading-normal text-xs">
                  Landing page criada como conceito para uma solução fictícia. Feita com React, Tailwind CSS e Framer Motion.
                </p>
              </div>

          </div>

          {/* Primeiro projeto */}
          <div className="w-full bg-[#f6f6f6] rounded-md mx-auto px-3 pt-3 pb-2">
              <div className="relative flex items-center justify-center mx-auto bg-gradient-to-l from-[#2e9a92] to-orange-200 rounded-md cursor-pointer px-12 pt-12 pb-8 group">
                <img
                  src="images/projetos/cliente/gestosamaveis/gestos-home.png"
                  alt="Gestos Amáveis"
                  className="w-[800px] shadow-2xl overflow-hidden object-contain rounded-md border-4 border-[#f3f4f6] transition-opacity duration-500 group-hover:opacity-0 group-hover:scale-105"
                />

                <img
                  src="images/projetos/cliente/gestosamaveis/gestos-pacote.svg"
                  alt="Gestos Amáveis"
                  className="w-[350px] overflow-hidden absolute bottom-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />
              </div>
              <div className="flex items-center flex-nowrap justify-between px-3 pt-3 pb-2">
                <div className="flex flex-row items-center justify-center gap-2 text-base">
                  Gestos Amáveis{" "}
                  <FaReact title="React.js" className="text-blue-500" />
                  <RiTailwindCssFill
                    title="Tailwind CSS"
                    className="text-sky-400"
                  />
                </div>
                <div className="ring-1 ring-inset bg-green-50 text-[#2F9B92] ring-[#2F9B92] text-xs px-2 py-1 rounded-full  flex items-center justify-end text-end gap-1">
                  <TbContract /> Projeto real - Cliente
                </div>
              </div>

              <div className="px-3 pb-2">
                <p className="text-[#888888] leading-normal text-xs">
                  Plataforma web institucional. <br /> Projeto real desenvolvido
                  para uma empresa de cuidados a idosos.
                </p>
              </div>

          </div>


          {/* Primeiro projeto */}
          <div className="w-full bg-[#f6f6f6] rounded-md mx-auto px-3 pt-3 pb-2">
              <div className="relative flex items-center justify-center mx-auto bg-gradient-to-l from-[#2e9a92] to-orange-200 rounded-md cursor-pointer px-12 pt-12 pb-8 group">
                <img
                  src="images/projetos/cliente/gestosamaveis/gestos-home.png"
                  alt="Gestos Amáveis"
                  className="w-[800px] shadow-2xl overflow-hidden object-contain rounded-md border-4 border-[#f3f4f6] transition-opacity duration-500 group-hover:opacity-0 group-hover:scale-105"
                />

                <img
                  src="images/projetos/cliente/gestosamaveis/gestos-pacote.svg"
                  alt="Gestos Amáveis"
                  className="w-[350px] overflow-hidden absolute bottom-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />
              </div>
              <div className="flex items-center flex-nowrap justify-between px-3 pt-3 pb-2">
                <div className="flex flex-row items-center justify-center gap-2 text-base">
                  Gestos Amáveis{" "}
                  <FaReact title="React.js" className="text-blue-500" />
                  <RiTailwindCssFill
                    title="Tailwind CSS"
                    className="text-sky-400"
                  />
                </div>
                <div className="ring-1 ring-inset bg-green-50 text-[#2F9B92] ring-[#2F9B92] text-xs px-2 py-1 rounded-full  flex items-center justify-end text-end gap-1">
                  <TbContract /> Projeto real - Cliente
                </div>
              </div>

              <div className="px-3 pb-2">
                <p className="text-[#888888] leading-normal text-xs">
                  Plataforma web institucional. <br /> Projeto real desenvolvido
                  para uma empresa de cuidados a idosos.
                </p>
              </div>

          </div>


          {/* Primeiro projeto */}
          <div className="w-full bg-[#f6f6f6] rounded-md mx-auto px-3 pt-3 pb-2">
              <div className="relative flex items-center justify-center mx-auto bg-gradient-to-l from-[#2e9a92] to-orange-200 rounded-md cursor-pointer px-12 pt-12 pb-8 group">
                <img
                  src="images/projetos/cliente/gestosamaveis/gestos-home.png"
                  alt="Gestos Amáveis"
                  className="w-[800px] shadow-2xl overflow-hidden object-contain rounded-md border-4 border-[#f3f4f6] transition-opacity duration-500 group-hover:opacity-0 group-hover:scale-105"
                />

                <img
                  src="images/projetos/cliente/gestosamaveis/gestos-pacote.svg"
                  alt="Gestos Amáveis"
                  className="w-[350px] overflow-hidden absolute bottom-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />
              </div>
              <div className="flex items-center flex-nowrap justify-between px-3 pt-3 pb-2">
                <div className="flex flex-row items-center justify-center gap-2 text-base">
                  Gestos Amáveis{" "}
                  <FaReact title="React.js" className="text-blue-500" />
                  <RiTailwindCssFill
                    title="Tailwind CSS"
                    className="text-sky-400"
                  />
                </div>
                <div className="ring-1 ring-inset bg-green-50 text-[#2F9B92] ring-[#2F9B92] text-xs px-2 py-1 rounded-full  flex items-center justify-end text-end gap-1">
                  <TbContract /> Projeto real - Cliente
                </div>
              </div>

              <div className="px-3 pb-2">
                <p className="text-[#888888] leading-normal text-xs">
                  Plataforma web institucional. <br /> Projeto real desenvolvido
                  para uma empresa de cuidados a idosos.
                </p>
              </div>

          </div>

          {/* Primeiro projeto */}
          <div className="w-full bg-[#f6f6f6] rounded-md mx-auto px-3 pt-3 pb-2">
              <div className="relative flex items-center justify-center mx-auto bg-gradient-to-l from-[#2e9a92] to-orange-200 rounded-md cursor-pointer px-12 pt-12 pb-8 group">
                <img
                  src="images/projetos/cliente/gestosamaveis/gestos-home.png"
                  alt="Gestos Amáveis"
                  className="w-[800px] shadow-2xl overflow-hidden object-contain rounded-md border-4 border-[#f3f4f6] transition-opacity duration-500 group-hover:opacity-0 group-hover:scale-105"
                />

                <img
                  src="images/projetos/cliente/gestosamaveis/gestos-pacote.svg"
                  alt="Gestos Amáveis"
                  className="w-[350px] overflow-hidden absolute bottom-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />
              </div>
              <div className="flex items-center flex-nowrap justify-between px-3 pt-3 pb-2">
                <div className="flex flex-row items-center justify-center gap-2 text-base">
                  Gestos Amáveis{" "}
                  <FaReact title="React.js" className="text-blue-500" />
                  <RiTailwindCssFill
                    title="Tailwind CSS"
                    className="text-sky-400"
                  />
                </div>
                <div className="ring-1 ring-inset bg-green-50 text-[#2F9B92] ring-[#2F9B92] text-xs px-2 py-1 rounded-full  flex items-center justify-end text-end gap-1">
                  <TbContract /> Projeto real - Cliente
                </div>
              </div>

              <div className="px-3 pb-2">
                <p className="text-[#888888] leading-normal text-xs">
                  Plataforma web institucional. <br /> Projeto real desenvolvido
                  para uma empresa de cuidados a idosos.
                </p>
              </div>

          </div>
        </div>
      </GlobalContainer>
    </section>
  );
}

export default GlobalProject;
