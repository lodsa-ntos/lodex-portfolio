import React from "react";
import { Helmet } from "react-helmet";
import GlobalContainer from "../../../utils/GlobalContainer";
import { SiQuicklook } from "react-icons/si";
import { TbContract } from "react-icons/tb";
import { FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { RxDrawingPinFilled } from "react-icons/rx";
import { AiOutlineFileProtect } from "react-icons/ai";
import { LiaUniversitySolid } from "react-icons/lia";
import { BubblyLink } from "../../../library/BubblyLink";
import { MobileCarouselLaunchPeak } from "../../../utils/MobileCarousel";
import { GiConvergenceTarget } from "react-icons/gi";

function ConceitoPessoal() {
  return (
    <>
      <Helmet>
        <title>
          LaunchPeack — Landing Page de Alto Impacto (conceito pessoal) | LodeX
          Studio
        </title>
        <meta
          name="description"
          content="Landing page conceito criada pela LodeX Studio com foco em conversão, performance e estrutura mobile-first. Ideal para produtos digitais."
        />
      </Helmet>

      <section
        id="launchPeack"
        className="pt-36 pb-24 transition-all duration-500"
      >
        <GlobalContainer>
          <div className="relative md:grid grid-cols-[1fr_480px] gap-[4rem]">
            {/** Left side - Imagens mockup */}
            <div className="hidden md:flex flex-col gap-4">
              <img
                src="images/projetos/ficticio/conceitopessoal/bg-launchpeak-herosection.jpg"
                alt="Launchpeak - Hero Section"
                className="rounded-lg"
              />
              <img
                src="images/projetos/ficticio/conceitopessoal/bg-launchpeak-categorysection.jpg"
                alt="Launchpeak - Seção Categoria"
                className="rounded-lg"
              />
              <img
                src="images/projetos/ficticio/conceitopessoal/bg-launchpeak-pricesection.jpg"
                alt="Launchpeak - Seção preço"
                className="rounded-lg"
              />
              <img
                src="images/projetos/ficticio/conceitopessoal/bg-launchpeak-projectsection.jpg"
                alt="Launchpeak - Seção projetos"
                className="rounded-lg"
              />
            </div>

            <MobileCarouselLaunchPeak />

            {/** Right side - Explanation */}
            <div className="sticky top-36 self-start h-fit">
              <h1 className="pb-2 text-[#0E1011] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium">
                LaunchPeak
              </h1>
              <p className="text-xs mb-1 text-gray-500 leading-relaxed">
                Plataforma Conceito para lançamentos digitais
              </p>

              <div className="flex items-center justify-start gap-2.5">
                <div className="ring-1 ring-inset bg-purple-50 text-[#6248d6] ring-[#6248d6] text-xs px-2 py-1 rounded-full flex items-center justify-end text-end gap-1 w-fit hover:scale-105">
                  <AiOutlineFileProtect className="text-[#6248d6]" />
                  Conceito pessoal
                </div>

                <FaReact
                  title="React.js"
                  className="text-blue-500 hover:scale-105"
                />
                <RiTailwindCssFill
                  title="Tailwind CSS"
                  className="text-sky-400 hover:scale-105"
                />
                <TbBrandFramerMotion
                  title="Framer Motion"
                  className="text-purple-500 hover:scale-105"
                />
              </div>

              <h3 className="mb-6 mt-6 text-gray-700 text-lg leading-relaxed">
                Um conceito de landing page pensado para escalar produtos
                digitais.
              </h3>

              <p className="mb-6 text-gray-600 text-base leading-relaxed">
                O <strong className="text-[#6248d6]">LaunchPeak</strong> é um
                projeto-conceito criado pela{" "}
                <strong className="text-secundario">LØdeX Studio</strong> como
                exercício estratégico de design + desenvolvimento com foco em
                conversão. A proposta era simples: simular uma landing page
                moderna, personalizável e com estrutura realista para
                lançamentos de produtos digitais, como eBooks, cursos, SaaS ou
                serviços criativos.
                <br />
                <br />O projeto foi desenvolvido com base em boas práticas de
                UI/UX, performance e escalabilidade, funcionando como prova de
                conceito de como a{" "}
                <strong className="text-secundario">LØdeX</strong> atua: com
                estética limpa, estrutura lógica e atenção ao detalhe.
              </p>

              <div>
                <h1 className="flex items-center justify-start gap-1 text-terciario font-[600] text-base mb-2">
                  <GiConvergenceTarget className="text-[#6248d6]" />
                  Propósito:
                </h1>

                <p className="mb-6 text-gray-600 text-base leading-relaxed">
                  Mais do que um exercício estético, o{" "}
                  <strong className="text-[#6248d6]">LaunchPeak</strong> foi
                  pensado como uma fundação reutilizável para marcas que querem
                  lançar rápido e com presença. É uma ferramenta de
                  apresentação, mas também um exemplo funcional de como
                  entregamos valor visual e técnico aqui na{" "}
                  <strong className="text-secundario">LØdeX</strong>.
                </p>
              </div>

              <div className="my-6  py-2 border-l-4 border-gray-500 ">
                <div className="flex flex-col gap-2">
                  <div className="relative text-sm  leading-relaxed">
                    <p className="pl-5 text-gray-700">
                      Se quiseres algo nesta linha para o teu projeto ou marca,{" "}
                      <strong>
                        este é o tipo de base que podemos adaptar à tua
                        realidade
                      </strong>
                      .
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                  <h1 className="flex items-center justify-start gap-1 text-[#6a7282] font-[500] text-sm">
                    <RxDrawingPinFilled className="text-[#6248d6]" />{" "}
                    Tecnologias e Estrutura
                  </h1>
                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span class="size-5 flex justify-center items-center rounded-full bg-purple-50 text-[#6248d6]">
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
                      <strong className="text-[#6248d6]">React + Vite</strong>{" "}
                      para frontend rápido e modular
                    </span>
                  </li>

                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span class="size-5 flex justify-center items-center rounded-full bg-purple-50 text-[#6248d6]">
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
                    <span className="text-sm ">
                      <strong className="text-[#6248d6]">Tailwind CSS</strong>{" "}
                      com design 100% mobile-first
                    </span>
                  </li>

                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span class="size-5 flex justify-center items-center rounded-full bg-purple-50 text-[#6248d6]">
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
                      <strong className="text-[#6248d6]">Framer Motion</strong>{" "}
                      para transições suaves
                    </span>
                  </li>

                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span class="size-5 flex justify-center items-center rounded-full bg-purple-50 text-[#6248d6]">
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
                      <strong className="text-[#6248d6]">
                        Mock de integração de leads e planos de preço
                      </strong>
                    </span>
                  </li>
                </ul>
              </div>

              <button
                className="bg-primario font-semibold text-white py-3 px-3 rounded-full shadow-md hover:shadow-lg text-sm w-fit max-w-xs hover:bg-secundario transition-all duration-500 whitespace-nowrap hover:ring-2 hover:ring-secundario hover:scale-105 hover:ring-inset flex items-center gap-1"
                aria-label="Explorar projetos"
              >
                <SiQuicklook className="text-gray-200" />
                <a
                  href="https://launchpeak-starter.vercel.app/"
                  target="_blank"
                >
                  Ver site online
                </a>
              </button>
            </div>
          </div>
        </GlobalContainer>
      </section>

      <section className="shadow-lg border-b mt-2 lg:mb-20 xl:mb-0 lg:mt-4 lg:py-16 bg-gray-100">
        <GlobalContainer>
          <div className="flex flex-row items-center justify-center mb-6 gap-x-1">
            {/* Top Line */}
            <div className="mt-10 lg:mt-0 w-full h-[1px] rounded-full bg-lines-color"></div>

            {/* Main title */}
            <h1
              id="projetos"
              className="mt-10 lg:mt-0 text-xs lg:text-sm whitespace-nowrap lg:whitespace-normal w-[50%] mx-auto uppercase font-bold text-[#777] tracking-wider text-center"
            >
              MAIS DO MEU PORTFÓLIO
            </h1>

            {/* Top Line */}
            <div className="mt-10 lg:mt-0 w-full mx-auto h-[1px] rounded-full bg-lines-color "></div>
          </div>

          {/* Cards portfolio */}
          <div className="max-w-content mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/** Card 1 */}
            <BubblyLink
              to="/academico"
              colorStart="#004AAD"
              colorEnd="#FFFFFF"
              className="cursor-pointer group relative flex flex-col my-6 mx-auto bg-white shadow border border-slate-200 rounded-lg w-full max-w-sm hover:shadow-lg transition-shadow duration-500"
            >
              <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
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
                  className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                  src="images/portfolio/android.svg"
                  alt="biblioteca-escolar-camarate"
                />
              </div>
              <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                  Biblioteca Escolar Camarate
                </h6>
                <p className="text-slate-600 leading-normal font-light">
                  Aplicação mobile desenvolvida como projeto final de curso, com
                  base numa colaboração real com a Escola Secundária de
                  Camarate.
                </p>
              </div>
              <div className="px-4 pb-4 pt-0 mt-2">
                <button
                  class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none duration-500"
                  type="button"
                >
                  Ver caso de estudo
                </button>
              </div>
            </BubblyLink>

            {/** Card 2 */}
            <BubblyLink
              to="/gestosamaveis"
              colorStart="#004AAD"
              colorEnd="#FFFFFF"
              className="cursor-pointer group relative flex flex-col my-6 mx-auto bg-white shadow border border-slate-200 rounded-lg w-full max-w-sm hover:shadow-lg transition-shadow duration-500"
            >
              <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                {/** Badge */}
                <div relative>
                  <div className="absolute top-3 right-4 rounded-full p-1.5 tracking-tight ring-1 ring-inset bg-green-50 text-[#2F9B92] ring-purple-700/10 z-50 flex items-center gap-2">
                    <a
                      href="#preview"
                      className="flex gap-1 items-center text-xs font-medium font-Satoshi transition-transform duration-200 ease-in-out"
                    >
                      <TbContract /> Projeto real - Cliente
                    </a>
                  </div>
                </div>

                <img
                  className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                  src="images/portfolio/gestosamaveis.svg"
                  alt="Gestos-Amaveis"
                />
              </div>
              <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                  Gestos Amáveis
                </h6>
                <p className="text-slate-600 leading-normal font-light">
                  Plataforma web institucional para uma empresa de cuidados a
                  idosos, com foco em empatia, acessibilidade e navegação clara.
                </p>
              </div>
              <div className="px-4 pb-4 pt-0 mt-2">
                <button
                  class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Ver caso de estudo
                </button>
              </div>
            </BubblyLink>
          </div>
        </GlobalContainer>
      </section>
    </>
  );
}

export default ConceitoPessoal;
