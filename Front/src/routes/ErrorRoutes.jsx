import React, { lazy } from "react";
import ProyectLayout from "../Layout/errorLayout";

// Importación de suspense
import Loader from "../components/Loader/Loader";
// Rutas del diplomado
const NoMatch = Loader(lazy(() => import("../views/Error/error")));

const ProyectRoutes = {
  path: "/",
  element: <ProyectLayout />,
  children: [
    {
      path: "*",
      element: <NoMatch />,
    },
  ],
};
export default ProyectRoutes;
