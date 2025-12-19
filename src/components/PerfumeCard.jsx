import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getImageUrl } from '../utils/ImageUtils';

const PerfumeCard = ({ perfume }) => {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleClick = () => {
    navigate(`/perfume/${perfume.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="overflow-hidden transition-transform duration-200 bg-white border border-yellow-400 cursor-pointer select-none  group rounded-xl will-change-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-300/40"
    >
      {/* IMAGE */}
      <div className="relative aspect-[3/4] bg-gray-100">
        {imageError ? (
          <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-400 sm:text-sm">
            Image not available
          </div>
        ) : (
          <img
            src={getImageUrl(perfume.image)}
            alt={perfume.name}
            className="absolute inset-0 object-cover w-full h-full"
            onError={handleImageError}
          />
        )}
      </div>

      {/* CONTENT */}
      <div className="p-3 sm:p-4">
        <h3 className="text-sm font-bold text-black sm:text-base line-clamp-2">
          {perfume.name}
        </h3>
        <p className="mt-1 text-xs text-gray-600 sm:text-sm">
          {perfume.scentType}
        </p>
      </div>
    </div>
  );
};

export default PerfumeCard;
