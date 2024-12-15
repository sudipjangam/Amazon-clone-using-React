import React from 'react';
import { Link } from 'react-router-dom';
import { Gift, History, Zap, Menu } from 'lucide-react';

export function ShopNav() {
  return (
    <nav className="bg-gray-800 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-8">
          <button className="flex items-center space-x-2 hover:text-yellow-400">
            <Menu size={20} />
            <span>All</span>
          </button>
          
          <Link to="/deals" className="flex items-center space-x-2 hover:text-yellow-400">
            <Zap size={20} />
            <span>Today's Deals</span>
          </Link>
          
          <Link to="/history" className="flex items-center space-x-2 hover:text-yellow-400">
            <History size={20} />
            <span>Browsing History</span>
          </Link>
          
          <Link to="/gifts" className="flex items-center space-x-2 hover:text-yellow-400">
            <Gift size={20} />
            <span>Gift Ideas</span>
          </Link>

          <Link to="/electronics" className="hover:text-yellow-400">
            Electronics
          </Link>
          
          <Link to="/fashion" className="hover:text-yellow-400">
            Fashion
          </Link>
          
          <Link to="/books" className="hover:text-yellow-400">
            Books
          </Link>
          
          <Link to="/home" className="hover:text-yellow-400">
            Home & Kitchen
          </Link>
        </div>
      </div>
    </nav>
  );
}