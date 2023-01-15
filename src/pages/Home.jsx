import { fetchTrendingMovies } from 'components/service/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(res => setTrendingMovies(res));
    console.log(trendingMovies);
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies &&
          trendingMovies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};
