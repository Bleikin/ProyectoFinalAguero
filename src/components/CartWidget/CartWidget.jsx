import React, { useContext } from 'react';
import { CartContext } from "../CartContext";

const CartWidget = () => {
  const { carrito } = useContext(CartContext);

  const totalCantidad = carrito.reduce((total, item) => total + item.cantidad, 0);

  return (
    <div>
      🛒 {totalCantidad}
    </div>
  );
};

export default CartWidget;