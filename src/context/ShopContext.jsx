import { useState, createContext } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getCartData = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getCartData());

  const addItemToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeItemFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = { cartItems, addItemToCart, removeItemFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
