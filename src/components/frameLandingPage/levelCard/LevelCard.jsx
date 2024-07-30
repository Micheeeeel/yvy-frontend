// src/components/LevelCard.jsx
import React from "react";
import CardLinesDesktop from "../CardLinesDesktop";
import "../../styles/gradients.css"; // Assurez-vous d'importer les styles
import image from "../../../assets/images/eco-guards-im-regenwald-mathias-rittgerott-rdr 1.png";

const LevelCard = () => {
  return (
    <div className="relative max-w-[430px] h-[510px] mx-auto bg-black shadow-lg overflow-hidden gradient-border">
      <div className="relative flex flex-col p-4 gap-4 ">
        <div>
          <h2 className="text-xl font-semibold text-white text-left">
            John Doe
          </h2>
          <CardLinesDesktop color="border-secondary" />
        </div>
        <div className="flex justify-center">
          <img
            className="w-full h-48 object-cover"
            src={image}
            alt="niveau jouable"
          />
        </div>
        <p className="text-white text-left ">
          A passionate developer who loves coding and enjoys learning new
          technologies.
        </p>
      </div>
    </div>
  );
};

export default LevelCard;
