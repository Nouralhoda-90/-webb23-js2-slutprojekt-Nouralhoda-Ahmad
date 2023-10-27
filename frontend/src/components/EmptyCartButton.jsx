import React from 'react';

export default function EmptyCartButton({ onEmptyCart }) {
  return (
    <button onClick={onEmptyCart} className="empty-cart-button">
      Empty Cart
    </button>
  );
}
