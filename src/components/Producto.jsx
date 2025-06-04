import { Link } from "react-router-dom";

function Producto({ nombre, descripcion, marca, precio, id, categorias, imagen }) {
  const producto = { nombre, descripcion, marca, precio, id, categorias, imagen };

  return (
    <div className="card">
      <Link to={`/productos/${id}`} className="card">
        <img src={imagen} alt={nombre} className="producto-imagen" />
        <h2>{nombre}</h2>
        <h2>${precio}</h2>
        <p>{marca}</p>
      </Link>
      <button onClick={() => agregarAlCarrito(producto)} className="btn-agregar">
      Agregar al carrito
      </button>
    </div>
  );
}

export default Producto;