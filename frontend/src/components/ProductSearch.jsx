import React, { useState } from 'react';

export default function ProductSearch({ onSearch, products }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    setShowMessage(false);
  };

  const handleInputKeyPress = (event) => {
    if (event.key === 'Enter') {
      const trimmedSearchTerm = searchTerm.trim().toLowerCase();
      const matchingProducts = products.filter(product =>
        product.name.toLowerCase().includes(trimmedSearchTerm)
      );

      if (matchingProducts.length === 0) {
        setShowMessage(true);
      } else {
        setShowMessage(false);
        onSearch(trimmedSearchTerm);
      }
    }
  };

  return (
    <div className="product-search">
      <input
        type="text"
        placeholder="Search for a product..."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleInputKeyPress}
      />
      {showMessage && <p>No matching products found.</p>}
    </div>
  );
}
