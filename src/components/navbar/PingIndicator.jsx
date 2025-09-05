import React from "react";
import PropTypes from "prop-types";
import { navbarText } from "../../config/navigation";

function PingIndicator({ scrolled }) {
  return (
    <small
      className={`flex justify-start contrast-100 ${
        scrolled ? "text-green-400" : "text-green-500 "
      } gap-2 tracking-wide transition-all duration-500`}
    >
      <span className="relative flex mt-1 size-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
      </span>
      {navbarText.pingCopy}
    </small>
  );
}

export default PingIndicator;

// Define expected props structure for PingIndicator (type + required/optional)
PingIndicator.propTypes = {
  scrolled: PropTypes.bool.isRequired,
};
// PropTypes = runtime validation + self-documentation
