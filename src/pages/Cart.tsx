import React from 'react';
import { Link } from 'react-router-dom';
import { CartItem as CartItemComponent } from '../components/CartItem';
import { useCartStore } from '../store/useCartStore';

export function Cart() {
  const { items, total, clearCart } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-600">Add some products to your cart to see them here.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-8">Shopping Cart</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-4">
          {items.map((item) => (
            <CartItemComponent key={item.id} item={item} />
          ))}
        </div>
        <div className="mt-8 border-t pt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold">Total:</span>
            <span className="text-2xl font-bold">${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <button
              onClick={clearCart}
              className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Clear Cart
            </button>
            <Link
              to="/checkout"
              className="px-6 py-2 bg-yellow-400 text-gray-900 rounded-md hover:bg-yellow-500"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}