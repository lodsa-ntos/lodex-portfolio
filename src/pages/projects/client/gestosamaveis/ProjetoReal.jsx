import React from "react";
import { Helmet } from "react-helmet";
import GlobalContainer from "../../../../utils/GlobalContainer";
import { SiQuicklook } from "react-icons/si";
import { RiDoubleQuotesL } from "react-icons/ri";
import { TbContract } from "react-icons/tb";
import { FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { RxDrawingPinFilled } from "react-icons/rx";
import { AiOutlineFileProtect } from "react-icons/ai";
import { LiaUniversitySolid } from "react-icons/lia";

function ProjetoReal() {
  return (
    <>
      <Helmet>
        <title>
          Gestos Amáveis — Website Profissional para Cuidadores | LodeX Studio
        </title>
        <meta
          name="description"
          content="Website desenvolvido pela LodeX Studio para a empresa real Gestos Amáveis. Design leve, acessível e com foco em empatia e navegação simples."
        />
      </Helmet>

      <section
        id="gestosamaveis"
        className="min-h-screen pt-36 transition-all duration-500"
      >
        <GlobalContainer>
          <div className="grid grid-cols-[1fr_480px] gap-[4rem] py-16">
            {/** Imagens mockup */}
            <div className="flex flex-col gap-4">
              <img
                src="images/projetos/cliente/gestosamaveis/sobregestosamaveis/bg-herosection.jpg"
                alt="Gestos Amáveis - Hero Section"
                className="rounded-lg"
              />

              <img
                src="images/projetos/cliente/gestosamaveis/sobregestosamaveis/bg-home-scroll.jpg"
                alt="Gestos Amáveis - Página inicial com scroll"
                className="rounded-lg"
              />

              <img
                src="images/projetos/cliente/gestosamaveis/sobregestosamaveis/bg-sobre.jpg"
                alt="Gestos Amáveis - Seção sobre"
                className="rounded-lg"
              />

              <img
                src="images/projetos/cliente/gestosamaveis/sobregestosamaveis/bg-servicos.jpg"
                alt="Gestos Amáveis - Seção serviços avulso"
                className="rounded-lg"
              />

              <img
                src="images/projetos/cliente/gestosamaveis/sobregestosamaveis/bg-contact-form.jpg"
                alt="Gestos Amáveis - Contato"
                className="rounded-lg"
              />
            </div>

            {/** Explicação */}
            <div className="sticky top-24 self-start h-fit">
              <h1 className="pb-2 text-[#0E1011] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium">
                Gestos Amáveis
              </h1>

              <div className="flex items-center justify-start gap-1.5">
                <div className="ring-1 ring-inset bg-green-50 text-[#2F9B92] ring-[#2F9B92] text-xs px-2 py-1 rounded-full flex items-center justify-end text-end gap-1 w-fit">
                  <TbContract />
                  Projeto real - Cliente
                </div>

                <FaReact title="React.js" className="text-blue-500" />
                <RiTailwindCssFill
                  title="Tailwind CSS"
                  className="text-sky-400"
                />
                <TbBrandFramerMotion
                  title="Framer Motion"
                  className="text-purple-500"
                />
              </div>

              <h3 className="mb-6 mt-6 text-gray-700 text-lg leading-relaxed">
                Website desenvolvido para a{" "}
                <strong className="text-[#2F9B92]">Gestos Amáveis</strong>,
                empresa portuguesa especializada em cuidados domiciliares.
              </h3>

              <p className="mb-6 text-gray-600 text-base leading-relaxed">
                O projeto foi pensado para transmitir empatia e acessibilidade
                desde o primeiro clique. A estrutura respeita a identidade já
                existente da marca, com foco em navegação mobile e clareza
                visual.
                <br />
                <br />A página apresenta a empresa, serviços, funcionamento e
                contato, tudo em uma experiência fluida e leve. O código foi
                otimizado para boa performance e carregamento rápido.
                <br />
                <br />O site está publicado e em uso, com conteúdo gerido pela
                própria cliente Foi um projeto entregue com autonomia e
                compromisso, da estrutura até os detalhes finais.
              </p>

              <div className="mb-6">
                <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                  <h1 className="flex items-center justify-start gap-1 text-[#6a7282] font-[500] text-sm">
                    <RxDrawingPinFilled className="text-[#2F9B92]"/> Tecnologias e Estrutura
                  </h1>
                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span class="size-5 flex justify-center items-center rounded-full bg-green-50 text-[#2F9B92]">
                      <svg
                        class="shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="text-sm">
                      Responsivo em todos os dispositivos
                    </span>
                  </li>

                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span class="size-5 flex justify-center items-center rounded-full bg-green-50 text-[#2F9B92]">
                      <svg
                        class="shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="text-sm">
                      Navegação simples e intuitiva
                    </span>
                  </li>

                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span class="size-5 flex justify-center items-center rounded-full bg-green-50 text-[#2F9B92]">
                      <svg
                        class="shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="text-sm">
                      Layout pensado para escalabilidade
                    </span>
                  </li>

                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span class="size-5 flex justify-center items-center rounded-full bg-green-50 text-[#2F9B92]">
                      <svg
                        class="shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="text-sm">
                      Código modular e reutilizável
                    </span>
                  </li>

                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span class="size-5 flex justify-center items-center rounded-full bg-green-50 text-[#2F9B92]">
                      <svg
                        class="shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="text-sm">
                      Integração futura com CMS possível
                    </span>
                  </li>
                </ul>
              </div>

              <button
                className="bg-primario font-semibold text-white py-3 px-3 rounded-full shadow-md hover:shadow-lg text-sm w-full sm:w-fit max-w-xs hover:bg-secundario transition-all duration-500 whitespace-nowrap hover:ring-2 hover:ring-secundario hover:scale-105 hover:ring-inset flex items-center gap-1"
                aria-label="Explorar projetos"
              >
                <SiQuicklook className="text-gray-200" />
                <a href="https://gestosamaveis.pt" target="_blank">
                  Ver site online
                </a>
              </button>

              <div className="mt-12 py-5 bg-[#f6f6f6] rounded-xl">
                <div className=" pl-4 flex flex-col gap-2">
                  <div className="relative text-sm italic  leading-relaxed">
                    <RiDoubleQuotesL className="absolute -left-2 -top-10 size-14 text-[#2F9B92]" />
                    <p className="pl-5 pt-2 text-gray-500">
                      Está incrível, adorámos mesmo! Muito profissional e
                      detalhista. <br />A página Sobre Nós ficou linda.
                    </p>
                  </div>
                  <p className="text-sm italic font-semibold font-Jost text-gray-700 mt-1 pl-5">
                    Gestos Amáveis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </GlobalContainer>
      </section>

      {/** FIM - Mais do portfólio */}
      <section className="shadow-lg border-b mt-20 mb-20 lg:mb-0 lg:mt-4 lg:py-16 bg-gray-100">
        <GlobalContainer>
          <div className="flex flex-row items-center justify-center mb-6 gap-x-1">
            {/* Top Line */}
            <div className="w-full h-[1px] rounded-full bg-lines-color"></div>

            {/* Main title */}
            <h1
              id="projetos"
              className="text-sm w-[50%] mx-auto uppercase font-bold text-[#777] tracking-wider text-center"
            >
              Você também pode gostar
            </h1>

            {/* Top Line */}
            <div className="w-full mx-auto h-[1px] rounded-full bg-lines-color "></div>
          </div>

          {/* Cards portfolio */}
          <div className="max-w-content mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/** Card 1 */}
            <div class="cursor-pointer group relative flex flex-col my-6 mx-auto bg-white shadow border border-slate-200 rounded-lg w-full max-w-sm hover:shadow-lg transition-shadow duration-500">
              <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                {/** Badge */}
                <div relative>
                  <div className="absolute top-3 right-4 rounded-full p-1.5 tracking-tight ring-1 ring-inset bg-gray-50 text-gray-600 ring-purple-700/10 z-50 flex items-center gap-2">
                    <a
                      href="#preview"
                      className="flex gap-1 items-center text-xs font-medium font-Satoshi transition-transform duration-500 ease-in-out"
                    >
                      <LiaUniversitySolid /> Projeto académico
                    </a>
                  </div>
                </div>

                <img
                  class="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                  src="images/portfolio/android.svg"
                  alt="biblioteca-escolar-camarate"
                />
              </div>
              <div class="p-4">
                <h6 class="mb-2 text-slate-800 text-xl font-semibold">
                  Biblioteca Escolar Camarate
                </h6>
                <p class="text-slate-600 leading-normal font-light">
                  Aplicação mobile desenvolvida como projeto final de curso, com
                  base numa colaboração real com a Escola Secundária de
                  Camarate.
                </p>
              </div>
              <div class="px-4 pb-4 pt-0 mt-2">
                <a href="/academico" className="transition-all duration-500">
                  <button
                    class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none duration-500"
                    type="button"
                  >
                    Ver caso de estudo
                  </button>
                </a>
              </div>
            </div>

            {/** Card 3 */}
            <div class="md:hidden cursor-pointer group relative lg:flex flex-col my-6 mx-auto bg-white shadow border border-slate-200 rounded-lg w-full max-w-sm hover:shadow-lg transition-shadow duration-500">
              <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                {/** Badge */}
                <div className="relative">
                  <div className="absolute top-3 right-4 rounded-full p-1.5 tracking-tight ring-1 ring-inset bg-blue-50 text-[#3b82f6] ring-blue-700/10 z-50 flex items-center gap-2">
                    <a
                      href="#preview"
                      className="flex gap-1 items-center text-xs font-medium font-Satoshi transition-transform duration-200 ease-in-out"
                    >
                      <AiOutlineFileProtect className="text-blue-600" />{" "}
                      Conceito pessoal
                    </a>
                  </div>
                </div>

                <img
                  class="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                  src="images/portfolio/launchPeack.svg"
                  alt="investment-seed-round"
                />
              </div>
              <div class="p-4">
                <h6 class="mb-2 text-slate-800 text-xl font-semibold">
                  LaunchPeack
                </h6>
                <p class="text-slate-600 leading-normal font-light">
                  Landing page criada como conceito para uma solução fictícia.
                  Feita com React, Tailwind CSS e Framer Motion.
                </p>
              </div>
              <div class="px-4 pb-4 pt-0 mt-2">
                <button
                  class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Ver caso de estudo
                </button>
              </div>
            </div>
          </div>
        </GlobalContainer>
      </section>
    </>
  );
}

export default ProjetoReal;
