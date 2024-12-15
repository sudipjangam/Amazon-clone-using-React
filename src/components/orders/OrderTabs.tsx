import React from 'react';

interface OrderTabsProps {
  activeTab: 'all' | 'not-shipped' | 'cancelled' | 'buy-again';
  onTabChange: (tab: 'all' | 'not-shipped' | 'cancelled' | 'buy-again') => void;
}

export function OrderTabs({ activeTab, onTabChange }: OrderTabsProps) {
  const tabs = [
    { id: 'all', label: 'All Orders' },
    { id: 'not-shipped', label: 'Not Yet Shipped' },
    { id: 'cancelled', label: 'Cancelled' },
    { id: 'buy-again', label: 'Buy Again' },
  ] as const;

  return (
    <div className="border-b mb-6">
      <nav className="flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === tab.id
                ? 'border-yellow-400 text-yellow-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
}