import React, { useRef, useEffect, useState } from "react";
import BArrow from "../../../assets/images/General/BArrow.png";
import NArrow from "../../../assets/images/General/NArrow.png";

const Carousel = ({
  slides,
  automatic = true,
  boxImage = "30vw",
  boxImageResp = "60vw",
  imageInter = "29vw",
  imageInterResp = "59vw",
}) => {
  const distance = "40"; // Tamaño en vw que se dejará de ancho a los contenedores de las imagenes
  const vwWidth = window.innerWidth;
  const sizeInPx = (distance * vwWidth) / 100;
  const containerRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [leftOpa, setLeftOpa] = useState(false);
  const [rightOpa, setRightOpa] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [styleBox, setStyleBox] = useState({});
  const [styleImage, setStyleImage] = useState({});

  useEffect(() => {
    if (automatic) {
      const intervalId = setInterval(() => {
        const ScrollToStart =
          containerRef.current.scrollLeft + containerRef.current.clientWidth;
        let valWidth = containerRef.current.scrollWidth * 0.1;
        valWidth = containerRef.current.scrollWidth - 100;
        // const rest =
        if (containerRef.current) {
          if (ScrollToStart >= valWidth) {
            containerRef.current.scrollLeft = 0;
            setScrollLeft(0);
            setLeftOpa(true);
            setRightOpa(false);
          } else {
            setLeftOpa(false);
            containerRef.current.scrollLeft += sizeInPx;
            setScrollLeft((containerRef.current.scrollLeft += sizeInPx));
            const sum =
              containerRef.current.scrollLeft +
              sizeInPx +
              containerRef.current.clientWidth;
            if (sum >= containerRef.current.scrollWidth) {
              setRightOpa(true);
            }
          }
        }
      }, 3000); // 5000 milisegundos = 5 segundos
      return () => clearInterval(intervalId);
    }
  }, [sizeInPx, scrollLeft, automatic]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    // Agregar un event listener para el evento 'resize' cuando el componente se monta
    window.addEventListener("resize", handleResize);
    setStyleImage(
      screenWidth > 600
        ? { height: imageInter, width: imageInter }
        : { height: imageInterResp, width: imageInterResp }
    );
    setStyleBox(
      screenWidth > 600
        ? { height: imageInter, width: boxImage }
        : { height: imageInterResp, width: boxImageResp }
    );
    console.log(styleBox);
    // Eliminar el event listener cuando el componente se desmonta para evitar fugas de memoria
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenWidth]);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    setStyleImage(
      screenWidth > 600
        ? { height: imageInter, width: imageInter }
        : { height: imageInterResp, width: imageInterResp }
    );
    setStyleBox(
      screenWidth > 600
        ? { height: imageInter, width: boxImage }
        : { height: imageInterResp, width: boxImageResp }
    );
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const goToPrevSlide = () => {
    if (containerRef.current) {
      if (containerRef.current.scrollLeft === 0) {
        containerRef.current.scrollLeft = containerRef.current.scrollWidth;
        setScrollLeft(containerRef.current.scrollWidth);
      } else {
        containerRef.current.scrollLeft -= sizeInPx;
        setScrollLeft((containerRef.current.scrollLeft -= sizeInPx));
      }
    }
  };

  const goToNextSlide = () => {
    const ScrollToStart =
      containerRef.current.scrollLeft + containerRef.current.clientWidth;
    if (containerRef.current) {
      if (ScrollToStart >= containerRef.current.scrollWidth) {
        containerRef.current.scrollLeft = 0;
        setScrollLeft(0);
      } else {
        containerRef.current.scrollLeft += sizeInPx;
        setScrollLeft((containerRef.current.scrollLeft += sizeInPx));
      }
    }
  };

  return (
    <div className="carousel">
      <button className={`${leftOpa && "opa"} prev`} onClick={goToPrevSlide}>
        <img src={BArrow} alt="Back" />
      </button>
      <div className="ContentCarrusel">
        <div className="degradeGen degradeRL" />
        <div className="degradeGen degradeLR" />
        <div className="slideContainer" ref={containerRef}>
          {slides.map((slide, index) => {
            return (
              <div key={index} className="imgGeneral" style={styleBox}>
                <div className="contentImage" style={styleBox}>
                  <img src={slide} alt="" style={styleImage} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <button className={`${rightOpa && "opa"} next`} onClick={goToNextSlide}>
        <img src={NArrow} alt="Back" />
      </button>
    </div>
  );
};

export default Carousel;
