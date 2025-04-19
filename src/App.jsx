import React, { useEffect, useState } from 'react';
import Search from './components/Search';
import Moviecard from './components/Moviecard';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [Searchterm, setSearchterm] = useState('');
  const [errormsg, seterrormsg] = useState('');
  const [movies, setMovies] = useState([]);
  const [loadingmovies, setloadingmovies] = useState(false);

  const fetchMovies = async (query = '') => {
    setloadingmovies(true);
    seterrormsg('');
    try {
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      seterrormsg('Error fetching movies. Please try again.');
    } finally {
      setloadingmovies(false);
    }
  };

  useEffect(() => {
    fetchMovies(Searchterm);
  }, [Searchterm]);

  return (
    <main className="w-screen bg-black text-white">
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 pt-12 pb-24 overflow-x-hidden">
        <img
          src="/BG.png"
          alt="hero background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Movie posters - tightly grouped */}
        <div className="relative z-10 mb-6 flex justify-center items-end -space-x-10">
          <img
            src="/Image.png"
            alt="Black Adam"
            className="w-[120px] md:w-[160px] lg:w-[180px] -rotate-[15deg] shadow-xl"
          />
          <img
            src="/Info.png"
            alt="Dungeons and Dragons"
            className="w-[130px] md:w-[180px] lg:w-[200px] z-10 shadow-2xl scale-105"
          />
          <img
            src="/Image (1).png"
            alt="Enola Holmes"
            className="w-[120px] md:w-[160px] lg:w-[180px] rotate-[15deg] shadow-xl"
          />
        </div>

        {/* Heading and Search */}
        <div className="relative z-10 text-center w-full max-w-2xl">
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-6">
            Find <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">movies</span> you will enjoy <br /> without the hassle
          </h1>
          <Search Searchterm={Searchterm} setSearchterm={setSearchterm} />
        </div>
      </section>

      <section className="w-full px-6 py-10">
        <h2 className="text-3xl font-bold mb-4">All Movies</h2>

        {loadingmovies ? (
          <p className="text-white">Loading ...</p>
        ) : errormsg ? (
          <p className="text-red-500">{errormsg}</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <Moviecard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default App;
