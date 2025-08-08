import React from "react";
import GlobalContainer from "../../utils/GlobalContainer";
import { LiaUniversitySolid } from "react-icons/lia";
import { HiOutlineViewGrid } from "react-icons/hi";
import { AiOutlineFileProtect } from "react-icons/ai";
import { TbContract } from "react-icons/tb";
import flutter from "../../assets/tech/flutter.png";
import dart from "../../assets/tech/dart.png";
import firebase from "../../assets/tech/firebase.webp";
import axure from "../../assets/tech/axure.svg";
import esc from "../../assets/tech/esc.png";
import ulht from "../../assets/tech/ulht.svg";
import { Helmet } from "react-helmet";
import { BubblyLink } from "../../library/BubblyLink";

function Academico() {
  const companies = [
    { Icon: flutter, href: "https://flutter.dev/", title: "Flutter" },
    {
      Icon: dart,
      href: "https://dart.dev/",
      title: "Dart",
    },
    {
      Icon: firebase,
      href: "https://firebase.google.com/?authuser=5&hl=pt-br",
      title: "Firebase",
    },
    {
      Icon: axure,
      href: "https://www.axure.com/release-history/rp9",
      title: "Axure RP 9",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Biblioteca Escolar Camarate — Experiência mobile em Flutter, simples e
          funcional | LodeX Studio
        </title>
        <meta
          name="description"
          content="Aplicação móvel desenvolvida pela LodeX Studio em Flutter para a Biblioteca Escolar de Camarate. Projeto real com foco em organização, acessibilidade e experiência intuitiva para estudantes."
        />
      </Helmet>
      <section id="academico" className="pt-[192px] pb-20 border-b shadow-md">
        <GlobalContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/** Left side */}
            <div className="flex flex-col items-start justify-start">
              {/** Badge */}
              <div className="flex items-center gap-2 ">
                <div className=" rounded-full p-1.5 tracking-tight ring-1 ring-inset bg-gray-50 text-gray-600 ring-purple-700/10 z-50 flex items-center gap-2 w-fit hover:scale-105 transition-all duration-500">
                  <a
                    href="https://informatica.ulusofona.pt/investigacao/trabalhos-finais-de-curso/tfcs-2021-22/"
                    target="_blanck"
                    className="flex gap-1 items-center text-xs font-medium font-Satoshi transition-transform duration-500 ease-in-out"
                  >
                    <LiaUniversitySolid /> Projeto académico • Julho 2022
                  </a>
                </div>

                <div className=" rounded-full p-1.5 tracking-tight ring-1 ring-inset bg-blue-50 text-[#0b406b] ring-blue-700/10 z-50 flex items-center gap-2 w-fit hover:scale-105 transition-all duration-500">
                  <a
                    href="https://www.ulusofona.pt/"
                    target="_blanck"
                    className="flex gap-1 items-center text-xs font-medium font-Satoshi transition-transform duration-500 ease-in-out"
                  >
                    <img src={ulht} alt="" className="w-3 h-3" /> Universidade
                    Lusófona
                  </a>
                </div>

                <div className=" rounded-full p-1.5 tracking-tight ring-1 ring-inset bg-sky-50 text-sky-600 ring-sky-800/10 z-50 flex items-center gap-2 w-fit hover:scale-105 transition-all duration-500">
                  <a
                    href="https://portalesc.wixsite.com/site"
                    target="_blanck"
                    className="flex gap-1 items-center text-xs font-medium font-Satoshi transition-transform duration-500 ease-in-out"
                  >
                    <img src={esc} alt="" className="w-3 h-3" /> Escola
                    secundaria de camarate
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                {/** título */}
                <h1 className="text-muted-foreground text-5xl mt-3 font-bold">
                  Biblioteca Escolar Camarate
                </h1>

                {/** Descrição */}
                <p className="max-w-lg mt-2 mb-6 text-lg font-light text-gray-600">
                  Aplicação móvel para requisição de livros escolares,
                  desenvolvido como projeto final de licenciatura. Criado em
                  parceria com a Escola Secundária de Camarate para tornar o
                  acesso à biblioteca mais simples e eficiente.
                </p>

                <button
                  className="bg-primario font-semibold text-white py-3 px-3 rounded-full shadow-md hover:shadow-lg text-sm w-full sm:w-fit max-w-xs hover:bg-secundario transition-all duration-500 whitespace-nowrap hover:ring-2 hover:ring-secundario hover:scale-105 hover:ring-inset flex items-center gap-1"
                  aria-label="Explorar projetos"
                >
                  <HiOutlineViewGrid className="text-gray-200" />
                  <a
                    href="https://github.com/lodsa-ntos/TFC_a21505293_camarate_school_library_app/tree/main"
                    target="_blank"
                  >
                    Ver a solução em detalhe
                  </a>
                </button>
              </div>
            </div>

            {/** Right side */}
            <div className="flex items-center justify-center">
              <img
                src="images/portfolio/academico/app-mockup.svg"
                alt="App móvel"
                className="w-96 h-96 object-cover"
              />
            </div>
          </div>
        </GlobalContainer>
      </section>

      {/** Contexto/Introdução  */}
      <section
        id="academico"
        className="pt-32 pb-20 border-b shadow-md bg-gray-50"
      >
        <GlobalContainer>
          <div className="flex flex-col items-center justify-center">
            <div className="">
              <img
                src="images/portfolio/academico/contexto-introducao.svg"
                alt="Contexto/Introdução"
              />
            </div>

            <div className="pt-20 flex flex-col items-start">
              <h2 className="py-4 text-4xl text-[#333333]">
                Porque este projeto existe
              </h2>

              <p className="max-w-2xl mx-auto mb-10 text-xl font-light text-[#333333] leading-relaxed">
                Desenvolvido como projeto final da Licenciatura em Informática
                de Gestão. <br />
                <strong>Objetivo:</strong> Criar uma aplicação móvel para
                requisição de livros, de forma a modernizar o acesso à
                biblioteca escolar. A aplicação foi construída em{" "}
                <strong>parceria</strong> com a{" "}
                <strong>
                  <a
                    target="_blanck"
                    href="https://portalesc.wixsite.com/site"
                    className="underline cursor-pointer text-[#111111] hover:text-[#717171]"
                  >
                    Escola Secundária de Camarate
                  </a>
                </strong>
                , funcionando como uma solução digital para uma biblioteca
                escolar real. A proposta foi inicialmente apresentada a outras
                entidades, mas foi <strong>nesta escola</strong> que o projeto
                encontrou <strong>viabilidade e apoio institucional</strong>.
              </p>
            </div>
          </div>
        </GlobalContainer>
      </section>
      {/** FIM - Contexto/Introdução  */}

      {/** Identificação do Problema  */}
      <section id="academico" className="pt-20 pb-8">
        <GlobalContainer>
          <div className="flex flex-col items-center justify-center">
            <div className=" bg-[#f5f7fb] border border-[#ddd] w-[50%] flex items-center justify-center rounded-xl ">
              <img
                src="images/portfolio/academico/desafio.svg"
                alt="Contexto/Introdução"
                className="w-[500px]"
              />
            </div>

            <div className="pt-6 flex flex-col items-start">
              <h2 className="py-4 text-4xl text-[#333333]">
                Identificação do Problema
              </h2>

              <p className="max-w-xl mx-auto mb-10 text-xl font-light text-[#333333] leading-relaxed">
                A biblioteca da escola utilizava um sistema manual para gerir a
                requisição de livros. Todo o processo era feito em papel e
                folhas de Excel, o que dificultava o acesso dos alunos, consumia
                tempo dos funcionários e aumentava o risco de erros.
                <br />
                <br />
                Não havia qualquer integração digital. Os alunos preenchiam uma
                ficha física e os dados eram anotados à mão num caderno. Para
                controlar devoluções, os responsáveis precisavam verificar
                manualmente, todos os dias, quem tinha livros requisitados e se
                já os havia devolvido.
                <br />
                <br />
                Esse modelo, embora funcional em pequena escala, tornou-se
                insustentável. Além de ineficiente, era vulnerável a perdas,
                difícil de atualizar e pouco acessível para os estudantes.
                Modernizar esse fluxo não era apenas uma melhoria: era uma
                necessidade.
              </p>
            </div>
          </div>
        </GlobalContainer>
      </section>
      {/** FIM - Identificação do Problema  */}

      {/** Solução pensada  */}
      <section id="academico" className="pt-2 pb-2">
        <GlobalContainer>
          <div className="flex flex-col items-center justify-center">
            <div className="border flex items-center justify-center border-[#ddd] w-[50%] py-10 rounded-xl ">
              <img
                src="images/portfolio/academico/solucao.svg"
                alt="Contexto/Introdução"
                className="w-[500px]"
              />
            </div>

            <div className="pt-6 flex flex-col items-start">
              <h2 className="py-4 text-4xl text-[#333333]">Solução pensada</h2>

              <p className="max-w-xl mx-auto mb-10 text-xl font-light text-[#333333] leading-relaxed">
                Propus uma aplicação móvel simples, acessível e segura para
                facilitar o processo de requisição de livros, com foco na
                usabilidade para professores, alunos e equipa responsável pela
                biblioteca.
                <br />
                <br />O sistema foi desenvolvido para responder às necessidades
                reais da biblioteca escolar, oferecendo suporte às tarefas
                diárias de gestão e requisição de livros. O objetivo foi tornar
                o ambiente da biblioteca mais acessível e atrativo, incentivando
                os alunos a utilizarem os seus recursos com maior frequência,
                agora integrados numa experiência digital simples e moderna.
              </p>
            </div>
          </div>
        </GlobalContainer>
      </section>
      {/** FIM - Solução pensada  */}

      {/** Funcionalidade  */}
      <section id="academico" className="pt-2 pb-2">
        <GlobalContainer>
          <div className="flex flex-col items-center justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center">
              <img
                src="images/portfolio/academico/funcionalidade.svg"
                alt="Contexto/Introdução"
                className="w-[500px] flex items-center justify-center right-0 border boder-[#ddd] bg-gray-50 py-4 translate-x-10"
              />
              <img
                src="images/portfolio/academico/funcionalidade2.svg"
                alt="Contexto/Introdução"
                className="w-[800px]"
              />
            </div>

            <div className="pt-12 flex flex-col items-start">
              <h2 className="py-4 text-4xl text-[#333333]">
                Funcionalidades principais
              </h2>

              <p className="max-w-xl mb-10 text-xl font-light text-[#333333] leading-relaxed ">
                Ao longo do desenvolvimento, priorizei funcionalidades que
                realmente respondessem aos desafios enfrentados pela biblioteca.
                <br />
                <br />
                A pesquisa por título ou autor foi pensada para tornar mais
                rápido o acesso a livros, algo que antes exigia procura física
                ou consulta em papel. O histórico de requisições oferece
                autonomia aos alunos e reduz a sobrecarga administrativa. A
                autenticação com perfis individuais garante segurança e
                personalização.
                <br />
                <br />
                Além disso, funcionalidades como o centro de ajuda, os contactos
                do corpo docente e os procedimentos internos reforçam a
                utilidade da aplicação para o dia a dia da escola, de forma a
                permitir que alunos, professores e visitantes acedam facilmente
                à informação certa, no momento certo.
              </p>
            </div>
          </div>
        </GlobalContainer>
      </section>
      {/** FIM - Funcionalidadea  */}

      {/** Tecnologias utilizadas  */}
      <section id="academico" className="pt-2 pb-20">
        <GlobalContainer>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center bg-[#f5f7fb] border border-[#ddd] w-[50%]  py-10 rounded-xl ">
              <img
                src="images/portfolio/academico/technologias.svg"
                alt="Contexto/Introdução"
                className="w-[500px]"
              />
            </div>
            <small className="mt-4 font-bold">
              Modelo de arquitetura utilizado na aplicação para o
              desenvolvimento da solução proposta
            </small>

            <div className="pt-6 flex flex-col items-start">
              <h2 className="py-4 text-4xl text-[#333333]">
                Tecnologias utilizadas
              </h2>

              <p className="max-w-2xl mx-auto mb-10 text-xl font-light text-[#333333] leading-relaxed">
                A aplicação foi desenvolvida com o framework Flutter, utilizando
                Dart como linguagem principal, escolhida pela sua capacidade de
                criar interfaces móveis modernas com alta performance e design
                consistente entre plataformas. Para autenticação, base de dados
                e armazenamento, foi utilizado o Firebase, de forma a permitir
                sincronizações sem atrasos e gestão simplificada de utilizadores
                e dados, uma solução eficiente para ambientes escolares com
                recursos limitados.
                <br />
                <br />
                A prototipagem da interface e dos fluxos de navegação foi feita
                no Axure RP 9, priorizando clareza, simplicidade e usabilidade
                para o público-alvo (professores, alunos e funcionários da
                biblioteca).
                <br />
                <br />A arquitetura da aplicação foi dividida em três camadas
                principais: interface de utilizador, lógica de negócio e camada
                de dados. Esta separação facilitou o desenvolvimento e permitiu
                manter o foco na acessibilidade e escalabilidade futura.
              </p>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 text-center gap-10">
              {companies.map(({ Icon, href, title = "" }, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center cursor-pointer text-center translate-x-20"
                >
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center hover:scale-110 transition-transform duration-500"
                  >
                    <img
                      src={Icon}
                      alt={title}
                      className="w-14 h-14 flex items-center justify-center mx-auto"
                    />
                    {title && (
                      <span className="flex items-center justify-center mt-2 text-xs text-center font-medium text-gray-700 ">
                        {title}
                      </span>
                    )}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </GlobalContainer>
      </section>
      {/** FIM - Tecnologias utilizadas  */}

      {/** Fluxos  */}
      <section id="academico" className="pt-2 pb-2">
        <GlobalContainer>
          <div className="flex flex-col items-center justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center">
              <img
                src="images/portfolio/academico/solucao.svg"
                alt="Contexto/Introdução"
                className="w-[500px] flex items-center justify-center right-0 border boder-[#ddd py-4 translate-x-10"
              />
              <img
                src="images/portfolio/academico/contexto-introducao.svg"
                alt="Contexto/Introdução"
                className="w-[800px] bg-[#f5f7fb] border border-[#ddd] p-4 rounded-xl"
              />
            </div>

            <div className="pt-12 flex flex-col items-start">
              <h2 className="py-4 text-4xl text-[#333333]">
                Mapeamento da Navegação e Funcionalidades
              </h2>

              <p className="max-w-2xl mx-auto mb-10 text-xl font-light text-[#333333] leading-relaxed">
                Esta visualização apresenta os principais fluxos de navegação da
                aplicação. A interface foi projetada para ser simples, acessível
                e funcional, garantindo uma boa experiência tanto para alunos
                como para docentes e colaboradores da escola.
                <br />
                <br />O fluxo cobre desde o{" "}
                <strong>
                  login, pesquisa de livros, requisição e devolução
                </strong>
                , até áreas de apoio como{" "}
                <strong>
                  ajuda, informações institucionais, e procedimentos internos
                </strong>
                .
                <br />
                <br />O objetivo foi reduzir fricções e tornar o processo
                bibliotecário mais fluido com poucos toques, especialmente num
                ambiente escolar com recursos limitados e utilizadores com
                diferentes níveis de literacia digital.
              </p>
            </div>
          </div>
        </GlobalContainer>
      </section>
      {/** FIM - Fluxos  */}

      {/** FIM - Mais do portfólio */}
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

            {/** Card 3 */}
            <BubblyLink
              to="/launchpeak"
              colorStart="#004AAD"
              colorEnd="#FFFFFF"
              className="cursor-pointer group relative lg:flex flex-col my-6 mx-auto bg-white shadow border border-slate-200 rounded-lg w-full max-w-sm hover:shadow-lg transition-shadow duration-500"
            >
              <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
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
                  className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                  src="images/portfolio/launchPeack.svg"
                  alt="investment-seed-round"
                />
              </div>
              <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                  LaunchPeack
                </h6>
                <p className="text-slate-600 leading-normal font-light">
                  Landing page criada como conceito para uma solução fictícia.
                  Feita com React, Tailwind CSS e Framer Motion.
                </p>
              </div>
              <div className="px-4 pb-4 pt-0 mt-2">
                <button
                  className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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

export default Academico;
