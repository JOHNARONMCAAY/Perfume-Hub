import React from 'react';
import PerfumeCard from './PerfumeCard';

const CategorySection = ({ perfumes }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {perfumes.map((perfume) => (
        <PerfumeCard
          key={perfume.id}
          perfume={perfume}
        />
      ))}
    </div>
  );
};

export default CategorySection;
