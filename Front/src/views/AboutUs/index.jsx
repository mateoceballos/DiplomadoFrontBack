import React from "react";
import img3 from "../../assets/images/Views/index/lib1.webp";
import img4 from "../../assets/images/Views/index/lib2.webp";
import img5 from "../../assets/images/Views/index/lib3.png";
import parraf1 from "../../assets/texts";
export default function Index() {
  return (
    <>
      <section className="SectionG">
        <div className="Container">
          <p className="Titulo">Nuestra historia</p>
          <p className="Historia">{parraf1.text1}</p>
        </div>
      </section>
      <section className="SectionG">
        <div className="Container">
          <p className="Titulo">Nuestros primeros proyectos</p>
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
          >
            <div className="carousel-inner tamaño">
              <div className="carousel-item active">
                <img
                  src={img3}
                  className="d-block w-100"
                  height="200vw"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={img4}
                  className="d-block w-100"
                  height="200vw"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={img5}
                  className="d-block w-100"
                  height="200vw"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
