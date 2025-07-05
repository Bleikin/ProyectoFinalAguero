import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

function Producto({ product }) {
  const { addToCart } = useContext(CartContext);
  const { titulo, descripcion, marca, precio, id, categorias, imagen } = product;

  const handleAddToCart = () => {
    addToCart(product, 1);
    console.log(`Producto "${titulo}" con ID: ${id} agregado al carrito.`);
  };

  return (
   <div className="card">
     <Link to={`/item/${id}`} className="link-detalle">
       <img src={imagen} alt={titulo} className="producto-imagen" />
       <h2>{titulo}</h2>
       <h2>${precio}</h2>
       <p>{marca}</p>
       <p>{descripcion}</p>
       <p className="categoria">Categoría: {categorias}</p>
     </Link>
    <button onClick={handleAddToCart} className="btn-agregar">
      Agregar al carrito
    </button>
  </div>
 );
}

export default Producto;
