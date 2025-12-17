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
      className="overflow-hidden transition bg-white border border-gray-200 shadow-sm cursor-pointer rounded-xl hover:shadow-md"
    >
      <div className="relative" style={{ paddingTop: '133.33%' }}>
        {imageError ? (
          <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-400 bg-gray-100">
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

      <div className="p-4">
        <h3 className="text-lg font-bold text-black">
          {perfume.name}
        </h3>
        <p className="text-sm text-gray-600">
          {perfume.scentType}
        </p>
      </div>
    </div>
  );
};

export default PerfumeCard;
