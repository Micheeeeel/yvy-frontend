import React from "react";
import imagePresentation from "../assets/images/Image_presentation.png";

const ImagePresentation = () => {
  return (
    // colore le background en blanc et dimmentionne ce conteneur à 500px de largeur et 600px de hauteur
    <div className="bg-black ">
      {/* <div className="flex justify-center items-center overflow-hidden"> */}
      <div className="relative ">
        <img src={imagePresentation}></img>
      </div>
    </div>
  );
};

export default ImagePresentation;
