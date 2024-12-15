import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export function OrderSuccess() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-4">Order Successfully Placed!</h2>
        <p className="text-gray-600 mb-8">
          Thank you for your order. You can track your order status in your account.
        </p>
        <div className="space-x-4">
          <Link
            to="/account"
            className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-md hover:bg-yellow-500"
          >
            View Orders
          </Link>
          <Link
            to="/"
            className="inline-block bg-gray-200 text-gray-900 px-6 py-2 rounded-md hover:bg-gray-300"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}