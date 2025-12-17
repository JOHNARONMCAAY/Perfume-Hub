import React, { useState, useEffect } from 'react';
import { perfumeData, categories } from '../data/perfumes';
import Navigation from '../components/Navigation';
import CategorySection from '../components/CategorySection';
import Header from '../components/Header';

const MainDashboard = () => {
  const [filteredPerfumes, setFilteredPerfumes] = useState(perfumeData);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    category: 'All',
    scent: 'All',
    gender: 'All',
  });

  useEffect(() => {
    let result = perfumeData;

    if (filters.category !== 'All') {
      result = result.filter(p => p.category === filters.category);
    }

    if (filters.scent !== 'All') {
      result = result.filter(p => p.scentType === filters.scent);
    }

    if (filters.gender !== 'All') {
      result = result.filter(p => p.gender === filters.gender);
    }

    if (searchTerm.trim() !== '') {
      result = result.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPerfumes(result);
  }, [filters, searchTerm]);

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

      <main className="px-4 py-8 mx-auto max-w-7xl">

        {/* SEARCH BAR */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search perfume name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg md:w-1/2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <Navigation onFiltersChange={handleFiltersChange} />

        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredPerfumes.length}</span> perfumes
          </p>
        </div>

        {Object.entries(categorizedPerfumes).map(([category, perfumes]) => (
          <CategorySection key={category} perfumes={perfumes} />
        ))}

        {filteredPerfumes.length === 0 && (
          <div className="py-12 text-center">
            <div className="mb-4 text-6xl">🌺</div>
            <h3 className="mb-2 text-xl font-semibold text-black">No perfumes found</h3>
            <p className="text-gray-600">Try adjusting your filters</p>
          </div>
        )}
      </main>

      <footer className="px-4 py-8 mt-12 text-white bg-gray-900">
        <div className="mx-auto text-center max-w-7xl">
          <p>© 2025 Perfume Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainDashboard;
