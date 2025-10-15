import { NextResponse } from 'next/server';

let cart = [];

export async function GET() {
  return NextResponse.json(cart);
}

export async function POST(request) {
  const data = await request.json();
  
  if (!data.productId || !data.quantity) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }

  const existingItem = cart.find(item => item.productId === data.productId);
  
  if (existingItem) {
    existingItem.quantity += data.quantity;
  } else {
    cart.push({
      productId: data.productId,
      quantity: data.quantity
    });
  }

  return NextResponse.json(cart);
}

export async function PUT(request) {
  const data = await request.json();
  
  if (!data.productId || !data.quantity) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }

  cart = cart.map(item => 
    item.productId === data.productId 
      ? { ...item, quantity: data.quantity }
      : item
  );

  return NextResponse.json(cart);
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const productId = searchParams.get('productId');

  if (!productId) {
    return NextResponse.json(
      { error: 'Product ID is required' },
      { status: 400 }
    );
  }

  cart = cart.filter(item => item.productId !== Number(productId));
  return NextResponse.json(cart);
}