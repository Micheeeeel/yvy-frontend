export const plugins = [require("daisyui")];

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // Ajoutez les fichiers de votre projet ici

  // {

  // extend: {
  //   colors: {
  //     alert: "rgba(191, 33, 30, 1)",
  //     black: "rgba(0, 15, 8, 1)",
  //     primary: "rgba(58, 119, 81, 1)",
  //     "primary-lighten": "rgba(77, 139, 103, 0.7)",
  //     secondary: "rgba(240, 135, 0, 1)",
  //     "secondary-lighten": "rgba(259, 155, 22, 0.7)",
  //     ternary: "rgba(239, 202, 8, 1)",
  //   },
  // },
  // },
  plugins: [require("daisyui")], // Ajoutez DaisyUI comme plugin
  daisyui: {
    themes: [
      {
        forest: {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          ...require("daisyui/src/theming/themes")["forest"], // Importez et étendez le thème existant
          primary: "#15803d", // green-700 (https://tailwindcss.com/docs/customizing-colors)
          secondary: "#f97316", // orange-500
        },
      },
      "light",
      "dark",
    ],
  },
};
