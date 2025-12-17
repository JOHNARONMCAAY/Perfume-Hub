// src/components/Navigation.jsx
import React, { useState } from 'react';
import { categories, scentTypes } from '../data/perfumes';

const Navigation = ({ onFiltersChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedScent, setSelectedScent] = useState('All');
  const [selectedGender, setSelectedGender] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onFiltersChange({ category, scent: selectedScent, gender: selectedGender });
  };

  const handleScentChange = (scent) => {
    setSelectedScent(scent);
    onFiltersChange({ category: selectedCategory, scent, gender: selectedGender });
  };

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
    onFiltersChange({ category: selectedCategory, scent: selectedScent, gender });
  };

  return (
    <div className="p-6 mb-6 bg-white border border-gray-200 rounded-lg">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div>
          <h3 className="mb-3 text-lg font-semibold text-black">Categories</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCategoryChange('All')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'All'
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-black hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-black hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="mb-3 text-lg font-semibold text-black">Scent Types</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleScentChange('All')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedScent === 'All'
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-black hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {scentTypes.map((scent) => (
              <button
                key={scent}
                onClick={() => handleScentChange(scent)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedScent === scent
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-black hover:bg-gray-200'
                }`}
              >
                {scent}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold text-black">Gender</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleGenderChange('All')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedGender === 'All'
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-black hover:bg-gray-200'
              }`}
            >
              All
            </button>
            <button
              onClick={() => handleGenderChange('Men')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedGender === 'Men'
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-black hover:bg-gray-200'
              }`}
            >
              Men
            </button>
            <button
              onClick={() => handleGenderChange('Women')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedGender === 'Women'
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-black hover:bg-gray-200'
              }`}
            >
              Women
            </button>
            <button
              onClick={() => handleGenderChange('Unisex')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedGender === 'Unisex'
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-black hover:bg-gray-200'
              }`}
            >
              Unisex
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;