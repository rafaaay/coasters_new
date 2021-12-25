import React from "react";
import "./styles/style.scss";

// components
import Header from "./components/molecules/header";
import Banner from "./components/molecules/banner";
import AboutUs from "./components/molecules/about_us";
import Facts from "./components/molecules/facts";
import Products from "./components/molecules/products";
import Clientele from "./components/molecules/clientele";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <AboutUs />
      <Facts />
      <Products />
      <Clientele />
    </div>
  );
}

export default App;
