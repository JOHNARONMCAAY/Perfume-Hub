import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { perfumeData } from '../data/perfumes';
import Header from '../components/Header';
import SeasonIndicator from '../components/SeasonIndicator';
import { getImageUrl } from '../utils/ImageUtils';

const PerfumeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const perfume = perfumeData.find(
    (p) => String(p.id) === String(id)
  );

  if (!perfume) {
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

      <main className="max-w-6xl px-4 py-10 mx-auto">
        {/* BACK BUTTON */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-sm font-medium text-gray-600 hover:text-black"
        >
          ← Back
        </button>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          
          {/* LEFT — IMAGE */}
          <div className="w-full">
            <div className="overflow-hidden border border-gray-200 rounded-xl">
              <img
                src={getImageUrl(perfume.image)}
                alt={perfume.name}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* RIGHT — DETAILS */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-black">
                {perfume.name}
              </h1>
              <p className="mt-1 text-gray-600">
                {perfume.category} • {perfume.gender}
              </p>
            </div>

            <div>
              <span className="inline-block px-3 py-1 text-sm bg-gray-100 rounded-full">
                {perfume.scentType}
              </span>
            </div>

            {/* DESCRIPTION */}
            <div>
              <h3 className="mb-1 text-lg font-semibold text-black">
                Description
              </h3>
              <p className="text-gray-700">
                {perfume.description}
              </p>
            </div>

            {/* NOTES */}
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-black">Top Notes</h4>
                <p className="text-gray-700">{perfume.topNotes}</p>
              </div>

              <div>
                <h4 className="font-semibold text-black">Middle Notes</h4>
                <p className="text-gray-700">{perfume.middleNotes}</p>
              </div>

              <div>
                <h4 className="font-semibold text-black">Base Notes</h4>
                <p className="text-gray-700">{perfume.baseNotes}</p>
              </div>
            </div>

            {/* SEASON */}
            <div>
              <h4 className="mb-2 font-semibold text-black">
                Suggested Season
              </h4>
              <SeasonIndicator season={perfume.suggestedSeason} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PerfumeDetails;
