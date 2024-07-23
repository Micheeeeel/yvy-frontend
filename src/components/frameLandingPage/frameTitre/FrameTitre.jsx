import React from "react";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import "./FrameTitre.css";
import { LabelTitle } from "./labelTitle/LabelTitle";
import { LabelTitleText } from "./labelTitleText/LabelTitleText";
import Line from "./line/Line";

const FrameTitre = () => {
  return (
    <div className="frame-titre">
      {/* Placeholder pour le logo */}
      <Logo className="frame-titre-logo" />

      {/* Placeholder pour le titre */}
      <LabelTitle />

      {/* Placeholder pour la phrase descriptive */}
      <LabelTitleText />
      <Line />
    </div>
  );
};

export default FrameTitre;
