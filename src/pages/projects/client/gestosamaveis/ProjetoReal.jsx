import React from "react";
import { Helmet } from "react-helmet";
import GlobalContainer from "../../../../utils/GlobalContainer";
import { SiQuicklook } from "react-icons/si";
import { RiDoubleQuotesL } from "react-icons/ri";
import { TbContract } from "react-icons/tb";
import { FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";

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
        className="min-h-screen pt-36 border-b shadow-md transition-all duration-500"
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
                src="images/projetos/cliente/gestosamaveis/sobregestosamaveis/bg-como-funciona.jpg"
                alt="Gestos Amáveis - Seção como funciona"
                className="rounded-lg"
              />
            </div>

            {/** Explicação */}
            <div className="sticky top-24 self-start h-fit">
              <h1 className="pb-2 text-[#0E1011] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium">
                Gestos Amáveis 💚
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
    </>
  );
}

export default ProjetoReal;
