import React, { lazy } from "react";
import ProyectLayout from "../Layout/proyectLayout";

// Importación de suspense
import Loader from "../components/Loader/Loader";
// Rutas del diplomado
const Home = Loader(lazy(() => import("../views/Home/index")));
const AboutUs = Loader(lazy(() => import("../views/AboutUs/index")));
const NoMatch = Loader(lazy(() => import("../views/Error/error")));

const ProyectRoutes = {
  path: "/",
  element: <ProyectLayout />,
  children: [
    {
      path: "",
      element: <Home />,
    },
    {
      path: "/aboutUs",
      element: <AboutUs />,
    },
    {
      path: "*",
      element: <NoMatch />,
    },
  ],
};
export default ProyectRoutes;
