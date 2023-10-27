
import React, { useState } from 'react';

export default function SortProducts({ onSort }) {
  const [sortType, setSortType] = useState('asc');

  const handleSortChange = (event) => {
    setSortType(event.target.value); 
    onSort(event.target.value); 
  };

  return (
    <div className="sort-products">
      <label htmlFor="sort">Sort by </label>
      <select id="sort" value={sortType} onChange={handleSortChange}>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>
  );
}
