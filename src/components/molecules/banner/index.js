import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedal,
  faGlassCheers,
  faLeaf,
  faCrown,
} from "@fortawesome/free-solid-svg-icons";

// components
import SVGWhyUs from "../../svgs/art_why_us";

function Banner() {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner__heading">
          <h1 className="heading heading--primary">Why Coasters.ph</h1>
        </div>

        <div className="banner__content">
          <div className="banner__image">
            <SVGWhyUs />
          </div>

          <div className="banner__text">
            <ul>
              <li>
                <FontAwesomeIcon icon={faMedal} />
                We are the number one coaster manufacturer European quality
                coasters inside the Philippines.
              </li>

              <li>
                <FontAwesomeIcon icon={faGlassCheers} />
                Coasters are an ideal to tool to communicate with your clients
                and at the same time make sure your tables get more appealing.
              </li>

              <li>
                <FontAwesomeIcon icon={faCrown} />
                All our coasters are produced in Germany, so we can guarantee
                the highest quality of material and perfect double-sided full
                color printing.
              </li>

              <li>
                <FontAwesomeIcon icon={faLeaf} />
                Our coasters are 100% biodegradable.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
