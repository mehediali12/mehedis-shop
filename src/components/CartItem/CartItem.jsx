import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const CartItem = (props) => {
  const { id, productName, price, productImg } = props.data;
  const { cartItems, addItemToCart, removeItemFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <div className="cartItem">
      <img className="cartItem__img" src={productImg} alt={productName} />
      <div>
        <p className="cartItem__description">
          <b>{productName}</b>
        </p>
        <p className="cartItem__price">£{price}</p>

        <div className="countHandler">
          <button onClick={() => removeItemFromCart(id)}>-</button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addItemToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
