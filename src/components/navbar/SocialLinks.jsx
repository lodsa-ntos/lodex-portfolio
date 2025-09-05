import React from "react";
import PropTypes from "prop-types";

function SocialLinks({ links, scrolled }) {
  return (
    <div className="hidden lg:flex gap-x-4 items-center pr-6">
      {links.map(({ href, label, icon, hoverClass }) => (
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
            className: `w-6 h-6 relative z-10 ${
              scrolled ? "fill-white" : "fill-terciario "
            } transition-all duration-500 ${hoverClass}`,
            "aria-hidden": "true",
            focusable: "false",
          })}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;

// Define expected props structure for SocialLinks (type + required/optional)
SocialLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.func])
        .isRequired,
      hoverClass: PropTypes.string,
    })
  ).isRequired,
  scrolled: PropTypes.bool.isRequired,
};
// PropTypes = runtime validation + self-documentation
