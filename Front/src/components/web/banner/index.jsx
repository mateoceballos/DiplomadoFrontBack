import React from "react";

export default function Index({ img }) {
  return (
    <section>
      <div className="bannerPublicity">
        <div className="degradeGen degradeRL" />
        <div className="degradeGen degradeLR" />
        <img src={img} alt="Banner" className="imgPublicity" />
      </div>
    </section>
  );
}
