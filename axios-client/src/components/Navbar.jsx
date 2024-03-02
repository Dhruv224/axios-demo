import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">fakestore.com</div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/">Products</NavLink>
        </li>
        <li>
          <NavLink to="/addproduct">ADD Product</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
