import React from "react";
import Logo from "../../assets/images/Componentes/Header/logo.jpg";
import one from "../../assets/images/Componentes/Footer/espanta.png";
import two from "../../assets/images/Componentes/Footer/sponge.png";
import three from "../../assets/images/Componentes/Footer/turtles.png";

export default function Index() {
  return (
    <footer>
      <div className="imageFooter">
        <img src={Logo} alt="" />
      </div>
      <div className="infoContent">
        <div className="contactUs">
          <p className="titleContact">Contactanos</p>
          <p className="info">info@vacations.com</p>
          <p className="info">Calle falsa 123</p>
        </div>
      </div>
      <div className="alliesInfo">
        <p className="title">Nuestros aliados:</p>
        <div className="alliesSpaces">
          <img src={one} alt="" />
          <p>Espanta tiburones</p>
        </div>
        <div className="alliesSpaces">
          <img src={two} alt="" />
          <p>Bob esponja</p>
        </div>
        <div className="alliesSpaces">
          <img src={three} alt="" />
          <p>Tortugas ninjas</p>
        </div>
      </div>
    </footer>
  );
}
