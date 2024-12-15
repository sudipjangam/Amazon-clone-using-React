import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../types';
import { useCartStore } from '../store/useCartStore';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCartStore();

  return (
    <div className="flex items-center gap-4 py-4 border-b">
      <img src={item.image} alt={item.title} className="w-24 h-24 object-contain" />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-gray-600">${item.price}</p>
        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
            className="p-1 rounded-md hover:bg-gray-100"
          >
            <Minus size={16} />
          </button>
          <span className="w-8 text-center">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="p-1 rounded-md hover:bg-gray-100"
          >
            <Plus size={16} />
          </button>
          <button
            onClick={() => removeFromCart(item.id)}
            className="p-1 text-red-500 hover:bg-red-50 rounded-md ml-4"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
      <div className="text-lg font-bold">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
    </div>
  );
}