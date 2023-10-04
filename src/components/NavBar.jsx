import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/cart">Carrito</Link></li>
        <li><Link to="/category/1">Categoría 1</Link></li>
        <li><Link to="/category/2">Categoría 2</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;