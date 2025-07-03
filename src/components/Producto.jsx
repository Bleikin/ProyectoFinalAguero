import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

function Producto({ product }) {
  const { addToCart } = useContext(CartContext);
  const { nombre, descripcion, marca, precio, id, categorias, imagen } = product;

  const handleAddToCart = () => {
    addToCart(product, 1);
    console.log(`Producto "${nombre}" con ID: ${id} agregado al carrito.`);
  };

  return (
    <div className="card">
      <Link to={`/item/${id}`} className="link-detalle">
        <img src={imagen} alt={nombre} className="producto-imagen" />
        <h2>{nombre}</h2>
        <h2>${precio}</h2>
        <p>{marca}</p>
      </Link>
      <button onClick={handleAddToCart} className="btn-agregar">
        Agregar al carrito
      </button>
    </div>
  );
}

export default Producto;
