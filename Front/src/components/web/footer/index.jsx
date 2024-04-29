import React from "react";
import Logo from "../../../assets/images/General/logo.png";
import one from "../../../assets/images/Componentes/Footer/one.svg";
import two from "../../../assets/images/Componentes/Footer/two.svg";
import three from "../../../assets/images/Componentes/Footer/arturita.svg";
import SeparateLine from "../../atoms/separateLine";

export default function Index() {
  return (
    <>
      <SeparateLine />
      <footer>
        <div className="imageFooter">
          <img src={Logo} alt="" />
        </div>
        <div className="infoContent">
          <div className="contactUs">
            <p className="titleContact">Contactanos</p>
            <p className="info">info@books.com</p>
            <p className="info">Calle falsa 123</p>
          </div>
        </div>
        <div className="alliesInfo">
          <p className="title">Nuestros aliados:</p>
          <div className="alliesSpaces">
            <img src={one} alt="" />
            <p>Harry Potter</p>
          </div>
          <div className="alliesSpaces">
            <img src={two} alt="" />
            <p>Shinobu Chiquita</p>
          </div>
          <div className="alliesSpaces">
            <img src={three} alt="" />
            <p>Arturita Pendragon</p>
          </div>
        </div>
      </footer>
    </>
  );
}
