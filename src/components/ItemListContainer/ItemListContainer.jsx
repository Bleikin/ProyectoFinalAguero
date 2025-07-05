import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Producto from '../Producto';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const productosRef = collection(db, "productos");

    const getFilteredProducts = async () => {
      try {
        const snapshot = await getDocs(productosRef);
        let allProducts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        if (categoryId) {
          const byBrand = allProducts.filter(
            (prod) =>
              prod.marca &&
              prod.marca.toLowerCase() === categoryId.toLowerCase()
          );

          if (byBrand.length > 0) {
            allProducts = byBrand;
          } else {
            allProducts = allProducts.filter(
              (prod) =>
                prod.categorias &&
                prod.categorias.toLowerCase() === categoryId.toLowerCase()
            );
          }
        }

        setProducts(allProducts);
      } catch (error) {
        console.error("Error al obtener productos de Firebase:", error);
      } finally {
        setLoading(false);
      }
    };

    getFilteredProducts();
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
