import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import productosTecnologia from "../../dataproductos";

function Navbar() {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [uniqueBrands, setUniqueBrands] = useState([]);

  useEffect(() => {
    const brands = [...new Set(productosTecnologia.map(p => p.marca))];
    setUniqueBrands(brands);
  }, []);

  const handleMouseEnterProducts = () => {
    setIsProductsDropdownOpen(true);
  };

  const handleMouseLeaveProducts = () => {
    setIsProductsDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo-link">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li
          className="products-dropdown-container"
          onMouseEnter={handleMouseEnterProducts}
          onMouseLeave={handleMouseLeaveProducts}
        >
          <Link to="/Productos" className="nav-item-text">Productos</Link>
          {isProductsDropdownOpen && (
            <div className="dropdown-menu">
              <Link
                to="/productos"
                className="dropdown-item"
                onClick={() => setIsProductsDropdownOpen(false)}
              >
                Todas las Marcas
              </Link>
              {uniqueBrands.map(brand => (
                <Link
                  key={brand}
                  to={`/category/${brand}`}
                  className="dropdown-item"
                  onClick={() => setIsProductsDropdownOpen(false)}
                >
                  {brand}
                </Link>
              ))}
            </div>
          )}
        </li>
        <li>
          <Link to="/Contacto">Contacto</Link>
        </li>
      </ul>

      <div className="navbar-cart">
        <CartWidget />
      </div>
    </nav>
  );
}

export default Navbar;