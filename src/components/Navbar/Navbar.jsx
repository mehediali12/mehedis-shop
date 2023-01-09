import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <h1 className="navbar__title">Mehedi's Shop</h1>
        <div className="navbar__links">
          <Link to="/">Shop</Link>
          <Link to="/cart">
            <ShoppingCart size={32} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
