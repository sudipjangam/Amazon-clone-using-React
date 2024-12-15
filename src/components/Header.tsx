import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';

export function Header() {
  const { items } = useCartStore();
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            Amazon Clone
          </Link>
          
          <div className="flex-1 mx-6">
            <div className="flex items-center bg-white rounded-md">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 text-gray-900 rounded-l-md focus:outline-none"
              />
              <button className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-r-md hover:bg-yellow-500">
                <Search size={20} />
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/account" className="flex items-center hover:text-yellow-400">
              <User size={20} className="mr-1" />
              <span>Account</span>
            </Link>
            <Link to="/cart" className="flex items-center hover:text-yellow-400">
              <div className="relative">
                <ShoppingCart size={20} className="mr-1" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {itemCount}
                  </span>
                )}
              </div>
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}