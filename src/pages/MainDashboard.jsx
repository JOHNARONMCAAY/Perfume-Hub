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

  const categorizedPerfumes = categories.reduce((acc, category) => {
    const items = filteredPerfumes.filter(p => p.category === category);
    if (items.length) acc[category] = items;
    return acc;
  }, {});

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* HEADER */}
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* MAIN CONTENT */}
      <main className="flex-1 w-full px-4 py-6 mx-auto sm:px-6 lg:px-8 max-w-7xl">

        {/* NAVIGATION */}
        <div className="mb-6">
          <Navigation onFiltersChange={setFilters} />
        </div>

        {/* RESULT COUNT */}
        <p className="mb-6 text-sm text-gray-600 sm:text-base">
          Showing{' '}
          <span className="font-semibold text-yellow-500">
            {filteredPerfumes.length}
          </span>{' '}
          perfumes
        </p>

        {/* CATEGORY SECTIONS */}
        <div className="space-y-12">
          {Object.entries(categorizedPerfumes).map(([category, perfumes]) => (
            <CategorySection
              key={category}
              perfumes={perfumes}
            />
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredPerfumes.length === 0 && (
          <div className="py-20 text-center">
            <div className="mb-4 text-6xl">🌼</div>
            <h3 className="mb-2 text-xl font-semibold text-yellow-500 sm:text-2xl">
              No perfumes found
            </h3>
            <p className="text-sm text-gray-500 sm:text-base">
              Try adjusting your filters or search
            </p>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="px-4 py-8 bg-white border-t border-yellow-400 sm:px-6 lg:px-8">
        <div className="mx-auto text-center max-w-7xl">
          <p className="text-sm font-semibold text-yellow-500 sm:text-base">
            © 2025 Perfume Hub
          </p>
          <p className="mt-1 text-xs text-gray-400 sm:text-sm">
            A fragrance discovery experience
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MainDashboard;
