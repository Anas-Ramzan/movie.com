import React from 'react';

const Moviecard = ({ movie: { title, vote_average, poster_path, release_date, original_language } }) => (
  <div className="bg-[#1f1f1f] p-4 rounded-lg shadow hover:scale-105 transition">
    {poster_path && (
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className="w-full h-64 object-cover rounded-md mb-2"
      />
    )}
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm text-gray-400">⭐ {vote_average} | {release_date} | {original_language?.toUpperCase()}</p>
  </div>
);

export default Moviecard;
