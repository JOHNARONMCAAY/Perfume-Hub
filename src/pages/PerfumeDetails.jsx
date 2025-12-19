import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { perfumeData } from '../data/perfumes';
import Header from '../components/Header';
import SeasonIndicator from '../components/SeasonIndicator';
import NotesBadges from '../components/NotesBadges';
import { getImageUrl } from '../utils/ImageUtils';

const PerfumeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const perfume = perfumeData.find(
    (p) => String(p.id) === String(id)
  );

  if (!perfume && !loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="py-20 text-center">
          <h2 className="text-xl font-bold text-black sm:text-2xl">
            Perfume not found
          </h2>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 mt-6 text-sm text-white bg-black rounded sm:text-base"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main
        className={`
          px-4 sm:px-6 py-8 sm:py-10 mx-auto max-w-6xl
          transition-all duration-500 ease-out
          ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
        `}
      >
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-xs font-medium text-gray-600 sm:text-sm hover:text-black"
        >
          ← Back
        </button>

        {loading ? (
          /* 🔥 SKELETON UI */
          <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 animate-pulse">
            
            {/* IMAGE SKELETON */}
            <div className="w-full h-[300px] sm:h-[420px] bg-gray-200 rounded-xl" />

            {/* DETAILS SKELETON */}
            <div className="space-y-5 sm:space-y-6">
              <div className="w-3/4 h-6 bg-gray-200 rounded sm:h-8" />
              <div className="w-1/2 h-3 bg-gray-200 rounded sm:h-4" />

              <div className="h-5 bg-gray-200 rounded-full w-28 sm:w-32 sm:h-6" />

              <div className="space-y-2">
                <div className="w-full h-3 bg-gray-200 rounded sm:h-4" />
                <div className="w-full h-3 bg-gray-200 rounded sm:h-4" />
                <div className="w-3/4 h-3 bg-gray-200 rounded sm:h-4" />
              </div>

              <div className="space-y-3">
                <div className="w-1/3 h-3 bg-gray-200 rounded sm:h-4" />
                <div className="flex gap-2">
                  <div className="h-5 bg-gray-200 rounded-full w-14 sm:w-16 sm:h-6" />
                  <div className="w-16 h-5 bg-gray-200 rounded-full sm:w-20 sm:h-6" />
                  <div className="w-12 h-5 bg-gray-200 rounded-full sm:w-14 sm:h-6" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ✅ REAL CONTENT */
          <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2">
            
            {/* IMAGE */}
            <div className="overflow-hidden border border-gray-200 rounded-xl">
              <img
                src={getImageUrl(perfume.image)}
                alt={perfume.name}
                className="object-cover w-full h-[300px] sm:h-full transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* DETAILS */}
            <div className="space-y-5 sm:space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-black sm:text-3xl">
                  {perfume.name}
                </h1>
                <p className="mt-1 text-sm text-gray-600 sm:text-base">
                  {perfume.category} • {perfume.gender}
                </p>
              </div>

              <span className="inline-block px-3 py-1 text-xs bg-gray-100 rounded-full sm:text-sm">
                {perfume.scentType}
              </span>

              <div>
                <h3 className="text-base font-semibold text-black sm:text-lg">
                  Description
                </h3>
                <p className="mt-1 text-sm text-gray-700 sm:text-base">
                  {perfume.description}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-black sm:text-base">
                    Top Notes
                  </h4>
                  <NotesBadges notes={perfume.topNotes} type="top" />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-black sm:text-base">
                    Middle Notes
                  </h4>
                  <NotesBadges notes={perfume.middleNotes} type="middle" />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-black sm:text-base">
                    Base Notes
                  </h4>
                  <NotesBadges notes={perfume.baseNotes} type="base" />
                </div>
              </div>

              <div>
                <h4 className="mb-2 text-sm font-semibold text-black sm:text-base">
                  Suggested Season
                </h4>
                <SeasonIndicator season={perfume.suggestedSeason} />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default PerfumeDetails;
