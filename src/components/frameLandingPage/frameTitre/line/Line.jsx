// src/components/Line.jsx
import React from "react";
import "./Line.css";

const Line = () => {
  return (
    <svg
      width="300"
      height="2"
      viewBox="0 0 300 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="0" y1="1" x2="300" y2="1" className="line-element" />
    </svg>
  );
};

export default Line;
