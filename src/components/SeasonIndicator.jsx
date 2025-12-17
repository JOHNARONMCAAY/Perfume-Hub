import React from 'react';

const SeasonIndicator = ({ season }) => {
  // Define season data with emojis and colors
  const seasonInfo = {
    Spring: { emoji: "🌸", color: "bg-green-100", text: "text-green-800" },
    Summer: { emoji: "☀️", color: "bg-yellow-100", text: "text-yellow-800" },
    Autumn: { emoji: "🍂", color: "bg-orange-100", text: "text-orange-800" },
    Winter: { emoji: "❄️", color: "bg-blue-100", text: "text-blue-800" }
  };

  // Get season data, default to Spring if season is not found
  const seasonData = seasonInfo[season] || seasonInfo.Spring;

  return (
    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${seasonData.color} ${seasonData.text}`}>
      <span className="mr-1">{seasonData.emoji}</span>
      {season}
    </div>
  );
};

export default SeasonIndicator;
