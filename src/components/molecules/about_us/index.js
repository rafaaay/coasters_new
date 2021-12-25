import React from "react";
import SVGAboutUs from "../../svgs/art_about_us";

function AboutUs() {
  return (
    <section className="section">
      <div className="container">
        <div className="section__body">
          <div className="section__content">
            <h2 className="heading heading--primary">About Us</h2>
            <p>
              Coasters are one of the most effective ways of doing marketing.
              People will never toss away a coaster like flyer as a coaster
              always has a use case. Why print flyers anyway, when the same
              information can be on a coaster even a coaster is 4x cheaper, has
              a use case and are ecofriendly! After a phone and a glass, a
              coaster is the third most viewed item inside an establishment.
              This means coasters are an ideal tool to advertise your business
              information on.
            </p>
          </div>

          <div className="section__image">
            <SVGAboutUs />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
