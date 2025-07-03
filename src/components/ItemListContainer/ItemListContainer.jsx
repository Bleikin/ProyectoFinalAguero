import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Producto from '../Producto';
import productosTecnologia from '../../dataproductos';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const fetchData = new Promise((resolve) => {
      setTimeout(() => {
        let filteredProducts = productosTecnologia;

        if (categoryId) {
          const byBrand = productosTecnologia.filter(
            (prod) => prod.marca && prod.marca.toLowerCase() === categoryId.toLowerCase()
          );

          if (byBrand.length > 0) {
            filteredProducts = byBrand;
          } else {
            filteredProducts = productosTecnologia.filter(
              (prod) => prod.categorias && prod.categorias.toLowerCase() === categoryId.toLowerCase()
            );
          }
        }
        resolve(filteredProducts);
      }, 1000);
    });

    fetchData.then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <h1>{greeting || (categoryId ? `Productos de ${categoryId}` : "Todos nuestros productos")}</h1>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <div id="container">
          {products.length > 0 ? (
            products.map((product) => (
              <Producto key={product.id} product={product} />
            ))
          ) : (
            <p>No se encontraron productos para esta selección.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;