import React from 'react';
import { Order } from '../../types';
import { Search } from 'lucide-react';

interface OrderListProps {
  orders: Order[];
  searchTerm: string;
  onSearchChange: (term: string) => void;
  filter: 'all' | 'not-shipped' | 'cancelled' | 'buy-again';
}

export function OrderList({ orders, searchTerm, onSearchChange, filter }: OrderListProps) {
  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.items.some(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    switch (filter) {
      case 'not-shipped':
        return order.status === 'pending' && matchesSearch;
      case 'cancelled':
        return order.status === 'cancelled' && matchesSearch;
      case 'buy-again':
        return order.status === 'delivered' && matchesSearch;
      default:
        return matchesSearch;
    }
  });

  return (
    <div className="space-y-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search orders..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
      </div>

      {filteredOrders.length === 0 ? (
        <p className="text-center text-gray-500 py-8">No orders found</p>
      ) : (
        <div className="space-y-4">
          {filteredOrders.map((order) => (
            <div key={order.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-semibold">Order #{order.id}</p>
                  <p className="text-sm text-gray-500">
                    Placed on {new Date(order.orderDate).toLocaleDateString()}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                  order.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </div>

              <div className="space-y-2">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                    <div className="flex-1">
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                    <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              {order.status === 'delivered' && (
                <button 
                  className="mt-4 w-full bg-yellow-400 text-gray-900 py-2 rounded-md hover:bg-yellow-500 transition-colors"
                  onClick={() => {
                    order.items.forEach(item => {
                      // Re-add items to cart
                    });
                  }}
                >
                  Buy Again
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}