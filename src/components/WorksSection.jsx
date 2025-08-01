import React from "react";
import GlobalContainer from "../utils/GlobalContainer";
import { AiOutlineFileProtect } from "react-icons/ai";
import { TbContract } from "react-icons/tb";
import { LiaUniversitySolid } from "react-icons/lia";

function WorksSection() {
  return (
    <section className="shadow-lg border-b mt-20 mb-20 lg:mb-0 lg:mt-4 lg:py-16">
      <GlobalContainer>
        <div className="flex flex-row items-center justify-center mb-6 gap-x-1">
          {/* Top Line */}
          <div className="w-full h-[2px] rounded-full bg-lines-color"></div>

          {/* Main title */}
          <h1
            id="projetos"
            className="text-sm w-full mx-auto uppercase font-bold text-[#777] tracking-wider text-center"
          >
            O que tenho criado ultimamente
          </h1>

          {/* Top Line */}
          <div className="w-full mx-auto h-[2px] rounded-full bg-lines-color "></div>
        </div>

        {/* Cards portfolio */}
        <div className="max-w-content mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/** Card 1 */}
          <a
            href="/academico"
            class="cursor-pointer group relative flex flex-col my-6 mx-auto bg-white shadow border border-slate-200 rounded-lg w-full max-w-sm hover:shadow-lg transition-shadow duration-500"
          >
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
                base numa colaboração real com a Escola Secundária de Camarate.
              </p>
            </div>
            <div class="px-4 pb-4 pt-0 mt-2">
              <button
                class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none duration-500"
                type="button"
              >
                Ver caso de estudo
              </button>
            </div>
          </a>

          {/** Card 2 */}
          <a class="cursor-pointer group relative flex flex-col my-6 mx-auto bg-white shadow border border-slate-200 rounded-lg w-full max-w-sm hover:shadow-lg transition-shadow duration-500">
            <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
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
                class="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                src="images/portfolio/gestosamaveis.svg"
                alt="Gestos-Amaveis"
              />
            </div>
            <div class="p-4">
              <h6 class="mb-2 text-slate-800 text-xl font-semibold">
                Gestos Amáveis
              </h6>
              <p class="text-slate-600 leading-normal font-light">
                Plataforma web institucional para uma empresa de cuidados a
                idosos, com foco em empatia, acessibilidade e navegação clara.
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
          </a>

          {/** Card 3 */}
          <a class="md:hidden cursor-pointer group relative lg:flex flex-col my-6 mx-auto bg-white shadow border border-slate-200 rounded-lg w-full max-w-sm hover:shadow-lg transition-shadow duration-500">
            <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              {/** Badge */}
              <div className="relative">
                <div className="absolute top-3 right-4 rounded-full p-1.5 tracking-tight ring-1 ring-inset bg-blue-50 text-[#3b82f6] ring-blue-700/10 z-50 flex items-center gap-2">
                  <a
                    href="#preview"
                    className="flex gap-1 items-center text-xs font-medium font-Satoshi transition-transform duration-200 ease-in-out"
                  >
                    <AiOutlineFileProtect className="text-blue-600" /> Conceito
                    pessoal
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
          </a>
        </div>
      </GlobalContainer>
    </section>
  );
}

export default WorksSection;
