import productosTecnologia from "../dataproductos";
import Producto from "./Producto";

function Productos() {
  return (
    <div id="container">
        {productosTecnologia.map(prod=>(
            <Producto key={prod.id} {...prod}/>
         ))}
    </div>
  )
}

export default Productos