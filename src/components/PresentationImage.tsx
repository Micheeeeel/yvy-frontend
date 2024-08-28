import React from "react";
import presentationImage from "../assets/images/Image_presentation.png";
import { Link } from "react-router-dom";

const PresentationImage = () => {
  return (
    // colore le background en blanc et dimmentionne ce conteneur à 500px de largeur et 600px de hauteur
    <div className="bg-black ">
      <Link to="levelsMap">
        <img
          src={presentationImage}
          alt="Artistic representation of the human activity"
          className="w-full max-h-[750px] object-contain"
        ></img>
      </Link>
    </div>
  );
};

export default PresentationImage;
