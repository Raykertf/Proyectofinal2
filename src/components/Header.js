// src/components/Header.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUserCircle, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../img/logo.png"; // Ajusta la ruta si es diferente
import "./Header.css"
const Header = ({ toggleSidebar }) => {
  return (
    <header className="top-bar">
      <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={() => toggleSidebar(true)} />
      <div className="titulo-header">
        <h1 className="title">SnackFast</h1>
        <img src={logo} alt="logo" className="logo-image" />
      </div>
      <div className="top-bar-icons">
        <Link to="/carrito">
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
        <Link to="/profile">
          <FontAwesomeIcon icon={faUserCircle} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
