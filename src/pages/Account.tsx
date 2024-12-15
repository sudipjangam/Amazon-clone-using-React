import React, { useState } from 'react';
import { useUserStore } from '../store/useUserStore';
import { OrderList } from '../components/orders/OrderList';
import { OrderTabs } from '../components/orders/OrderTabs';
import { ReturnsList } from '../components/returns/ReturnsList';
import { UserProfile } from '../types';

export function Account() {
  const { profile, updateProfile, orders } = useUserStore();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<UserProfile>(profile);
  const [activeSection, setActiveSection] = useState<'profile' | 'orders' | 'returns'>('profile');
  const [activeOrderTab, setActiveOrderTab] = useState<'all' | 'not-shipped' | 'cancelled' | 'buy-again'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(formData);
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveSection('profile')}
            className={`px-4 py-2 rounded-md ${
              activeSection === 'profile'
                ? 'bg-yellow-400 text-gray-900'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Profile
          </button>
          <button
            onClick={() => setActiveSection('orders')}
            className={`px-4 py-2 rounded-md ${
              activeSection === 'orders'
                ? 'bg-yellow-400 text-gray-900'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Orders
          </button>
          <button
            onClick={() => setActiveSection('returns')}
            className={`px-4 py-2 rounded-md ${
              activeSection === 'returns'
                ? 'bg-yellow-400 text-gray-900'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Returns
          </button>
        </div>

        {activeSection === 'profile' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Profile Information</h3>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="text-blue-600 hover:text-blue-800"
              >
                {isEditing ? 'Cancel' : 'Edit'}
              </button>
            </div>

            {isEditing ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Username</label>
                  <input
                    type="text"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Mobile</label>
                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-gray-900 py-2 px-4 rounded-md hover:bg-yellow-500"
                >
                  Save Changes
                </button>
              </form>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Username</label>
                  <p className="mt-1">{profile.username}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <p className="mt-1">{profile.email}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Mobile</label>
                  <p className="mt-1">{profile.mobile}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {activeSection === 'orders' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-6">Your Orders</h3>
            <OrderTabs activeTab={activeOrderTab} onTabChange={setActiveOrderTab} />
            <OrderList
              orders={orders}
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              filter={activeOrderTab}
            />
          </div>
        )}

        {activeSection === 'returns' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-6">Returns Center</h3>
            <ReturnsList orders={orders} />
          </div>
        )}
      </div>
    </div>
  );
}