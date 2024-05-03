import React, { useState } from "react";
import axios from "axios";
import img1 from "../../assets/images/Login/back.jpeg";
import eOp from "../../assets/images/Login/eyeOp.png";
import eCl from "../../assets/images/Login/eyeCl.png";

export default function Index() {
  //General process
  const [regisProcess, setRegisProcess] = useState(false);
  //Login eyes
  const [seePassword, setSeePassword] = useState(false);
  // Values login
  const [emailVal, setEmailVal] = useState("");
  const [passVal, setPassVal] = useState("");
  //Login errors
  const [errorLoginEmail, setErrorLoginEmail] = useState(false);
  const [errorLoginPass, setErrorLoginPass] = useState(false);

  //Register password eyes
  const [seePasswordRegis, setSeePasswordRegis] = useState(false);
  const [seeConfirmPasswordRegis, setSeeConfirmPasswordRegis] = useState(false);
  //Values register
  const [regisNameVal, setRegisNameVal] = useState("");
  const [regisLastNameVal, setRegisLastNameVal] = useState("");
  const [regisEmailVal, setRegisEmailVal] = useState("");
  const [passValRegist, setPassRegistVal] = useState("");
  const [passValRegistConf, setPassRegistConfVal] = useState("");
  //Errors register
  const [errorRegisName, setErrorRegisName] = useState(false);
  const [errorRegisLastName, setErrorRegisLastName] = useState(false);
  const [errorRegisEmail, setErrorRegisEmail] = useState(false);
  const [errorRegisPass1, setErrorRegisPass1] = useState(false);
  const [errorRegisPass2, setErrorRegisPass2] = useState(false);
  // Loader y modal
  const [loader, setLoader] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalText, setModalText] = useState(false);

  const modalAction = () => {
    setModal(false);
  };
  const processLogin = async () => {
    let errors = 0;
    setLoader(true);
    if (emailVal.length === 0) {
      setErrorLoginEmail(true);
      errors += 1;
    } else {
      setErrorLoginEmail(false);
    }
    if (passVal.length === 0) {
      setErrorLoginPass(true);
      errors += 1;
    } else {
      setErrorLoginPass(false);
    }
    if (errors === 0) {
      setLoader(true);
      const loginUser = await axios.get("http://localhost:3001/user", {
        params: {
          filter: {
            email: emailVal,
            password: passVal,
          },
        },
      });
      if (loginUser.data.length > 0) {
        setModalText("!Usuario y clave correctos¡");
      } else {
        setModalText("Usuario o clave incorrecto");
      }
      setLoader(false);
      setModal(true);
      console.log("loginUser", loginUser.data);
    }
    setLoader(false);
  };
  const processRegister = async () => {
    let errors = 0;
    if (regisNameVal.length === 0) {
      errors += 1;
      setErrorRegisName(true);
    } else {
      setErrorRegisName(false);
    }
    if (regisLastNameVal.length === 0) {
      errors += 1;
      setErrorRegisLastName(true);
    } else {
      setErrorRegisLastName(false);
    }
    if (regisEmailVal.length === 0) {
      errors += 1;
      setErrorRegisEmail(true);
    } else {
      setErrorRegisEmail(false);
    }
    if (passValRegist.length === 0) {
      errors += 1;
      setErrorRegisPass1(true);
    } else {
      setErrorRegisPass1(false);
    }
    if (passValRegistConf.length === 0) {
      errors += 1;
      setErrorRegisPass2(true);
    } else {
      setErrorRegisPass2(false);
    }
    if (errors === 0) {
      setLoader(true);
      const createUser = await axios.post("http://localhost:3001/user", {
        name: regisNameVal,
        lastname: regisLastNameVal,
        email: regisEmailVal,
        password: passValRegist,
      });
      if (createUser.status === 200) {
        setModalText("Usuario creado con exito");
      } else {
        setModalText("Ha ocurrido un error al crear el usuario");
      }
      setLoader(false);
      setModal(true);
    }
  };
  return (
    <>
      {loader && (
        <div className="backLoader">
          <span className="loader"></span>
          <p className="pLoading">Cargando...</p>
        </div>
      )}
      {modal && (
        <div className="modaleExtern">
          <div className="modalInter">
            <p className="textModal">{modalText}</p>
            <button
              type="button"
              className="buttonModal"
              onClick={() => {
                modalAction();
              }}
            >
              Aceptar
            </button>
          </div>
        </div>
      )}
      <section className="sessionProcess">
        <img className="fondoRegister" src={img1} alt="fondoRegister" />
        <div className="contenSwitch">
          <p className="pSession">Inicia sesión</p>
          <input
            type="checkbox"
            id="btnSwitch"
            onChange={(e) => {
              const val = e.target.checked;
              if (val) {
                setRegisProcess(true);
              } else {
                setRegisProcess(false);
              }
            }}
          />
          <label htmlFor="btnSwitch" className="switchLabel"></label>
          <p>Crea tu cuenta</p>
        </div>
        <div className="LoginFlipRegister">
          <div className={`insideCard ${regisProcess && "backFlip"}`}>
            <div
              className="loginProcess"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  processLogin();
                }
              }}
            >
              <p className="title">INICIO DE SESIÓN</p>
              <div className="contentLogin">
                <div>
                  <p className="textInputs">Correo:</p>
                  <div
                    className={`divInputs ${errorLoginEmail && "errorData"}`}
                  >
                    <input
                      className="inputStyle"
                      type="text"
                      value={emailVal}
                      onChange={(e) => {
                        setEmailVal(e.target.value);
                      }}
                    />
                    <p className="errorText">Campo requerido</p>
                  </div>
                </div>
                <div>
                  <p className="textInputs">Contraseña:</p>
                  <div className={`divInputs ${errorLoginPass && "errorData"}`}>
                    <input
                      className="inputStyle"
                      type={`${seePassword ? "text" : "password"}`}
                      value={passVal}
                      onChange={(e) => {
                        setPassVal(e.target.value);
                      }}
                    />
                    <img
                      className="imgEyePass"
                      src={`${seePassword ? eOp : eCl}`}
                      alt="Ojito"
                      onClick={() => {
                        setSeePassword(!seePassword);
                      }}
                    />
                    <p className="errorText">Campo requerido</p>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="buttonContinueProcess"
                onClick={() => {
                  processLogin();
                }}
              >
                Iniciar sesión
              </button>
            </div>
            <div
              className="registerProcess"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  processRegister();
                }
              }}
            >
              <p className="title">Crea una cuenta</p>
              <div className="contentForm">
                <div>
                  <p className="textInputs">Nombres:</p>
                  <div className={`divInputs ${errorRegisName && "errorData"}`}>
                    <input
                      className="inputStyle"
                      type="text"
                      value={regisNameVal}
                      onChange={(e) => {
                        setRegisNameVal(e.target.value);
                      }}
                    />
                    <p className="errorText">Campo requerido</p>
                  </div>
                </div>
                <div>
                  <p className="textInputs">Apellido:</p>
                  <div
                    className={`divInputs ${errorRegisLastName && "errorData"}`}
                  >
                    <input
                      className="inputStyle"
                      type="text"
                      value={regisLastNameVal}
                      onChange={(e) => {
                        setRegisLastNameVal(e.target.value);
                      }}
                    />
                    <p className="errorText">Campo requerido</p>
                  </div>
                </div>
                <div className="mailRegister">
                  <p className="textInputs">Correo:</p>
                  <div
                    className={`divInputs ${errorRegisEmail && "errorData"}`}
                  >
                    <input
                      className="inputStyle"
                      type="text"
                      value={regisEmailVal}
                      onChange={(e) => {
                        setRegisEmailVal(e.target.value);
                      }}
                    />
                    <p className="errorText">Campo requerido</p>
                  </div>
                </div>
                <div>
                  <p className="textInputs">Contraseña:</p>
                  <div
                    className={`divInputs ${errorRegisPass1 && "errorData"}`}
                  >
                    <input
                      className="inputStyle"
                      type={`${seePasswordRegis ? "text" : "password"}`}
                      value={passValRegist}
                      onChange={(e) => {
                        setPassRegistVal(e.target.value);
                      }}
                    />
                    <img
                      className="imgEyePass"
                      src={`${seePasswordRegis ? eOp : eCl}`}
                      alt="Ojito"
                      onClick={() => {
                        setSeePasswordRegis(!seePasswordRegis);
                      }}
                    />
                    <p className="errorText">Campo requerido</p>
                  </div>
                </div>
                <div>
                  <p className="textInputs">Confirmar contraseña:</p>
                  <div
                    className={`divInputs ${errorRegisPass2 && "errorData"}`}
                  >
                    <input
                      className="inputStyle"
                      type={`${seeConfirmPasswordRegis ? "text" : "password"}`}
                      value={passValRegistConf}
                      onChange={(e) => {
                        setPassRegistConfVal(e.target.value);
                      }}
                    />
                    <img
                      className="imgEyePass"
                      src={`${seeConfirmPasswordRegis ? eOp : eCl}`}
                      alt="Ojito"
                      onClick={() => {
                        setSeeConfirmPasswordRegis(!seeConfirmPasswordRegis);
                      }}
                    />
                    <p className="errorText">Campo requerido</p>
                  </div>
                </div>
              </div>
              <button
                className="buttonContinueProcess"
                type="button"
                onClick={() => {
                  processRegister();
                }}
              >
                Crear cuenta
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
