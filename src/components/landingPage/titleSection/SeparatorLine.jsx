import React from "react";

const SeparatorLine = () => {
  // return (
  //   <svg
  //     width="300" // Définit la largeur du SVG à 300 pixels
  //     height="2" // Définit la hauteur du SVG à 2 pixels
  //     viewBox="0 0 300 2" // Définit la vue du SVG à 0 0 300 2
  //     fill="none" // Ne remplit pas le SVG
  //     xmlns="http://www.w3.org/2000/svg" // Définit l'espace de noms XML pour les documents SVG. Il est nécessaire pour que les navigateurs comprennent que ce document est du type SVG.
  //     className="mt-5"
  //   >
  //     <line x1="0" y1="1" x2="300" y2="1" className="stroke-primary stroke-2" />
  //   </svg>
  // );

  return (
    <div className="w-[300px] max-width: 100%">
      <div className="border border-primary"></div>
    </div>
  );
};

export default SeparatorLine;
