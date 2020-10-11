// React
import React from "react";
// Components
// Router
import { Link } from "react-router-dom";
// Styles
import "./styles.scss";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <h1>Encabezado</h1>
      </header>

      <nav className="header__menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Contacto</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
