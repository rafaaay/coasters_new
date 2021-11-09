import React from "react";
import Slider from "react-slick";
import { BrowserRouter as Router, Link } from "react-router-dom";

// components
import ProductBlock from "../../atoms/product_block";

function Products() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };

  return (
    <section className="section products">
      <div className="container">
        <h2 className="heading heading--primary">Our Products</h2>

        <div className="products__slider">
          <Slider {...settings}>
            <ProductBlock />
            <ProductBlock />
            <ProductBlock />
            <ProductBlock />
            <ProductBlock />
          </Slider>
        </div>

        <div className="products__button">
          <Router>
            <Link to="/expenses" className="button button--white">
              View All Products
            </Link>
          </Router>
        </div>
      </div>
    </section>
  );
}

export default Products;
