import React from 'react';
import { Star } from 'lucide-react';
import { Product } from '../types';
import { useCartStore } from '../store/useCartStore';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />
      <h3 className="text-lg font-semibold mb-2 flex-grow">{product.title}</h3>
      <div className="flex items-center mb-2">
        <div className="flex items-center text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              fill={i < Math.floor(product.rating.rate) ? 'currentColor' : 'none'}
            />
          ))}
        </div>
        <span className="text-sm text-gray-600 ml-2">({product.rating.count})</span>
      </div>
      <div className="flex items-center justify-between mt-2">
        <span className="text-xl font-bold">${product.price}</span>
        <button
          onClick={() => addToCart(product)}
          className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}