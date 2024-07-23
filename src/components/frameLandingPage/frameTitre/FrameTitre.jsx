import React from "react";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import "./FrameTitre.css";

const FrameTitre = () => {
  return (
    <div className="frame-titre">
      {/* Placeholder pour le logo */}
      <Logo className="frame-titre-logo" />

      {/* Placeholder pour le titre */}
      <h1 className="frame-titre-title">YVY DRONE</h1>

      {/* Placeholder pour la phrase descriptive */}
      <p className="frame-titre-description">
        Une phrase décrivant le but de l application.
      </p>
    </div>
  );
};

export default FrameTitre;
