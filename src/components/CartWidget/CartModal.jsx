import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import './CartModal.css';
import { HiTrash } from 'react-icons/hi2';

const CartModal = ({ onClose }) => {
  const { carrito, incrementQuantity, decrementQuantity, removeFromCart, getTotal } = useContext(CartContext);

  return (
    <div className="cart-modal-overlay" onClick={onClose}>
      <div className="cart-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="cart-modal-header">
          <h2>Carrito De Compras</h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>

        <div className="cart-items-list">
          {carrito.length === 0 ? (
            <p className="empty-cart-message">El carrito está vacío.</p>
          ) : (
            carrito.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.imagen} alt={item.nombre} className="cart-item-image" />
                <div className="cart-item-details">
                  <p className="cart-item-name">{item.nombre}</p>
                  {}
                  <p className="cart-item-price">${item.precio.toFixed(2)}</p>
                </div>
                <div className="cart-item-controls">
                  <button onClick={() => decrementQuantity(item.id)}>-</button>
                  {}
                  <span>{item.cantidad}</span>
                  <button onClick={() => incrementQuantity(item.id)}>+</button>
                  <button onClick={() => removeFromCart(item.id)} className="remove-item-button"> <HiTrash /> </button>
                  {}
                  <span className="cart-item-subtotal">${(item.precio * item.cantidad).toFixed(2)}</span>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cart-modal-footer">
          <p className="cart-total">Total: ${getTotal()}</p>
          <button className="generate-order-button">Generar Orden</button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;