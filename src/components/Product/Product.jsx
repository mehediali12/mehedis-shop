import React from "react";

const Product = (props) => {
  const { id, productName, price, productImg } = props.data;

  return (
    <div className="product">
      <img src={productImg} alt={productName} className="product__img" />
      <div className="product__description">
        <p className="product__name">
          <b>{productName}</b>
        </p>
        <p className="product__price">£{price}</p>
      </div>
      <button className="product__cart-btn">Add To Cart</button>
    </div>
  );
};

export default Product;
