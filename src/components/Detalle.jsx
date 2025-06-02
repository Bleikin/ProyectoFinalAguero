import productosTecnologia from "../dataproductos";

import { useParams } from "react-router-dom";



function Detalle() {

    const {id} = useParams()

    console.log(id);

    const producto = productosTecnologia.find(prod=>prod.id===parseInt(id))

    if(!producto){
        return <h2>El producto seleccionado no existe</h2>
    }

  return (
    <div>
        <h2>Descripcion del producto</h2>
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
        <h3>{producto.precio}</h3>
    </div>
  )
}

export default Detalle