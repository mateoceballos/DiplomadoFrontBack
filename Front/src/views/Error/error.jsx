import React from "react";
import imgBack from "../../assets/images/NoMatch/NoMatch.jpg";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const history = useNavigate();
  const comeBack = () => {
    history("");
  };
  return (
    <>
      <div className="NoMatch">
        <div
          className="imgMatch"
          style={{ backgroundImage: `url(${imgBack})` }}
        >
          <p>Estamos trabajando para usted</p>
          <div
            className="buttonHome"
            onClick={() => {
              comeBack();
            }}
          >
            Volver
          </div>
        </div>
      </div>
    </>
  );
}
