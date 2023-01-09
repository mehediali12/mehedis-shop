import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const Product = (props) => {
  const { id, productName, price, productImg } = props.data;

  const { addItemToCart, cartItems } = useContext(ShopContext);

  const cartItemQuantity = cartItems[id];

  return (
    <div className="product">
      <img src={productImg} alt={productName} className="product__img" />
      <div className="product__description">
        <p className="product__name">
          <b>{productName}</b>
        </p>
        <p className="product__price">£{price}</p>
      </div>
      <button className="product__cart-btn" onClick={() => addItemToCart(id)}>
        Add To Cart {cartItemQuantity > 0 && { cartItemQuantity }}
      </button>
    </div>
  );
};

export default Product;
