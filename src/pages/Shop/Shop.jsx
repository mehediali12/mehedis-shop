import React from "react";
import { PRODUCTS } from "../../products";
import Product from "../../components/Product/Product";
import "./Shop.scss";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shop__container">
        <h2 className="shop__heading">
          Welcome! <br /> Have a look at what we have in stock!
        </h2>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
