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
         <NavLink to= "/" 
         className={({isActive })=> isActive ? "active" : "inactive" } >
          Inicio
         </NavLink>
        </li>
        <li className="lista">
        <NavLink to= "/:body"
         className={({isActive })=> isActive ? "active" : "inactive" } >
          Body
         </NavLink>
        </li>
        <li className="lista">
        <NavLink to= "/:remeras" 
         className={({isActive })=> isActive ? "active" : "inactive" } >
          Remeras
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
