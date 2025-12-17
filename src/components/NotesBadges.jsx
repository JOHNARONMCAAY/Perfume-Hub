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
    <div className="flex flex-wrap gap-2 mt-1">
      {notesArray.map((note, index) => (
        <span
          key={index}
          className={`px-3 py-1 text-sm rounded-full ${colorMap[type]}`}
        >
          {note}
        </span>
      ))}
    </div>
  );
};

export default NotesBadges;
