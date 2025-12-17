import React from 'react';

const PerfumeCardSkeleton = () => {
  return (
    <div className="overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl animate-pulse">
      
      {/* IMAGE */}
      <div className="relative" style={{ paddingTop: '133.33%' }}>
        <div className="absolute inset-0 bg-gray-200" />
      </div>

      {/* TEXT */}
      <div className="p-4 space-y-3">
        <div className="w-3/4 h-4 bg-gray-200 rounded" />
        <div className="w-1/2 h-3 bg-gray-200 rounded" />
      </div>
    </div>
  );
};

export default PerfumeCardSkeleton;
