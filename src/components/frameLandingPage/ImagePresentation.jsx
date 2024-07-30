import React from "react";
import imagePresentation from "../../assets/images/Image_presentation.png";

const ImagePresentation = () => {
  return (
    // colore le background en blanc et dimmentionne ce conteneur à 500px de largeur et 600px de hauteur
    <div className="bg-white">
      {/* <div className="flex justify-center items-center overflow-hidden"> */}
      <img
        src={imagePresentation}
        alt="Artistic representation of the human activity"
        className="object-cover w-full h-full"
      ></img>
    </div>
  );
};

export default ImagePresentation;
