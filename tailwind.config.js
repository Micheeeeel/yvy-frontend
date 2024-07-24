/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"];
export const theme = {
  extend: {
    colors: {
      alert: "rgba(191, 33, 30, 1)",
      black: "rgba(0, 15, 8, 1)",
      primary: "rgba(58, 119, 81, 1)",
      secondary: "rgba(240, 135, 0, 1)",
      ternary: "rgba(239, 202, 8, 1)",
    },
  },
};
export const plugins = [];
