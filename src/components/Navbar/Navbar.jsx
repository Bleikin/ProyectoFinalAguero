import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import logo from "../../assets/logo.png";
import CartWidget from "../CartWidget/CartWidget";

function Navbar() {
  return (
    <nav className="navbar"> {}
      {}
      <Link to="/" className="navbar-logo-link"> {}
        <img className="logo" src={logo} alt="Logo de la marca" />
      </Link>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/Productos">Productos</Link>
        </li>
        <li>
          <Link to="/Contacto">Contacto</Link>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default Navbar;