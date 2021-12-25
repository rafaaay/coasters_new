import React from "react";
import InfoBox from "../../atoms/info_box";

function Facts() {
  var fact_1 = {
    number: "86%",
    text: "86% of all people visiting a restaurant, bar, hotel, or event look at a coaster for more than 5 seconds. ",
  };

  var fact_2 = {
    number: "83%",
    text: "83% holds or plays around with the coaster for more than 10 seconds.",
  };

  var fact_3 = {
    number: "74%",
    text: "74% of people use coaster marketing as subject to talk about inside an establishment.",
  };

  return (
    <section className="section facts">
      <div className="container">
        <div className="facts__content">
          <InfoBox number={fact_1.number} text={fact_1.text} />
          <InfoBox number={fact_2.number} text={fact_2.text} />
          <InfoBox number={fact_3.number} text={fact_3.text} />
        </div>
      </div>
    </section>
  );
}

export default Facts;
