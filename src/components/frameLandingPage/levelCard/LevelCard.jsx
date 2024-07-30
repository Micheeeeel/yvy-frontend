import React from "react";
import CardLinesDesktop from "../CardLinesDesktop";

const LevelCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex flex-col p-4 gap-4">
        <h2 className="text-xl font-semibold text-gray-800 text-left">
          John Doe
        </h2>
        <CardLinesDesktop color="border-secondary" />
        <img
          className="w-full h-48 object-cover object-center "
          src="https://via.placeholder.com/300"
          alt="Profile"
        />
        <p className="mt-2 text-gray-600 text-left">
          A passionate developer who loves coding and enjoys learning new
          technologies.
        </p>
      </div>
    </div>
  );
};

export default LevelCard;
