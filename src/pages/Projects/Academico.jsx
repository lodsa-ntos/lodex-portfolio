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
          Camarate School Library — Simple, functional Flutter mobile experience
          | LodeX Studio
        </title>
        <meta
          name="description"
          content="Mobile app developed by LodeX Studio in Flutter for the Camarate School Library. Real collaboration focused on organization, accessibility, and an intuitive student experience."
        />
      </Helmet>

      <section
        id="academico"
        className="pt-[150px] sm:pt-[192px] pb-20 border-b shadow-md transition-all duration-500"
      >
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
                    className="flex gap-1 items-center text-xs font-medium font-Satoshi transition-transform duration-500 ease-in-out whitespace-nowrap"
                  >
                    <LiaUniversitySolid /> Academic project{" "}
                    <span className="hidden md:block">
                      • Final degree project
                    </span>
                  </a>
                </div>

                <div className=" rounded-full p-1.5 tracking-tight ring-1 ring-inset bg-blue-50 text-[#0b406b] ring-blue-700/10 z-50 flex items-center gap-2 w-fit hover:scale-105 transition-all duration-500">
                  <a
                    href="https://www.ulusofona.pt/"
                    target="_blanck"
                    className="flex gap-1 items-center text-xs font-medium font-Satoshi transition-transform duration-500 ease-in-out"
                  >
                    <img
                      src={ulht}
                      alt="Lusófona University"
                      className="w-3 h-3"
                    />{" "}
                    Lusófona University
                  </a>
                </div>

                <div className=" rounded-full p-1.5 tracking-tight ring-1 ring-inset bg-sky-50 text-sky-600 ring-sky-800/10 z-50 flex items-center gap-2 w-fit hover:scale-105 transition-all duration-500">
                  <a
                    href="https://portalesc.wixsite.com/site"
                    target="_blanck"
                    className="flex gap-1 items-center text-xs font-medium font-Satoshi transition-transform duration-500 ease-in-out"
                  >
                    <img
                      src={esc}
                      alt="Camarate Secondary School"
                      className="w-3 h-3"
                    />{" "}
                    <span className="hidden md:block">
                      Camarate Secondary School
                    </span>
                    <span className="sm:hidden">ESC</span>
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                {/** título */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-3 font-bold transition-all duration-500">
                  Camarate School Library
                </h1>

                {/** Descrição */}
                <p className="max-w-lg mt-2 mb-6 text-lg font-light text-gray-600">
                  Mobile app for borrowing school books, developed as a final
                  degree project. Built in collaboration with Camarate Secondary
                  School to make library access simpler and more efficient.
                </p>

                <button
                  className="bg-primario font-semibold text-white py-3 px-3 rounded-full shadow-md hover:shadow-lg text-sm w-fit max-w-xs hover:bg-secundario transition-all duration-500 whitespace-nowrap hover:ring-2 hover:ring-secundario hover:scale-105 hover:ring-inset flex items-center gap-1"
                  aria-label="Explore projects"
                >
                  <HiOutlineViewGrid className="text-gray-200" />
                  <a
                    href="https://github.com/lodsa-ntos/TFC_a21505293_camarate_school_library_app/tree/main"
                    target="_blank"
                  >
                    View the solution in detail
                  </a>
                </button>
              </div>
            </div>

            {/** Right side */}
            <div className="flex items-center justify-center">
              <img
                src="images/portfolio/academico/app-mockup.svg"
                alt="Mobile app"
                className="w-80 pt-20 md:pt-10 lg:pt-0 md:w-96 h-96"
              />
            </div>
          </div>
        </GlobalContainer>
      </section>

      {/** Contexto/Introdução  */}
      <section
        id="academico"
        className=" pt-16 md:pt-32 pb-20 border-b shadow-md bg-gray-50 transition-all duration-500"
      >
        <GlobalContainer>
          <div className="flex flex-col items-center justify-center">
            <div className="">
              <img
                src="images/portfolio/academico/contexto-introducao.svg"
                alt="Context / Introduction"
              />
            </div>

            <div className="pt-10 sm:pt-20 flex flex-col items-start">
              <h2 className="py-4 text-4xl text-[#333333]">
                Why this project exists
              </h2>

              <p className="max-w-2xl mx-auto mb-10 text-xl font-light text-[#333333] leading-relaxed">
                Developed as the final project for a BSc in Management
                Informatics. <br />
                <br />
                <strong>Goal:</strong> Build a mobile app for borrowing books to
                modernize access to the school library. The app was built in
                <strong>partnership</strong> with the{" "}
                <strong>
                  <a
                    target="_blanck"
                    href="https://portalesc.wixsite.com/site"
                    className="underline cursor-pointer text-[#111111] hover:text-[#717171]"
                  >
                    Camarate Secondary School
                  </a>
                </strong>
                , acting as a real digital solution for a real school library.
                The proposal was initially presented to other institutions, but
                it was <strong>at this school</strong> that the project found
                <strong> viability and institutional support</strong>.
              </p>
            </div>
          </div>
        </GlobalContainer>
      </section>
      {/** FIM - Contexto/Introdução  */}

      {/** Identificação do Problema  */}
      <section
        id="academico"
        className="pt-20 pb-8 transition-all duration-500"
      >
        <GlobalContainer>
          <div className="flex flex-col items-center justify-center">
            <div className=" bg-[#f5f7fb] border border-[#ddd] md:w-[70%] lg:w-[50%] flex items-center justify-center rounded-xl">
              <img
                src="images/portfolio/academico/desafio.svg"
                alt="Challenge overview"
                className="lg:w-[500px]"
              />
            </div>

            <div className="pt-6 flex flex-col items-start">
              <h2 className="py-4 text-4xl text-[#333333]">
                Problem identification
              </h2>

              <p className="max-w-xl mx-auto mb-10 text-xl font-light text-[#333333] leading-relaxed">
                The school library used a manual system to manage book loans.
                The entire process was done on paper and Excel sheets, making
                student access difficult, consuming staff time, and increasing
                the risk of errors.
                <br />
                <br />
                There was no digital integration. Students filled out a physical
                form and data was hand-written in a notebook. To track returns,
                staff had to manually check every day who had books on loan and
                whether they had been returned.
                <br />
                <br />
                While workable at a very small scale, this model became
                unsustainable. Besides being inefficient, it was vulnerable to
                loss, hard to update, and not accessible to students.
                Modernizing the flow wasn’t just an improvement: it was a
                necessity.
              </p>
            </div>
          </div>
        </GlobalContainer>
      </section>
      {/** FIM - Identificação do Problema  */}

      {/** Solução pensada  */}
      <section id="academico" className="pt-2 pb-2 transition-all duration-500">
        <GlobalContainer>
          <div className="flex flex-col items-center justify-center">
            <div className="border flex items-center justify-center border-[#ddd] md:w-[70%] lg:w-[50%] py-10 rounded-xl ">
              <img
                src="images/portfolio/academico/solucao.svg"
                alt="Proposed solution"
                className="w-[500px]"
              />
            </div>

            <div className="pt-6 flex flex-col items-start">
              <h2 className="py-4 text-4xl text-[#333333]">
                Proposed solution
              </h2>

              <p className="max-w-xl mx-auto mb-10 text-xl font-light text-[#333333] leading-relaxed">
                I proposed a simple, accessible, and secure mobile app to make
                the book-loan process easier, with usability in mind for
                teachers, students, and the library staff.
                <br />
                <br />
                The system was designed to meet the real needs of the school
                library, supporting daily tasks around book management and
                loans. The goal was to make the library environment more
                accessible and engaging, encouraging students to use its
                resources more often through a modern, simple digital
                experience.
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
                alt="Feature overview"
                className="md:w-[450px] md:mx-auto lg:mx-0 lg:w-[500px] flex items-center justify-center rounded-lg right-0 border boder-[#ddd] bg-gray-50 mb-10 lg:mb-0 py-4 lg:translate-x-10"
              />
              <img
                src="images/portfolio/academico/funcionalidade2.svg"
                alt="Feature detail"
                className="w-[800px]"
              />
            </div>

            <div className="pt-12 flex flex-col items-start">
              <h2 className="py-4 text-4xl text-[#333333]">Key features</h2>

              <p className="max-w-xl mb-10 text-xl font-light text-[#333333] leading-relaxed ">
                Throughout development, I prioritized features that truly
                addressed the challenges faced by the library.
                <br />
                <br />
                Search by title or author was designed to speed up access to
                books—previously a physical search or paper-based lookup. The
                loan history gives students autonomy and reduces administrative
                overhead. Authentication with individual profiles ensures
                security and personalization.
                <br />
                <br />
                In addition, features like a help center, staff contacts, and
                internal procedures strengthen the app’s usefulness in the
                school’s day-to-day, allowing students, teachers, and visitors
                to quickly find the right information at the right time.
              </p>
            </div>
          </div>
        </GlobalContainer>
      </section>
      {/** FIM - Funcionalidadea  */}

      {/** Tecnologias utilizadas  */}
      <section id="academico" className="pt-2 pb-10 md:pb-20">
        <GlobalContainer>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center bg-[#f5f7fb] border border-[#ddd] md:w-[70%] lg:w-[50%] py-10 rounded-xl">
              <img
                src="images/portfolio/academico/technologias.svg"
                alt="Architecture model"
                className="lg:w-[500px]"
              />
            </div>
            <small className="mt-4 font-bold text-center">
              Architecture model used in the app for the proposed solution
            </small>

            <div className="pt-6 flex flex-col items-start">
              <h2 className="py-4 text-4xl text-[#333333]">
                Technologies used
              </h2>

              <p className="max-w-2xl mx-auto mb-10 text-xl font-light text-[#333333] leading-relaxed">
                The app was built with the Flutter framework, using Dart as the
                main language, chosen for its ability to create modern, high
                performance mobile interfaces with consistent cross‑platform
                design. For authentication, database, and storage, Firebase was
                used to enable real‑time sync and simplified user/data
                management—an efficient choice for school environments with
                limited resources.
                <br />
                <br />
                Interface prototyping and navigation flows were designed in
                Axure RP 9, prioritizing clarity, simplicity, and usability for
                the target audience (teachers, students, and library staff).
                <br />
                <br />
                The app’s architecture was split into three main layers: user
                interface, business logic, and data layer. This separation
                streamlined development and kept the focus on accessibility and
                future scalability.
              </p>
            </div>

            <div className="flex items-center justify-center space-x-10">
              {companies.map(({ Icon, href, title = "" }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center text-center w-full mx-auto hover:scale-110 transition-transform duration-500"
                >
                  <img
                    src={Icon}
                    alt={title}
                    className="w-10 h-10 md:w-14 md:h-14"
                  />
                  {title && (
                    <span className="mt-2 text-xs font-medium text-gray-700 whitespace-nowrap">
                      {title}
                    </span>
                  )}
                </a>
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
                alt="Flow map (solution)"
                className="w-[500px] mx-auto lg:mx-0 flex items-center justify-center right-0 border boder-[#ddd py-4 lg:translate-x-10 mb-10 lg:mt-0 rounded-lg"
              />
              <img
                src="images/portfolio/academico/contexto-introducao.svg"
                alt="Flow map (context)"
                className="w-[800px] bg-[#f5f7fb] border border-[#ddd] p-4 rounded-lg"
              />
            </div>

            <div className="pt-12 flex flex-col items-start justify-start">
              <h2 className="py-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#333333]">
                Navigation and feature mapping
              </h2>

              <p className="max-w-2xl mx-auto mb-10 text-xl font-light text-[#333333] leading-relaxed">
                This visualization shows the key navigation flows of the app.
                <br />
                The interface was designed to be simple, accessible, and
                functional, ensuring a good experience for students, teachers,
                and school staff.
                <br />
                <br />
                The flow covers everything from{" "}
                <strong>login, book search, loan, and return</strong> to support
                areas like{" "}
                <strong>
                  help, institutional information, and internal procedures
                </strong>
                .
                <br />
                <br />
                The goal was to reduce friction and make library tasks smoother
                in a few taps—especially in a school setting with limited
                resources and users with different levels of digital literacy.
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
              MORE FROM MY PORTFOLIO
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
                      <TbContract /> Client project
                    </a>
                  </div>
                </div>

                <img
                  className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                  src="images/portfolio/gestosamaveis.svg"
                  alt="Gestos Amáveis"
                />
              </div>
              <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                  Gestos Amáveis
                </h6>
                <p className="text-slate-600 leading-normal font-light">
                  Institutional website for a senior home‑care company, focused
                  on empathy, accessibility, and clear navigation.
                </p>
              </div>
              <div className="px-4 pb-4 pt-0 mt-2">
                <button
                  class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  View case study
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
                      Personal concept
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
                  Concept landing page for a fictional solution. Built with
                  React, Tailwind CSS, and Framer Motion.
                </p>
              </div>
              <div className="px-4 pb-4 pt-0 mt-2">
                <button
                  className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  View case study
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
