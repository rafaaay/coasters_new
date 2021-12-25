import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

// components
// import ProductBlock from "../../atoms/product_block";
import SVGOurProducts from "../../svgs/art_our_products";

function Products() {
  return (
    <section className="section products">
      <div className="container">
        <div className="section__body">
          <div className="section__image">
            <SVGOurProducts />
          </div>

          <div className="section__content">
            <h2 className="heading heading--primary">Our Products</h2>
            <p>
              The coasters are made from pulp material from Finland, Europe. Our
              coasters are ideal to stop fluids and condensation ruining your
              table. With regular condensation our coasters are reusable for
              quiet some time. Coasters.ph offers always double-sided full color
              printing. The minimum number of coasters that can be ordered for a
              bulk price is 500 pieces (5 rolls of 100 pieces).
            </p>
            <div className="products__button">
              <Router>
                <Link to="/expenses" className="button button--red">
                  View Products
                </Link>
              </Router>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
