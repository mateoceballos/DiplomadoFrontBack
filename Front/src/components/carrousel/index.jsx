import React, { useRef, useEffect, useState } from "react";
import BArrow from "../../assets/images/General/BArrow.png";
import NArrow from "../../assets/images/General/NArrow.png";

const Carousel = ({
  slides,
  automatic = true,
  boxImage = "30vw",
  imageInter = "29vw",
}) => {
  const distance = "40"; // Tamaño en vw que se dejará de ancho a los contenedores de las imagenes
  const vwWidth = window.innerWidth;
  const sizeInPx = (distance * vwWidth) / 100;
  const containerRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [leftOpa, setLeftOpa] = useState(false);
  const [rightOpa, setRightOpa] = useState(false);

  useEffect(() => {
    if (automatic) {
      const intervalId = setInterval(() => {
        const ScrollToStart =
          containerRef.current.scrollLeft + containerRef.current.clientWidth;
        if (containerRef.current) {
          if (ScrollToStart >= containerRef.current.scrollWidth) {
            containerRef.current.scrollLeft = 0;
            setScrollLeft(0);
            setLeftOpa(true);
            setRightOpa(false);
            console.log("entrooo");
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
      }, 5000); // 5000 milisegundos = 5 segundos
      return () => clearInterval(intervalId);
    }
  }, [sizeInPx, scrollLeft, automatic]);

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
              <div
                key={index}
                className="imgGeneral"
                style={{ height: imageInter, width: boxImage }}
              >
                <div
                  className="contentImage"
                  style={{ height: imageInter, width: boxImage }}
                >
                  <img
                    src={slide}
                    alt=""
                    style={{ height: imageInter, width: imageInter }}
                  />
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
