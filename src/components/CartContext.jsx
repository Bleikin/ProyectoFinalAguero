import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto, cantidadAAgregar = 1) => {
    const productoExistente = carrito.find((item) => item.id === producto.id);

    if (productoExistente) {
      const carritoActualizado = carrito.map((item) =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + cantidadAAgregar } 
          : item
      );

      setCarrito(carritoActualizado.filter(item => item.cantidad > 0));
    } else {
      if (cantidadAAgregar > 0) {
        setCarrito([...carrito, { ...producto, cantidad: cantidadAAgregar }]);
      }
    }
  };


  const eliminarProducto = (productoId) => {
    setCarrito(carrito.filter((item) => item.id !== productoId));
  };


  const vaciarCarrito = () => {
    setCarrito([]);
  };


  const getTotalItemsInCart = () => {
    return carrito.reduce((total, item) => total + item.cantidad, 0);
  };

  return (
    <CartContext.Provider value={{
      carrito,
      agregarAlCarrito,
      eliminarProducto,  
      vaciarCarrito,     
      getTotalItemsInCart 
    }}>
      {children}
    </CartContext.Provider>
  );
};