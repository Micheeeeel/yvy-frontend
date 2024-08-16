// src/components/LevelCard.jsx
import React from "react";
import CardDivider from "../share/CardDivider";
import "../../styles/gradients.css"; // Assurez-vous d'importer les styles
import image from "../../../assets/images/eco-guards-im-regenwald-mathias-rittgerott-rdr 1.png";

const LevelCard = () => {
  return (
    <div className="relative max-w-[430px] h-auto mx-auto bg-black shadow-lg overflow-hidden gradient-border">
      <div className="relative flex flex-col p-4 gap-4 ">
        <div>
          <h2 className="font-inter font-bold text-3xl text-white text-left uppercase">
            Premier niveau
          </h2>
        </div>
        <CardDivider color="border-secondary" />
        <div className="flex justify-center">
          <img
            className="w-full h-48 object-cover"
            src={image}
            alt="niveau jouable"
          />
        </div>
        <p className="font-inter text-3xl  text-white text-left ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
};

export default LevelCard;
