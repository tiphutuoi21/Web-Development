'use client';

import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');

  const handleSearch = () => {
    onSearch({
      searchTerm,
      category,
      priceFrom: priceFrom ? parseInt(priceFrom) : null,
      priceTo: priceTo ? parseInt(priceTo) : null,
    });
  };

  return (
    <section className="bg-gray-200 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {/* Search input */}
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 min-w-64"
          />

          {/* Category select */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Danh mục</option>
            <option value="anime">Anime</option>
            <option value="game">Game</option>
            <option value="marvel">Marvel</option>
          </select>

          {/* Price range */}
          <input
            type="number"
            placeholder="Giá từ"
            value={priceFrom}
            onChange={(e) => setPriceFrom(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-32"
          />

          <input
            type="number"
            placeholder="Đến"
            value={priceTo}
            onChange={(e) => setPriceTo(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-32"
          />

          {/* Search button */}
          <button
            onClick={handleSearch}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Tìm kiếm
          </button>
        </div>
      </div>
    </section>
  );
}