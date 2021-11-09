import React from "react";
import "./styles/style.scss";

// slick
import "./styles/slick.scss";
import "./styles/slick-theme.scss";

// components
import Header from "./components/molecules/header";
import Banner from "./components/molecules/banner";
import AboutUs from "./components/molecules/about_us";
import Facts from "./components/molecules/facts";
import Products from "./components/molecules/products";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <AboutUs />
      <Facts />
      <Products />
    </div>
  );
}

export default App;
