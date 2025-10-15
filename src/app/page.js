'use client';

import { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import { products } from './data/products';

export default function Home() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (searchParams) => {
    let filtered = products;

    // Filter by search term
    if (searchParams.searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchParams.searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchParams.searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (searchParams.category) {
      filtered = filtered.filter(product => product.category === searchParams.category);
    }

    // Filter by price range
    if (searchParams.priceFrom) {
      filtered = filtered.filter(product => product.price >= searchParams.priceFrom);
    }
    if (searchParams.priceTo) {
      filtered = filtered.filter(product => product.price <= searchParams.priceTo);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <SearchBar onSearch={handleSearch} />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">FigureShop</h1>
            <p className="text-xl md:text-2xl mb-8">Cửa hàng Figure chính hãng #1 Việt Nam</p>
            <p className="text-lg opacity-90">Anime • Game • Marvel • DC Comics</p>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Sản phẩm nổi bật
            </h2>
            
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Không tìm thấy sản phẩm nào phù hợp</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Chính hãng 100%</h3>
                <p className="text-gray-600">Tất cả sản phẩm đều chính hãng, có tem bảo hành</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Giá tốt nhất</h3>
                <p className="text-gray-600">Cam kết giá tốt nhất thị trường</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Giao hàng nhanh</h3>
                <p className="text-gray-600">Giao hàng toàn quốc trong 1-3 ngày</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}