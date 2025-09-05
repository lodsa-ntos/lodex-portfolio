import React, { useState, useEffect } from "react";
import GlobalContainer from "../utils/GlobalContainer";
import logo from "../assets/logo/lodexstudio-logo.svg";
import logo2 from "../assets/logo/lodexstudio-logo-white.svg";
// imports moved into subcomponents
import { useLocation } from "react-router-dom";
import { primaryLinks, socialBaseLinks } from "../config/navigation";

import { fadeIn } from "../utils/motion";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import LogoLink from "./navbar/LogoLink";
import SocialLinks from "./navbar/SocialLinks";
import DropdownMenu from "./navbar/DropdownMenu";
import Slogan from "./navbar/Slogan";
import PingIndicator from "./navbar/PingIndicator";

function Navbar() {
  const location = useLocation();
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Social links with dynamic hover style based on scroll
  const socialLinks = socialBaseLinks.map((l) => ({
    ...l,
    hoverClass:
      l.key === "instagram"
        ? "hover:fill-[#e4405f] hover:scale-105"
        : l.key === "github"
        ? scrolled
          ? "hover:fill-gray-950 hover:scale-105"
          : "fill-gray-600 hover:fill-gray-950 hover:scale-105"
        : l.key === "linkedin"
        ? scrolled
          ? "hover:scale-105"
          : "hover:fill-primario hover:scale-105"
        : l.key === "cards"
        ? scrolled
          ? "hover:scale-105"
          : "hover:fill-indigo-500 hover:scale-105"
        : "",
  }));

  const links = primaryLinks;

  const [dropdownOpen, setDropdownOpen] = useState(false);

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
    // every time the route changes, restart the animation
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
          <Slogan scrolled={scrolled} />

          {/* Logo center */}
          <LogoLink scrolled={scrolled} logoLight={logo2} logoDark={logo} />

          {/* Right side - Social & Hamburger Menu */}
          <div className="inline-flex items-center justify-center ml-auto space-x-8">
            <PingIndicator scrolled={scrolled} />
            {/* Social media */}
            <SocialLinks links={socialLinks} scrolled={scrolled} />{" "}
            {/* Hamburger Menu Icon */}
            <DropdownMenu
              scrolled={scrolled}
              dropdownOpen={dropdownOpen}
              toggleDropdown={toggleDropdown}
              handleDropdownKeyDown={handleDropdownKeyDown}
              dropdownRef={dropdownRef}
              links={links}
              currentPath={currentPath}
            />
          </div>
        </div>
      </GlobalContainer>
    </motion.nav>
  ) : null;
}

export default Navbar;
