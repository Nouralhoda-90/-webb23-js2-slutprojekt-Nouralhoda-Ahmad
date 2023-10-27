import React from 'react';

export default function PurchaseButton({ onClick, purchaseMessage }) {
  return (
    <div className="purchase-button-container">
      <button className="purchase-button" onClick={onClick}>
        Betala
      </button>
      {purchaseMessage && <p className="purchase-message">{purchaseMessage}</p>}
    </div>
  );
}
