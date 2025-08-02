import React, { useState, useEffect } from "react";
import GlobalContainer from "../../utils/GlobalContainer";
import { FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbContract } from "react-icons/tb";
import { LiaUniversitySolid } from "react-icons/lia";
import { RiFlutterFill } from "react-icons/ri";
import { SiDart } from "react-icons/si";
import { RiFirebaseFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { AiOutlineFileProtect } from "react-icons/ai";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { BiFilter, BiLinkExternal } from "react-icons/bi";
import { GrStatusGoodSmall } from "react-icons/gr";
import ProjectCard from "../../components/ProjectCard";
import esc from "../../assets/tech/esc.png";

function GlobalProject() {
  // eferência ao dropdown
  // Por quê? Precisamos saber qual é o DOM real do dropdown para detectar se o clique foi fora dele.
  // useRef dá acesso direto ao DOM (sem re-render).
  const dropdownRef = React.useRef(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "App Escolar",
      link: "/academico",
      primaryImg: "images/portfolio/academico/app-escolar.png",
      hoverImg: "images/portfolio/academico/app-escolar-hover.png",
      techIcons: [
        <RiFlutterFill title="Flutter" className="text-cyan-500" />,
        <SiDart title="Dart" className="text-sky-600" />,
        <RiFirebaseFill title="Firebase" className="text-[#FFA611]" />,
        <img
          src={esc}
          title="Escola Secundária de Camarate"
          alt="Escola"
          className="w-5"
        />,
      ],
      labelBadges: "Projeto académico",
      iconBadges: <LiaUniversitySolid />,
      bagdeStyle:
        "ring-1 ring-inset bg-gray-50 text-gray-600 ring-gray-500 text-xs px-2 py-1 rounded-full flex items-center justify-end text-end gap-1",
      description: (
        <>
          Aplicação móvel desenvolvida como projeto final de curso, com base
          numa colaboração real com a{" "}
          <strong>Escola Secundária de Camarate</strong>.
        </>
      ),
      tags: ["app", "Apps"],
    },

    {
      id: 2,
      title: "Gestos Amáveis",
      link: "https://www.gestosamaveis.pt/",
      linkExternal: "_blank",
      primaryImg:
        "images/projetos/cliente/gestosamaveis/gestos-home-global.png",
      hoverImg: "images/projetos/cliente/gestosamaveis/gestos-home-hover.png",
      techIcons: [
        <>
          <FaReact title="React.js" className="text-blue-500" />
          <RiTailwindCssFill title="Tailwind CSS" className="text-sky-400" />
          <TbBrandFramerMotion
            title="Framer Motion"
            className="text-purple-500"
          />
        </>,
      ],
      labelBadges: "Projeto real - Cliente",
      iconBadges: <TbContract />,
      bagdeStyle:
        "ring-1 ring-inset bg-green-50 text-[#2F9B92] ring-[#2F9B92] text-xs px-2 py-1 rounded-full  flex items-center justify-end text-end gap-1",
      description:
        "Plataforma web institucional desenvolvida para uma empresa de cuidadores a idosos.",
      tags: ["website", "Website"],
    },

    {
      id: 3,
      title: "LaunchPeack",
      link: "https://launchpeak-starter.vercel.app/",
      linkExternal: "_blank",
      primaryImg: "images/projetos/ficticio/launchpeak-home.png",
      hoverImg: "images/projetos/ficticio/launchpeak-home-hover.png",
      techIcons: [
        <>
          <FaReact title="React.js" className="text-blue-500" />
          <RiTailwindCssFill title="Tailwind CSS" className="text-sky-400" />
          <TbBrandFramerMotion
            title="Framer Motion"
            className="text-purple-500"
          />
        </>,
      ],
      labelBadges: "Conceito pessoal",
      iconBadges: <AiOutlineFileProtect className="text-blue-600" />,
      bagdeStyle:
        "ring-1 ring-inset bg-blue-50 text-[#3b82f6] ring-blue-600 text-xs px-2 py-1 rounded-full  flex items-center justify-end text-end gap-1",
      description:
        "Landing page criada como conceito para uma solução fictícia. Feita com React, Tailwind CSS e Framer Motion.",
      tags: ["landing", "Landing Page"],
    },
  ];

  const TAGS = [
    { id: "app", label: "Apps", color: "text-gray-300" },
    { id: "website", label: "Website", color: "text-secundario" },
    { id: "landing", label: "Landing Page", color: "text-gray-500" },
    { id: "portfolio", label: "Portfólio", color: "text-purple-500" },
    { id: "redesign", label: "Redesign", color: "text-orange-500" },
  ];

  const allTags = TAGS.map((t) => t.id);

  const filteredProjects =
    selectedTags.length === 0
      ? projects
      : projects.filter((project) =>
          project.tags.some((tag) => selectedTags.includes(tag))
        );

  // Alterna o estado de abertura do dropdown (true ou false) (abrir ou fechar).
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  // Marca/desmarca as tags no estado selectedTags.
  const toggleTag = (tag) => {
    if (tag === "todos") {
      // Se "todos" for clicado
      if (selectedTags.length === allTags.length) {
        // Desmarca tudo // Limpa Tudo
        setSelectedTags([]);
      } else {
        // Marca todas
        setSelectedTags(allTags);
      }
    } else {
      setSelectedTags((prevTags) =>
        prevTags.includes(tag)
          ? prevTags.filter((t) => t !== tag) // desmarca
          : [...prevTags, tag]
      );
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        // clicar fora do menu
        !dropdownRef.current.contains(e.target) &&
        // clicar fora do botão
        !e.target.closest("#dropdownToggleBtn")
      ) {
        setDropdownOpen(false); // fecha o menu
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <section id="sobremim" className="min-h-[95vh] pt-36 border-b shadow-md">
      <GlobalContainer>
        <span className="text-xs sm:text-sm text-gray-600  font-semibold text-start block mb-2 uppercase tracking-wide">
          Projectos
        </span>

        {/* Título and filter button */}
        <div className="mb-10 sm:mb-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Título, subtítulo e Descrição */}
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

          {/* Filter button */}
          <button
            id="dropdownToggleBtn"
            onClick={toggleDropdown}
            rel="noopener noreferrer"
            className="bg-secundario px-4 py-2 rounded-full shadow-sm font-semibold w-fit text-white hover:brightness-105 flex items-center justify-center gap-1 transition-all duration-500 hover:ring-secundario hover:text-secundario hover:bg-white ring-inset ring-2 ring-transparent"
            role="button"
            aria-label="Explorar mais no WhatsApp"
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
            aria-controls="dropdownMenu"
            tabIndex={0}
          >
            Filtrar <BiFilter />
          </button>

          {/* Dropdown menu */}
          {dropdownOpen && (
            <div
              id="dropdownMenu"
              ref={dropdownRef}
              className="z-[80] w-56 p-3 bg-white border -translate-y-3 -translate-x-5 rounded-lg shadow dark:bg-gray-700 absolute top-72 mt-2 right-0"
            >
              <ul
                className="space-y-2 text-sm"
                aria-labelledby="dropdownDefault"
              >
                <li className="flex items-center">
                  <input
                    id="todos"
                    type="checkbox"
                    checked={selectedTags.includes("todos")}
                    onChange={() => toggleTag("todos")}
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />

                  <label
                    htmlFor="Todos"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100 flex items-center justify-center gap-1"
                  >
                    <GrStatusGoodSmall className="text-white border-2 rounded-full" />{" "}
                    Todos
                  </label>
                </li>

                <li className="flex items-center">
                  <input
                    id="website"
                    type="checkbox"
                    checked={selectedTags.includes("website")}
                    onChange={() => toggleTag("website")}
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />

                  <label
                    htmlFor="Website"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100 flex items-center justify-center gap-1"
                  >
                    <GrStatusGoodSmall className="text-secundario" /> Website
                  </label>
                </li>

                <li className="flex items-center">
                  <input
                    id="landing"
                    type="checkbox"
                    checked={selectedTags.includes("landing")}
                    onChange={() => toggleTag("landing")}
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />

                  <label
                    htmlFor="Landing"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100 flex items-center justify-center gap-1"
                  >
                    <GrStatusGoodSmall className="text-green-500" /> Landing
                    Pages
                  </label>
                </li>

                <li className="flex items-center">
                  <input
                    id="app"
                    type="checkbox"
                    checked={selectedTags.includes("app")}
                    onChange={() => toggleTag("app")}
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />

                  <label
                    htmlFor="App"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100 flex items-center justify-center gap-1"
                  >
                    <GrStatusGoodSmall className="text-gray-300" /> Apps
                  </label>
                </li>

                <li className="flex items-center">
                  <input
                    id="portfolio"
                    type="checkbox"
                    checked={selectedTags.includes("portfolio")}
                    onChange={() => toggleTag("portfolio")}
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />

                  <label
                    htmlFor="Portfólio"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100 flex items-center justify-center gap-1"
                  >
                    <GrStatusGoodSmall className="text-purple-500" /> Portfólio
                  </label>
                </li>

                <li className="flex items-center">
                  <input
                    id="redesign"
                    type="checkbox"
                    checked={selectedTags.includes("redesign")}
                    onChange={() => toggleTag("redesign")}
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />

                  <label
                    htmlFor="Redesign"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100 flex items-center justify-center gap-1"
                  >
                    <GrStatusGoodSmall className="text-orange-500" /> Redesign
                  </label>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mb-36">
          {filteredProjects.map((projet, idx) => (
            <ProjectCard key={idx} {...projet} />
          ))}
        </div>
      </GlobalContainer>
    </section>
  );
}

export default GlobalProject;
