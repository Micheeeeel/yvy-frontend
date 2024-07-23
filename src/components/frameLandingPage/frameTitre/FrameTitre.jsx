import React from "react";
import "./FrameTitre.css";
import { LabelTitle } from "./labelTitle/LabelTitle";
import { LabelTitleText } from "./labelTitleText/LabelTitleText";
import Line from "./line/Line";
import Logo from "./logo/Logo";

const FrameTitre = () => {
  return (
    <div className="frame-titre">
      {/* Placeholder pour le logo */}
      <Logo />

      {/* Placeholder pour le titre */}
      <LabelTitle />

      {/* Placeholder pour la phrase descriptive */}
      <LabelTitleText />
      <Line />
    </div>
  );
};

export default FrameTitre;
