import { useRoutes } from "react-router-dom";
import config from "../config";
import ProyectRoutes from "./ProyectRoutes";

export default function ThemeRoutes() {
  return useRoutes([ProyectRoutes], config.basename);
}
