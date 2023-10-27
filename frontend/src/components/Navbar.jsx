
import React  from 'react';

import ProductSearch from './ProductSearch';
import SortProducts from './SortProducts';

export default function Navbar({ cartCount, onProductsClick, onCartClick, onSearch, onSort, currentPage, products }) {

  const handleCartClick = () => {
    onCartClick();
  };

  const handleProductsClick = () => {
    onProductsClick();
  };

  return (
    <div className="navbar">
      {currentPage === 'products' && (
        <>
          <div className="search-and-sort">
            <ProductSearch onSearch={onSearch} products={products} />
            <SortProducts onSort={onSort} />
          </div>
        </>
      )}

      <button onClick={handleProductsClick}>Products</button>
      <button onClick={handleCartClick}>Cart ({cartCount})</button>
    </div>
  );
}