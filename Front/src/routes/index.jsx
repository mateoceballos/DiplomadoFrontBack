import { useRoutes } from "react-router-dom";
import config from "../config";
import ProyectRoutes from "./ProyectRoutes";
import ErrorRoutes from "./ErrorRoutes";

export default function ThemeRoutes() {
  return useRoutes([ProyectRoutes, ErrorRoutes], config.basename);
}
