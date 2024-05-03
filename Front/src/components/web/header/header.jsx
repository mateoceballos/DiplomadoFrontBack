import React, { useState } from "react";
import Logo from "../../../assets/images/General/logo.png";
import menu from "../../../assets/images/Componentes/Header/menu.png";
import { useNavigate } from "react-router-dom";
import SeparateLine from "../../atoms/separateLine";

export default function Header() {
  const history = useNavigate();
  const [respMenu, setRespMenu] = useState(false);
  const navigate = (link = "") => {
    history(link);
    setRespMenu(!respMenu);
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
      <img
        className="imgRespBurger"
        src={menu}
        alt="menuBurger"
        onClick={() => {
          setRespMenu(!respMenu);
        }}
      />
      <div className={`contentOptions ${respMenu ? "showmenu" : "noTouch"}`}>
        <div className="lineResp">
          <SeparateLine />
        </div>
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
