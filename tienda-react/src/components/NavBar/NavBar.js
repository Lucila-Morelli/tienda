import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import {Link , NavLink} from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="menu-navBar">
      <h1 className="titulo">Theo</h1>
      <ul className="menu-lista">
        <li className="lista">
         <NavLink to= "/"  >
          Inicio
         </NavLink>
        </li>
        <li className="lista">
        <NavLink to= "/category/body" >
          Body
         </NavLink>
        </li>
        <li className="lista">
        <NavLink to= "/category/remera"  >
          Remeras
         </NavLink>
        </li>
        <li className="lista">
        <NavLink to= "/category/pantalon"  >
          Pantalon
         </NavLink>
        </li>
        <li>
         <Link to="/cart" className="carrito"><CartWidget/></Link>
        </li>
      </ul>
  
    </div>
  );
};

export default NavBar;
