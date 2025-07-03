import React, { createContext, useState } from 'react';
import Swal from 'sweetalert2';

export const CartContext = createContext();

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const addToCart = (product, quantity = 1) => {
    setCarrito(prevCarrito => {
      const productoExistente = prevCarrito.find((item) => item.id === product.id);

      if (productoExistente) {
        const carritoActualizado = prevCarrito.map((item) =>
          item.id === product.id
            ? { ...item, cantidad: item.cantidad + quantity }
            : item
        );
        Toast.fire({
          icon: 'info',
          title: `Agregados ${quantity} más de ${product.nombre}`
        });
        return carritoActualizado.filter(item => item.cantidad > 0);
      } else {
        if (quantity > 0) {
          Toast.fire({
            icon: 'success',
            title: `${quantity} ${product.nombre} agregado(s) al carrito`
          });
          return [...prevCarrito, { ...product, cantidad: quantity }];
        }
        return prevCarrito;
      }
    });
  };

  const removeFromCart = (productId) => {
    setCarrito(prevCarrito => {
      const removedItem = prevCarrito.find(item => item.id === productId);
      if (removedItem) {
        Toast.fire({
          icon: 'warning',
          title: `${removedItem.nombre} eliminado del carrito`
        });
      }
      return prevCarrito.filter((item) => item.id !== productId);
    });
  };

  const incrementQuantity = (productId) => {
    setCarrito(prevCarrito =>
      prevCarrito.map(item =>
        item.id === productId ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  const decrementQuantity = (productId) => {
    setCarrito(prevCarrito =>
      prevCarrito.map(item =>
        item.id === productId ? { ...item, cantidad: Math.max(1, item.cantidad - 1) } : item
      ).filter(item => item.cantidad > 0) 
    );
  };

  const clearCart = () => {
    setCarrito([]);
    Swal.fire({
      icon: 'info',
      title: 'Carrito Vaciado',
      text: 'Todos los productos han sido eliminados del carrito.',
      showConfirmButton: false,
      timer: 1500
    });
  };

  const getTotal = () => {
    return carrito.reduce((total, item) => total + item.precio * item.cantidad, 0).toFixed(2);
  };

  const totalItemsInCart = () => {
    return carrito.reduce((total, item) => total + item.cantidad, 0);
  };

  return (
    <CartContext.Provider value={{
      carrito,
      addToCart,
      removeFromCart,
      incrementQuantity,
      decrementQuantity,
      clearCart,
      getTotal,
      totalItemsInCart
    }}>
      {children}
    </CartContext.Provider>
  );
};