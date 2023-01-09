import { useContext } from "react";
import CartItem from "../../components/CartItem/CartItem";
import { ShopContext } from "../../context/ShopContext";
import { PRODUCTS } from "../../products";
import "./Cart.scss";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCart } = useContext(ShopContext);
  const totalAmount = getTotalCart();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1 className="cart__heading">Items in your cart:</h1>
      </div>
      <div className="cart__cart-items">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Total: £{totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <p>Your Cart is Empty</p>
      )}
    </div>
  );
};

export default Cart;
