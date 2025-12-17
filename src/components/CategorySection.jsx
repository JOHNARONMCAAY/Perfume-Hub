import React from 'react';
import PerfumeCard from './PerfumeCard';
import PerfumeCardSkeleton from './PerfumeCardSkeleton';

const CategorySection = ({ perfumes, loading }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      
      {loading
        ? Array.from({ length: 8 }).map((_, index) => (
            <PerfumeCardSkeleton key={index} />
          ))
        : perfumes.map((perfume, index) => (
            <div
              key={perfume.id}
              className="fade-up"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <PerfumeCard perfume={perfume} />
            </div>
          ))
      }

    </div>
  );
};

export default CategorySection;
