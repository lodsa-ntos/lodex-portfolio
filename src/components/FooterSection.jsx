import React from "react";
import GlobalContainer from "../utils/GlobalContainer";
import logo from "../assets/logo/lodexstudio-logo.svg";

function FooterSection() {
  return (
    <footer className="py-8 bg-gray-50 shadow border-t">
      <GlobalContainer>
        <div className="sm:flex text-center items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col items-center sm:items-start cursor-pointer">
            <a
              href="#home"
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
            </a>
          </div>

          {/* Links */}
          <div className="grid grid-cols-4 mt-6 md:mt-0  gap-x-4">
            <a href="/sobremim" className="text-[#4a5565] hover:text-gray-800 transition-colors">
              sobre
            </a>
            <a href="/projetos" className="text-[#4a5565] hover:text-gray-800 transition-colors">
              portfólio
            </a>
            <a href="/servicos" className="text-[#4a5565] hover:text-gray-800 transition-colors">
              serviços
            </a>
            <a href="/blog" className="text-[#4a5565] hover:text-gray-800 transition-colors">
              blog
            </a>
          </div>
        </div>

        <div>
          {/* Footer bottom  */}
          <div className="border-t border-gray-300 mt-6">
            <div className="flex flex-col md:flex-row items-center justify-between text-center gap-4 mt-6">
              <p className="text-[#4a5565] hover:text-gray-800 transition-colors duration-500 text-sm font-Satoshi">
                © {new Date().getFullYear()} Lodney Santos. Todos os direitos
                reservados.
              </p>
              <p className="text-[#4a5565] hover:text-gray-800 transition-colors text-sm font-Satoshi flex items-center justify-center gap-1">
                <strong className="text-primario hover:text-secundario">Frontend Developer</strong> & <strong className="text-primario hover:text-secundario">UI Designer</strong>
              </p>
            </div>
          </div>
        </div>
      </GlobalContainer>
    </footer>
  );
}

export default FooterSection;
