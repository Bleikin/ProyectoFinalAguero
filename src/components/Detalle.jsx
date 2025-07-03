import productosTecnologia from "../dataproductos";
import { useParams } from "react-router-dom";

function Detalle() {
  const { itemId } = useParams();
  const idParsed = parseInt(itemId);

  if (isNaN(idParsed)) {
    return <h2>ID inválido</h2>;
  }

  const producto = productosTecnologia.find(prod => prod.id === idParsed);

  if (!producto) {
    return <h2>El producto seleccionado no existe</h2>;
  }

  return (
    <div>
      <h2>Descripción del producto</h2>
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} style={{ width: "400px" }} />
      <p>{producto.descripcion}</p>
      <h3>${producto.precio}</h3>
      <p>Marca: {producto.marca}</p>
    </div>
  );
}

export default Detalle;