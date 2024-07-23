import React from "react";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import "./FrameTitre.css";
import { LabelTitle } from "./labelTitle/LabelTitle";

const FrameTitre = () => {
  return (
    <div className="frame-titre">
      {/* Placeholder pour le logo */}
      <Logo className="frame-titre-logo" />

      {/* Placeholder pour le titre */}
      <LabelTitle />

      {/* Placeholder pour la phrase descriptive */}
      <p className="frame-titre-description">
        Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis.
      </p>
    </div>
  );
};

export default FrameTitre;
