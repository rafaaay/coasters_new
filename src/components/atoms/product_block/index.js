import React from "react";
import images from "../../images";

function ProductBlock() {
  return (
    <div className="product_block">
      <div className="product_block__image">
        <img src={images.product.default} alt="product name" />
      </div>
      <h3>Company Name</h3>
    </div>
  );
}

export default ProductBlock;
