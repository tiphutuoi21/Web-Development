'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          FigureShop
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-blue-300 transition-colors">
                Trang chủ
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-blue-300 transition-colors relative">
                Giỏ hàng
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-blue-300 transition-colors">
                Đăng nhập
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}