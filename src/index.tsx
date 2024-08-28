import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Contact from "./routes/Contact";
import Accueil from "./routes/Accueil";
import ErrorPage from "./error-page";
import Level from "./routes/Level";
import Blog from "./routes/Blog";
import "./index.css"; // Suppression de App.css si inutilisé
import PresentationImage from "./components/PresentationImage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Accueil />,
        children: [
          {
            path: "/",
            element: <PresentationImage />,
          },
          {
            path: "levelsMap",
            element: <LevelsMap />,
          },
        ],
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "levels/:levelId",
        element: <Level />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
