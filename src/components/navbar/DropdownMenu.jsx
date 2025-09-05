import React from "react";
import PropTypes from "prop-types";
import { IoClose } from "react-icons/io5";
import { BubblyLink } from "../../library/BubblyLink";

function DropdownMenu({
  scrolled,
  dropdownOpen,
  toggleDropdown,
  handleDropdownKeyDown,
  dropdownRef,
  links,
  currentPath,
}) {
  return (
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
                  }
                `}
                role="menuitem"
                tabIndex={dropdownOpen ? 0 : -1}
              >
                {label}
              </BubblyLink>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DropdownMenu;

// Define expected props structure for DropdownMenu (type + required/optional)
DropdownMenu.propTypes = {
  scrolled: PropTypes.bool.isRequired,
  dropdownOpen: PropTypes.bool.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  handleDropdownKeyDown: PropTypes.func.isRequired,
  dropdownRef: PropTypes.object.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentPath: PropTypes.string.isRequired,
};
// PropTypes = runtime validation + self-documentation