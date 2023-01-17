import { MovieList } from 'components/MovieList/MovieList';
import { fetchTrendingMovies } from 'components/service/api';
import { useEffect, useState } from 'react';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(res => setTrendingMovies(res));
    // console.log(trendingMovies);
  }, []);

  if (!trendingMovies) return;

  return (
    <>
      <header>
        <h1>Trending today</h1>
      </header>
      <main>{trendingMovies && <MovieList movies={trendingMovies} />}</main>
    </>
  );
};

export default Home;
