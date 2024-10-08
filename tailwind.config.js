export const plugins = [require("daisyui")];

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        black: "#0d0d0d", // un noir plus doux
      },
    },
  },
  plugins: [
    require("daisyui"),
    // Ajouter un plugin pour l'ombre du texte (text-shadow)
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-outline-black": {
          "text-shadow": "1px 1px 2px black",
        },
        ".text-outline-primary": {
          "text-shadow": "1px 1px 2px #15803d", // Surlignage jaune doré
        },
        ".text-outline-secondary": {
          "text-shadow": "1px 1px 2px #f97316", // Surlignage jaune doré
        },
        // Classe pour ajouter un liseré noir autour des icônes SVG
        ".icon-outline-black": {
          filter: "drop-shadow(1px 1px 2px black)",
        },
      };

      addUtilities(newUtilities);
    },
  ], // Ajoutez DaisyUI comme plugin
  daisyui: {
    themes: [
      {
        forest: {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          ...require("daisyui/src/theming/themes")["forest"], // Importez et étendez le thème existant
          primary: "#15803d", // green-700 (https://tailwindcss.com/docs/customizing-colors)
          secondary: "#f97316", // orange-500
          // black: "#be123c",
        },
      },
      "light",
      "dark",
    ],
  },
};
