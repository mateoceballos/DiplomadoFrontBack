import React from "react";
import img3 from "../../assets/images/Views/index/Carrusel1.png";
import img4 from "../../assets/images/Views/index/Carrusel2.jpg";
import img5 from "../../assets/images/Views/index/carrusel3.jfif";
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
          <div id="carouselExampleFade" class="carousel slide carousel-fade">
            <div class="carousel-inner tamaño">
              <div class="carousel-item active">
                <img
                  src={img3}
                  class="d-block w-100"
                  height="200vw"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src={img4}
                  class="d-block w-100"
                  height="200vw"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src={img5}
                  class="d-block w-100"
                  height="200vw"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
