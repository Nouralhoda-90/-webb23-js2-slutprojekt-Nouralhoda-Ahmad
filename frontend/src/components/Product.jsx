import React from 'react';

export default function Product({ product, onAddToCart }) {
  const handleAddToCart = () => {
    onAddToCart(product);
  };

 
  


  return (
    <div className="product">
      <h3>{product.name}</h3>
      <img className="product-image" src={product.image} alt={product.name} />
      <p>Price: {product.price} kr</p>
      <p>Stock: {product.stock}</p>
      {product.stock > 0 && <button onClick={handleAddToCart}>Add to Cart</button>}
    </div>
  );
}
