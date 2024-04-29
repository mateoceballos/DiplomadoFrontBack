import React from "react";

export default function Index({ data }) {
  const { title, imageUrl, resume } = data;
  return (
    <>
      <div className="mostPopular">
        <p className="titleGen">Libro mas reciente</p>
        <p className="pTitle">{title}</p>
        <img src={imageUrl} alt="mostPopular" />
        <p className="resume">{resume}</p>
      </div>
    </>
  );
}
