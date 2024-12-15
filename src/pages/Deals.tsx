import React from 'react';
import { DealCard } from '../components/deals/DealCard';
import { Deal } from '../types';

const DEALS: Deal[] = [
  {
    id: 1,
    title: "Samsung 65\" 4K Smart TV",
    price: 999.99,
    discountPercentage: 50,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=2000",
    timeLeft: "2 days",
    claimed: 75,
    category: "Electronics",
    description: "Amazing 4K Smart TV with HDR",
    rating: 4.5,
    ratingCount: 128
  },
  {
    id: 2,
    title: "Apple MacBook Pro M2",
    price: 1499.99,
    discountPercentage: 30,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=2000",
    timeLeft: "1 day",
    claimed: 85,
    category: "Electronics",
    description: "Latest MacBook Pro with M2 chip",
    rating: 4.8,
    ratingCount: 256
  },
  {
    id: 3,
    title: "Noise Cancelling Headphones",
    price: 299.99,
    discountPercentage: 70,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=2000",
    timeLeft: "12 hours",
    claimed: 90,
    category: "Electronics",
    description: "Premium noise cancelling headphones",
    rating: 4.6,
    ratingCount: 89
  },
  {
    id: 4,
    title: "Gaming Chair",
    price: 199.99,
    discountPercentage: 60,
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&q=80&w=2000",
    timeLeft: "3 days",
    claimed: 45,
    category: "Furniture",
    description: "Ergonomic gaming chair with lumbar support",
    rating: 4.3,
    ratingCount: 67
  }
];

export function Deals() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Today's Deals</h1>
        <div className="text-gray-600">
          Great savings on brands you love
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {DEALS.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>
    </div>
  );
}