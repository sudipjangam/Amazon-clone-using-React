import React from 'react';
import { Timer } from 'lucide-react';
import { Deal } from '../../types';
import { useCartStore } from '../../store/useCartStore';

interface DealCardProps {
  deal: Deal;
}

export function DealCard({ deal }: DealCardProps) {
  const addToCart = useCartStore((state) => state.addToCart);
  const discountedPrice = deal.price * (1 - deal.discountPercentage / 100);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
      <div className="relative">
        <img
          src={deal.image}
          alt={deal.title}
          className="w-full h-48 object-contain mb-4"
        />
        <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md">
          {deal.discountPercentage}% OFF
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-2 flex-grow">{deal.title}</h3>
      
      <div className="mb-2">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Timer size={16} />
          <span>Deal ends in {deal.timeLeft}</span>
        </div>
      </div>

      <div className="flex items-center space-x-2 mb-4">
        <span className="text-2xl font-bold">${discountedPrice.toFixed(2)}</span>
        <span className="text-gray-500 line-through">${deal.price.toFixed(2)}</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
        <div 
          className="bg-red-500 h-2 rounded-full"
          style={{ width: `${deal.claimed}%` }}
        />
      </div>
      
      <div className="text-sm text-gray-600 mb-4">
        {deal.claimed}% claimed
      </div>

      <button
        onClick={() => addToCart({
          ...deal,
          id: deal.id,
          quantity: 1,
          category: deal.category,
          description: deal.description,
          rating: { rate: deal.rating, count: deal.ratingCount }
        })}
        className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
}