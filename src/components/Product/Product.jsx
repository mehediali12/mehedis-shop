import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

export const Product = (props) => {
  const { id, productName, price, productImg } = props.data;
  const { addItemToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img className="product__img" alt={productName} src={productImg} />
      <div className="product__description">
        <p className="product__name">
          <b>{productName}</b>
        </p>
        <p className="product__price"> £{price}</p>
      </div>
      <button className="product__cart-btn" onClick={() => addItemToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};

export default Product;
