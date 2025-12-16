// src/components/PerfumeCard.jsx
import React, { useState } from 'react';
import { getImageUrl } from '../utils/ImageUtils';
import SeasonIndicator from './SeasonIndicator';

const PerfumeCard = ({ perfume }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleCardClick = () => {
    setShowDetails(!showDetails);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105">
      <div onClick={handleCardClick}>
        {/* Smaller Aspect Ratio Container (3:4 ratio) */}
        <div className="relative" style={{ paddingTop: '133.33%' }}> {/* 3:4 aspect ratio */}
          {imageError ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="text-center p-4">
                <div className="text-gray-400 text-sm">Image not available</div>
              </div>
            </div>
          ) : (
            <img 
              src={getImageUrl(perfume.image)} 
              alt={perfume.name}
              className="absolute inset-0 w-full h-full object-cover"
              onError={handleImageError}
            />
          )}
        </div>
        
        {/* Card Content */}
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-bold text-black">{perfume.name}</h3>
            <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-black rounded-full">
              {perfume.category}
            </span>
          </div>
          <p className="mt-1 text-sm text-gray-600">{perfume.scentType}</p>
        </div>
      </div>
      
      {/* Details Section */}
      {showDetails && (
        <div className="px-4 pb-4 border-t border-gray-100">
          <div className="mt-4 space-y-3">
            <div>
              <h4 className="text-sm font-semibold text-black">Description</h4>
              <p className="text-sm text-gray-600 mt-1">{perfume.description}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-black">Top Notes</h4>
              <p className="text-sm text-gray-600">{perfume.topNotes}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-black">Middle Notes</h4>
              <p className="text-sm text-gray-600">{perfume.middleNotes}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-black">Base Notes</h4>
              <p className="text-sm text-gray-600">{perfume.baseNotes}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-black">Suggested Season</h4>
              <div className="mt-1">
                <SeasonIndicator season={perfume.suggestedSeason} />
              </div>
            </div>
          </div>
          <button 
            onClick={handleCardClick}
            className="mt-4 w-full py-2 text-sm font-medium text-black hover:text-gray-700 transition-colors border border-gray-300 rounded"
          >
            Show Less
          </button>
        </div>
      )}
    </div>
  );
};

export default PerfumeCard;