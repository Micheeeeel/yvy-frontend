import globals from "globals"; // Importation des variables globales communes (comme `window`, `document`) pour les différents environnements.
import pluginJs from "@eslint/js"; // Importation de la configuration ESLint pour les fichiers JavaScript.
import tseslint from "typescript-eslint"; // Importation de la configuration ESLint pour les fichiers TypeScript.
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js"; // Importation de la configuration recommandée pour les projets React.

/*
  Configuration ESLint exportée sous forme de tableau. Chaque objet ou configuration ajoutée ici est appliquée au projet.
*/
export default [
  // Spécifie les types de fichiers que cette configuration ESLint doit couvrir.
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },

  // Active les fonctionnalités ECMAScript pour les fichiers JSX, ce qui permet de parser correctement les syntaxes JSX.
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },

  // Déclare les variables globales disponibles dans l'environnement du navigateur pour éviter les erreurs de non-définition.
  { languageOptions: { globals: globals.browser } },

  // Ajoute la configuration de base recommandée pour ESLint sur les fichiers JavaScript.
  pluginJs.configs.recommended,

  // Ajoute la configuration recommandée pour TypeScript, y compris des règles spécifiques pour le typage strict.
  ...tseslint.configs.recommended,

  // Ajoute la configuration recommandée pour React, qui comprend des règles spécifiques à React (comme la validation des props, etc.).
  pluginReactConfig,

  // Paramètres et règles supplémentaires spécifiques à ce projet.
  {
    settings: {
      react: {
        version: "detect", // Automatiquement détecter la version de React utilisée dans le projet pour ajuster les règles ESLint en conséquence.
      },
    },
    rules: {
      // Désactive la règle `no-undef` pour éviter les erreurs redondantes avec TypeScript, qui gère déjà la vérification des déclarations de variables.
      "no-undef": "off",

      /*
        Limite l'utilisation de certaines fonctions globales jugées dangereuses ou obsolètes.
        - `isNaN`: Privilégie l'utilisation de `Number.isNaN` pour vérifier si une valeur est `NaN`, car il est plus précis.
        - `isFinite`: Privilégie l'utilisation de `Number.isFinite` pour vérifier si une valeur est un nombre fini, car il est plus sûr avec les types.
      */
      "no-restricted-globals": [
        "error",
        {
          name: "isNaN",
          message: "Use Number.isNaN instead.",
        },
        {
          name: "isFinite",
          message: "Use Number.isFinite instead.",
        },
      ],

      // Désactive la règle `react/react-in-jsx-scope` car React 17+ n'exige plus que React soit explicitement importé dans les fichiers JSX.
      "react/react-in-jsx-scope": "off",
    },
  },
];
