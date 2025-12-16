// src/pages/MainDashboard.jsx
import React, { useState, useEffect } from 'react';
import { perfumeData, categories } from '../data/perfumes';
import { getImageUrl } from '../utils/ImageUtils';
import Navigation from '../components/Navigation';
import CategorySection from '../components/CategorySection';
import Header from '../components/Header';

const MainDashboard = () => {
  const [filteredPerfumes, setFilteredPerfumes] = useState(perfumeData);
  const [filters, setFilters] = useState({ category: 'All', scent: 'All' });

  useEffect(() => {
    let result = perfumeData;

    if (filters.category !== 'All') {
      result = result.filter(perfume => perfume.category === filters.category);
    }

    if (filters.scent !== 'All') {
      result = result.filter(perfume => perfume.scentType === filters.scent);
    }

    setFilteredPerfumes(result);
  }, [filters]);

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };

  const categorizedPerfumes = categories.reduce((acc, category) => {
    const categoryPerfumes = filteredPerfumes.filter(p => p.category === category);
    if (categoryPerfumes.length > 0) {
      acc[category] = categoryPerfumes;
    }
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Navigation/Filter Section */}
        <Navigation onFiltersChange={handleFiltersChange} />

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredPerfumes.length}</span> perfumes
          </p>
        </div>

        {/* Perfume Categories */}
        {Object.entries(categorizedPerfumes).map(([category, perfumes]) => (
          <CategorySection 
            key={category} 
            title={category} 
            perfumes={perfumes} 
          />
        ))}

        {/* No Results Message */}
        {filteredPerfumes.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🌺</div>
            <h3 className="text-xl font-semibold text-black mb-2">No perfumes found</h3>
            <p className="text-gray-600">Try adjusting your filters to see more results</p>
          </div>
        )}
      </main>

      <footer className="bg-gray-900 text-white py-8 px-4 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p>© 2025 Perfume Hub. All rights reserved.</p>
          <p className="mt-2 text-gray-400 text-sm">A fragrance discovery experience</p>
        </div>
      </footer>
    </div>
  );
};

export default MainDashboard;