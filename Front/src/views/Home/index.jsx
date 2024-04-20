import React from "react";
import img1 from "../../assets/images/Views/index/img1.jpg";
import img2 from "../../assets/images/Views/index/vacation.jpg";
import Carousel from "../../components/carrousel";
import SeparateLine from "../../components/atoms/separateLine";

import parraf1 from "../../assets/texts";
export default function Index() {
  const slides = [img1, img2, img1, img2, img1, img2, img1, img2, img1, img2];
  return (
    <>
      <Carousel slides={slides} automatic={true} />
      <SeparateLine />

      <section className="SectionIndex sectionOrderImage">
        <div className="contentImage order1">
          <div className="contentImageDiv">
            <img src={img1} alt="" />
            <div
              className="imagenSuperpuesta"
              style={{ backgroundImage: `url(${img1})` }}
            />
          </div>
        </div>
        <div className="contentText order2">
          <p className="titleSection">Acerca de nosotros</p>
          <p className="descSection">{parraf1.text1}</p>
        </div>
      </section>
      <section className="SectionIndex sectionOrderText">
        <div className="contentImage order2">
          <div className="contentImageDiv">
            <img src={img2} alt="" />
            <div
              className="imagenSuperpuesta"
              style={{ backgroundImage: `url(${img2})` }}
            />
          </div>
        </div>
        <div className="contentText order1">
          <p className="titleSection">Nuestros planes economicos</p>
          <p className="descSection">{parraf1.text1}</p>
        </div>
      </section>
    </>
  );
}
