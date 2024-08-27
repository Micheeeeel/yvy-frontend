/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      alert: "rgba(191, 33, 30, 1)",
      black: "rgba(0, 15, 8, 1)",
      primary: "rgba(58, 119, 81, 1)",
      "primary-lighten": "rgba(77, 139, 103, 0.7)",
      secondary: "rgba(240, 135, 0, 1)",
      "secondary-lighten": "rgba(259, 155, 22, 0.7)",
      ternary: "rgba(239, 202, 8, 1)",
    },
  },
};
export const plugins = [];
