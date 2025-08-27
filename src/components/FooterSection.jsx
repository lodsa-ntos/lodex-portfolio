import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import GlobalContainer from "../utils/GlobalContainer";
import { BubblyLink } from "../library/BubblyLink";
import logo from "../assets/logo/lodexstudio-logo.svg";

function FooterSection() {
  const socialLinks = [
    {
      href: "https://www.instagram.com/lodex.studio/",
      label: "Instagram Lodex Studio (abre em nova aba)",
      icon: FaInstagram,
      hoverClass: "fill-[#e4405f] hover:scale-105",
    },
    {
      href: "https://github.com/lodsa-ntos",
      label: "GitHub Lodex Studio (abre em nova aba)",
      icon: FaGithub,
      hoverClass:
        "hover:fill-gray-950 hover:scale-105 fill-gray-600 hover:fill-gray-950 hover:scale-105",
    },
    {
      href: "https://www.linkedin.com/in/lodney-santos/",
      label: "Linkedin (abre em nova aba)",
      icon: FaLinkedinIn,
      hoverClass: "hover:scale-105 fill-primario hover:scale-105",
    },
  ];

  return (
    <footer className="py-8 bg-gray-50 shadow border-t">
      <GlobalContainer>
        <div className="sm:flex text-center items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col items-center sm:items-start cursor-pointer">
            <BubblyLink
              to="/"
              className="flex items-center space-x-2 hover:scale-105 hover:brightness-110 transition-all duration-500"
              aria-label="Ir para a página inicial"
            >
              <img
                src={logo}
                alt="lodex.studio logo"
                className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto max-w-[180px] object-contain flex items-center justify-center"
              />
              <span className="text-lg tracking-wide font-Satoshi font-bold transition-opacity text-secundario">
                LodeX Studio
              </span>
            </BubblyLink>
          </div>

          {/* Links */}
          <div className="grid grid-cols-4 mt-6 md:mt-0 gap-x-1">
            <BubblyLink
              to="/about"
              className="text-[#4a5565] hover:text-gray-800 transition-colors no-underline"
            >
              about
            </BubblyLink>
            <BubblyLink
              to="/case-studies"
              className="text-[#4a5565] hover:text-gray-800 transition-colors"
            >
              case studies
            </BubblyLink>
            <BubblyLink
              to="/services"
              className="text-[#4a5565] hover:text-gray-800 transition-colors"
            >
              services
            </BubblyLink>
            <BubblyLink
              to="/blog"
              className="text-[#4a5565] hover:text-gray-800 transition-colors"
            >
              blog
            </BubblyLink>
          </div>

          {/* Social media */}
          <div className="inline-flex items-center justify-center md:pt-0 pt-4 lg:hidden gap-x-4 pr-6">
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
                  className: `w-6 h-6 relative z-10 fill-terciario
                              transition-all duration-500 ${hoverClass}`,
                  "aria-hidden": "true",
                  focusable: "false",
                })}
              </a>
            ))}
          </div>
        </div>

        <div>
          {/* Footer bottom  */}
          <div className="border-t border-gray-300 mt-6">
            <div className="flex flex-col lg:flex-row items-center justify-between text-center gap-4 mt-6 ">
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <p className="text-[#4a5565] hover:text-gray-800 transition-colors duration-500 text-sm font-Satoshi">
                  © {new Date().getFullYear()} Lodney Santos. All rights reserved.
                </p>
                <div className="flex items-center lg:flex-row gap-2 text-xs">
                  ·
                  <BubblyLink
                    to="/privacidade"
                    className="text-[#4a5565] hover:text-gray-800 transition-colors duration-300"
                  >
                    Privacy Policy
                  </BubblyLink>
                  ·
                  <BubblyLink
                    to="/termos"
                    className="text-[#4a5565] hover:text-gray-800 transition-colors duration-300"
                  >
                    Terms
                  </BubblyLink>
                  ·
                  <BubblyLink
                    to="/cookies"
                    className="text-[#4a5565] hover:text-gray-800 transition-colors duration-300"
                  >
                    Cookies
                  </BubblyLink>
                </div>
              </div>
              <p className="text-[#4a5565] hover:text-gray-800 transition-colors text-sm font-Satoshi flex items-center justify-center gap-1">
                <strong className="text-primario hover:text-secundario">
                  Building digital experiences that grow.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </GlobalContainer>
    </footer>
  );
}

export default FooterSection;
