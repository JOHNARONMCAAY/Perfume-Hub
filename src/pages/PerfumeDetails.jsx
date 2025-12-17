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
          <h2 className="text-2xl font-bold text-black">Perfume not found</h2>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 mt-6 text-white bg-black rounded"
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
          px-4 py-10 mx-auto max-w-6xl
          transition-all duration-500 ease-out
          ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
        `}
      >
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-sm font-medium text-gray-600 hover:text-black"
        >
          ← Back
        </button>

        {loading ? (
          /* 🔥 SKELETON UI */
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 animate-pulse">
            
            {/* IMAGE SKELETON */}
            <div className="w-full h-[420px] bg-gray-200 rounded-xl" />

            {/* DETAILS SKELETON */}
            <div className="space-y-6">
              <div className="w-3/4 h-8 bg-gray-200 rounded" />
              <div className="w-1/2 h-4 bg-gray-200 rounded" />

              <div className="w-32 h-6 bg-gray-200 rounded-full" />

              <div className="space-y-2">
                <div className="w-full h-4 bg-gray-200 rounded" />
                <div className="w-full h-4 bg-gray-200 rounded" />
                <div className="w-3/4 h-4 bg-gray-200 rounded" />
              </div>

              <div className="space-y-3">
                <div className="w-1/3 h-4 bg-gray-200 rounded" />
                <div className="flex gap-2">
                  <div className="w-16 h-6 bg-gray-200 rounded-full" />
                  <div className="w-20 h-6 bg-gray-200 rounded-full" />
                  <div className="h-6 bg-gray-200 rounded-full w-14" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ✅ REAL CONTENT */
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            
            {/* IMAGE */}
            <div className="overflow-hidden border border-gray-200 rounded-xl">
              <img
                src={getImageUrl(perfume.image)}
                alt={perfume.name}
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* DETAILS */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-black">
                  {perfume.name}
                </h1>
                <p className="mt-1 text-gray-600">
                  {perfume.category} • {perfume.gender}
                </p>
              </div>

              <span className="inline-block px-3 py-1 text-sm bg-gray-100 rounded-full">
                {perfume.scentType}
              </span>

              <div>
                <h3 className="text-lg font-semibold text-black">Description</h3>
                <p className="mt-1 text-gray-700">
                  {perfume.description}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-black">Top Notes</h4>
                  <NotesBadges notes={perfume.topNotes} type="top" />
                </div>

                <div>
                  <h4 className="font-semibold text-black">Middle Notes</h4>
                  <NotesBadges notes={perfume.middleNotes} type="middle" />
                </div>

                <div>
                  <h4 className="font-semibold text-black">Base Notes</h4>
                  <NotesBadges notes={perfume.baseNotes} type="base" />
                </div>
              </div>

              <div>
                <h4 className="mb-2 font-semibold text-black">
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
