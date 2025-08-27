import React, { useState, useEffect } from "react";
import GlobalContainer from "../utils/GlobalContainer";
import logo from "../assets/logo/lodexstudio-logo.svg";
import logo2 from "../assets/logo/lodexstudio-logo-white.svg";
import { IoArrowForward } from "react-icons/io5";
import { GrLanguage } from "react-icons/gr";
import { PiRocketLaunchDuotone } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { VscSymbolInterface } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { BubblyLink } from "../library/BubblyLink";
import { useLocation } from "react-router-dom";

import { fadeIn } from "../utils/motion";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Navbar() {
  const location = useLocation();
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Social links data for easier reuse and maintainability
  const socialLinks = [
    {
      href: "https://www.instagram.com/lodex.studio/",
      label: "Instagram Lodex Studio (abre em nova aba)",
      icon: FaInstagram,
      hoverClass: "hover:fill-[#e4405f] hover:scale-105",
    },
    {
      href: "https://github.com/lodsa-ntos/lodex-portfolio",
      label: "GitHub Lodex Studio (abre em nova aba)",
      icon: FaGithub,
      hoverClass: `${
        scrolled
          ? "hover:fill-gray-950 hover:scale-105"
          : "fill-gray-600 hover:fill-gray-950 hover:scale-105"
      }`,
    },
    {
      href: "https://www.linkedin.com/in/lodney-santos/",
      label: "Linkedin (abre em nova aba)",
      icon: FaLinkedinIn,
      hoverClass: `${
        scrolled ? "hover:scale-105" : "hover:fill-primario hover:scale-105"
      }`,
    },
  ];

  const links = [
    { label: "Home", to: "/" },
    { label: "Cases Studies", to: "/case-studies" },
    { label: "Services", to: "/services" },
    { label: "Blog", to: "/blog" },
    { label: "About me", to: "/about" },
  ];

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [language, setLanguage] = useState("pt-pt");

  // Function to handle dropdown menu toggle
  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen((prev) => !prev);
  };

  // Function to close dropdown menu when clicking outside
  useEffect(() => {
    const handleClick = (event) => {
      if (
        !event.target.closest("#dropdownDivider") &&
        !event.target.closest("#dropdownDividerButton")
      ) {
        setDropdownOpen(false);
      }

      if (
        event.target.closest("#dropdownDivider") &&
        event.target.closest("[role='menuitem']")
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
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
  {
    /**
    I adjusted the focus behaviour in the dropdown menu so that it respects the current page. Previously, the focus always went to the first item (“Home”), which confused users and disrupted the expected flow of keyboard navigation. Now, the focus goes directly to the item corresponding to the active route, using useLocation() to keep the visual and logical context synchronised.
    */
  }
  const dropdownRef = React.useRef(null);

  const currentPath = location.pathname;
  useEffect(() => {
    if (dropdownOpen && dropdownRef.current) {
      currentPath;

      const activeItem = dropdownRef.current.querySelector(
        `[href="${currentPath}"]`
      );

      if (activeItem && activeItem instanceof HTMLElement) {
        activeItem.focus();
      } else {
        const fallback = dropdownRef.current.querySelector(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        if (fallback instanceof HTMLElement) {
          fallback?.focus();
        }
      }
    }
  }, [dropdownOpen, currentPath]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // toda vez que a rota muda, reinicia a animação
    setShouldAnimate(false);
    const timeout = setTimeout(() => setShouldAnimate(true), 50);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return shouldAnimate ? (
    <motion.nav
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 h-16 md:h-[80px] xl:h-[88px] flex items-center z-[100] leading-relaxed
        ${
          scrolled
            ? "bg-secundario shadow-md text-terciario"
            : "bg-transparent text-white"
        }`}
    >
      <GlobalContainer>
        <div className="relative flex items-center justify-between w-full h-full">
          {/* Left side - slogan */}
          <div className="hidden lg:flex items-start lg:flex-col text-left">
            <p
              className={`text-xs xlplus:mt-6 lg:mt-3 font-medium leading-4 mb-1 uppercase tracking-wide transition-all duration-500
                ${scrolled ? "text-white" : "text-gray-800 "}
              `}
            >
              <strong>Simple.</strong> <br /> <strong>Useful.</strong> <br />{" "}
              <strong>Scalable. </strong> <br /> <strong>Unlimited.</strong>
            </p>
          </div>

          {/* Logo center */}
          <div className="flex items-center lg:absolute lg:left-1/2 lg:-translate-x-1/2 transition-all duration-500">
            <BubblyLink
              to="/"
              className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primario rounded"
              tabIndex={0}
              aria-label="Página inicial lodex.studio"
            >
              {scrolled ? (
                <img
                  src={logo2}
                  alt="lodex.studio logo"
                  className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto max-w-[180px] object-contain flex items-center justify-center"
                />
              ) : (
                <img
                  src={logo}
                  alt="lodex.studio logo"
                  className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto max-w-[180px] object-contain flex items-center justify-center"
                />
              )}
            </BubblyLink>
          </div>

          {/* Right side - Social & Hamburger Menu */}
          <div className="inline-flex items-center justify-center ml-auto space-x-8">
            <small
              className={`flex justify-start contrast-100 ${
                scrolled ? "text-green-400" : "text-green-500 "
              } gap-2 tracking-wide transition-all duration-500`}
            >
              <span class="relative flex mt-1 size-3">
                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span class="relative inline-flex size-3 rounded-full bg-green-500"></span>
              </span>
              Let’s build together
            </small>
            {/* Social media */}
            <div className="hidden lg:flex gap-x-4 items-center pr-6">
              {socialLinks.map(({ href, label, icon, hoverClass }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center relative overflow-hidden transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primario ${hoverClass}`}
                  aria-label={label}
                  tabIndex={0}
                >
                  {React.createElement(icon, {
                    className: `w-6 h-6 relative z-10 
                    ${scrolled ? "fill-white" : "fill-terciario "}
                    transition-all duration-500 ${hoverClass}`,
                    "aria-hidden": "true",
                    focusable: "false",
                  })}
                </a>
              ))}
            </div>{" "}
            {/* Hamburger Menu Icon */}
            <div className="relative inline-flex flex-wrap items-center transition-all duration-500">
              <button
                id="dropdownDividerButton"
                onClick={toggleDropdown}
                onKeyDown={handleDropdownKeyDown}
                className={`${
                  scrolled ? "text-white hover:text-gray-300" : "text-terciario"
                } transition-colors duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-secundario rounded ${
                  dropdownOpen ? "ring-2 ring-secundario" : ""
                }`}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                aria-controls="dropdownDivider"
                tabIndex={0}
              >
                {dropdownOpen ? (
                  <IoClose className="w-7 h-7" />
                ) : (
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
                )}
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
                  <li className="navbar-links">
                    {links.map(({ label, to }) => (
                      <BubblyLink
                        key={to}
                        to={to}
                        colorStart="#004AAD"
                        colorEnd="#FFFFFF"
                        className={`
                        block px-4 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primario rounded
                        ${
                          currentPath === to
                            ? "hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white focus:bg-gray-100 dark:focus:bg-gray-600"
                            : "hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        }`}
                        role="menuitem"
                        tabIndex={dropdownOpen ? 0 : -1}
                      >
                        {label}
                      </BubblyLink>
                    ))}
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
                  <BubblyLink
                    to="/conversar"
                    colorStart="#004AAD"
                    colorEnd="#FFFFFF"
                    className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white hover:scale-105 transition-all duration-500 focus:bg-gray-100 dark:focus:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primario rounded"
                    role="menuitem"
                    tabIndex={dropdownOpen ? 0 : -1}
                  >
                    <span className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-50 hover:bg-blue-100 py-2">
                      <PiRocketLaunchDuotone
                        className="fill-secundario size-4"
                        aria-hidden="true"
                      />
                    </span>{" "}
                    Start Project <IoArrowForward aria-hidden="true" />
                  </BubblyLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </GlobalContainer>
    </motion.nav>
  ) : null;
}

export default Navbar;
