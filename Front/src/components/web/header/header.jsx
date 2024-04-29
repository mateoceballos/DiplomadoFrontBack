import React from "react";
import Logo from "../../../assets/images/General/logo.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const history = useNavigate();
  const navigate = (link = "") => {
    history(link);
  };
  return (
    <header className="headerMainClass">
      <div
        className="imgHeader"
        onClick={() => {
          navigate("");
        }}
      >
        <img src={Logo} alt="Logo" />
      </div>
      <div className="contentOptions">
        <div
          className="itemMenuGeneral"
          onClick={() => {
            navigate("/aboutUs");
          }}
        >
          <p>Acerca de nosotros</p>
        </div>
        <div
          className="itemMenuGeneral"
          onClick={() => {
            navigate("/catalog");
          }}
        >
          <p>Catalogo</p>
        </div>
        <div
          className="itemMenuGeneral"
          onClick={() => {
            navigate("/session");
          }}
        >
          <p>Inicia/Registrate</p>
        </div>
      </div>
    </header>
  );
}
