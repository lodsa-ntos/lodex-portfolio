import React from "react";
import GlobalContainer from "../utils/GlobalContainer";
import logo from "../assets/logo/lodexstudio-logo.svg";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 md:h-[80px] xl:h-[88px] flex items-center z-50 transition-all duration-500">
      <GlobalContainer>
        <div className="relative flex items-center justify-between w-full h-full">

          {/* Left side - slogan */}
          <div className="hidden lg:flex items-center space-x-2 md:space-x-4 lg:space-x-6 xl:space-x-8">
            <p className="text-xs text-gray-700 font-semibold uppercase tracking-tight">
              Transformo ideias <br /> em experiências digitais <br /> claras e intuitivas.
            </p>
          </div>

          {/* Logo center */}
          <div className="flex items-center lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            <a href="/" className="block">
              <img
                src={logo}
                alt="lodex.studio"
                className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto max-w-[180px] object-contain flex items-center justify-center"
              />
            </a>
          </div>

          {/* Right side - Search & Hamburguer Menu */}
          <div className="flex items-center ml-auto space-x-8">

            {/* Language PT-EN */}
            <button className="text-sm transition-colors duration-300">
              <span className="text-primario underline font-black ">PT</span>
              <span> /</span>
              <span className="text-gray-500 font-medium hover:text-primario ml-1">EN</span>
            </button>

            {/* Hamburger Menu Icon */}
            <button className="text-terciario hover:text-terciario transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"  
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7
                  6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </GlobalContainer>
    </nav>
  );
}

export default Navbar;
