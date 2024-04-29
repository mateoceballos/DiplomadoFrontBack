import React, { lazy } from "react";
import ProyectLayout from "../Layout/proyectLayout";

// Importación de suspense
import Loader from "../components/Loader/Loader";
// Rutas del diplomado
const Home = Loader(lazy(() => import("../views/Home/index")));
const AboutUs = Loader(lazy(() => import("../views/AboutUs/index")));
const Login = Loader(lazy(() => import("../views/Login/index")));

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
      path: "/session",
      element: <Login />,
    },
  ],
};
export default ProyectRoutes;
