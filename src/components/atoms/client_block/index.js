import React from "react";
import PropTypes from "prop-types";
// import images from "../../images";

function ClientBlock({ text, src, alt }) {
  return (
    <div className="clientele__block">
      <div>
        <p>{text}</p>
      </div>
      <div>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}

export default ClientBlock;

ClientBlock.propTypes = {
  text: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};
