import React from "react";
import images from "../../images";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <img src={images.logo.default} alt="coasters" />
        </div>
      </div>
    </header>
  );
}

export default Header;
