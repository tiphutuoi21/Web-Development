'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };

  const addToCart = async () => {
    try {
      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: product.id,
          quantity: 1
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add to cart');
      }

      alert('Thêm vào giỏ hàng thành công!');
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Không thể thêm vào giỏ hàng');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {/* Product Image */}
      <div className="relative h-48 bg-gray-100">
        <Image
          src={product.image || '/placeholder-image.svg'}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {product.discount && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
            -{product.discount}%
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-gray-800">{product.name}</h3>
        
        <div className="flex items-center gap-2 mb-3">
          <span className="text-red-500 font-bold text-lg">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-gray-400 line-through text-sm">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        <div className="flex space-x-2">
          <Link
            href={`/product/${product.id}`}
            className="flex-1 text-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Xem chi tiết
          </Link>
          <button
            onClick={addToCart}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            Thêm
          </button>
        </div>
      </div>
    </div>
  );
}