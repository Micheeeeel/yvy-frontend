import React from "react";
import PropTypes from "prop-types";

const CardDivider = ({ color }) => {
  return (
    <div className="w-full">
      <div className={`border ${color}`}></div>
    </div>
  );
};

CardDivider.propTypes = {
  color: PropTypes.string.isRequired,
};

export default CardDivider;
