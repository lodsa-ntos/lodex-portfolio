import React from "react";
import GlobalContainer from "../utils/GlobalContainer";
import logo from "../assets/logo/lodexstudio-logo.svg";
import { LiaLanguageSolid } from "react-icons/lia";
import { IoArrowForward } from "react-icons/io5";
import { GrLanguage } from "react-icons/gr";
import { PiRocketLaunchDuotone } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { VscSymbolInterface } from "react-icons/vsc";

function Navbar() {
  // Social links data for easier reuse and maintainability
  const socialLinks = [
    {
      href: "https://www.instagram.com/lodex.studio/",
      label: "Instagram Lodex Studio (abre em nova aba)",
      icon: FaInstagram,
      hoverClass: "hover:fill-[#e4405f]",
    },
    {
      href: "https://github.com/lodsa-ntos",
      label: "GitHub Lodex Studio (abre em nova aba)",
      icon: FaGithub,
      hoverClass: "hover:fill-gray-950",
    },
    {
      href: "https://api.whatsapp.com/send?phone=351935895551&text=Hello%20%F0%9F%91%8B%20I%27m%20interested%20in%20the%20services%20of%20Lodex Studio.%20%0A%0ACould%20you%20give%20me%20more%20details%3F",
      label: "WhatsApp Lodex Studio (abre em nova aba)",
      icon: FaWhatsapp,
      hoverClass: "hover:fill-[#25d366]",
    },
  ];

  // Use React state to control dropdown visibility
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  // Add language state for PT/EN toggle
  const [language, setLanguage] = React.useState("pt-pt");

  // Function to handle dropdown menu toggle
  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen((prev) => !prev);
  };

  // Function to close dropdown menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest("#dropdownDivider") &&
        !event.target.closest("#dropdownDividerButton")
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Keyboard accessibility for dropdown
  const handleDropdownKeyDown = (e) => {
    if (e.key === "Escape") {
      setDropdownOpen(false);
    }
    if ((e.key === "Enter" || e.key === " ") && !dropdownOpen) {
      e.preventDefault();
      setDropdownOpen(true);
    }
  };

  // Focus trap for dropdown menu
  const dropdownRef = React.useRef(null);
  React.useEffect(() => {
    if (dropdownOpen && dropdownRef.current) {
      const firstFocusable = dropdownRef.current.querySelector(
        'a, button, [tabindex]:not([tabindex="-1"])'
      );
      firstFocusable?.focus();
    }
  }, [dropdownOpen]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 h-16 md:h-[80px] xl:h-[88px] flex items-center z-[100] transition-all duration-500"
      aria-label="Main navigation"
    >
      <GlobalContainer>
        <div className="relative flex items-center justify-between w-full h-full">
          {/* Left side - slogan */}
          <div className="hidden lg:flex items-start lg:flex-col text-left">
            <p className="text-xs xlplus:mt-6 lg:mt-3 text-gray-800 font-medium leading-4 mb-1 uppercase tracking-wide transition-all duration-500">
              <strong>Frontend Developer</strong> <br />  focado em experiências <br /> simples, úteis e escaláveis.
            </p>
            <small className="flex justify-start contrast-100 text-green-500 gap-2 tracking-wide transition-all duration-500">
              <VscSymbolInterface  className="size-5"/> 
              Aberto a colaborações
              </small>
          </div>

          {/* Logo center */}
          <div className="flex items-center lg:absolute lg:left-1/2 lg:-translate-x-1/2 transition-all duration-500">
            <a href="/" className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primario rounded" tabIndex={0} aria-label="Página inicial lodex.studio">
              <img
                src={logo}
                alt="lodex.studio logo"
                className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto max-w-[180px] object-contain flex items-center justify-center"
              />
            </a>
          </div>

          {/* Right side - Social & Hamburger Menu */}
          <div className="flex items-center ml-auto space-x-8">
            {/* Social media */}
            <div className="hidden lg:flex gap-x-4 items-center pr-6">
              {socialLinks.map(({ href, label, icon, hoverClass }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center relative overflow-hidden rounded-full transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primario ${hoverClass}`}
                  aria-label={label}
                  tabIndex={0}
                >
                  {React.createElement(icon, {
                    className: `w-6 h-6 relative z-10 fill-terciario transition-all duration-500 ${hoverClass}`,
                    'aria-hidden': "true",
                    focusable: "false"
                  })}
                </a>
              ))}
            </div>

            <div className="relative inline-flex flex-wrap items-center transition-all duration-500">
              {/* Hamburger Menu Icon */}
              <button
                id="dropdownDividerButton"
                onClick={toggleDropdown}
                onKeyDown={handleDropdownKeyDown}
                className={`text-terciario hover:text-terciario transition-colors duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primario rounded ${dropdownOpen ? "ring-2 ring-primario" : ""}`}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                aria-controls="dropdownDivider"
                tabIndex={0}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
                <span className="sr-only">Abrir menu</span>
              </button>

              {/* Dropdown menu */}
              <div
                id="dropdownDivider"
                ref={dropdownRef}
                className={`absolute top-full right-0 mt-2 z-50 transition-all duration-500 ease-in-out ${
                  dropdownOpen ? "" : "hidden"
                } bg-white divide-y divide-gray-100 rounded-lg border shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600`}
                role="menu"
                aria-label="Menu principal"
                tabIndex={-1}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDividerButton"
                >
                  <li>
                    <a
                      href="/"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white focus:bg-gray-100 dark:focus:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primario rounded"
                      role="menuitem"
                      tabIndex={dropdownOpen ? 0 : -1}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projetos"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white focus:bg-gray-100 dark:focus:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primario rounded"
                      role="menuitem"
                      tabIndex={dropdownOpen ? 0 : -1}
                    >
                      Projetos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white focus:bg-gray-100 dark:focus:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primario rounded"
                      role="menuitem"
                      tabIndex={dropdownOpen ? 0 : -1}
                    >
                      Serviços
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white focus:bg-gray-100 dark:focus:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primario rounded"
                      role="menuitem"
                      tabIndex={dropdownOpen ? 0 : -1}
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sobremim"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white focus:bg-gray-100 dark:focus:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primario rounded"
                      role="menuitem"
                      tabIndex={dropdownOpen ? 0 : -1}
                    >
                      Sobre mim
                    </a>
                  </li>

                  <li className="block lg:hidden">
                    <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white focus:bg-gray-100 dark:focus:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primario rounded">
                      <GrLanguage aria-hidden="true" /> Idioma:{" "}
                      <button
                        className="flex items-center text-sm transition-colors duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primario rounded"
                        onClick={() =>
                          setLanguage((prev) =>
                            prev === "pt-pt" ? "en-gb" : "pt-pt"
                          )
                        }
                        aria-label="Trocar idioma"
                        aria-pressed={language === "en-gb"}
                        tabIndex={dropdownOpen ? 0 : -1}
                      >
                        <span
                          className={
                            language === "pt-pt"
                              ? "text-primario underline font-black"
                              : "text-gray-500 font-medium hover:text-primario hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primario"
                          }
                        >
                          PT
                        </span>
                        <span className="ml-1"> /</span>
                        <span
                          className={
                            language === "en-gb"
                              ? "text-primario underline font-black ml-1"
                              : "text-gray-500 font-medium hover:text-primario hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primario ml-1"
                          }
                        >
                          EN
                        </span>
                      </button>
                    </div>
                  </li>
                </ul>
                <div className="py-2">
                  <a
                    href="#"
                    className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white hover:scale-105 transition-all duration-500 focus:bg-gray-100 dark:focus:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primario rounded"
                    role="menuitem"
                    tabIndex={dropdownOpen ? 0 : -1}
                  >
                    <span className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-50 hover:bg-blue-100 py-2">
                      <PiRocketLaunchDuotone className="fill-secundario size-4" aria-hidden="true" />
                    </span>{" "}
                    Iniciar projeto <IoArrowForward aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </GlobalContainer>
    </nav>
  );
}

export default Navbar;
