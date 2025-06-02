import { Link, Outlet } from "react-router-dom"
import Navbar from "./Navbar/Navbar"

function Layout() {
  return (
       <>
        <Navbar>
            <ul>
                <li>
                    <Link to={"/"}>Inicio</Link>
                </li>
                <li>
                    <Link to={"/Productos"}>Productos</Link>
                </li>
                <li>
                    <Link to={"/Contacto"}>Contacto</Link>
                </li>
            </ul>
        </Navbar>
        <Outlet/>
    </>
  )     
}

export default Layout