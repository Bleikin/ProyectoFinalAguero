import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import productosTecnologia from "../../dataproductos";

function Navbar() {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [uniqueBrands, setUniqueBrands] = useState([]);

  useEffect(() => {
    if (productosTecnologia && Array.isArray(productosTecnologia)) {
      const brands = [...new Set(productosTecnologia.map(p => p.marca))];
      setUniqueBrands(brands);
    }
  }, []);

  const handleMouseEnterProducts = () => {
    if (window.innerWidth > 768) {
      setIsProductsDropdownOpen(true);
    }
  };

  const handleMouseLeaveProducts = () => {
    if (window.innerWidth > 768) {
      setIsProductsDropdownOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsProductsDropdownOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsProductsDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo-link">
        <Link to="/" onClick={closeMobileMenu}>
          <img src={logo} alt="Logo de Tienda Spider" className="logo" />
        </Link>
      </div>

      <button className="hamburger-menu" onClick={toggleMobileMenu} aria-label="Abrir menú de navegación">
        &#9776;
      </button>

      <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" onClick={closeMobileMenu}>Inicio</Link>
        </li>
        <li
          className="products-dropdown-container"
          onMouseEnter={handleMouseEnterProducts}
          onMouseLeave={handleMouseLeaveProducts}
          onClick={(e) => {
            if (window.innerWidth <= 768) {
              e.preventDefault();
              setIsProductsDropdownOpen(!isProductsDropdownOpen);
            } else {
              closeMobileMenu();
            }
          }}
        >
          <Link to="/Productos" className="nav-item-text">Productos</Link>
          {isProductsDropdownOpen && (
            <div className="dropdown-menu">
              <Link
                to="/productos"
                className="dropdown-item"
                onClick={closeMobileMenu}
              >
                Todas las Marcas
              </Link>
              {uniqueBrands.map(brand => (
                <Link
                  key={brand}
                  to={`/category/${brand}`}
                  className="dropdown-item"
                  onClick={closeMobileMenu}
                >
                  {brand}
                </Link>
              ))}
            </div>
          )}
        </li>
        <li>
          <Link to="/Contacto" onClick={closeMobileMenu}>Contacto</Link>
        </li>
      </ul>

      <div className="navbar-cart">
        <CartWidget />
      </div>
    </nav>
  );
}

export default Navbar;