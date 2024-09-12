export const plugins = [require("daisyui")];

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // Ajoutez les fichiers de votre projet ici

  theme: {
    extend: {
      colors: {
        black: "rgba(0, 15, 8, 1)",
      },
    },
  },
  plugins: [require("daisyui")], // Ajoutez DaisyUI comme plugin
  daisyui: {
    themes: [
      {
        forest: {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          ...require("daisyui/src/theming/themes")["forest"], // Importez et étendez le thème existant
          primary: "#15803d", // green-700 (https://tailwindcss.com/docs/customizing-colors)
          secondary: "#f97316", // orange-500
          black: "#be123c",
        },
      },
      "light",
      "dark",
    ],
  },
};
