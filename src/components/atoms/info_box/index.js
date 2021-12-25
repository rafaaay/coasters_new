import React from "react";
import PropTypes from "prop-types";

function InfoBox({ number, text }) {
  return (
    <div className="info_box">
      <span>{number}</span>
      <p>{text}</p>
    </div>
  );
}

export default InfoBox;

InfoBox.propTypes = {
  text: PropTypes.string,
  number: PropTypes.string,
};
