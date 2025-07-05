import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import { getFirestore, collection, getDocs } from "firebase/firestore";

function Navbar() {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [uniqueBrands, setUniqueBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const db = getFirestore();
        const productosRef = collection(db, "productos");
        const snapshot = await getDocs(productosRef);
        const productosList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Sacar marcas únicas y filtrar marcas que no estén vacías o nulas
        const brands = [...new Set(productosList
          .map(p => p.marca)
          .filter(marca => marca && marca.trim() !== "")
        )];

        setUniqueBrands(brands);
      } catch (error) {
        console.error("Error al obtener marcas de Firebase:", error);
      }
    };

    fetchBrands();
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
