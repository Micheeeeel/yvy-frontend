import React from "react";
import PropTypes from "prop-types";

const CardLinesDesktop = ({ color }) => {
  return (
    <div className="w-full">
      <div className={`border ${color}`}></div>
    </div>
  );
};

CardLinesDesktop.propTypes = {
  color: PropTypes.string.isRequired,
};

export default CardLinesDesktop;
