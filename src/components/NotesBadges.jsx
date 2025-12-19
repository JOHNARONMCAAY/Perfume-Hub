import React from 'react';

const colorMap = {
  top: 'bg-yellow-100 text-yellow-800',
  middle: 'bg-pink-100 text-pink-800',
  base: 'bg-amber-100 text-amber-900',
};

const NotesBadges = ({ notes, type }) => {
  if (!notes) return null;

  const notesArray = notes.split(',').map(note => note.trim());

  return (
    <div className="flex flex-wrap gap-1 mt-1 sm:gap-2">
      {notesArray.map((note, index) => (
        <span
          key={index}
          className={`
            px-2 sm:px-3
            py-0.5 sm:py-1
            text-xs sm:text-sm
            rounded-full
            ${colorMap[type]}
          `}
        >
          {note}
        </span>
      ))}
    </div>
  );
};

export default NotesBadges;
