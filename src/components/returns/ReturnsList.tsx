import React from 'react';
import { Package, RefreshCw } from 'lucide-react';
import { Order } from '../../types';

interface ReturnsListProps {
  orders: Order[];
}

export function ReturnsList({ orders }: ReturnsListProps) {
  const returnsEligibleOrders = orders.filter(
    order => 
      order.status === 'delivered' && 
      new Date(order.orderDate) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
  );

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-medium text-blue-800 mb-2">Returns Information</h3>
        <p className="text-sm text-blue-600">
          Items are eligible for return within 30 days of delivery. Ensure items are unused and in their original packaging.
        </p>
      </div>

      {returnsEligibleOrders.length === 0 ? (
        <div className="text-center py-8">
          <Package className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No eligible returns</h3>
          <p className="mt-1 text-sm text-gray-500">
            You don't have any orders eligible for return at this time.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {returnsEligibleOrders.map((order) => (
            <div key={order.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="font-semibold">Order #{order.id}</p>
                  <p className="text-sm text-gray-500">
                    Delivered on {new Date(order.orderDate).toLocaleDateString()}
                  </p>
                </div>
                <RefreshCw className="text-gray-400" size={20} />
              </div>

              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                    <div className="flex-1">
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                    <button className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
                      Return
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}