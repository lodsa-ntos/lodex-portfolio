import React from "react";
import PropTypes from "prop-types";
import { navbarText } from "../../config/navigation";

function Slogan({ scrolled }) {
  return (
    <div className="hidden lg:flex items-start lg:flex-col text-left">
      <p
        className={`text-xs xlplus:mt-6 lg:mt-3 font-medium leading-4 mb-1 uppercase tracking-wide transition-all duration-500 ${
          scrolled ? "text-white" : "text-gray-800 "
        }`}
      >
        {navbarText.sloganLines.map((line, idx) => (
          <React.Fragment key={idx}>
            <strong>{line}</strong>
            {idx < navbarText.sloganLines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </p>
    </div>
  );
}

export default Slogan;

// Define expected props structure for Slogan (type + required/optional)
Slogan.propTypes = {
  scrolled: PropTypes.bool.isRequired,
};
// PropTypes = runtime validation + self-documentation