import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

function Detalle() {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Validar que itemId sea un string no vacío
    if (!itemId) {
      setLoading(false);
      setProducto(null);
      return;
    }

    const fetchProducto = async () => {
      try {
        const db = getFirestore();

        // Firestore IDs suelen ser strings, así que no parseamos a número
        const docRef = doc(db, "productos", itemId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProducto({ id: docSnap.id, ...docSnap.data() });
        } else {
          setProducto(null);
        }
      } catch (error) {
        console.error("Error al obtener producto:", error);
        setProducto(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProducto();
  }, [itemId]);

  if (loading) return <p>Cargando producto...</p>;

  if (!producto) return <h2>El producto seleccionado no existe</h2>;

  return (
    <div>
      <h2>Descripción del producto</h2>
      <h2>{producto.nombre}</h2>
      <img
        src={producto.imagen}
        alt={producto.nombre}
        style={{ width: "400px" }}
      />
      <p>{producto.descripcion}</p>
      <h3>${producto.precio}</h3>
      <p>Marca: {producto.marca}</p>
    </div>
  );
}

export default Detalle;
