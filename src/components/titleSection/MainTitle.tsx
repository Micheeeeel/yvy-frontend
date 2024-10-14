import React, { useState } from "react";

const MainTitle = () => {
  const [colors, setColors] = useState({
    from: "from-red-500", // Vert forêt (primary)
    to: "to-yellow-500", // Orange (secondary)
  });

  const handleColorChange = (fromColor: string, toColor: string) => {
    setColors({ from: fromColor, to: toColor });
  };

  return (
    <div className="text-center">
      <h1
        className={`font-black text-6xl text-transparent bg-clip-text bg-gradient-to-r ${colors.from} ${colors.to} drop-shadow-lg`}
      >
        YVY DRONE
      </h1>
      <div className="hidden mt-4 flex flex-wrap justify-center gap-2">
        {/* Vert forêt à Orange */}
        <button
          onClick={() => handleColorChange("from-green-700", "to-orange-500")}
          className="p-2 bg-black text-white rounded"
        >
          Vert forêt à Orange
        </button>

        {/* Noir doux à Gris */}
        <button
          onClick={() => handleColorChange("from-black", "to-gray-500")}
          className="p-2 bg-black text-white rounded"
        >
          Noir doux à Gris
        </button>

        {/* Bleu à Vert forêt */}
        <button
          onClick={() => handleColorChange("from-blue-500", "to-green-700")}
          className="p-2 bg-blacktext-white rounded"
        >
          Bleu à Vert forêt
        </button>

        {/* Rose à Orange doux */}
        <button
          onClick={() => handleColorChange("from-pink-500", "to-orange-300")}
          className="p-2 bg-black text-white rounded"
        >
          Rose à Orange doux
        </button>

        {/* Jaune doré à Vert forêt */}
        <button
          onClick={() => handleColorChange("from-yellow-500", "to-green-700")}
          className="p-2 bg-black text-white rounded"
        >
          Jaune à Vert forêt
        </button>

        {/* Turquoise à Violet doux */}
        <button
          onClick={() => handleColorChange("from-teal-400", "to-purple-400")}
          className="p-2 bg-black text-white rounded"
        >
          Turquoise à Violet doux
        </button>
        <button
          onClick={() => handleColorChange("from-blue-500", "to-green-500")}
          className="m-2 p-2 bg-black text-white rounded"
        >
          Bleu à Vert
        </button>
        <button
          onClick={() => handleColorChange("from-red-500", "to-yellow-500")}
          className="m-2 p-2 bg-black text-white rounded"
        >
          Rouge à Jaune
        </button>
        <button
          onClick={() => handleColorChange("from-teal-400", "to-cyan-500")}
          className="m-2 p-2 bg-black text-white rounded"
        >
          Bleu-Vert à Cyan
        </button>
      </div>
    </div>
  );
};

export default MainTitle;
