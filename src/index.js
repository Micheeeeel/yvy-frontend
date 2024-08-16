import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Contact from "./routes/Contact";
import Accueil from "./routes/Accueil";
import "./index.css";
import ErrorPage from "./error-page";
import Level from "./routes/Level";
import Blog from "./routes/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // This makes Accueil the default component
        element: <Accueil />,
      },
      {
        path: "accueil",
        element: <Accueil />,
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
