import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="menu-navBar">
      <h1 className="titulo">Theo</h1>
      <ul className="menu-lista">
        <li>
          <a href="V" className="lista">
            Productos
          </a>
        </li>
        <li>
          <a href="V" className="lista">
            Promociones
          </a>
        </li>
        <li>
          <a href="V" className="lista">
            Contacto
          </a>
        </li>
      </ul>
      <CartWidget/>
    </div>
  );
};

export default NavBar;
