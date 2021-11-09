import React from "react";
import InfoBox from "../../atoms/info_box";

function Facts() {
  return (
    <section className="section facts">
      <div className="container">
        <div className="facts__content">
          <InfoBox />
          <InfoBox />
          <InfoBox />
          <InfoBox />
        </div>
      </div>
    </section>
  );
}

export default Facts;
