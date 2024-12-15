import React from 'react';
import { GiftCard } from '../types';

const GIFT_CARDS: GiftCard[] = [
  {
    id: 1,
    provider: 'Amazon',
    image: 'https://images.unsplash.com/photo-1612103198005-b238154f4590',
    denominations: [10, 25, 50, 100, 500],
    description: 'Amazon Gift Cards - perfect for anyone who loves to shop online'
  },
  {
    id: 2,
    provider: 'Google Play',
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519',
    denominations: [10, 25, 50, 100],
    description: 'Get access to millions of apps, games, and digital content'
  },
  {
    id: 3,
    provider: 'Flipkart',
    image: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db',
    denominations: [100, 250, 500, 1000],
    description: 'Shop for the latest fashion, electronics, and more'
  },
  {
    id: 4,
    provider: 'Nykaa',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348',
    denominations: [250, 500, 1000, 2000],
    description: 'The perfect gift for beauty enthusiasts'
  },
  {
    id: 5,
    provider: 'Myntra',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b',
    denominations: [500, 1000, 2000, 5000],
    description: 'Gift the joy of fashion shopping'
  }
];

export function GiftCards() {
  const [selectedAmount, setSelectedAmount] = React.useState<Record<number, number>>({});

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Gift Cards</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {GIFT_CARDS.map((card) => (
          <div key={card.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={card.image}
              alt={`${card.provider} Gift Card`}
              className="w-full h-48 object-cover"
            />
            
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{card.provider} Gift Card</h2>
              <p className="text-gray-600 mb-4">{card.description}</p>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Amount
                </label>
                <select
                  value={selectedAmount[card.id] || ''}
                  onChange={(e) => setSelectedAmount({
                    ...selectedAmount,
                    [card.id]: Number(e.target.value)
                  })}
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                >
                  <option value="">Choose amount</option>
                  {card.denominations.map((amount) => (
                    <option key={amount} value={amount}>
                      ${amount}
                    </option>
                  ))}
                </select>
              </div>
              
              <button
                disabled={!selectedAmount[card.id]}
                className={`w-full py-2 px-4 rounded-md ${
                  selectedAmount[card.id]
                    ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-900'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}