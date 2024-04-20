import React from "react";

export default function Index({ image }) {
  return (
    <section>
      <div className="bannerPublicity">
        <div className="degradeGen degradeRL" />
        <div className="degradeGen degradeLR" />
        <img src={image} alt="Banner" />
      </div>
    </section>
  );
}
