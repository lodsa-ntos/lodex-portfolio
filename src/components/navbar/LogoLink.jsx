import React from "react";
import PropTypes from "prop-types";
import { BubblyLink } from "../../library/BubblyLink";

function LogoLink({ scrolled, logoLight, logoDark }) {
  return (
    <div className="flex items-center lg:absolute lg:left-1/2 lg:-translate-x-1/2 transition-all duration-500">
      <BubblyLink
        to="/"
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primario rounded"
        tabIndex={0}
        aria-label="Página inicial lodex.studio"
      >
        {scrolled ? (
          <img
            src={logoLight}
            alt="lodex.studio logo"
            className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto max-w-[180px] object-contain flex items-center justify-center"
          />
        ) : (
          <img
            src={logoDark}
            alt="lodex.studio logo"
            className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto max-w-[180px] object-contain flex items-center justify-center"
          />
        )}
      </BubblyLink>
    </div>
  );
}

export default LogoLink;

// Define expected props structure for LogoLink (type + required/optional)
LogoLink.propTypes = {
  scrolled: PropTypes.bool.isRequired,
  logoLight: PropTypes.string.isRequired,
  logoDark: PropTypes.string.isRequired,
};
// PropTypes = runtime validation + self-documentation
