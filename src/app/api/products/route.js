import { products } from '../../data/products';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const search = searchParams.get('search');
  const priceFrom = searchParams.get('priceFrom');
  const priceTo = searchParams.get('priceTo');

  let filteredProducts = [...products];

  if (category) {
    filteredProducts = filteredProducts.filter(p => p.category === category);
  }

  if (search) {
    filteredProducts = filteredProducts.filter(p => 
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (priceFrom) {
    filteredProducts = filteredProducts.filter(p => p.price >= Number(priceFrom));
  }

  if (priceTo) {
    filteredProducts = filteredProducts.filter(p => p.price <= Number(priceTo));
  }

  return NextResponse.json(filteredProducts);
}