import React, { useContext, useState } from 'react';
import { CartContext } from "../CartContext";
import CartModal from './CartModal';
import { MdOutlineShoppingCart } from "react-icons/md";


const CartWidget = () => {
  const { carrito } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const totalCantidad = carrito.reduce((total, item) => total + item.cantidad, 0);

  return (
    <div className="cart-widget-container">
      {}
      <button className="cart-icon-button" onClick={() => setIsCartOpen(!isCartOpen)}>
        <MdOutlineShoppingCart />
        {}
        {totalCantidad > 0 && <span className="cart-count">{totalCantidad}</span>}
      </button>

      {}
      {isCartOpen && (
        <CartModal onClose={() => setIsCartOpen(false)} />
      )}
    </div>
  );
};

export default CartWidget;