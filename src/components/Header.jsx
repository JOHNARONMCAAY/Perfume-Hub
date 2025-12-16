// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl font-bold text-black">Perfume Hub</h1>
          <p className="text-sm text-gray-600">Discover your perfect fragrance</p>
        </div>
        <nav className="flex space-x-6">
          <Link 
            to="/" 
            className="text-black hover:text-gray-700 font-medium transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-black hover:text-gray-700 font-medium transition-colors"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;